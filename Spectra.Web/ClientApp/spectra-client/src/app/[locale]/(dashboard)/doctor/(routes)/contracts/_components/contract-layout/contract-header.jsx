'use client';

import { useMemo } from 'react';
import { usePathname } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

import { H1 } from '@/dashboard/_components/ui/h1';
import { BackButton } from '@/components/buttons/back-button';
import { useContractStore } from '../../_hooks';

import ChatsIcon from '@/assets/icons/chats';
import ROUTES from '@/routes';

export const ContractHeader = () => {
  const t = useTranslations('contract_obj');

  const pathname = usePathname();

  const isContractHome = useMemo(
    () => pathname === ROUTES.DOCTOR.CONTRACTS.DASHBOARD,
    [pathname]
  );

  return (
    <div className='flex justify-between items-center gap-5'>
      {isContractHome ? (
        <H1>{t('contracts')}</H1>
      ) : (
        <div className='flex items-center gap-5'>
          <BackButton />
          <H1>{t('contract')}</H1>
        </div>
      )}

      <ChatsButton />
    </div>
  );
};

const ChatsButton = () => {
  const toggleChat = useContractStore((s) => s.toggleChat);

  return (
    <button
      onClick={toggleChat}
      className='size-10 lg:size-14 bg-blueLighter flex items-center justify-center rounded-full'
    >
      <ChatsIcon className='text-greenMain size-5 lg:size-8' />
    </button>
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
