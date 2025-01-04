'use client';

import { useTranslations } from 'next-intl';

import { ContractForm } from '@/dashboard/_components/contract/contract-form';
import { QueryWrapper } from '@/components/query-wrapper';
import { useEmployeeContract } from '@/hooks/queries/employee/contract';
import Card from '@/components/card';
import { NotFound404 } from '@/components/not-found-404';
import { VERSION_STATE } from '@/data';
import Button from '@/components/button';
import { useUpdateContract } from '../../_hooks/use-update-contract';
import {
  ContractProvider,
  getContractFormInitialState,
} from '@/dashboard/_hooks/use-contract-store';
import { NoActionsAvailable } from '@/dashboard/_components/contract/no-actions-available';

export const UpdateContract = ({ id = '' }) => {
  const query = useEmployeeContract();

  return (
    <QueryWrapper query={query}>
      {({ data }) => (
        <UpdateContractForm contract={data} versionId={id} />
      )}
    </QueryWrapper>
  );
};

const UpdateContractForm = ({ contract = {}, versionId = '' }) => {
  const contractVersion = contract?.versions?.find(
    (version) => version.id === versionId
  );

  const isDraft = contractVersion?.state === VERSION_STATE.draft;

  if (!contractVersion)
    return (
      <Card className='h-full'>
        <NotFound404 />
      </Card>
    );

  if (isDraft)
    return <NoActionsAvailable versionNum={contractVersion?.order} />;

  return (
    <ContractProvider
      initialState={getContractFormInitialState(contractVersion)}
    >
      <ContractForm>
        <Actions contractId={contract?.id} />
      </ContractForm>
    </ContractProvider>
  );
};

const Actions = ({ contractId }) => {
  const tg = useTranslations('general_obj');

  const { disabled, isPending, onSubmit } =
    useUpdateContract(contractId);

  return (
    <div className='flex flex-col-reverse md:flex-row gap-4 ms-auto lg:max-w-sm *:flex-1'>
      <Button
        disabled={disabled || isPending}
        onClick={onSubmit}
        className='min-h-14'
        variant='secondary'
      >
        {tg('save_changes')}
      </Button>
    </div>
  );
};
