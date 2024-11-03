'use client';

import Image from 'next/image';
import { useRouter } from '@/navigation';

import { cn } from '@/lib/utils';
import { Controls } from './controls';

export const VideoCall = () => {
  const router = useRouter();
  return (
    <div className='relative aspect-video overflow-hidden lgl:rounded-xl'>
      <Image
        src='/demo-videocall-guest.webp'
        alt='guest'
        fill
        sizes='width: 996px; height: 664px;'
        className='w-full h-full object-cover object-center'
      />

      <Host className='lgl:max-w-52 max-w-36' />

      <CallDuration>00:30</CallDuration>

      <Controls>
        <Controls.ChatBtn
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            router.replace('?view=chat');
          }}
        />
        <Controls.VideoBtn />
        <Controls.MicBtn />
        <Controls.LeaveBtn>
          <span className='hidden lgl:block'>مغادرة</span>
        </Controls.LeaveBtn>
      </Controls>
    </div>
  );
};

const Host = ({ ...props }) => {
  return (
    <div
      {...props}
      className={cn(
        'relative aspect-video border-4 border-white rounded-xl overflow-hidden z-10 top-14 lgl:top-5 start-2 lgl:start-5',
        props?.className
      )}
    >
      <Image
        src='/demo-videocall-host.webp'
        alt='host'
        fill
        sizes='width: 996px; height: 664px;'
        className='w-full h-full object-cover object-center'
      />
    </div>
  );
};

const CallDuration = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className={cn(
        'lgl:w-24 w-20 lgl:h-10 h-8 bg-white/35 rounded-full p-2 flex items-center justify-center font-medium text-sm border border-white absolute end-2 lgl:end-5 bottom-5 lgl:bottom-auto lgl:top-5 text-[#2B2B2B]',
        props?.className
      )}
      style={{
        backdropFilter: 'blur(11px)',
        ...props?.style,
      }}
    >
      {children}
    </div>
  );
};
