'use client';

import { Chat } from '@/dashboard/_components/contract/chat';
import { QueryWrapper } from '@/components/query-wrapper';
import { useAdminContractById } from '@/hooks/queries/admin/contract';
import { ContractProvider } from '@/dashboard/_hooks/use-contract-store';
import { VERSION_STATE } from '@/data';
import { DoctorDataCard } from '@/dashboard/_components/contract/doctor-data-card';

export const RenderLayout = ({ id = '', children }) => {
  const query = useAdminContractById(id);

  return (
    <QueryWrapper query={query}>
      {({ data }) => (
        <ContractLayout contract={data}>{children}</ContractLayout>
      )}
    </QueryWrapper>
  );
};

const ContractLayout = ({ contract, children }) => {
  const activeContract =
    contract?.versions?.find(
      (v) => v?.state === VERSION_STATE.active
    ) || {};

  return (
    <ContractProvider
      role='admin'
      initialState={{
        daysOfWork: activeContract?.daysOfWork || '',
        hoursOfWork: activeContract?.hoursOfWork || '',
        freelancingPercentage:
          activeContract?.freelancingPercentage || '',
        spectraTeamPercentage:
          activeContract?.spectraTeamPercentage || '',
        freelancingDuration:
          activeContract?.freelancingDuration || '',
        spectraTeamDuration:
          activeContract?.spectraTeamDuration || '',
        freelancingServices:
          activeContract?.freelancingServices || [],
        spectraTeamServices:
          activeContract?.spectraTeamServices || [],
      }}
    >
      <div className='flex-1 flex flex-col gap-5'>
        <DoctorDataCard {...contract} showChatButton />

        <div className='flex overflow-hidden flex-1'>
          <Chat />

          <div className='flex-1'>{children}</div>
        </div>
      </div>
    </ContractProvider>
  );
};
