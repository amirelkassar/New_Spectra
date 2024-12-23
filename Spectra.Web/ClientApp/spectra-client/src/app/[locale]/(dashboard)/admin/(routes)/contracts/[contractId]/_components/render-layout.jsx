'use client';

import { useTranslations } from 'next-intl';

import { Chat } from '@/dashboard/_components/contract/chat';
import { QueryWrapper } from '@/components/query-wrapper';
import { useAdminContractById } from '@/hooks/queries/admin/contract';
import { ContractProvider } from '@/dashboard/_hooks/use-contract-store';
import { VERSION_STATE } from '@/data';
import { DoctorDataCard } from '@/dashboard/_components/contract/doctor-data-card';
import { BackButton } from '@/components/buttons/back-button';
import { H1 } from '@/dashboard/_components/ui/h1';
import { CellActions } from '../../_components/cell-actions';

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

  const activeContract =
    contract?.versions?.find(
      (v) => v?.state === VERSION_STATE.active
    ) || {};

  return (
    <div className='h-full flex flex-col gap-5'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <BackButton />
          <H1>{t('contract')}</H1>
        </div>
        <CellActions lastVersionId={activeContract?.id} />
      </div>
      <ContractProvider
        role='admin'
        initialState={getInitialState(activeContract)}
      >
        <div className='flex-1 flex flex-col gap-5'>
          <DoctorDataCard {...contract} showChatButton />

          <div className='flex overflow-hidden flex-1'>
            <Chat />

            <div className='flex-1'>{children}</div>
          </div>
        </div>
      </ContractProvider>
    </div>
  );
};

function getInitialState(activeContract) {
  return {
    daysOfWork: activeContract?.daysOfWork || '',
    hoursOfWork: activeContract?.hoursOfWork || '',
    freelancingPercentage:
      activeContract?.freelancingPercentage || '',
    spectraTeamPercentage:
      activeContract?.spectraTeamPercentage || '',
    freelancingDuration: activeContract?.freelancingDuration || '',
    spectraTeamDuration: activeContract?.spectraTeamDuration || '',
    freelancingServices: activeContract?.freelancingServices || [],
    spectraTeamServices: activeContract?.spectraTeamServices || [],
  };
}
