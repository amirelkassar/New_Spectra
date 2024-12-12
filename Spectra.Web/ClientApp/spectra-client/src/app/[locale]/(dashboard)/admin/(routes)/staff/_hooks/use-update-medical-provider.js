'use client';

import { useCallback, useMemo, useState } from 'react';
import { useRouter } from '@/i18n/routing';

import { Toast } from '@/components/toast';
import {
  useUpdateMedicalData,
  useUpdateStaff as useUpdateStaffQuery,
} from '@/hooks/queries/admin/staff/staff';
import ROUTES from '@/routes';
import { getFormData } from '@/lib/utils';

export const useUpdateMedicalProvider = ({ initialValues = {} }) => {
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

  const staffId = useMemo(() => initialValues?.id, [initialValues]);

  const {
    mutateAsync: updateStaff,
    error: updateStaffError,
    isError: isUpdateStaffError,
    isPending: isUpdateStaffPending,
    reset: resetUpdateStaff,
  } = useUpdateStaffQuery();

  const {
    mutateAsync: updateMedicalData,
    error: updateMedicalDataError,
    isError: isUpdateMedicalDataError,
    isPending: isUpdateMedicalDataPending,
    reset: resetUpdateMedicalData,
  } = useUpdateMedicalData();

  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;

      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));

      if (isUpdateStaffError || isUpdateMedicalDataError) {
        resetUpdateStaff();
        resetUpdateMedicalData();
      }
      if (!!Object.keys(validationErrors)?.length)
        setValidationErrors({});
    },
    [
      isUpdateStaffError,
      isUpdateMedicalDataError,
      resetUpdateStaff,
      resetUpdateMedicalData,
      validationErrors,
    ]
  );

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      resetUpdateStaff();
      resetUpdateMedicalData();

      if (formData.password !== formData.confirmPassword) {
        return setValidationErrors((prevErrors) => ({
          ...prevErrors,
          confirmPassword: 'كلمة المرور غير متطابقة',
        }));
      }

      const data = getFormData(formData);
      const medicalData = {
        id: formData.id,
        mainSpecializationId: formData.mainSpecializationId,
        services: formData.services,
        specializations: formData.specializations,
      };

      // Check for changes in services and specializations
      const isServicesChanged =
        JSON.stringify(formData.services) !==
        JSON.stringify(services);
      const isSpecializationsChanged =
        JSON.stringify(formData.specializations) !==
        JSON.stringify(specializations);

      // Prepare update operations
      const operations = [];

      // Only call updateMedicalData if there are changes
      if (isServicesChanged || isSpecializationsChanged) {
        operations.push(updateMedicalData(medicalData));
      }

      // Call updateStaff regardless
      operations.push(updateStaff(data));

      try {
        await Toast.Promise(Promise.all(operations), {
          success: 'تم تعديل الموظف بنجاح',
          onSuccess: () => {
            router.replace(ROUTES.ADMIN.STAFF.STAFF_ID(staffId));
          },
        });
      } catch (err) {
        console.error('Error during updates', err);
      }
    },
    [
      updateStaff,
      updateMedicalData,
      formData,
      router,
      staffId,
      services,
      specializations,
      resetUpdateMedicalData,
      resetUpdateStaff,
    ]
  );

  // Combine errors and pending states
  const isPending =
    isUpdateStaffPending || isUpdateMedicalDataPending;
  const error = updateStaffError || updateMedicalDataError;

  const form = {
    onChange,
    onSubmit,
    data: formData,
    validationErrors,
    error,
    isPending,
    isError: isUpdateStaffError || isUpdateMedicalDataError,
  };

  return [form];
};
