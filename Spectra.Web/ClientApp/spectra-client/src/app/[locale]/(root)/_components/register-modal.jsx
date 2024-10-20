'use client';

import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link } from '@/navigation';

import ROUTES from '@/routes';
import Button from '@/components/button';
import { useState } from 'react';
import FamilyIcon from '@/assets/icons/family';
import OrgIcon from '@/assets/icons/org';
import ProviderIcon from '@/assets/icons/provider';
import CheckIcon from '@/assets/icons/check';
import { cn } from '@/lib/utils';

const OPTIONS = [
  {
    icon: <FamilyIcon className='size-12 lg:size-14' />,
    type: 'family',
    name: 'عائلة طفل / مستفيد',
    href: ROUTES.AUTH.SIGNUP_FAMILY,
  },
  {
    icon: <OrgIcon className='size-12 lg:size-14' />,
    type: 'organization',
    name: 'منظمة / جهة داعمة',
    href: ROUTES.AUTH.SIGNUP_ORG,
  },
  {
    icon: <ProviderIcon className='size-12 lg:size-14' />,
    type: 'provider',
    name: 'مقدم الخدمة الطبية',
    href: ROUTES.AUTH.SIGNUP_PROVIDER,
  },
];

export const RegisterModal = ({
  trigger = (
    <Button
      variant='secondary'
      className='font-bold rounded-[10px] leading-6 xl:!min-w-[140px] !py-1 xl:min-h-[33px] px-4 xl:px-7 !text-center'
      aria-label='اشترك الان'
    >
      اشترك الان
    </Button>
  ),
}) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedClient, setSelectedClient] = useState(
    OPTIONS[0]
  );

  return (
    <>
      <div role='dialog' onClick={open}>
        {trigger}
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
            اهلا وسهلا, اختر نوع المستخدم
          </h3>

          <div className='space-y-7'>
            <div className=' min-h-[250px] flex flex-col gap-6 justify-center'>
              <div className='flex gap-3'>
                {OPTIONS.map((option) => (
                  <div
                    role='button'
                    onClick={() =>
                      setSelectedClient(option)
                    }
                    key={option?.type}
                    className={cn(
                      'shadow relative flex flex-col items-center gap-5 p-5 rounded-lg border border-transparent w-full max-w-44 text-center',
                      selectedClient?.type ===
                        option?.type && 'border-greenMain'
                    )}
                  >
                    {option.icon}
                    <span>{option.name}</span>
                    {selectedClient?.type ===
                      option?.type && (
                      <div className='rounded-full absolute -top-4 right-1/2 translate-x-1/2 size-8 bg-greenMain flex items-center justify-center'>
                        <CheckIcon />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className='flex gap-5 flex-col lg:flex-row *:flex-1 items-center !text-sm lg:!text-base font-bold'>
              <Link
                className='block w-full py-3 h-auto bg-greenMain text-white rounded-xl px-2 text-center'
                href={selectedClient.href}
              >
                التالي
              </Link>

              <Button
                onClick={close}
                className='w-full py-3 h-auto px-2'
              >
                الغاء
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
