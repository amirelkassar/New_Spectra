'use client';

import { useRouter } from '@/i18n/routing';
import { cn, getRedirectPath } from '@/lib/utils';
import Dashboard from '@/assets/icons/dashboard';
import { useAuth } from '@/hooks/use-auth';

export const DashboardButton = ({ children, props }) => {
  const { hasActiveContract, roles } = useAuth();

  const router = useRouter();

  if (!roles?.length) return null;

  const onClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    router.push(getRedirectPath(roles, hasActiveContract));
  };

  return (
    <button
      {...props}
      onClick={onClick}
      className={cn(
        'text-xs mdl:text-base text-white font-bold bg-greenMain px-3 py-2 text-center rounded-lg lg:w-full lg:max-w-36 2xl:max-w-40 transition hover:bg-greenMain/90 whitespace-nowrap flex items-center justify-center gap-3',
        props?.className
      )}
    >
      <Dashboard className='max-h-full w-auto shrink-0 size-5 mdl:size-6' />
      {children}
    </button>
  );
};
