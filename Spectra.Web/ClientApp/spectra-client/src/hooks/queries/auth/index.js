'use client';

import { apiAuth } from '@/api/axios';
import { clearAuth } from '@/lib/auth';
import { clearToken } from '@/lib/token';
import { useRouter } from '@/navigation';
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
    const isSessionDeleted = await clearAuth();

    if (isTokenDeleted && isSessionDeleted)
      router.push(ROUTES.AUTH.LOGIN);
  };

  return {
    logout,
  };
};
