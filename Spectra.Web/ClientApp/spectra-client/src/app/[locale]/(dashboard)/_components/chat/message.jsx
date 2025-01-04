import { forwardRef, useMemo } from 'react';
import { useTranslations } from 'next-intl';

import { cn } from '@/lib/utils';
import { useChatDate } from '@/hooks/use-chat-date';
import Avatar from '@/components/avatar';
import RetryIcon from '@/assets/icons/retry';

export const Message = forwardRef(
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

    const statusText = useMemo(
      () =>
        ({
          pending: tg('sending'),
          failed: tg('fail_to_send_try_again'),
        }[status] || time),
      [status, time, tg]
    );

    return (
      <div
        ref={ref}
        {...props}
        className={cn(
          'flex flex-row-reverse gap-3 group data-[host=true]:flex-row max-w-full p-4 pb-0',
          props?.className
        )}
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
            onClick={() => {
              if (status !== 'failed') return;
              onRetry && onRetry();
            }}
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

Message.displayName = 'Message';
