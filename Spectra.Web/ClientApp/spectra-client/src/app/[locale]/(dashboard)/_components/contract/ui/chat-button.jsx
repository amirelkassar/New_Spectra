import ChatsIcon from '@/assets/icons/chats';
import { useContractStore } from '@/dashboard/_hooks/use-contract-store';

export const ChatsButton = () => {
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
