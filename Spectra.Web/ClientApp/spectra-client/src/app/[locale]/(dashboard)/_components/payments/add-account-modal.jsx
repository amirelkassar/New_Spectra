'use client';

import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useTranslations } from 'next-intl';

import { SectionTitle } from '@/dashboard/_components/ui/section-title';
import { AccountForm } from './account-form';

export const AddAccountModal = ({
  children,
  form,
  onConfirm = () => {},
}) => {
  const t = useTranslations('payments_obj');

  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <div role='modal' onClick={open}>
        {children}
      </div>

      <Modal
        opened={opened}
        onClose={() => {
          form && form.reset();
          close();
        }}
        size='lg'
        withCloseButton={false}
        classNames={{
          content: 'rounded-xl p-1 mdl:p-5',
        }}
      >
        <div className='space-y-10'>
          <SectionTitle>{t('add_account')}</SectionTitle>

          <AccountForm
            form={form}
            onConfirm={onConfirm}
            onClose={close}
          />
        </div>
      </Modal>
    </>
  );
};
