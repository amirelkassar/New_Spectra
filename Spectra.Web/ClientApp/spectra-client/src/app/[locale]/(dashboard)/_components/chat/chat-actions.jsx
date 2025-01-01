'use client';

import { memo, useRef } from 'react';
import { useTranslations } from 'next-intl';

import { Textarea } from '@/components/inputs/textarea';
import SendIcon from '@/assets/icons/send';

export const ChatActions = memo(
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

ChatActions.displayName = 'ChatActions';
