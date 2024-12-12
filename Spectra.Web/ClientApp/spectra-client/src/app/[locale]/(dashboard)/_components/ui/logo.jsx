'use client';

import { usePathname } from '@/i18n/routing';

import { Logo as SpectraLogo } from '@/components/logo';
import ROUTES from '@/routes';

export const Logo = () => {
  const pathname = usePathname();

  const href = (() => {
    if (pathname.startsWith('/admin')) return ROUTES.ADMIN.MAIN;
    if (pathname.startsWith('/client'))
      return ROUTES.CLIENT.MAIN.HOME;
    if (pathname.startsWith('/doctor')) return ROUTES.DOCTOR.MAIN;
  })();

  return <SpectraLogo className='h-8 mdl:h-9' href={href} />;
};
