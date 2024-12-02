'use client';

import GetErrorMsg from '@/components/getErrorMsg';
import { GenderSelect } from '@/components/inputs/gender-select';
import { ProfessionSelect } from '@/components/inputs/profession-select';
import { useAddEmployee } from '../../_hooks/use-add-staff';
import Button from '@/components/button';

export const AddEmployee = () => {
  const [form] = useAddEmployee();

  return <EmployeeForm form={form} />;
};

const EmployeeForm = ({ form = {} }) => {
  return (
    <form
      onSubmit={form.onSubmit}
      className='max-w-screen-lg space-y-4 mdl:space-y-6'
    >
      <ProfessionSelect
        label='المهنة'
        name='jobType'
        error={GetErrorMsg(form?.error, 'JobType')}
        onChange={form.onChange}
        value={form?.data?.jobType}
      />

      <GenderSelect
        label='النوع'
        name='humenGender'
        error={GetErrorMsg(form?.error, 'HumenGender')}
        onChange={form.onChange}
        value={form?.data?.humenGender}
      />

      <Button type='submit'>SUBMIT</Button>
    </form>
  );
};
