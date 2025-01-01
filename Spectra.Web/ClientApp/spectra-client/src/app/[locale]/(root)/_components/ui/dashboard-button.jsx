'use client';

import { Link } from '@/i18n/routing';

import Dashboard from '@/assets/icons/dashboard';
import { cn, getRedirectPath } from '@/lib/utils';
import { useToken } from '@/hooks/use-token';
import { useAuth } from '@/hooks/use-auth';

export const DashboardButton = ({ children, props }) => {
  const { token } = useToken();

  const { roles, hasActiveContract } = useAuth();

  if (!token) return null;

  const href = getRedirectPath(roles, hasActiveContract);

  return (
    <Link
      {...props}
      href={href}
      className={cn(
        'text-xs mdl:text-base text-white font-bold bg-greenMain px-3 py-2 text-center rounded-lg lg:w-full lg:max-w-36 2xl:max-w-40 transition hover:bg-greenMain/90 whitespace-nowrap flex items-center justify-center gap-3',
        props?.className
      )}
    >
      <Dashboard className='max-h-full w-auto shrink-0 size-5 mdl:size-6' />
      {children}
    </Link>
  );
};
