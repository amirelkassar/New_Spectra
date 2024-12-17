'use client';

import ChatsIcon from '@/assets/icons/chats';
import ThreeDotsIcon from '@/assets/icons/three-dots';
import { BackButton } from '@/components/buttons/back-button';
import { usePathname } from '@/i18n/routing';
import ROUTES from '@/routes';
import { useContractStore } from '../../_hooks';
import { H1 } from '@/dashboard/_components/ui/h1';

export const ContractHeader = () => {
  const pathname = usePathname();

  if (pathname === ROUTES.DOCTOR.CONTRACTS.DASHBOARD) {
    return <H1>العقود</H1>;
  }
  return (
    <div className='flex justify-between items-center gap-5'>
      <div className='flex items-center gap-5'>
        <BackButton />
        <H1>العقد</H1>
      </div>

      <Actions />
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

const Actions = () => {
  return (
    <div className='flex items-center gap-5 *:shrink-0'>
      <ChatsButton />
      <ThreeDotsIcon />
    </div>
  );
};
