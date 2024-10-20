'use client';
import { useState } from 'react';
import { Conversation } from './conversation';
import { Groups } from './groups';
import { Messages } from './messages';
import { cn } from '@/lib/utils';

const chats = [
  {
    id: 1,
    name: 'احمد محمد كمال',
    profession: 'اخصائى نفسي',
    avatar: '',
  },
  {
    id: 2,
    name: 'احمد محمد كمال',
    profession: 'اخصائى نفسي',
    avatar: '',
  },
  {
    id: 3,
    name: 'احمد محمد كمال',
    profession: 'اخصائى نفسي',
    avatar: '',
  },
  {
    id: 4,
    name: 'احمد محمد كمال',
    profession: 'اخصائى نفسي',
    avatar: '',
  },
];

const groups = [
  {
    id: 5,
    name: 'فريق الطفل احمد',
    members: [chats[0], chats[1]],
  },
  {
    id: 6,
    name: 'فريق الطفل احمد',
    members: [chats[2], chats[3]],
  },
];
export const Chats = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='lg:grid lg:grid-cols-5 lg:gap-5 flex-1'>
      <Messages
        data={chats}
        setSelectedChat={setSelectedChat}
        selectedChat={selectedChat}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      <div
        className={cn(
          'lg:hidden w-full my-8 h-[1px] bg-grayMedium',
          isOpen && 'hidden'
        )}
      />

      <Groups
        data={groups}
        setSelectedChat={setSelectedChat}
        selectedChat={selectedChat}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <Conversation
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectedConversation={selectedChat}
      />
    </div>
  );
};
