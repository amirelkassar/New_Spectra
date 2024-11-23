'use client';

import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import Signature from '@/components/Signature';
import Button from '@/components/button';
import CloseIcon from '@/assets/icons/close';

export const SignModal = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        size='lg'
        centered
      >
        <button onClick={close}>
          <CloseIcon
            className={
              'w-7 absolute top-4 start-5 z-10 h-auto mdl:w-9'
            }
          />
        </button>
        <h2 className='text-base lg:text-2xl font-bold text-center my-7'>
          يرجى التوقيع باستخدام الماوس أو لوحة التتبع الخاصة
          بجهاز اللابتوب أو باستخدام اللمس علي شاشة المحمول.
        </h2>
        <Signature />
      </Modal>

      <Button variant='secondary' onClick={open}>
        امضاء
      </Button>
    </>
  );
};
