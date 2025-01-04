'use client';

import { cn } from '@/lib/utils';
import { useChatDate } from '@/hooks/use-chat-date';
import { useImagePath } from '@/hooks/use-image-path';
import Card from '@/components/card';
import Avatar from '@/components/avatar';

export const ChatList = ({ title = '', children }) => {
  return (
    <Card title={title} className='flex flex-col'>
      <div className='border-t border-grayDark pt-3 flex-1'>
        <div className='h-full max-h-[40vh] lg:max-h-[260px] overflow-y-auto mt-1'>
          {children}
        </div>
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
        <p className='text-grayDark flex gap-1'>
          <span>{lastMessage && `${lastMessage} .`}</span>
          <span>{time}</span>
        </p>
      </div>
    </div>
  );
};

ChatList.Item = ChatItem;

const NoMessages = ({ children }) => (
  <p className='h-full flex items-center justify-center text-grayDark'>
    {children}
  </p>
);

ChatList.NoMessages = NoMessages;
