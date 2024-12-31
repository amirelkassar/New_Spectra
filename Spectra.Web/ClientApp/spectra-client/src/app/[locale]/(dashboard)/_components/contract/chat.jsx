'use client';

import {
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useTranslations } from 'next-intl';

import { cn } from '@/lib/utils';
import { Textarea } from '@/components/inputs/textarea';
import { useDelay } from '@/hooks/use-delay';
import { useChat } from '@/hooks/use-chat';

import Avatar from '@/components/avatar';
import SendIcon from '@/assets/icons/send';
import RetryIcon from '@/assets/icons/retry';
import { useUserChatMessages } from '@/hooks/queries/user/chat';
import { useAddMessage } from '@/dashboard/_hooks/use-add-message';
import { useAuth } from '@/hooks/use-auth';
import { useChatDate } from '@/hooks/use-chat-date';

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
        isOpen && 'me-3 w-[calc(100vw-32px)] mdl:w-80 h-[650px]'
      )}
    >
      {isOpenDelayed && (
        <ChatWrapper query={query}>
          {({ messages, chatId, reference }) => (
            <RenderChat
              initialMessages={messages}
              chatId={chatId}
              reference={reference}
              query={query}
            />
          )}
        </ChatWrapper>
      )}
    </div>
  );
};

const ChatWrapper = memo(({ query, children }) => {
  const tg = useTranslations('general_obj');

  const { data, isPending, isError } = query;

  if (isPending)
    return <NoMessages>{tg('loading_messages')}</NoMessages>;

  if (isError) return <NoMessages>{tg('general_error')}</NoMessages>;

  const generalData = data?.pages[0] || {};

  const { id, reference, chatImage, roomName, isGroup } = generalData;

  return children({
    chatId: id,
    reference,
    chatImage,
    roomName,
    isGroup,
    messages: data?.pages,
  });
});

const RenderChat = memo(
  ({ initialMessages = [], chatId, reference, query }) => {
    const { hasNextPage, fetchNextPage, isFetchingNextPage } = query;

    const scrollContainerRef = useRef(null);

    const [messages, setMessages] = useState(() => {
      const mergedMessages = initialMessages.flatMap(
        (page) => page.messages?.items || []
      );

      return mergedMessages.reverse();
    });

    const tg = useTranslations('general_obj');

    const { userId } = useAuth();

    const { onSend } = useAddMessage(chatId, reference, setMessages);

    // SCROLL TO BOTTOM WHEN NEW MESSAGE IS SENT
    const scrollToBottom = useCallback(() => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop =
          scrollContainerRef.current.scrollHeight;
      }
    }, []);

    // HANDLE LOAD MORE MESSAGES BUTTON
    const onLoadMore = useCallback(() => {
      if (hasNextPage && !isFetchingNextPage) {
        const scrollContainer = scrollContainerRef.current;
        const scrollHeightBeforeLoad = scrollContainer.scrollHeight;

        fetchNextPage().then(() => {
          requestAnimationFrame(() => {
            const newScrollHeight = scrollContainer.scrollHeight;
            scrollContainer.scrollTop =
              newScrollHeight - scrollHeightBeforeLoad;
          });
        });
      }
    }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

    // LOAD MORE BUTTON TEXT
    const buttonMsg = useMemo(() => {
      if (isFetchingNextPage) return tg('loading');
      if (hasNextPage) return tg('load_more');
      if (!hasNextPage) return tg('no_more_messages');
    }, [hasNextPage, isFetchingNextPage, tg]);

    // RENDER CHAT BODY
    const ChatBody = useMemo(() => {
      if (!messages.length) {
        return <NoMessages>{tg('no_messages_yet')}</NoMessages>;
      }

      return (
        <div
          ref={scrollContainerRef}
          className='flex-1 overflow-y-auto space-y-3 p-1 mdl:p-5'
        >
          <div
            onClick={onLoadMore}
            className={cn(
              'w-fit mx-auto capitalize text-xs',
              hasNextPage &&
                'cursor-pointer transition hover:underline',
              !hasNextPage && 'text-grayDark'
            )}
          >
            {buttonMsg}
          </div>
          {messages?.map((m, i) => {
            return (
              <Message
                key={m?.id || i}
                data-host={m?.senderId === userId}
                name={m?.senderName || ''}
                avatar={m?.senderImage || ''}
                date={m?.created}
                status={m?.status || ''}
                onRetry={() => {
                  const formData = new FormData();
                  formData.set('message', m.content);
                  onSend(formData);
                }}
                showAvatar={messages[i - 1]?.senderId !== m?.senderId}
              >
                {m?.content}
              </Message>
            );
          })}
        </div>
      );
    }, [
      messages,
      userId,
      tg,
      onSend,
      onLoadMore,
      buttonMsg,
      hasNextPage,
    ]);

    // HANDLE STATE UPDATE ON LOAD MORE MESSAGES OR SEND MESSAGE
    useEffect(() => {
      setMessages(() => {
        const mergedMessages = initialMessages.flatMap(
          (page) => page.messages?.items || []
        );

        return mergedMessages.reverse();
      });
    }, [initialMessages]);

    // HANDLE SCROLL TO BOTTOM
    useLayoutEffect(() => {
      scrollToBottom();
    }, [scrollToBottom]);

    return (
      <div className='h-full flex flex-col'>
        {ChatBody}

        <ChatActions
          onSend={(formData) => {
            onSend(formData);
            scrollToBottom();
          }}
        />
      </div>
    );
  }
);

const NoMessages = memo(({ children }) => {
  return (
    <div className='flex-1 h-full p-1 mdl:p-5 flex items-center justify-center'>
      <p className='text-wrap text-center text-grayDark'>
        {children}
      </p>
    </div>
  );
});

const Message = forwardRef(
  (
    {
      children,
      name = '',
      avatar = '',
      date = '',
      status = '',
      showAvatar = false,
      onRetry = () => {},
      ...props
    },
    ref
  ) => {
    const tg = useTranslations('general_obj');

    const { time } = useChatDate(date);

    const statusText =
      {
        pending: tg('sending'),
        failed: tg('fail_to_send_try_again'),
      }[status] || time;

    return (
      <div
        ref={ref}
        {...props}
        className='flex flex-row-reverse gap-3 group data-[host=true]:flex-row max-w-full'
      >
        <div>
          <Avatar
            className={cn(
              'size-11 shrink-0 invisible',
              showAvatar && 'visible'
            )}
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
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                e.stopPropagation();
                const formData = new FormData();
                formData.set(e.target.name, e.target.value);
                onSend(formData);
                if (!textareaRef.current) return;
                textareaRef.current.value = '';
              }
            }}
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
NoMessages.displayName = 'NoMessages';
Message.displayName = 'Message';
ChatActions.displayName = 'ChatActions';
