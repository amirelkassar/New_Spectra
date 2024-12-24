import ChatsIcon from '@/assets/icons/chats';
import { useChat } from '@/hooks/use-chat';

export const ChatsButton = () => {
  const toggle = useChat((s) => s.toggle);

  return (
    <button
      onClick={toggle}
      className='size-10 lg:size-14 bg-blueLighter flex items-center justify-center rounded-full'
    >
      <ChatsIcon className='text-greenMain size-5 lg:size-8' />
    </button>
  );
};
