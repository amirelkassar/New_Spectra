'use client';

import ChatsIcon from '@/assets/icons/chats';
import ThreeDotsIcon from '@/assets/icons/three-dots';
import { BackButton } from '@/components/buttons/back-button';
import { usePathname } from '@/navigation';
import ROUTES from '@/routes';
import { useContractStore } from '../../_hooks';

export const ContractHeader = () => {
  const pathname = usePathname();

  if (pathname === ROUTES.DOCTOR.CONTRACTS.DASHBOARD) {
    return <Title>العقود</Title>;
  }
  return (
    <div className='flex justify-between items-center gap-5'>
      <TitleWithBackButton title='العقد' />

      <Actions />
    </div>
  );
};

const Title = ({ children }) => {
  return (
    <h2 className='text-base lg:text-xl font-bold'>
      {children}
    </h2>
  );
};

const TitleWithBackButton = ({ title }) => {
  return (
    <div className='flex items-center gap-5'>
      <BackButton />
      <Title>{title}</Title>
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
