'use client';

import { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { createContext, useContext, useState } from 'react';

import { cn } from '@/lib/utils';
import { H1 } from '@/admin/_components/ui';
import { ChatList } from '@/dashboard/_components/chat';
import { BackButton } from '@/components/buttons/back-button';
import { QueryWrapper } from '@/components/query-wrapper';
import { useUserChatList } from '@/hooks/queries/user/chat';
import ROUTES from '@/routes';

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
      <div className='lg:col-span-2 gap-5 grid grid-rows-2'>
        <MessagesChatList data={chatList} />

        <GroupChatList data={groupChatList} />
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

const MessagesChatList = ({ data = [] }) => {
  const tg = useTranslations('general_obj');

  const router = useRouter();

  const pathName = usePathname();

  const { open } = useChatsLayout();

  return (
    <ChatList title={tg('messages')}>
      {!!data.length ? (
        data.map((chat) => (
          <ChatList.Item
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
        ))
      ) : (
        <ChatList.NoMessages>
          {tg('no_messages_yet')}
        </ChatList.NoMessages>
      )}
    </ChatList>
  );
};

const GroupChatList = ({ data = [] }) => {
  const tg = useTranslations('general_obj');

  const router = useRouter();

  const pathName = usePathname();

  const { open } = useChatsLayout();

  return (
    <ChatList title={tg('groups')}>
      {!!data.length ? (
        data.map((chat) => (
          <ChatList.Item
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
        ))
      ) : (
        <ChatList.NoMessages>
          {tg('no_groups_yet')}
        </ChatList.NoMessages>
      )}
    </ChatList>
  );
};
