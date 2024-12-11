'use client';

import BackIcon from '@/assets/icons/back-black';
import { cn } from '@/lib/utils';
import { useRouter } from '@/i18n/routing';

export const BackButton = ({ href = '', ...props }) => {
  const router = useRouter();

  return (
    <div
      {...props}
      role='button'
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        if (props?.onClick) {
          props.onClick();
        } else {
          if (href) {
            router.push(href);
          } else {
            router.back();
          }
        }
      }}
      className={cn('w-fit', props?.className)}
    >
      <BackIcon className='ltr:rotate-180 size-8 mdl:size-10 inline' />
    </div>
  );
};
