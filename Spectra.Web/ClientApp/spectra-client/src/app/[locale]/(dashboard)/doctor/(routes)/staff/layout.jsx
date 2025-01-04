import { ROLES } from '@/data';
import { getAuth } from '@/lib/auth';
import { notFound } from 'next/navigation';

const StaffLayout = async ({ children }) => {
  const { roles } = await getAuth();

  if (!roles.includes(ROLES.departmentHead)) notFound();

  return children;
};

export default StaffLayout;
