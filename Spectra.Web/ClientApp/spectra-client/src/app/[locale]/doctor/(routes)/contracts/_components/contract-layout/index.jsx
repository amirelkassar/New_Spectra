'use client';

import { cn } from '@/lib/utils';
import { AskForJoin } from './ask-for-join';
import { ContractSteps } from './contract-steps';
import { ContractHeader } from './contract-header';
import { useActiveStep } from '../../_hooks';

import Card from '@/components/card';

export const ContractLayout = ({ contractCase }) => {
  const { activeStep } = useActiveStep(contractCase);

  return (
    <Card
      className={cn('md:p-5 mb-5', activeStep === 0 && 'flex-1 mb-0')}
    >
      <ContractHeader />

      <ContractSteps active={activeStep} />

      {activeStep === 0 && <AskForJoin />}
    </Card>
  );
};
