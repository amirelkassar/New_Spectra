'use client';

import Button from '@/components/button';
import GetErrorMsg from '@/components/getErrorMsg';
import InputGreen from '@/components/Input-green';
import { SpecializationSelect } from '../../_components/specialization-select';
import { DepartmentHeadSelect } from '../../_components/department-head-select';

export const DepartmentForm = ({
  data,
  error,
  isPending,
  onChange = () => {},
  onSubmit = () => {},
}) => {
  return (
    <form
      onSubmit={onSubmit}
      className='flex flex-col gap-4 lg:gap-8 px-3 mb-14 max-w-screen-lg mx-auto'
    >
      <InputGreen
        label='اسم القسم باللغة العربية'
        name='arName'
        value={data?.arName}
        onChange={onChange}
        error={GetErrorMsg(error, 'ArName')}
      />

      <InputGreen
        label='اسم القسم باللغة الانجليزية'
        name='enName'
        value={data?.enName}
        onChange={onChange}
        error={GetErrorMsg(error, 'EnName')}
      />

      <SpecializationSelect
        label='التخصصات'
        name='specsifications'
        defaultValue={data?.specsifications}
        onSelect={onChange}
        error={GetErrorMsg(error, 'Diagnoses')}
      />

      <DepartmentHeadSelect
        label='اختر رئيس القسم'
        defaultValue={data?.headDoctorId}
        error={
          GetErrorMsg(error, 'HeadDoctorId') ||
          GetErrorMsg(error, 'headDoctorName')
        }
        onSelect={(val) => {
          const { headDoctorId, headDoctorName } = val;
          onChange({
            target: {
              name: 'headDoctorId',
              value: headDoctorId,
            },
          });

          onChange({
            target: {
              name: 'headDoctorName',
              value: headDoctorName,
            },
          });
        }}
      />

      <Button
        disabled={isPending}
        type='submit'
        variant='secondary'
        className='max-w-xs w-full font-bold py-4 mx-auto md:mx-0 mt-10'
      >
        حفظ
      </Button>
    </form>
  );
};
