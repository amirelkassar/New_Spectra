'use client';

import { useTranslations } from 'next-intl';

import { Chat } from '@/dashboard/_components/contract/chat';
import { QueryWrapper } from '@/components/query-wrapper';
import { DoctorDataCard } from '@/dashboard/_components/contract/doctor-data-card';
import { BackButton } from '@/components/buttons/back-button';
import { H1 } from '@/dashboard/_components/ui/h1';
import { useEmployeeHeadContractById } from '@/hooks/queries/employee-head/contract';
import { ContractProvider } from '@/dashboard/_hooks/use-contract-store';
import ROUTES from '@/routes';

export const RenderLayout = ({ id = '', children }) => {
  const t = useTranslations('contract_obj');

  const query = useEmployeeHeadContractById(id);

  return (
    <>
      {!query.isSuccess && (
        <div className='flex items-center gap-4'>
          <BackButton />
          <H1>{t('contract')}</H1>
        </div>
      )}

      <QueryWrapper query={query}>
        {({ data }) => (
          <ContractLayout contract={data}>{children}</ContractLayout>
        )}
      </QueryWrapper>
    </>
  );
};

const ContractLayout = ({ contract, children }) => {
  const t = useTranslations('contract_obj');

  const employeeId = contract?.employeeId || '';

  return (
    <div className='h-full flex flex-col gap-5'>
      <div className='flex items-center gap-4'>
        <BackButton />
        <H1>{t('contract')}</H1>
      </div>

      <ContractProvider>
        <div className='flex-1 flex flex-col gap-5'>
          <DoctorDataCard
            {...contract}
            showChatButton
            href={ROUTES.DOCTOR.STAFF.VIEW_STAFF(employeeId)}
          />

          <div className='flex overflow-hidden flex-1'>
            <Chat />

            <div className='flex-1'>{children}</div>
          </div>
        </div>
      </ContractProvider>
    </div>
  );
};
