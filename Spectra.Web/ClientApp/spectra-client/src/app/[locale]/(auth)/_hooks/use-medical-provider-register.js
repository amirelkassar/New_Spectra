'use client';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { IMAGE_MIME_TYPE, PDF_MIME_TYPE } from '@mantine/dropzone';
import { useCallback } from 'react';
import { useRegisterMedicalProviderMutation } from '@/hooks/queries/auth';
import { getErrors, getFormData } from '@/lib/utils';
import { Toast } from '@/components/toast';
import { useRouter } from '@/navigation';
import ROUTES from '@/routes';

const passwordValidation = z
  .string()
  .min(8, 'Password must be at least 8 characters long')
  .regex(
    /[A-Z]/,
    'Password must contain at least one uppercase letter'
  )
  .regex(
    /[a-z]/,
    'Password must contain at least one lowercase letter'
  )
  .regex(
    /[!@#$%^&*(),.?":{}|<>]/,
    'Password must contain at least one special character'
  );

const stepOneSchema = z
  .object({
    name: z.string().min(1, 'Name is required'),
    gender: z.string().min(1, 'Gender is required'),
    countryCode: z.string().optional(),
    country: z.string().min(1, 'Country is required'),
    city: z.string().min(1, 'City is required'),
    address: z.string().min(1, 'Address is required'),
    phone: z.string().min(1, 'Phone is required'),
    nationalId: z.string().min(1, 'National ID is required'),
    emailAddress: z
      .string()
      .email('Invalid email address')
      .min(1, 'Email is required'),
    password: passwordValidation,
    confirmPassword: z
      .string()
      .min(1, 'Confirm Password is required'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords must match',
  });

const stepTwoSchema = z.object({
  jobType: z.string().min(1, 'Job type is required'),
  jobName: z.string().min(1, 'Job name is required'),
  mainSpecializationId: z
    .string()
    .min(1, 'Main specialization is required'),
  specializations: z
    .array(z.string())
    .min(1, 'Select at least one specialization'),
  experienceYears: z.string().optional(),
  licenseNumber: z.string().min(1, 'License number is required'),
  approvedBy: z.string().optional(),
  academicDegree: z.string().optional(),
  certification: z
    .instanceof(File, { message: 'File is required' })
    .refine(
      (file) =>
        file &&
        [...IMAGE_MIME_TYPE, ...PDF_MIME_TYPE].includes(file.type),
      'Only images (PNG, JPG) and PDF files are allowed'
    ),
});

export const useMedicalProviderRegister = () => {
  const router = useRouter();

  const stepOneForm = useForm({
    resolver: zodResolver(stepOneSchema),
    defaultValues: {
      name: '',
      gender: '',
      countryCode: '',
      country: '',
      city: '',
      phone: '',
      address: '',
      nationalId: '',
      emailAddress: '',
      password: '',
    },
  });

  const stepTwoForm = useForm({
    resolver: zodResolver(stepTwoSchema),
    defaultValues: {
      jobType: '',
      jobName: '',
      mainSpecializationId: '',
      specializations: [],
      experienceYears: '',
      licenseNumber: '',
      approvedBy: '',
      academicDegree: '',
      certification: undefined,
    },
  });

  const {
    mutateAsync: registerMedicalProvider,
    error: serverErrors,
    isError,
    reset,
    isPending,
  } = useRegisterMedicalProviderMutation();

  const onSubmit = useCallback(
    async (stepTwoData) => {
      if (isError) reset();
      const stepOneData = stepOneForm.getValues();
      const data = { ...stepOneData, ...stepTwoData };

      const formData = getFormData(data);

      Toast.Promise(registerMedicalProvider(formData), {
        success: 'تم تسجيلك بنجاح',
        onSuccess: () => {
          router.replace(ROUTES.AUTH.LOGIN);
        },
        onError: (error) => {
          const { code, message } = getErrors(error);
          return code === 400 ? message : '';
        },
      });
    },
    [stepOneForm, isError, reset, registerMedicalProvider, router]
  );

  return {
    stepOneForm,
    stepTwoForm,
    onSubmit,
    isPending,
    serverErrors,
  };
};
