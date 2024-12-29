'use client';

import { useLocale, useTranslations } from 'next-intl';

import { CONTRACT_STATE, VERSION_STATE } from '@/data';
import { NotFound404 } from '@/components/not-found-404';
import { QueryWrapper } from '@/components/query-wrapper';
import { AcceptButton } from '@/dashboard/_components/ui/accept-button';
import { RejectButton } from '@/dashboard/_components/ui/reject-button';
import { useContractVersionActions } from '../../../_hooks/use-contract-version-actions';
import Card from '@/components/card';
import { useEmployeeHeadContractById } from '@/hooks/queries/employee-head/contract';
import { SignModal } from '@/dashboard/_components/contract/sign-modal';
import { Alert } from '@/components/alert';
import { Service } from '@/dashboard/_components/contract/ui';

export const ViewVersion = ({ id = '', contractId = '' }) => {
  const query = useEmployeeHeadContractById(contractId);

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
  const acceptedByHead = contractVersion?.acceptedByHead;

  return (
    <ContractData
      {...contractVersion}
      state={state}
      acceptedByHead={acceptedByHead}
      contractId={contract.id}
      contractState={contract?.contractState}
    />
  );
};

const ContractData = ({
  freelancingServices = [],
  spectraTeamServices = [],
  state,
  acceptedByHead = false,
  contractId = '',
  contractState = '',
}) => {
  return (
    <div className='space-y-5 h-full pb-2'>
      <FreelanceServices freelancer={freelancingServices} />

      <SpectraTeamServices spectraTeam={spectraTeamServices} />

      <Actions
        state={state}
        acceptedByHead={acceptedByHead}
        contractId={contractId}
        contractState={contractState}
      />
    </div>
  );
};

const FreelanceServices = ({ freelancer = [] }) => {
  const t = useTranslations('contract_obj');
  const tg = useTranslations('general_obj');

  const locale = useLocale();

  const nameKey = locale === 'en' ? 'enName' : 'arName';

  const termsKey = locale === 'en' ? 'enTerms' : 'arTerms';

  if (!freelancer?.length)
    return <Alert>{tg('no_data_selected')}</Alert>;

  return (
    <Card title={t('services_as_freelancer')}>
      {freelancer.map((s, i) => (
        <ServiceInfo
          key={s?.serviceId || i}
          id={s?.serviceId}
          name={s[nameKey]}
          terms={s[termsKey]}
        />
      ))}
    </Card>
  );
};

const SpectraTeamServices = ({ spectraTeam = [] }) => {
  const locale = useLocale();

  const t = useTranslations('contract_obj');
  const tg = useTranslations('general_obj');

  if (!spectraTeam?.length)
    return <Alert>{tg('no_data_selected')}</Alert>;

  const nameKey = locale === 'en' ? 'enName' : 'arName';
  const termsKey = locale === 'en' ? 'enTerms' : 'arTerms';

  return (
    <Card title={t('services_as_spectra')}>
      {spectraTeam.map((s, i) => (
        <ServiceInfo
          key={s?.serviceId || i}
          id={s?.serviceId}
          name={s[nameKey]}
          terms={s[termsKey]}
        />
      ))}
    </Card>
  );
};

const ServiceInfo = ({ id = '', name = '', terms = '' }) => {
  const tg = useTranslations('general_obj');

  return (
    <Service data-id={id} className='flex gap-3'>
      <div className='space-y-2 flex-1'>
        <h4 className='text-xs mdl:text-base capitalize'>{name}</h4>

        {terms && (
          <Service.Terms headline={tg('terms_and_conditions')}>
            {terms}
          </Service.Terms>
        )}
      </div>
    </Service>
  );
};

const Actions = ({
  acceptedByHead = false,
  state,
  contractId = '',
  contractState = '',
}) => {
  const tg = useTranslations('general_obj');

  const { onReject, onAccept, isPendingAccept } =
    useContractVersionActions({
      contractId,
    });

  const isVersionActive = state === VERSION_STATE.active;
  const isVersionDraft = state === VERSION_STATE.draft;
  const isContracting = contractState === CONTRACT_STATE.contracting;

  if (isVersionDraft) return null;
  if (!isContracting) return null;
  return (
    <div className='flex flex-col mdl:grid mdl:grid-cols-3 gap-3 *:flex-1 !mt-10'>
      <div>
        {!acceptedByHead && isVersionActive && (
          <SignModal isPending={isPendingAccept} onSend={onAccept}>
            <AcceptButton className='w-full'>
              {tg('accept')}
            </AcceptButton>
          </SignModal>
        )}
      </div>
      <div>
        {!acceptedByHead && isVersionActive && (
          <RejectButton onClick={onReject} className='w-full'>
            {tg('reject')}
          </RejectButton>
        )}
      </div>
    </div>
  );
};
