'use client';

import { useMemo, useState } from 'react';
import { Link } from '@/i18n/routing';
import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { cn } from '@/lib/utils';
import { useToken } from '@/hooks/use-token';
import ROUTES from '@/routes';
import Button from '@/components/button';
import FamilyIcon from '@/assets/icons/family';
import OrgIcon from '@/assets/icons/org';
import ProviderIcon from '@/assets/icons/provider';
import CheckIcon from '@/assets/icons/check';
import { useLocale, useTranslations } from 'next-intl';

const OPTIONS = [
  {
    icon: <FamilyIcon className='size-12 lg:size-14' />,
    type: 'family',
    name: {
      ar: 'عائلة طفل / مستفيد',
      en: 'Family of child / beneficiary',
    },
    href: ROUTES.AUTH.SIGNUP_FAMILY,
    disabled: true,
  },
  {
    icon: <OrgIcon className='size-12 lg:size-14' />,
    type: 'organization',
    name: {
      ar: 'منظمة / جهة داعمة',
      en: 'Organization / Supporting Entity',
    },
    href: ROUTES.AUTH.SIGNUP_ORG,
    disabled: true,
  },
  {
    icon: <ProviderIcon className='size-12 lg:size-14' />,
    type: 'provider',
    name: {
      ar: 'مقدم الخدمة الطبية',
      en: 'Medical Service Provider',
    },
    href: ROUTES.AUTH.SIGNUP_PROVIDER,
    disabled: false,
  },
];

export const RegisterModal = ({ children, ...props }) => {
  const tg = useTranslations('general_obj');

  const locale = useLocale();

  const { token } = useToken();

  const [opened, { open, close }] = useDisclosure(false);
  const [selectedClient, setSelectedClient] = useState(OPTIONS[2]);

  const title = useMemo(
    () =>
      locale === 'ar'
        ? 'اهلا وسهلا, اختر نوع المستخدم'
        : 'Welcome, choose your user type',
    [locale]
  );

  const Options = useMemo(
    () =>
      OPTIONS.map((option) => (
        <div
          role='button'
          onClick={() => {
            if (option?.disabled) return;
            setSelectedClient(option);
          }}
          aria-disabled={option?.disabled}
          key={option?.type}
          className={cn(
            'shadow relative flex flex-col items-center gap-5 p-5 rounded-lg border border-transparent w-full max-w-44 text-center transition hover:border-greenMain',
            selectedClient?.type === option?.type &&
              'border-greenMain',
            option?.disabled &&
              'opacity-50 cursor-not-allowed pointer-events-none'
          )}
        >
          {option.icon}
          <span>{option.name[locale]}</span>
          {selectedClient?.type === option?.type && (
            <div className='rounded-full absolute -top-4 right-1/2 translate-x-1/2 size-8 bg-greenMain flex items-center justify-center'>
              <CheckIcon />
            </div>
          )}
        </div>
      )),
    [selectedClient?.type, locale]
  );

  if (token) return null;
  return (
    <>
      <div
        role='dialog'
        onClick={open}
        {...props}
        className={cn(
          'text-xs mdl:text-base block text-white font-bold bg-greenMain px-3 py-2 text-center rounded-lg lg:w-full lg:max-w-28 2xl:max-w-40 cursor-pointer transition hover:bg-greenMain/90 whitespace-nowrap',
          props?.className
        )}
      >
        {children}
      </div>

      {/* MODAL */}
      <Modal
        opened={opened}
        withCloseButton={false}
        onClose={close}
        size='lg'
      >
        <div className='space-y-5'>
          {/* HEADER */}
          <h3 className='font-bold text-sm py-3 lg:text-medium text-black text-center'>
            {title}
          </h3>

          <div className='space-y-7'>
            <div className=' min-h-[250px] flex flex-col gap-6 justify-center'>
              <div className='flex gap-3'>{Options}</div>
            </div>
            <div className='flex gap-5 flex-col lg:flex-row *:flex-1 items-center !text-sm lg:!text-base font-bold'>
              <Link
                className='block w-full py-3 h-auto bg-greenMain text-white rounded-xl px-2 text-center'
                href={selectedClient.href}
              >
                {tg('next')}
              </Link>

              <Button
                onClick={close}
                className='w-full py-3 h-auto px-2'
              >
                {tg('cancel')}
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
