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
import { useEmployeeContract } from '@/hooks/queries/employee/contract';
import { CancelButton } from '@/dashboard/_components/ui/cancel-button';
import { useCancelContract } from '../../_hooks/use-cancel-contract';
import Card from '@/components/card';

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
      {!query.isSuccess && <H1>{t('contract')}</H1>}
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
  return (
    <div className='flex flex-col h-full space-y-5'>
      <Steps
        hasData={hasData}
        contractId={data?.id}
        state={data?.contractState}
        canceledBy={data?.canceldByUsername}
        cancelingDate={data?.cancelingDate}
      />

      <div className='flex overflow-hidden flex-1'>
        {hasData && <Chat contractId={data?.id} />}

        <div className='flex-1'>{children}</div>
      </div>
    </div>
  );
};

const Steps = ({
  hasData = false,
  contractId = '',
  canceledBy = '',
  cancelingDate = '',
  state,
}) => {
  const { activeStep } = useActiveStep({ hasData, state });

  return (
    <Card>
      <ContractHeader
        activeStep={activeStep}
        canceledBy={canceledBy}
        cancelingDate={cancelingDate}
      />

      <ContractSteps active={activeStep} />

      {activeStep === 0 && <AskForJoin />}

      {activeStep === 3 && <CancelContract id={contractId} />}
    </Card>
  );
};

const CancelContract = ({ id = '' }) => {
  const t = useTranslations('contract_obj');

  const { onCancel } = useCancelContract(id);

  return (
    <CancelButton
      onClick={onCancel}
      className='w-full max-w-xs mx-auto py-2'
    >
      {t('cancel_contract')}
    </CancelButton>
  );
};
