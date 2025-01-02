'use client';

import { useMemo } from 'react';
import { usePathname, useRouter } from '@/i18n/routing';
import { createContext, useContext, useState } from 'react';

import { cn } from '@/lib/utils';
import { H1 } from '@/admin/_components/ui';
import { BackButton } from '@/components/buttons/back-button';
import { QueryWrapper } from '@/components/query-wrapper';
import { useUserChatList } from '@/hooks/queries/user/chat';
import { useChatDate } from '@/hooks/use-chat-date';
import { useImagePath } from '@/hooks/use-image-path';
import ROUTES from '@/routes';
import Card from '@/components/card';
import Avatar from '@/components/avatar';
import { useTranslations } from 'next-intl';

const ChatsLayoutContext = createContext(null);

const ChatsLayoutProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ChatsLayoutContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ChatsLayoutContext.Provider>
  );
};

const useChatsLayout = () => {
  const { isOpen, setIsOpen } = useContext(ChatsLayoutContext);

  const open = () => !isOpen && setIsOpen(true);
  const close = () => isOpen && setIsOpen(false);
  const toggle = () => setIsOpen((prev) => !prev);

  return { isOpen, open, close, toggle };
};

export const ChatsLayout = ({ children }) => {
  const query = useUserChatList();

  return (
    <div className='h-full overflow-hidden flex flex-col gap-5'>
      <ChatsLayoutProvider>
        <Header />

        <QueryWrapper query={query}>
          {({ data }) => (
            <RenderChats data={data}>{children}</RenderChats>
          )}
        </QueryWrapper>
      </ChatsLayoutProvider>
    </div>
  );
};

const RenderChats = ({ data = [], children }) => {
  const { isOpen } = useChatsLayout();

  const { chatList, groupChatList } = useMemo(() => {
    const chatList = [];
    const groupChatList = [];

    data.forEach((chat) => {
      if (chat.isGroup) {
        groupChatList.push(chat);
      } else {
        chatList.push(chat);
      }
    });

    return { chatList, groupChatList };
  }, [data]);

  return (
    <div className='flex-1 lg:grid lg:grid-cols-5 lg:gap-5 relative'>
      <div className='lg:col-span-2 flex flex-col gap-5 h-full'>
        <div className='flex-1'>
          <ChatList data={chatList} />
        </div>

        <div
          className={cn(
            'lg:hidden w-full my-8 h-[1px] bg-grayMedium',
            isOpen && 'hidden'
          )}
        />

        <div className='flex-1'>
          <GroupChatList data={groupChatList} />
        </div>
      </div>

      <div
        className={cn(
          'lg:col-span-3 lg:static lg:top-auto lg:end-auto lg:h-auto absolute top-0 end-0 w-full h-[calc(100%-50px)] mdl:h-full transition-transform -translate-x-full lg:translate-x-0 lg:transform-none lg:transition-none',
          isOpen && 'translate-x-0'
        )}
      >
        {children}
      </div>
    </div>
  );
};

const Header = () => {
  const tg = useTranslations('general_obj');

  const router = useRouter();

  const path = usePathname();

  const { close } = useChatsLayout();

  const showBackButton = path !== ROUTES.ADMIN.CHATS.DASHBOARD;

  return (
    <div className='flex items-center gap-4'>
      {showBackButton && (
        <BackButton
          onClick={() => {
            router.push(ROUTES.ADMIN.CHATS.DASHBOARD);
            close();
          }}
        />
      )}
      <H1>{tg('chats')}</H1>
    </div>
  );
};

const ChatList = ({ data = [] }) => {
  const tg = useTranslations('general_obj');

  const router = useRouter();

  const pathName = usePathname();

  const { open } = useChatsLayout();

  return (
    <Card title={tg('messages')} className='h-full'>
      <div className='border-t border-grayDark pt-3 max-h-[260px] overflow-y-auto'>
        {data.map((chat) => (
          <ChatItem
            key={chat.id}
            {...chat}
            isActive={
              pathName === ROUTES.ADMIN.CHATS.VIEW_CHAT(chat.id)
            }
            onClick={() => {
              router.push(ROUTES.ADMIN.CHATS.VIEW_CHAT(chat.id));
              open();
            }}
          />
        ))}
      </div>
    </Card>
  );
};

const GroupChatList = ({ data = [] }) => {
  const tg = useTranslations('general_obj');

  return (
    <Card title={tg('groups')} className='h-full'>
      <div className='border-t border-grayDark pt-3 max-h-[260px] overflow-y-auto'>
        {JSON.stringify(data)}
      </div>
    </Card>
  );
};

const ChatItem = ({
  chatImage = '',
  roomName = '',
  lastMessage = '',
  lastMeesageDate = '',
  className = '',
  isActive = false,
  onClick = () => {},
}) => {
  const { time } = useChatDate(lastMeesageDate);

  const path = useImagePath(chatImage);

  return (
    <div
      onClick={onClick}
      role='button'
      className={cn(
        'flex items-center gap-4 p-3 border-b-2 border-grayLight last:border-transparent transition-colors hover:bg-blueLighter rounded-md',
        isActive && 'bg-blueLighter',
        className
      )}
    >
      <Avatar
        src={path}
        name={roomName}
        className='size-14 rounded-full shrink-0'
      />

      <div className='space-y-1 flex-1'>
        <h3 className='font-bold capitalize'>{roomName}</h3>
        <p className='text-grayDark'>
          {lastMessage && `${lastMessage} . `}
          {time}
        </p>
      </div>
    </div>
  );
};
