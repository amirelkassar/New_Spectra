'use client';

import { EmployeeForm } from '../../_components/employee-form';
import { useAddEmployee } from '../../_hooks/use-add-staff';

export const AddEmployee = () => {
  const [form] = useAddEmployee();

  return <EmployeeForm form={form} />;
};
