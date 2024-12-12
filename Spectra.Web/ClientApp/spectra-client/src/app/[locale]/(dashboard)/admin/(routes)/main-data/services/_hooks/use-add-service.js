'use client';

import { useCallback, useState } from 'react';
import { useRouter } from '@/i18n/routing';

import { Toast } from '@/components/toast';
import { getFormData } from '@/lib/utils';
import { useAddNewService } from '@/hooks/queries/admin/main-data/services';
import ROUTES from '@/routes';

export const useAddService = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    serviceType: '',
    enName: '',
    arName: '',
    price: '',
    discount: '',
    enDescription: '',
    arDescription: '',
    enTermsAndConditions: '',
    arTermsAndConditions: '',
    reports: [],
    specifications: [],
    contents: [],
    heroImage: undefined,
  });

  const {
    mutateAsync: createService,
    error,
    isError,
    isPending,
    reset,
  } = useAddNewService();

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

      Toast.Promise(createService(data), {
        success: 'تم اضافة الخدمة بنجاح',
        onSuccess: () => {
          router.replace(ROUTES.ADMIN.DATAMAIN.SERVICES);
        },
      });
    },
    [createService, formData, router]
  );

  const onReset = useCallback(() => {
    setFormData({
      serviceType: '',
      enName: '',
      arName: '',
      price: '',
      discount: '',
      enDescription: '',
      arDescription: '',
      enTermsAndConditions: '',
      arTermsAndConditions: '',
      reports: [],
      specifications: [],
      contents: [],
      heroImage: undefined,
    });
  }, []);

  const form = {
    onChange,
    onSubmit,
    onReset,
    data: formData,
    error,
  };

  const status = {
    isPending,
    isError,
  };

  return [form, status];
};
