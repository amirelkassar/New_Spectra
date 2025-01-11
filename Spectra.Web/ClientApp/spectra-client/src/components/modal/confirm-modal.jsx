'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Modal } from '@mantine/core';

import { useConfirmModalStore } from '@/hooks/use-confirm-modal-store';
import Button from '@/components/button';

export const ConfirmModal = () => {
  const tg = useTranslations('general_obj');

  const [pending, setPending] = useState(false);

  const { isOpen, close, message, icon, onConfirm } =
    useConfirmModalStore();

  const handleSumbit = async (e) => {
    e.preventDefault();
    setPending(true);
    await onConfirm();
    close();
    setPending(false);
  };

  return (
    <Modal
      withCloseButton={false}
      centered
      opened={isOpen}
      onClose={close}
      size='lg'
      classNames={{
        content: 'rounded-xl lg:py-5 lg:px-10',
      }}
    >
      <div className='space-y-5'>
        <div className='w-fit mx-auto'>{icon}</div>

        <p className='lg:text-2xl text-lg text-cente font-bold min-w-64 text-center'>
          {message}
        </p>

        <div className='flex *:flex-1 flex-col lg:flex-row gap-5 font-bold text-sm lg:text-base'>
          <Button
            variant='secondary'
            onClick={handleSumbit}
            disabled={pending}
          >
            {tg('yes_sure')}
          </Button>
          <Button disabled={pending} onClick={close}>
            {tg('no')}
          </Button>
        </div>
      </div>
    </Modal>
  );
};
