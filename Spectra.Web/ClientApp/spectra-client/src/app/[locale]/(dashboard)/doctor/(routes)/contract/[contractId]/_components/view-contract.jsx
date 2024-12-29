'use client';

import { useTranslations } from 'next-intl';

import { ContractData } from '@/dashboard/_components/contract/contract-data';
import { NotFound404 } from '@/components/not-found-404';
import { QueryWrapper } from '@/components/query-wrapper';
import { useEmployeeContract } from '@/hooks/queries/employee/contract';
import { AcceptButton } from '@/dashboard/_components/ui/accept-button';
import { RejectButton } from '@/dashboard/_components/ui/reject-button';
import { EditButton } from '@/dashboard/_components/ui/edit-button';
import { CONTRACT_STATE, VERSION_STATE } from '@/data';
import Card from '@/components/card';
import { useContractVersionActions } from '../../_hooks/use-contract-version-actions';
import { SignModal } from '@/dashboard/_components/contract/sign-modal';

export const ViewContract = ({ id }) => {
  const query = useEmployeeContract();

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
  const acceptedByEmployee = contractVersion?.acceptedByEmployee;

  return (
    <ContractData {...contractVersion}>
      <Actions
        state={state}
        acceptedByEmployee={acceptedByEmployee}
        versionId={versionId}
        contractId={contract?.id}
        contractState={contract?.contractState}
      />
    </ContractData>
  );
};

const Actions = ({
  acceptedByEmployee = false,
  state,
  versionId = '',
  contractId = '',
  contractState = '',
}) => {
  const tg = useTranslations('general_obj');

  const { onEdit, onAccept, onReject, isPendingAccept } =
    useContractVersionActions(versionId, contractId);

  const isVersionActive = state === VERSION_STATE.active;
  const isVersionDraft = state === VERSION_STATE.draft;
  const isContracting = contractState === CONTRACT_STATE.contracting;

  if (isVersionDraft) return null;
  if (!isContracting) return null;
  return (
    <div className='flex flex-col mdl:grid mdl:grid-cols-3 gap-3 *:flex-1'>
      <div>
        {!acceptedByEmployee && isVersionActive && (
          <SignModal isPending={isPendingAccept} onSend={onAccept}>
            <AcceptButton className='w-full'>
              {tg('accept')}
            </AcceptButton>
          </SignModal>
        )}
      </div>
      <div>
        {!acceptedByEmployee && isVersionActive && (
          <RejectButton onClick={onReject} className='w-full'>
            {tg('reject')}
          </RejectButton>
        )}
      </div>
      <div>
        {isVersionActive && (
          <EditButton onClick={onEdit} className='w-full'>
            {tg('edit')}
          </EditButton>
        )}
      </div>
    </div>
  );
};
