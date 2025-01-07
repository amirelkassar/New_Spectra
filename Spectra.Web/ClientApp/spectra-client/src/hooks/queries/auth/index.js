'use client';

import { useRouter } from '@/i18n/routing';
import { useMutation } from '@tanstack/react-query';

import { useToken } from '@/hooks/use-token';

import { apiAuth } from '@/api/axios';
import { clearToken } from '@/lib/token';
import { useQueryClient } from '@tanstack/react-query';

import ROUTES from '@/routes';
import { useAuth } from '@/hooks/use-auth';
import { identity } from '@/api/public';

export const useLoginMutation = (data) => {
  return useMutation({
    mutationFn: async () => {
      return (await apiAuth.post(identity.login, data)).data;
    },
  });
};

export const useRegisterMedicalProviderMutation = () => {
  return useMutation({
    mutationFn: async (formData) => {
      return (
        await apiAuth.post(identity.registerMedicalProvider, formData)
      ).data;
    },
  });
};

export const useForgetPasswordMutation = () => {
  return useMutation({
    mutationFn: async (email) => {
      return (await apiAuth.post(identity.forgetPassword, email))
        .data;
    },
  });
};

export const useResetPasswordMutation = () => {
  return useMutation({
    mutationFn: async (data) => {
      return (await apiAuth.post(identity.resetPassword, data)).data;
    },
  });
};

export const useLogout = () => {
  const router = useRouter();
  const { setToken } = useToken();
  const { clearSession } = useAuth();
  const queryClient = useQueryClient();

  const logout = async () => {
    const isTokenDeleted = await clearToken();

    if (isTokenDeleted) {
      setToken(null);
      clearSession();
      queryClient.clear();
      router.push(ROUTES.AUTH.LOGIN);
    }
  };

  return {
    logout,
  };
};
