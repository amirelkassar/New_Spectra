'use client';

import { useMemo } from 'react';
import { usePathname } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

import { H1 } from '@/dashboard/_components/ui/h1';
import { BackButton } from '@/components/buttons/back-button';
import { ChatsButton } from '@/dashboard/_components/contract/ui';
import ROUTES from '@/routes';
import { CanceledBadge } from '@/dashboard/_components/ui/canceled-badge';

export const ContractHeader = ({ activeStep }) => {
  const t = useTranslations('contract_obj');

  const tg = useTranslations('general_obj');

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
          <CanceledBadge>{tg('canceled')}</CanceledBadge>
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
