'use client';

import { useCallback, useMemo, useState } from 'react';
import { useRouter } from '@/navigation';

import { Toast } from '@/components/toast';
import { getFormData } from '@/lib/utils';
import { useEditDrug } from '@/useAPI/admin/main-data/drugs';
import ROUTES from '@/routes';

export const useUpdateDrug = ({ initialValues }) => {
  const router = useRouter();

  const photo = useMemo(
    () =>
      initialValues?.imagePath
        ? `${initialValues?.imagePath}?token=${process.env.NEXT_PUBLIC_TOKEN}`
        : undefined,
    [initialValues?.imagePath]
  );

  const [formData, setFormData] = useState({
    ...initialValues,
    photo,
  });

  const {
    mutateAsync: UpdateDrug,
    error,
    isError,
    isPending,
    reset,
  } = useEditDrug();

  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;

      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));

      if (isError) reset();
    },
    [isError, reset]
  );

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      const data = getFormData(formData);

      Toast.Promise(UpdateDrug(data), {
        success: 'تم تعديل العقار بنجاح',
        onSuccess: (res) => {
          if (res?.successOpration)
            router.replace(ROUTES.ADMIN.DATAMAIN.HOME);
        },
      });
    },
    [UpdateDrug, formData, router]
  );

  const form = {
    onChange,
    onSubmit,
    data: formData,
    error,
  };

  const status = {
    isPending,
    isError,
  };

  return [form, status];
};
