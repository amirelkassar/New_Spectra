'use client';

import { memo } from 'react';

import {
  ChatActions,
  ChatBody,
  ChatHeader,
  ChatWrapper,
  Message,
} from '@/dashboard/_components/chat';
import { useAuth } from '@/hooks/use-auth';
import { useAddMessage } from '@/dashboard/_hooks/use-add-message';
import { useUserChatMessages } from '@/hooks/queries/user/chat';
import Card from '@/components/card';

export const ChatCard = ({ id = '' }) => {
  const query = useUserChatMessages({
    chatId: id,
  });

  return (
    <Card className='h-full'>
      <ChatWrapper query={query}>
        {(props) => <RenderChat {...props} />}
      </ChatWrapper>
    </Card>
  );
};

const RenderChat = memo((props) => {
  const { userId } = useAuth();

  const { chatId, reference, messages, chatImage, roomName } = props;

  const { onSend, onRetry } = useAddMessage(chatId, reference);

  return (
    <div className='h-full flex flex-col gap-3'>
      <ChatHeader chatImage={chatImage} roomName={roomName} />

      <ChatBody {...props}>
        {({ m, i }) => (
          <Message
            key={m?.id || i}
            data-host={m?.senderId === userId}
            name={m?.senderName || ''}
            avatar={m?.senderImage || ''}
            date={m?.created}
            status={m?.status || ''}
            onRetry={() => onRetry(m)}
            showAvatar={messages[i - 1]?.senderId !== m?.senderId}
          >
            {m?.content}
          </Message>
        )}
      </ChatBody>

      <ChatActions onSend={(formData) => onSend(formData)} />
    </div>
  );
});

RenderChat.displayName = 'RenderChat';
