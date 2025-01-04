'use client';

import { memo } from 'react';

import { cn } from '@/lib/utils';
import { useDelay } from '@/hooks/use-delay';
import { useChat } from '@/hooks/use-chat';

import { useUserChatMessages } from '@/hooks/queries/user/chat';
import { useAddMessage } from '@/dashboard/_hooks/use-add-message';
import { useAuth } from '@/hooks/use-auth';
import {
  ChatWrapper,
  ChatBody,
  Message,
  ChatActions,
} from '@/dashboard/_components/chat';

export const Chat = ({ contractId = '' }) => {
  const isOpen = useChat((s) => s.isOpen);

  const isOpenDelayed = useDelay(isOpen, 500);

  const query = useUserChatMessages({
    reference: contractId,
  });

  return (
    <div
      className={cn(
        'rounded-xl bg-white w-0 transition-[width,padding,margin] duration-500 ease-in-out shrink-0 text-nowrap overflow-hidden',
        isOpen &&
          'mdl:me-3 w-full mdl:w-80 h-full mdl:max-h-[650px] mdl:min-h-[650px]'
      )}
    >
      {isOpenDelayed && (
        <ChatWrapper query={query}>
          {(props) => <RenderChat {...props} />}
        </ChatWrapper>
      )}
    </div>
  );
};

const RenderChat = memo((props) => {
  const { userId } = useAuth();

  const { chatId, reference } = props;

  const { onSend, onRetry } = useAddMessage(chatId, reference);

  return (
    <div className='h-full flex flex-col gap-3'>
      <ChatBody {...props}>
        {({ m, i }) => {
          const isMyMessage = m?.senderId === userId;

          return (
            <Message
              key={m?.id || i}
              data-host={isMyMessage}
              name={m?.senderName || ''}
              avatar={m?.senderImage || ''}
              date={m?.created}
              status={m?.status || ''}
              onRetry={() => onRetry(m)}
              showAvatar={true}
            >
              {m?.content}
            </Message>
          );
        }}
      </ChatBody>

      <ChatActions onSend={(formData) => onSend(formData)} />
    </div>
  );
});

RenderChat.displayName = 'RenderChat';
