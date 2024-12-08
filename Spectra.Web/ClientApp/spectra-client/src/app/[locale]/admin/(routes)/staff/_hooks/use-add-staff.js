'use client';

import { useCallback, useState } from 'react';
import { useRouter } from '@/navigation';

import { Toast } from '@/components/toast';
import { useAddStaff } from '@/hooks/queries/admin/staff/staff';
import ROUTES from '@/routes';

export const useAddEmployee = () => {
  const router = useRouter();

  const [validationErrors, setValidationErrors] = useState({});

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    prefix: '',
    nationalId: '',
    humenGender: '',
    emailaddress: '',
    country: '',
    city: '',
    state: '',
    streetName: '',
    building: '',
    postalCode: '',
    floor: '',
    commonMark: '',
    phoneNumber: '',
    countryCode: '',
    jobName: '',
    jobType: '',
    jobDescription: '',
    workingHours: '',
    licenseNumber: '',
    experienceYears: '',
    qualification: '',
    approvedBy: '',
    academicDegree: '',
    mainSpecializationId: '',
    password: '',
    confirmPassword: '',
    specializations: [],
    services: [],
  });

  const {
    mutateAsync: addStaff,
    error,
    isError,
    isPending,
    reset,
  } = useAddStaff();

  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;

      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));

      if (isError) reset();
      if (!!Object.keys(validationErrors)?.length)
        setValidationErrors({});
    },
    [isError, reset, validationErrors]
  );

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      // return console.log(formData);

      Toast.Promise(addStaff(formData), {
        success: 'تم اضافة الموظف بنجاح',
        onSuccess: (res) => {
          if (res?.successOpration)
            router.replace(ROUTES.ADMIN.STAFF.HOME);
        },
      });
    },
    [addStaff, formData, router]
  );

  const onNext = useCallback(() => {
    if (formData.password !== formData.confirmPassword) {
      return setValidationErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: 'كلمة المرور غير متطابقة',
      }));
    }
    setStep(2);
  }, [formData]);

  const onBack = useCallback(() => {
    setStep(1);
  }, []);

  const form = {
    onChange,
    onSubmit,
    onNext,
    onBack,
    step,
    data: formData,
    error,
    validationErrors,
    isPending,
    isError,
  };

  return [form];
};
