import BackIcon from '@/assets/icons/back';
import Button from '@/components/button';
import Card from '@/components/card';
import { Link } from '@/i18n/routing';
import ROUTES from '@/routes';
import { PasswordInput } from '@mantine/core';
import React from 'react';

function page() {
  return (
    <Card className={'h-full'}>
      <div className='flex items-center gap-5 md:p-3'>
        <Link
          href={ROUTES.DOCTOR.SETTINGS.DASHBOARD}
          className=' w-8 mdl:w-11  h-8 mdl:h-11 rounded-full'
        >
          <BackIcon className={'w-full h-auto'} />
        </Link>
        <h2>الاعدادات - تغيير كلمة المرور</h2>
      </div>
      <form className='max-w-[600px] mx-auto  flex flex-col gap-4 mdl:gap-6 mt-10 md:mt-14 md:mb-20'>
        <PasswordInput
          label='كلمة المرور السابقة'
          placeholder='Input placeholder'
          classNames={{
            input:
              ' h-12 mdl:h-14 rounded-xl border border-greenMain text-base mdl:text-lg',
            label: 'text-sm md:text-xl mb-3 ',
          }}
        />
        <PasswordInput
          label='كلمة المرور الجديدة'
          placeholder='Input placeholder'
          classNames={{
            input:
              ' h-12 mdl:h-14 rounded-xl border border-greenMain text-base mdl:text-lg',
            label: 'text-sm md:text-xl mb-3 ',
          }}
        />
        <PasswordInput
          label='تأكيد كلمة المرور'
          placeholder='Input placeholder'
          classNames={{
            input:
              ' h-12 mdl:h-14 rounded-xl border border-greenMain text-base mdl:text-lg',
            label: 'text-sm md:text-xl mb-3 ',
          }}
        />
        <Button
          variant='secondary'
          className=' h-12 mdl:h-14 mt-10 mdl:mt-16 w-full max-w-[80%] mx-auto font-Bold text-base mdl:text-xl'
        >
          تأكيد
        </Button>
      </form>
    </Card>
  );
}

export default page;
