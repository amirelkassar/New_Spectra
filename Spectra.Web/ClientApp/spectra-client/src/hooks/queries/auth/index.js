'use client';

import { apiAuth } from '@/api/axios';
import { clearToken } from '@/lib/token';
import { useRouter } from '@/i18n/routing';
import ROUTES from '@/routes';
import { useMutation } from '@tanstack/react-query';

export const useLoginMutation = (data) => {
  return useMutation({
    mutationFn: async () => {
      return (await apiAuth.post('/login', data)).data;
    },
  });
};

export const useRegisterMedicalProviderMutation = () => {
  return useMutation({
    mutationFn: async (formData) => {
      return (
        await apiAuth.post('/register-medical-provider', formData)
      ).data;
    },
  });
};

export const useLogout = () => {
  const router = useRouter();

  const logout = async () => {
    const isTokenDeleted = await clearToken();

    if (isTokenDeleted) router.push(ROUTES.AUTH.LOGIN);
  };

  return {
    logout,
  };
};
