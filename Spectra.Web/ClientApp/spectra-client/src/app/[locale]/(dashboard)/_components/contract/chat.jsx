'use client';

import { memo } from 'react';
import { useTranslations } from 'next-intl';

import { cn } from '@/lib/utils';
import { Textarea } from '@/components/inputs/textarea';
import { useDelay } from '@/hooks/use-delay';
import { useContractStore } from '@/dashboard/_hooks/use-contract-store';

import Avatar from '@/components/avatar';
import MicIcon from '@/assets/icons/mic';
import SendIcon from '@/assets/icons/send';
import AttachIcon from '@/assets/icons/attach';

export const Chat = () => {
  const isOpen = useContractStore((s) => s.isChatOpen);

  const isOpenDelayed = useDelay(isOpen, 500);

  return (
    <div
      className={cn(
        'rounded-xl bg-white w-0 transition-[width,padding,margin] duration-500 ease-in-out shrink-0 text-nowrap overflow-hidden flex flex-col h-[580px]',
        isOpen && 'me-3 w-80'
      )}
    >
      {isOpenDelayed && (
        <>
          <ChatBody messages={[]} />

          <ChatActions />
        </>
      )}
    </div>
  );
};

const ChatBody = memo(({ messages = [] }) => {
  const hasMessages = !!messages.length;

  return (
    <div className='flex-1 overflow-y-auto space-y-3 p-1 mdl:p-5'>
      {hasMessages ? (
        messages.map((message, index) => (
          <Message
            key={message?.id || index}
            data-host={message?.host || false}
            name={message?.name || ''}
            avatar={message?.avatar || ''}
          >
            {message?.text || ''}
          </Message>
        ))
      ) : (
        <NoMessages />
      )}
    </div>
  );
});

ChatBody.displayName = 'ChatBody';

const NoMessages = () => {
  const tg = useTranslations('general_obj');

  return (
    <div className='h-full flex items-center justify-center'>
      <p className='text-wrap text-center text-grayDark'>
        {tg('no_messages_yet')}
      </p>
    </div>
  );
};

const Message = ({ children, name = '', avatar = '', ...props }) => {
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
};

const ChatActions = memo(() => {
  const tg = useTranslations('general_obj');

  return (
    <div className='flex items-center gap-5 p-1 mdl:p-5'>
      <button>
        <AttachIcon className='w-3 h-5' />
      </button>

      <div className='relative flex-1'>
        <button className='absolute top-1/2 end-5 -translate-y-1/2 z-50'>
          <MicIcon className='h-5 w-3' />
        </button>

        <Textarea
          size='xs'
          radius='md'
          classNames={{
            input: 'pe-12',
          }}
          placeholder={tg('write_message')}
        />
      </div>

      <button>
        <SendIcon />
      </button>
    </div>
  );
});

ChatActions.displayName = 'ChatActions';
