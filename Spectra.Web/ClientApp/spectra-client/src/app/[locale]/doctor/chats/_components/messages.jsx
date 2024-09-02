'use client';

import Card from '@/components/card';
import { CardHeading } from './card-heading';
import { Chat } from './chat';
import { cn } from '@/lib/utils';

export const Messages = ({
  data = [],
  setSelectedChat = () => {},
  selectedChat,
  isOpen,
  setIsOpen = () => {},
}) => {
  return (
    <Card className={cn('lg:col-span-2 lg:order-3', isOpen && 'hidden lg:block')}>
      <CardHeading label='رسائل' />
      {data?.map((chat) => (
        <Chat
          className={chat.id === selectedChat && 'bg-blueLight'}
          onClick={() => {
            setSelectedChat(chat.id);
            setIsOpen(true);
          }}
          key={chat.id}
          {...chat}
        />
      ))}
    </Card>
  );
};
