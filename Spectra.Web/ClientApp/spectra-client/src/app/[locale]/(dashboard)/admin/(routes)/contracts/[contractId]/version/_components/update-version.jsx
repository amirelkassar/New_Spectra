'use client';

import { useTranslations } from 'next-intl';

import Card from '@/components/card';
import Button from '@/components/button';
import { NotFound404 } from '@/components/not-found-404';
import { QueryWrapper } from '@/components/query-wrapper';
import { VERSION_STATE } from '@/data';
import { ContractForm } from '@/dashboard/_components/contract/contract-form';
import { useAdminContractById } from '@/hooks/queries/admin/contract';
import { useUpdateContractVersion } from '../../../_hooks/use-update-contract-version';
import {
  ContractProvider,
  getContractFormInitialState,
} from '@/dashboard/_hooks/use-contract-store';
import { NoActionsAvailable } from '@/dashboard/_components/contract/no-actions-available';

export const UpdateVersion = ({ id = '', contractId = '' }) => {
  const query = useAdminContractById(contractId);

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
      role='admin'
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
    useUpdateContractVersion(contractId);

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
