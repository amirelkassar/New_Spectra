'use client';

import { useCallback, useMemo, useState } from 'react';
import { useRouter } from '@/navigation';

import { Toast } from '@/components/toast';
import { useUpdateStaff as useUpdateStaffQuery } from '@/hooks/queries/admin/staff/staff';
import ROUTES from '@/routes';
import { getFormData } from '@/lib/utils';

export const useUpdateStaff = ({ initialValues = {} }) => {
  const router = useRouter();

  const [validationErrors, setValidationErrors] = useState({});

  const [formData, setFormData] = useState(initialValues);

  const staffId = useMemo(() => initialValues?.id, [initialValues]);

  const {
    mutateAsync: updateStaff,
    error,
    isError,
    isPending,
    reset,
  } = useUpdateStaffQuery();

  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;

      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));

      if (isError) reset();
      if (!!Object.keys(validationErrors)?.length)
        setValidationErrors({});
    },
    [isError, reset, validationErrors]
  );

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      reset();

      if (formData.password !== formData.confirmPassword) {
        return setValidationErrors((prevErrors) => ({
          ...prevErrors,
          confirmPassword: 'كلمة المرور غير متطابقة',
        }));
      }

      const data = getFormData(formData);

      Toast.Promise(updateStaff(data), {
        success: 'تم تعديل الموظف بنجاح',
        onSuccess: (res) => {
          if (res?.successOpration)
            router.replace(ROUTES.ADMIN.STAFF.STAFF_ID(staffId));
        },
      });
    },
    [updateStaff, formData, router, staffId, reset]
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
