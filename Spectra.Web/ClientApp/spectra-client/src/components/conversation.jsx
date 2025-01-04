'use client';

import { cn } from '@/lib/utils';
import Avatar from './avatar';
import { createContext, useContext } from 'react';
import AttachIcon from '@/assets/icons/attach';
import MicIcon from '@/assets/icons/mic';
import { Textarea } from './inputs/textarea';
import SendIcon from '@/assets/icons/send';

const ConversationContext = createContext(null);

export const Conversation = ({
  host = {},
  guest = {},
  children,
  ...props
}) => {
  return (
    <ConversationContext.Provider value={{ host, guest }}>
      <div
        {...props}
        className={cn(
          'flex flex-col gap-5 h-full',
          props?.className
        )}
      >
        {children}
      </div>
    </ConversationContext.Provider>
  );
};

const useConversation = () => {
  return useContext(ConversationContext);
};

const Header = ({ ...props }) => {
  const { guest } = useConversation();

  return (
    <div
      {...props}
      className={cn(
        'border-b border-b-grayMedium flex items-center pb-4 gap-3',
        props?.className
      )}
    >
      <Avatar
        className='size-11 rounded-full'
        name={guest?.name}
        src={guest?.avatar}
      />
      <div>
        <h3 className='font-bold'>{guest?.name}</h3>
        <p>{guest?.title}</p>
      </div>
    </div>
  );
};

Conversation.Header = Header;

const Body = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className={cn(
        'overflow-y-auto overflow-x-hidden space-y-5 flex-1 pe-5',
        props?.className
      )}
    >
      {children}
    </div>
  );
};

Conversation.Body = Body;

const Message = ({
  isHost = false,
  children,
  ...props
}) => {
  const { host, guest } = useConversation();
  return (
    <div
      {...props}
      className={cn(
        'flex items-center gap-3',
        !isHost && 'flex-row-reverse',
        props?.className
      )}
    >
      <Avatar
        className='size-11'
        src={isHost ? host?.avatar : guest?.avatar}
        name={isHost ? host?.name : guest?.name}
      />
      <p
        className={cn(
          'bg-grayLight rounded-lg text-black text-xs lg:text-base px-3 py-2',
          isHost && 'bg-greenMain text-white'
        )}
      >
        {children}
      </p>
    </div>
  );
};

Conversation.Message = Message;

const Footer = ({ children, ...props }) => {
  return (
    <form
      {...props}
      className={cn(
        'flex items-center gap-1',
        props?.className
      )}
    >
      {children}
    </form>
  );
};

Conversation.Footer = Footer;

const AttachButton = ({ ...props }) => {
  return (
    <button
      {...props}
      className={cn('p-2 shrink-0', props?.className)}
    >
      <AttachIcon className='w-3 h-5' />
    </button>
  );
};

Conversation.AttachButton = AttachButton;

const InputField = ({ withMic = false, ...props }) => {
  return (
    <div className='relative flex-grow'>
      {withMic && (
        <button className='absolute top-1/2 end-5 -translate-y-1/2 z-50'>
          <MicIcon className='h-5 w-3' />
        </button>
      )}

      <Textarea
        {...props}
        size={props?.size || 'xs'}
        radius={props?.radius || 'md'}
        classNames={{
          input: cn('pe-12', props?.classNames?.input),
          ...props?.classNames,
        }}
        placeholder={props?.placeholder || 'اكتب رسالة ...'}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            e.stopPropagation();
          }
        }}
      />
    </div>
  );
};

Conversation.InputField = InputField;

const SendButton = ({ ...props }) => {
  return (
    <button
      {...props}
      className={cn('p-2 shrink-0', props?.className)}
      type='submit'
    >
      <SendIcon />
    </button>
  );
};

Conversation.SendButton = SendButton;
