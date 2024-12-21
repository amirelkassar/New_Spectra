'use client';

import { useRouter } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

import { VERSION_STATE } from '@/data';
import { NotFound404 } from '@/components/not-found-404';
import { QueryWrapper } from '@/components/query-wrapper';
import { useAdminContractById } from '@/hooks/queries/admin/contract';
import { ContractData } from '@/dashboard/_components/contract/contract-data';
import { AcceptButton } from '@/dashboard/_components/ui/accept-button';
import { EditButton } from '@/dashboard/_components/ui/edit-button';
import { RejectButton } from '@/dashboard/_components/ui/reject-button';
import ROUTES from '@/routes';
import Card from '@/components/card';

export const ViewVersion = ({ id = '', contractId = '' }) => {
  const query = useAdminContractById(contractId);

  return (
    <QueryWrapper query={query}>
      {({ data }) => (
        <ContractVersion contract={data} versionId={id} />
      )}
    </QueryWrapper>
  );
};

const ContractVersion = ({ contract = {}, versionId = '' }) => {
  const contractVersion = contract?.versions?.find(
    (version) => version.id === versionId
  );

  if (!contractVersion)
    return (
      <Card className='h-full'>
        <NotFound404 />
      </Card>
    );

  const state = contractVersion?.state;
  const acceptedByAdmin = contractVersion?.acceptedByAdmin;

  return (
    <ContractData {...contractVersion}>
      <Actions
        state={state}
        acceptedByAdmin={acceptedByAdmin}
        contractId={contract?.id}
        id={versionId}
      />
    </ContractData>
  );
};

const Actions = ({
  acceptedByAdmin = false,
  state,
  contractId = '',
  id = '',
}) => {
  const tg = useTranslations('general_obj');

  const router = useRouter();

  const onEdit = () =>
    router.push(
      ROUTES.ADMIN.CONTRACTS.UPDATE_VERSION(contractId, id)
    );

  if (state === VERSION_STATE.draft) return null;
  return (
    <div className='flex flex-col mdl:grid mdl:grid-cols-3 gap-3 *:flex-1'>
      <div>
        {!acceptedByAdmin && (
          <AcceptButton className='w-full'>
            {tg('accept')}
          </AcceptButton>
        )}
      </div>
      <div>
        {!acceptedByAdmin && (
          <RejectButton className='w-full'>
            {tg('reject')}
          </RejectButton>
        )}
      </div>
      <div>
        {state === VERSION_STATE.active && (
          <EditButton onClick={onEdit} className='w-full'>
            {tg('edit')}
          </EditButton>
        )}
      </div>
    </div>
  );
};
