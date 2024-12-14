'use client';

import { useCallback, useEffect, useState } from 'react';
import { useRouter } from '@/i18n/routing';

import { Toast } from '@/components/toast';
import { useAuth } from '@/hooks/use-auth';
import { useToken } from '@/hooks/use-token';
import { storeToken } from '@/lib/token';
import { useLoginMutation } from '@/hooks/queries/auth';
import { getRedirectPath } from '@/lib/utils';

export const useLogin = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    userEmail: 'admin@profound-group.com',
    password: 'Admin@1234',
  });

  const [validationError, setValidationError] = useState({
    userEmail: '',
    password: '',
  });

  const { setToken } = useToken();
  const { setSession } = useAuth();

  const {
    mutateAsync: startLogin,
    isPending,
    isError,
    reset,
    error,
  } = useLoginMutation(formData);

  const onChange = useCallback(
    (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });

      if (isError) {
        reset();
      }

      if (
        e.target.name === 'userEmail' &&
        !!validationError.userEmail
      ) {
        setValidationError({
          ...validationError,
          userEmail: '',
        });
      }

      if (
        e.target.name === 'password' &&
        !!validationError.password
      ) {
        setValidationError({
          ...validationError,
          password: '',
        });
      }
    },
    [formData, validationError, isError, reset]
  );

  const login = useCallback(
    (e) => {
      e.preventDefault();

      const { isValid, errors } = validateLoginData(formData);

      if (!isValid) {
        return setValidationError(errors);
      }

      Toast.Promise(startLogin(), {
        success: 'تم تسجيل الدخول بنجاح',
        loading: 'جاري تسجيل الدخول',
        onSuccess: async (data) => {
          const isTokenStored = await storeToken(data?.data);
          const {
            accessToken,
            permissions,
            roles,
            hasActiveContract,
          } = data?.data;
          if (isTokenStored) {
            setToken(accessToken);
            setSession({
              permissions,
              roles,
              hasActiveContract,
            });
            const pathToRedirect = getRedirectPath(
              roles,
              hasActiveContract
            );
            router.push(pathToRedirect);
          }
        },
      });
    },
    [formData, startLogin, router, setToken, setSession]
  );

  useEffect(() => {
    // check if it is the first login after registration
    const loginEmail = sessionStorage.getItem('loginEmail');
    const loginPassword = sessionStorage.getItem('loginPassword');

    if (loginEmail && loginPassword) {
      setFormData({
        userEmail: loginEmail,
        password: loginPassword,
      });

      // clear session storage
      sessionStorage.removeItem('loginEmail');
      sessionStorage.removeItem('loginPassword');
    }
  }, []);

  return {
    login,
    formData,
    onChange,
    isPending,
    validationError,
    error,
  };
};

function validateLoginData(formData) {
  const userEmailErrors = [];
  const passwordErrors = [];

  const { userEmail, password } = formData;

  if (!userEmail) {
    userEmailErrors.push('الرجاء إدخال البريد الإلكتروني');
  }

  if (!password) {
    passwordErrors.push('الرجاء إدخال كلمة المرور');
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!!userEmail && !emailRegex.test(userEmail)) {
    userEmailErrors.push('بريد الإلكتروني غير صالح');
  }

  if (!!passwordErrors.length && !!userEmailErrors.length)
    return {
      isValid: false,
      errors: {
        userEmail: userEmailErrors.join(', '),
        password: passwordErrors.join(', '),
      },
    };

  return {
    isValid: true,
    errors: null,
  };
}
