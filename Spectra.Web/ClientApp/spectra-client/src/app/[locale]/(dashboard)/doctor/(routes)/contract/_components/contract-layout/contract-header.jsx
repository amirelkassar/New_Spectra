'use client';

import { useMemo } from 'react';
import { usePathname } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

import { H1 } from '@/dashboard/_components/ui/h1';
import { BackButton } from '@/components/buttons/back-button';
import { ChatsButton } from '@/dashboard/_components/contract/ui';
import ROUTES from '@/routes';
import { CanceledBadge } from '@/dashboard/_components/ui/canceled-badge';
import { useDate } from '@/hooks/use-date';

export const ContractHeader = ({
  activeStep,
  canceledBy = '',
  cancelingDate = '',
}) => {
  const t = useTranslations('contract_obj');

  const tg = useTranslations('general_obj');

  const { fullYear } = useDate(cancelingDate);

  const pathname = usePathname();

  const isContractHome = useMemo(
    () => pathname === ROUTES.DOCTOR.CONTRACT.DASHBOARD,
    [pathname]
  );

  return (
    <div className='flex justify-between items-center gap-5'>
      <div className='flex items-center gap-5'>
        {!isContractHome && <BackButton />}
        <H1>{t('contract')}</H1>
        {activeStep === 4 && (
          <>
            <CanceledBadge>{tg('canceled')}</CanceledBadge>
            <span className='text-xs mdl:text-base text-grayDark capitalize'>
              {tg('from')} {tg('doc_prefix')} {canceledBy}{' '}
              <span
                className='inline-block ltr:ml-4 rtl:mr-4'
                dir='ltr'
              >
                {fullYear}
              </span>
            </span>
          </>
        )}
        {activeStep === 5 && (
          <CanceledBadge className='text-black bg-grayLight'>
            {tg('accepted')}
          </CanceledBadge>
        )}
      </div>

      {activeStep >= 3 && <ChatsButton />}
    </div>
  );
};

// const Actions = () => {
//   return (
//     <div className='flex items-center gap-5 *:shrink-0'>
//       <ChatsButton />
//       <ThreeDotsIcon />
//     </div>
//   );
// };
