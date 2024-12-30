'use client';

import { memo, useMemo, useRef } from 'react';
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

export const Chat = ({ contractId = '' }) => {
  const isOpen = useChat((s) => s.isOpen);

  const isOpenDelayed = useDelay(isOpen, 500);

  const { data, isPending, isError, isSuccess } = useUserChatMessages(
    {
      reference: contractId,
    }
  );

  const messages = useMemo(() => data?.data?.messages, [data]);
  const reference = useMemo(() => data?.data?.reference, [data]);
  const chatId = useMemo(() => data?.data?.id, [data]);

  return (
    <div
      className={cn(
        'rounded-xl bg-white w-0 transition-[width,padding,margin] duration-500 ease-in-out shrink-0 text-nowrap overflow-hidden flex flex-col',
        isOpen && 'me-3 w-[calc(100vw-32px)] mdl:w-80 mdl:h-[650px]'
      )}
    >
      {isOpenDelayed && (
        <>
          <ChatBody
            isLoading={isPending}
            isError={isError}
            isSuccess={isSuccess}
            messages={messages}
          />

          <ChatActions
            reference={reference}
            chatId={chatId}
            disabled={!isSuccess}
          />
        </>
      )}
    </div>
  );
};

const ChatBody = memo(
  ({
    isLoading = false,
    isError = false,
    isSuccess = false,
    messages = [],
  }) => {
    const hasMessages = !!messages.length;

    const { userId } = useAuth();

    return (
      <div className='flex-1 overflow-y-auto space-y-3 p-1 mdl:p-5'>
        {isSuccess && hasMessages ? (
          messages.map((message, index) => (
            <Message
              key={message?.id || index}
              data-host={message?.senderId === userId}
              name={message?.name || ''}
              avatar={message?.avatar || ''}
            >
              {message?.content || ''}
            </Message>
          ))
        ) : (
          <NoMessages
            isLoading={isLoading}
            isError={isError}
            isSuccess={isSuccess}
            hasMessages={hasMessages}
          />
        )}
      </div>
    );
  }
);

ChatBody.displayName = 'ChatBody';

const NoMessages = memo(
  ({
    isLoading = false,
    isError = false,
    hasMessages = false,
    isSuccess = false,
  }) => {
    const tg = useTranslations('general_obj');

    return (
      <div className='h-full flex items-center justify-center'>
        <p className='text-wrap text-center text-grayDark'>
          {isLoading && tg('loading_messages')}
          {isError && tg('general_error')}
          {!hasMessages && isSuccess && tg('no_messages_yet')}
        </p>
      </div>
    );
  }
);

NoMessages.displayName = 'NoMessages';

const Message = memo(
  ({ children, name = '', avatar = '', ...props }) => {
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

        <p className='bg-greenMain shrink-1 rounded-lg text-white text-xs lg:text-base px-3 py-2 group-data-[host=true]:bg-grayLight group-data-[host=true]:text-black w-full text-wrap'>
          {children}
        </p>
      </div>
    );
  }
);

Message.displayName = 'Message';

const ChatActions = memo(
  ({ disabled = false, chatId = '', reference = '' }) => {
    const tg = useTranslations('general_obj');

    const textareaRef = useRef(null);

    const { onSend, isAddingMessage, isAddingMessageError } =
      useAddMessage(chatId, reference);

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

ChatActions.displayName = 'ChatActions';
