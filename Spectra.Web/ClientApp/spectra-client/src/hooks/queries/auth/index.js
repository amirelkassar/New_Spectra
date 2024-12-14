'use client';

import { useRouter } from '@/i18n/routing';
import { useMutation } from '@tanstack/react-query';

import { useToken } from '@/hooks/use-token';

import { apiAuth } from '@/api/axios';
import { clearToken } from '@/lib/token';

import ROUTES from '@/routes';

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
  const { setToken } = useToken();

  const logout = async () => {
    const isTokenDeleted = await clearToken();

    if (isTokenDeleted) {
      setToken(null);
      router.push(ROUTES.AUTH.LOGIN);
    }
  };

  return {
    logout,
  };
};
