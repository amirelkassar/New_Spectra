'use client';

import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { useRouter } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { SpecialNeedsData } from '@/lib/demoData';
import ROUTES from '@/routes';
import Button from '@/components/button';
import CloseIcon from '@/assets/icons/close';

export const MakeAppointment = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const router = useRouter();

  return (
    <>
      {/* Modal button trigger */}
      <Button variant='secondary' onClick={open} className=''>
        حجز ميعاد
      </Button>

      {/* MODAL */}
      <Modal
        opened={opened}
        onClose={() => {
          close();
        }}
        closeButtonProps={{
          icon: <CloseIcon className='size-6 lg:size-10' />,
        }}
        size={'md'}
        title='اختار التخصص'
        classNames={{
          title: 'text-black font-bold text-sm lg:text-medium',
        }}
      >
        <div className='mt-3'>
          <div className='flex flex-wrap gap-3 justify-center'>
            {SpecialNeedsData.map((item) => (
              <button
                onClick={() => {}}
                key={item.id}
                className={cn(
                  'rounded-lg flex items-center justify-center flex-col gap-2 bg-blueLight text-sm lg:text-medium text-black p-4 size-32 lg:size-40 border-2 border-transparent transition',
                  {
                    'border-greenMain': item.id === 1,
                  }
                )}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}

            <Button
              onClick={() =>
                router.push(`${ROUTES.CLIENT.TEAM}/bookAppointment`)
              }
              variant='secondary'
              className='w-full col-span-2'
            >
              التالي
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};
