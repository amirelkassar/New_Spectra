'use client';

import { useTranslations } from 'next-intl';

import { cn } from '@/lib/utils';
import { H1 } from '@/dashboard/_components/ui/h1';
import { Chat } from '@/dashboard/_components/contract/chat';
import { AskForJoin } from './ask-for-join';
import { QueryWrapper } from '@/components/query-wrapper';
import { useActiveStep } from '../../_hooks';
import { ContractSteps } from './contract-steps';
import { ContractHeader } from './contract-header';
import { ContractProvider } from '@/dashboard/_hooks/use-contract-store';
import { useEmployeeContract } from '@/hooks/queries/employee/contract';
import Card from '@/components/card';
import { VERSION_STATE } from '@/data';

export const ContractLayout = ({ children }) => {
  const t = useTranslations('contract_obj');

  const query = useEmployeeContract();

  return (
    <Card
      className={cn(
        'h-full',
        query.isSuccess && '!p-0 rounded-none bg-transparent'
      )}
    >
      {!query.isSuccess && <H1>{t('contracts')}</H1>}
      <QueryWrapper query={query} isFiltered={true}>
        {({ data, hasData }) => (
          <RenderLayout data={data} hasData={hasData}>
            {children}
          </RenderLayout>
        )}
      </QueryWrapper>
    </Card>
  );
};

const RenderLayout = ({ data = {}, hasData = false, children }) => {
  const activeContract =
    data?.versions?.find((v) => v?.state === VERSION_STATE.active) ||
    {};

  return (
    <ContractProvider
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
      <div className='flex flex-col h-full space-y-5'>
        <Steps hasData={hasData} state={data?.contractState} />

        <div className='flex overflow-hidden flex-1'>
          <Chat />

          <div className='flex-1'>{children}</div>
        </div>
      </div>
    </ContractProvider>
  );
};

const Steps = ({ hasData = false, state }) => {
  const { activeStep } = useActiveStep({ hasData, state });

  return (
    <Card>
      <ContractHeader />

      <ContractSteps active={activeStep} />

      {activeStep === 0 && <AskForJoin />}
    </Card>
  );
};
