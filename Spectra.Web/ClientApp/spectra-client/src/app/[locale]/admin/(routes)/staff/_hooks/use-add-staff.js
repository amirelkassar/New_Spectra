'use client';

import { useCallback, useState } from 'react';
import { useRouter } from '@/navigation';

import { Toast } from '@/components/toast';
import { useAddStaff } from '@/hooks/queries/admin/staff/staff';
import ROUTES from '@/routes';

export const useAddEmployee = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: 'Moataz',
    lastName: 'Ali',
    prefix: 'string',
    nationalId: '123456789',
    humenGender: 2,
    emailaddress: 'moataz@doc.com',
    country: 'EG',
    city: 'Alex',
    state: 'Raml',
    streetName: 'Abdmanaf',
    building: '38',
    postalCode: '123456',
    floor: '2',
    commonMark: 'bakoos',
    phoneNumber: '01210127111',
    countryCode: '+20',
    jobName: 'doctor',
    jobType: 1,
    jobDescription: 'doctor',
    workingHours: 8,
    licenseNumber: '12345678',
    experienceYears: 8,
    qualification: 'bacherol',
    approvedBy: 'string',
    academicDegree: 1,
    mainSpecializationId: '01JDY9EQGMRP9BV9J4ANA04AM1',
    password: 'M@3taz159159',
    specializations: ['01JDY9EQGMRP9BV9J4ANA04AM1'],
    services: ['01JDYXFBZB9WMRHBC7ZEHW3454'],
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
    },
    [isError, reset]
  );

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      return console.log(formData);

      Toast.Promise(addStaff(formData), {
        success: 'تم اضافة الباقة بنجاح',
        onSuccess: (res) => {
          if (res?.successOpration)
            router.replace(
              ROUTES.ADMIN.SETTINGS.PACKAGES.DASHBOARD
            );
        },
      });
    },
    [addStaff, formData, router]
  );

  const form = {
    onChange,
    onSubmit,
    data: formData,
    error,
    isPending,
    isError,
  };

  return [form];
};
