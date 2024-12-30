'use client';

import { memo, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';

import { cn } from '@/lib/utils';
import { Textarea } from '@/components/inputs/textarea';
import { useDelay } from '@/hooks/use-delay';
import { useChat } from '@/hooks/use-chat';

import Avatar from '@/components/avatar';
import SendIcon from '@/assets/icons/send';
import { useUserChatMessages } from '@/hooks/queries/user/chat';
import { useAddMessage } from '@/dashboard/_hooks/use-add-message';
import { useAuth } from '@/hooks/use-auth';
import { useDate } from '@/hooks/use-date';
import RetryIcon from '@/assets/icons/retry';

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
        isOpen && 'me-3 w-[calc(100vw-32px)] mdl:w-80 mdl:h-[650px]'
      )}
    >
      {isOpenDelayed && (
        <ChatWrapper query={query}>
          {({ messages, chatId, reference }) => (
            <RenderChat
              initialMessages={messages}
              chatId={chatId}
              reference={reference}
            />
          )}
        </ChatWrapper>
      )}
    </div>
  );
};

const ChatWrapper = memo(({ query, children }) => {
  const tg = useTranslations('general_obj');

  const { data, isPending, isError, isSuccess } = query;

  if (isPending)
    return <NoMessages>{tg('loading_messages')}</NoMessages>;

  if (isError) return <NoMessages>{tg('general_error')}</NoMessages>;

  const hasMessages = !!data?.data?.messages.length;

  if (!hasMessages && isSuccess)
    return <NoMessages>{tg('no_messages_yet')}</NoMessages>;

  const item = data?.data || {};

  const {
    id: chatId,
    reference,
    messages,
    chatImage,
    roomName,
    isGroup,
  } = item;

  return children({
    chatId,
    reference,
    messages,
    chatImage,
    roomName,
    isGroup,
  });
});

const RenderChat = memo(
  ({ initialMessages = [], chatId, reference }) => {
    const [messages, setMessages] = useState(initialMessages);

    const { onSend } = useAddMessage(chatId, reference, setMessages);

    return (
      <div className='h-full flex flex-col'>
        <ChatBody messages={messages} onRetry={onSend} />

        <ChatActions onSend={onSend} />
      </div>
    );
  }
);

const ChatBody = memo(({ messages = [], onRetry = () => {} }) => {
  const { userId } = useAuth();

  return (
    <div className='flex-1 overflow-y-auto space-y-3 p-1 mdl:p-5'>
      {messages?.reverse()?.map((m, i) => (
        <Message
          key={m?.id || i}
          data-host={m?.senderId === userId}
          name={''}
          avatar={''}
          date={m?.created}
          status={m?.status || ''}
          onRetry={() =>
            onRetry(new FormData().set('message', m.content))
          }
        >
          {m?.content}
        </Message>
      ))}
    </div>
  );
});

const NoMessages = memo(({ children }) => {
  return (
    <div className='h-full flex items-center justify-center'>
      <p className='text-wrap text-center text-grayDark'>
        {children}
      </p>
    </div>
  );
});

const Message = memo(
  ({
    children,
    name = '',
    avatar = '',
    date = '',
    status = '',
    onRetry = () => {},
    ...props
  }) => {
    const { time } = useDate(date);

    const statusText =
      {
        pending: 'جاري الإرسال...',
        failed: 'فشل الإرسال. حاول مرة أخرى.',
      }[status] || time;

    return (
      <div
        {...props}
        className='flex flex-row-reverse gap-3 group data-[host=true]:flex-row max-w-full'
      >
        <div>
          <Avatar
            className='size-11 shrink-0'
            src={avatar}
            name={name}
          />
        </div>

        <div className='bg-greenMain shrink-1 rounded-lg text-white text-xs lg:text-base px-3 py-2 group-data-[host=true]:bg-grayLight group-data-[host=true]:text-black w-full text-wrap'>
          <p>{children}</p>
          <span
            className={cn(
              'text-xs ms-auto w-fit flex items-center gap-1 mt-1',
              status === 'failed' && 'text-red cursor-pointer',
              status === 'pending' && 'text-grayDark'
            )}
            onClick={status === 'failed' ? onRetry : undefined}
          >
            {status === 'failed' && (
              <RetryIcon className='text-red size-4' />
            )}
            {statusText}
          </span>
        </div>
      </div>
    );
  }
);

const ChatActions = memo(
  ({ disabled = false, onSend = () => {} }) => {
    const tg = useTranslations('general_obj');

    const textareaRef = useRef(null);

    return (
      <form
        action={(formData) => {
          onSend(formData);
          if (!textareaRef.current) return;
          textareaRef.current.value = '';
        }}
        className='flex items-center gap-5 p-1 mdl:p-5'
      >
        <div className='relative flex-1'>
          <Textarea
            ref={textareaRef}
            size='xs'
            radius='md'
            classNames={{
              input: 'pe-12',
            }}
            placeholder={tg('write_message')}
            disabled={disabled}
            name='message'
          />
        </div>

        <button
          disabled={disabled}
          className='disabled:opacity-50 disabled:cursor-not-allowed'
          type='submit'
        >
          <SendIcon />
        </button>
      </form>
    );
  }
);

ChatWrapper.displayName = 'ChatWrapper';
RenderChat.displayName = 'RenderChat';
ChatBody.displayName = 'ChatBody';
NoMessages.displayName = 'NoMessages';
Message.displayName = 'Message';
ChatActions.displayName = 'ChatActions';
