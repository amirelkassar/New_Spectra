'use client';

import { memo, useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';

import { AddButton } from '@/components/buttons/add-button';
import {
  AccountForm,
  AddAccountModal,
  BankAccount,
} from '@/dashboard/_components/payments';
import { Section, SectionTitle } from '@/client/_components/ui';
import { QueryWrapper } from '@/components/query-wrapper';
import {
  useUserAccountById,
  useUserAccountList,
} from '@/hooks/queries/user/billing-management';
import {
  useAddAccount,
  useDeleteAccount,
  useUpdateAccount,
} from '@/dashboard/_hooks/payments';
import Card from '@/components/card';
import { Modal } from '@mantine/core';
import CloseIcon from '@/assets/icons/close';

export const MyAccounts = () => {
  return (
    <Section id='my-accounts' className='h-full'>
      <Card titleId='my-accounts' className='space-y-5 h-full'>
        <Heading />

        <Accounts />
      </Card>
    </Section>
  );
};

const Heading = () => {
  const t = useTranslations('payments_obj');

  const { form, onConfirm } = useAddAccount();

  return (
    <div className='flex gap-5 items-center'>
      <SectionTitle className='capitalize' id='my-accounts'>
        {t('my_bank_accounts')}
      </SectionTitle>

      <AddAccountModal form={form} onConfirm={onConfirm}>
        <AddButton className='capitalize'>
          {t('add_account')}
        </AddButton>
      </AddAccountModal>
    </div>
  );
};

const Accounts = memo(() => {
  const query = useUserAccountList();

  return (
    <QueryWrapper query={query} isFiltered>
      {({ data, hasData }) => (
        <RenderAccounts data={data} hasData={hasData} />
      )}
    </QueryWrapper>
  );
});

Accounts.displayName = 'Accounts';

const RenderAccounts = ({ data = [], hasData = false }) => {
  const t = useTranslations('payments_obj');

  const [viewId, setViewId] = useState(null);

  const { onDelete } = useDeleteAccount();

  const accounts = useMemo(() => {
    if (!data.length) return [];

    return data.map((acc, ind) => (
      <BankAccount
        key={acc?.id || ind}
        bankName={acc?.bankName}
        accountHolder={acc?.accountHolderName}
        isDefault={acc?.default}
        onDelete={() => onDelete(acc?.id)}
        onView={() => setViewId(acc?.id)}
      />
    ));
  }, [data, onDelete]);

  if (!hasData)
    return (
      <div className='h-32 flex items-center justify-center text-grayDark'>
        {t('no_accounts')}
      </div>
    );
  return (
    <div className='space-y-3'>
      {accounts}

      {viewId && (
        <ViewAccountModal
          id={viewId}
          opened={!!viewId}
          close={() => setViewId(null)}
        />
      )}
    </div>
  );
};

const ViewAccountModal = ({
  id = '',
  opened = false,
  close = () => {},
}) => {
  const t = useTranslations('payments_obj');

  const query = useUserAccountById(id);

  return (
    <Modal
      opened={opened}
      onClose={() => {
        close();
      }}
      size='lg'
      withCloseButton={false}
      classNames={{
        content: 'rounded-xl p-1 mdl:p-5',
      }}
    >
      <div className='space-y-10'>
        <div className='flex items-center justify-between'>
          <SectionTitle>{t('view_account')}</SectionTitle>

          <div role='button' onClick={close}>
            <CloseIcon className='size-8' />
          </div>
        </div>
        <QueryWrapper query={query}>
          {({ data }) => <RenderAccountData data={data} />}
        </QueryWrapper>
      </div>
    </Modal>
  );
};

const RenderAccountData = ({ data }) => {
  const [isEditing, setIsEditing] = useState(false);

  const { form, onConfirm } = useUpdateAccount({
    initialValues: data,
  });

  return (
    <AccountForm
      form={form}
      readOnly={!isEditing}
      onConfirm={onConfirm}
      onEdit={() => setIsEditing(true)}
      onCancel={() => setIsEditing(false)}
      onClose={() => setIsEditing(false)}
    />
  );
};
