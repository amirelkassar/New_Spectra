'use client';

import { ContractForm } from '@/dashboard/_components/contract/contract-form';
import { QueryWrapper } from '@/components/query-wrapper';
import { VERSION_STATE } from '@/data';
import { useAdminContractById } from '@/hooks/queries/admin/contract';
import { useTranslations } from 'next-intl';
import Button from '@/components/button';
import Card from '@/components/card';
import { NotFound404 } from '@/components/not-found-404';
import { useUpdateContractVersion } from '../../../_hooks/use-update-contract-version';

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

  if (!contractVersion || isDraft)
    return (
      <Card className='h-full'>
        <NotFound404 />
      </Card>
    );

  return (
    <ContractForm>
      <Actions contractId={contract?.id} />
    </ContractForm>
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
