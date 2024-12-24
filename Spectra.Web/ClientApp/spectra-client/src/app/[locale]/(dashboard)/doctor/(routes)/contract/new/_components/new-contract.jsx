'use client';

import { useTranslations } from 'next-intl';
import { useNewContract } from '../../_hooks/use-new-contract';

import Button from '@/components/button';
import { ContractForm } from '@/dashboard/_components/contract/contract-form';
import { ContractProvider } from '@/dashboard/_hooks/use-contract-store';

export const NewContract = () => {
  return (
    <ContractProvider>
      <ContractForm>
        <Actions />
      </ContractForm>
    </ContractProvider>
  );
};

const Actions = () => {
  const tg = useTranslations('general_obj');

  const { disabled, onSubmit, isPending } = useNewContract();

  return (
    <div className='flex flex-col-reverse md:flex-row gap-4 ms-auto lg:max-w-sm *:flex-1'>
      {/* <Button className='min-h-14'>
  حفظ كمسودة
  <DraftIcon className='size-6' />
  </Button> */}

      <Button
        disabled={disabled || isPending}
        onClick={onSubmit}
        className='min-h-14'
        variant='secondary'
      >
        {tg('send')}
      </Button>
    </div>
  );
};
