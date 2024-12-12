'use client';

import { useCallback, useMemo, useState } from 'react';
import { useRouter } from '@/i18n/routing';

import ROUTES from '@/routes';

import { Toast } from '@/components/toast';
import { getFormData } from '@/lib/utils';
import { useUpdateEmployeeProfile } from '@/hooks/queries/user/profile';

export const useUpdateProfile = ({ initialValues = {} }) => {
  const router = useRouter();

  const [validationErrors, setValidationErrors] = useState({});

  const specializations = useMemo(
    () => initialValues?.specializations?.map((item) => item.id),
    [initialValues]
  );

  const services = useMemo(
    () => initialValues?.services?.map((item) => item.id),
    [initialValues]
  );

  const [formData, setFormData] = useState({
    ...initialValues,
    specializations,
    services,
  });

  const {
    mutateAsync: updateEmployeeProfile,
    error,
    isError,
    isPending,
    reset,
  } = useUpdateEmployeeProfile();

  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;

      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));

      if (isError) {
        reset();
      }

      if (!!Object.keys(validationErrors)?.length)
        setValidationErrors({});
    },
    [isError, reset, validationErrors]
  );

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      reset();

      if (formData.oldPassword && !formData.newPassword) {
        return setValidationErrors((prevErrors) => ({
          ...prevErrors,
          newPassword: 'من فضلك أدخل كلمة المرور الجديدة',
        }));
      }

      if (formData.newPassword !== formData.confirmPassword) {
        return setValidationErrors((prevErrors) => ({
          ...prevErrors,
          confirmPassword: 'كلمة المرور غير متطابقة',
        }));
      }

      const data = getFormData(formData);

      Toast.Promise(updateEmployeeProfile(data), {
        success: 'تم تعديل البيانات بنجاح',
        onSuccess: () => {
          router.replace(ROUTES.DOCTOR.PROFILE.DASHBOARD);
        },
      });
    },
    [formData, router, reset, updateEmployeeProfile]
  );

  const form = {
    onChange,
    onSubmit,
    data: formData,
    validationErrors,
    error,
    isPending,
    isError,
  };

  return [form];
};
