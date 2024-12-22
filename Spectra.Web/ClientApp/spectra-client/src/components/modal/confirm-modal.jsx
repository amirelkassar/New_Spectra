'use client';

import { useTranslations } from 'next-intl';
import { Modal } from '@mantine/core';

import { useConfirmModalStore } from '@/hooks/use-confirm-modal-store';
import Button from '@/components/button';

export const ConfirmModal = () => {
  const tg = useTranslations('general_obj');

  const { isOpen, close, message, icon, onConfirm, isPending } =
    useConfirmModalStore();

  const handleSumbit = async (e) => {
    e.preventDefault();
    await onConfirm();
    close();
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
            disabled={isPending}
          >
            {tg('yes_sure')}
          </Button>
          <Button disabled={isPending} onClick={close}>
            {tg('no')}
          </Button>
        </div>
      </div>
    </Modal>
  );
};
