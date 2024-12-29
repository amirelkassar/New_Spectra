'use client';

import { Stepper } from '@mantine/core';
import { useTranslations } from 'next-intl';

import CorrectICon from '@/assets/icons/correct';
import FalseIcon from '@/assets/icons/false';
import { cn } from '@/lib/utils';

export const ContractSteps = ({ active }) => {
  const t = useTranslations('contract_obj');

  const tg = useTranslations('general_obj');

  return (
    <Stepper
      color='#10B0C1'
      active={active}
      allowNextStepsSelect={false}
      completedIcon={<CorrectICon />}
      classNames={{
        stepLabel: 'text-xs lg:text-base capitalize',
        root: 'max-w-2xl mx-auto my-7 lg:my-10',
        steps: 'flex-nowrap',
        step: 'data-[completed]:opacity-100 opacity-40',
        separator: 'mx-1 min-w-3',
        stepBody: 'ms-1 lg:ms-3',
        stepIcon:
          'bg-grayDark text-white border-none size-5 lg:size-8 min-h-5 min-w-5 lg:min-h-8 lg:min-w-8 shrink-0 text-xs lg:text-xl data-[completed]:bg-greenMain',
      }}
    >
      <Stepper.Step label={t('join_request')} />
      <Stepper.Step label={t('data_fill')} />
      <Stepper.Step label={t('contracting')} />
      <Stepper.Step
        completedIcon={active === 4 && <FalseIcon />}
        label={active === 4 ? tg('canceled') : tg('accepted')}
        classNames={{
          stepIcon: cn(active === 4 && 'data-[completed]:bg-red'),
        }}
      />
    </Stepper>
  );
};
