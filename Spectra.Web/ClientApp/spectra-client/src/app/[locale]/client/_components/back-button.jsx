'use client';

import BackIcon from '@/assets/icons/back-black';
import { useRouter } from '@/navigation';

export const BackButton = ({ href = '' }) => {
  const router = useRouter();
  return (
    <div
      role='button'
      onClick={() => {
        if (href) {
          router.push(href);
        } else {
          router.back();
        }
      }}
    >
      <BackIcon className='ltr:rotate-180 size-8 mdl:size-10' />
    </div>
  );
};
