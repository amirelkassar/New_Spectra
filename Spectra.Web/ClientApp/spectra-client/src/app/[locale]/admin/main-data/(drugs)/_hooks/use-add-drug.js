'use client';

import { useCallback, useState } from 'react';
import { useRouter } from '@/navigation';

import { Toast } from '@/components/toast';
import { getFormData } from '@/lib/utils';
import { useCreateDrug } from '@/hooks/queries/admin/main-data/drugs';
import ROUTES from '@/routes';

export const useAddDrug = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    activeIngredient: '',
    scientificName: '',
    photo: undefined,
    recommendedDosage: '',
    doncentration: '',
    interactionsWithOtherdrugs: '',
    contraindications: '',
    code: '',
    nots: '',
    type: '',
  });

  const {
    mutateAsync: createDrug,
    error,
    isError,
    isPending,
    reset,
  } = useCreateDrug();

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

      Toast.Promise(createDrug(data), {
        success: 'تم اضافة العقار بنجاح',
        onSuccess: (res) => {
          if (res?.successOpration)
            router.replace(ROUTES.ADMIN.DATAMAIN.HOME);
        },
      });
    },
    [createDrug, formData, router]
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
