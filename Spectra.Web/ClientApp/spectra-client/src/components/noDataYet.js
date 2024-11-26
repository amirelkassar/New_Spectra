'use client';

import { usePathname } from '@/navigation';

import LinkGreen from './linkGreen';
import NoDataIcon from '@/assets/icons/no-data';
import ROUTES from '@/routes';
import { useMemo } from 'react';

function NoDataYet() {
  const pathname = usePathname() || '';

  const href = useMemo(() => {
    if (pathname.includes('admin'))
      return ROUTES.ADMIN.MAIN;

    if (pathname.includes('client'))
      return ROUTES.CLIENT.MAIN;
  }, [pathname]);

  return (
    <div className='flex-1 h-full'>
      <NoDataIcon className='block mx-auto max-w-full' />
      <h2 className='text-sm mdl:text-xl font-Bold text-center mb-3'>
        هذه الصفحة لا تحتوي على بيانات في الوقت الحالي.
      </h2>
      <p className='text-sm mdl:text-xl text-center max-w-2xl mx-auto'>
        يُرجى التفاعل مع الأنشطة أو العمليات المطلوبة لتسجيل
        البيانات هنا. سيتم تحديث المحتوى تلقائيًا عند توفر
        البيانات الجديدة.
      </p>
      <LinkGreen
        href={href}
        className='text-sm mdl:text-xl font-bold w-full mx-auto max-w-sm mt-10'
      >
        الرجوع للرئيسية
      </LinkGreen>
    </div>
  );
}

export default NoDataYet;
