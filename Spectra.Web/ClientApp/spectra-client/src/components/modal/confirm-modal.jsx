'use client';

import { Modal } from '@mantine/core';
import Button from '@/components/button';
import { useConfirmModal } from '@/store/modal/use-confirm-modal';

function ConfirmModal() {
  const { isOpen, close, message, icon, onConfirm } =
    useConfirmModal();

  const handleSumbit = async () => {
    await onConfirm();
    close();
  };

  return (
    <Modal
      withCloseButton={false}
      centered
      opened={isOpen}
      onClose={close}
      size='auto'
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
          >
            نعم , متأكد
          </Button>
          <Button onClick={close}>لا</Button>
        </div>
      </div>
    </Modal>
  );
}

export default ConfirmModal;
