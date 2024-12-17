'use client';

import { cn } from '@/lib/utils';
import { AskForJoin } from './ask-for-join';
import { ContractSteps } from './contract-steps';
import { Chat } from './chat';
import { ContractHeader } from './contract-header';
import { useActiveStep } from '../../_hooks';

import Card from '@/components/card';
import { ContractProvider } from '../../_hooks/use-contract-store';
import { useEmployeeContract } from '@/hooks/queries/employee/contract';
import { H1 } from '@/dashboard/_components/ui/h1';
import { QueryWrapper } from '@/components/query-wrapper';

export const ContractLayout = ({ children }) => {
  // const { activeStep } = useActiveStep(contractCase);

  const query = useEmployeeContract();

  return (
    <Card
      className={cn(
        'h-full',
        query.isSuccess && '!p-0 rounded-none bg-transparent'
      )}
    >
      {!query.isSuccess && <H1>العقود</H1>}
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
  console.log(hasData);
};

const Temp = () => {
  return (
    <ContractProvider>
      <div className='flex flex-col h-full'>
        <Card className='h-full'>
          <ContractHeader />

          <ContractSteps active={0} />

          {0 === 0 && <AskForJoin />}
        </Card>

        <div className='flex overflow-hidden'>
          <Chat />

          <div className='flex-1'>{children}</div>
        </div>
      </div>
    </ContractProvider>
  );
};
