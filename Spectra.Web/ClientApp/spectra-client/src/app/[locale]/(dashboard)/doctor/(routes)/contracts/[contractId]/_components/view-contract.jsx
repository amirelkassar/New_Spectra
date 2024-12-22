'use client';

import { useRouter } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

import { ContractData } from '@/dashboard/_components/contract/contract-data';
import { NotFound404 } from '@/components/not-found-404';
import { QueryWrapper } from '@/components/query-wrapper';
import { useEmployeeContract } from '@/hooks/queries/employee/contract';
import { AcceptButton } from '@/dashboard/_components/ui/accept-button';
import { RejectButton } from '@/dashboard/_components/ui/reject-button';
import { EditButton } from '@/dashboard/_components/ui/edit-button';
import { VERSION_STATE } from '@/data';
import Card from '@/components/card';
import ROUTES from '@/routes';

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
        id={versionId}
      />
    </ContractData>
  );
};

const Actions = ({ acceptedByEmployee = false, state, id = '' }) => {
  const tg = useTranslations('general_obj');

  const router = useRouter();

  const onEdit = () =>
    router.push(ROUTES.DOCTOR.CONTRACTS.EDIT_CONTRACT(id));

  if (state === VERSION_STATE.draft) return null;
  return (
    <div className='flex flex-col mdl:grid mdl:grid-cols-3 gap-3 *:flex-1'>
      <div>
        {!acceptedByEmployee && (
          <AcceptButton className='w-full'>
            {tg('accept')}
          </AcceptButton>
        )}
      </div>
      <div>
        {!acceptedByEmployee && (
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
