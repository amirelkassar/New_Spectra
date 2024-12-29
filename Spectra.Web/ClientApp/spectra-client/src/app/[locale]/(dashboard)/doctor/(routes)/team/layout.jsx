import { ROLES } from '@/data';
import { getAuth } from '@/lib/auth';
import { notFound } from 'next/navigation';

const TeamLayout = async ({ children }) => {
  const { roles } = await getAuth();

  if (!roles.includes(ROLES.departmentHead)) notFound();

  return children;
};

export default TeamLayout;
