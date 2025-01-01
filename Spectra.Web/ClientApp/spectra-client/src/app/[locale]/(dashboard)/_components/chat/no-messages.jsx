import { memo } from 'react';
import { useTranslations } from 'next-intl';

export const NoMessages = memo(() => {
  const tg = useTranslations('general_obj');

  return (
    <div className='flex-1 h-full p-1 mdl:p-5 flex items-center justify-center'>
      <p className='text-wrap text-center text-grayDark'>
        {tg('no_messages_yet')}
      </p>
    </div>
  );
});

NoMessages.displayName = 'NoMessages';
