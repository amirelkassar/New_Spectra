'use client';

import DeleteIcon from '@/assets/icons/delete';
import Button from '@/components/button';
import GetErrorMsg from '@/components/getErrorMsg';
import InputGreen from '@/components/Input-green';
import { DoctorBadge } from '@/components/team';
import { SpecializationSelect } from '../../_components/specialization-select';

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
      className='flex flex-col gap-4 lg:gap-8 px-3 mb-14'
    >
      <InputGreen
        label='اسم القسم'
        name='name'
        value={data?.name}
        onChange={onChange}
        error={GetErrorMsg(error, 'Name')}
      />

      <SpecializationSelect
        label='التخصصات'
        name='specsifications'
        placeholder='اختر التخصصات'
        defaultValue={data?.specsifications}
        onSelect={onChange}
        error={GetErrorMsg(error, 'Diagnoses')}
      />

      <DepartmentHead />

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

const DepartmentHead = () => {
  return (
    <div className='flex items-start gap-2'>
      <DoctorBadge
        name='احمد محمد كمال'
        profession='طبيب نفسي'
        rate='9.5'
      />

      <button
        onClick={() => {}}
        className='border-red duration-200 hover:shadow-md border rounded-md w-9 md:w-12 h-9 md:h-12 flex items-center justify-center'
      >
        <DeleteIcon className='w-4 md:w-5 h-auto' />
      </button>
    </div>
  );
};
