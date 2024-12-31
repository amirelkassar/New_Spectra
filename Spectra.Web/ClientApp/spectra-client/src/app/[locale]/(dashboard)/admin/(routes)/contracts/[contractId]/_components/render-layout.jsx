'use client';

import { useTranslations } from 'next-intl';

import { H1 } from '@/dashboard/_components/ui/h1';
import { Chat } from '@/dashboard/_components/contract/chat';
import { BackButton } from '@/components/buttons/back-button';
import { CellActions } from '../../_components/cell-actions';
import { QueryWrapper } from '@/components/query-wrapper';
import { DoctorDataCard } from '@/dashboard/_components/contract/doctor-data-card';
import { useAdminContractById } from '@/hooks/queries/admin/contract';

export const RenderLayout = ({ id = '', children }) => {
  const t = useTranslations('contract_obj');

  const query = useAdminContractById(id);

  return (
    <>
      {!query.isSuccess && (
        <div className='flex items-center gap-4'>
          <BackButton />
          <H1>{t('contract')}</H1>
        </div>
      )}

      <QueryWrapper query={query}>
        {({ data }) => (
          <ContractLayout contract={data}>{children}</ContractLayout>
        )}
      </QueryWrapper>
    </>
  );
};

const ContractLayout = ({ contract, children }) => {
  const t = useTranslations('contract_obj');

  const lastVersionId = contract?.versions[0]?.id;

  return (
    <div className='h-full flex flex-col gap-5'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <BackButton />
          <H1>{t('contract')}</H1>
        </div>
        <CellActions lastVersionId={lastVersionId} />
      </div>

      <div className='flex-1 flex flex-col gap-5'>
        <DoctorDataCard {...contract} showChatButton />

        <div className='flex overflow-hidden flex-1'>
          <Chat contractId={contract?.id} />

          <div className='flex-1'>{children}</div>
        </div>
      </div>
    </div>
  );
};
