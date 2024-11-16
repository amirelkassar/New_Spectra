'use client';

import Image from 'next/image';

import { cn } from '@/lib/utils';
import { Controls } from './controls';
import { useClientVideoStore } from '../../_hooks';

export const VideoCall = ({ ...props }) => {
  const { toggleFullScreen, toggleView, view } =
    useClientVideoStore();

  return (
    <div
      {...props}
      className={cn(
        'relative overflow-hidden lgl:rounded-xl lgl:m-5 group',
        props?.className
      )}
    >
      <Image
        priority
        src='/demo-videocall-guest.webp'
        alt='host'
        width={996}
        height={664}
        className='w-full h-full object-cover object-center max-w-full max-h-full'
      />

      <TagName className='absolute top-4 start-4'>
        الاستشاري احمد محمد
      </TagName>

      <CallDuration className='absolute top-4 end-4'>
        00:30
      </CallDuration>

      <div className='absolute bottom-3 start-1/2 translate-x-1/2 ltr:-translate-x-1/2 flex flex-col gap-2 w-full px-5'>
        <Host className='mdl:max-w-52 max-w-36 mb-5 mdl:mb-0' />

        <Controls className='mx-auto'>
          <Controls.ChatBtn
            aria-checked={view === 'chat'}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleView('chat');
            }}
          />
          <Controls.VideoBtn />
          <Controls.MicBtn />
          <Controls.LeaveBtn>
            <span className='hidden lgl:block'>مغادرة</span>
          </Controls.LeaveBtn>
        </Controls>

        <HintText>
          اسحب لأعلى لعرض التشخيص والترشيحات المرسلة من
          الطبيب
        </HintText>

        <MobileFullScreenToggle
          onClick={toggleFullScreen}
          className='mx-auto'
        />
      </div>
    </div>
  );
};

const Host = ({ ...props }) => {
  return (
    <div
      {...props}
      className={cn(
        'border-4 border-white rounded-xl overflow-hidden',
        props?.className
      )}
    >
      <Image
        priority
        src='/demo-videocall-host.webp'
        alt='host'
        width={996}
        height={664}
        className='w-full h-auto object-cover object-center'
      />
    </div>
  );
};

const CallDuration = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className={cn(
        'bg-white/35 py-1 px-5 rounded-full font-bold text-sm mdl:text-xl border border-white text-[#2B2B2B]',
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

const TagName = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className={cn(
        'rounded-lg bg-white/35 text-sm mdl:text-xl font-bold py-1 px-4 w-fit',
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

const MobileFullScreenToggle = ({ ...props }) => {
  return (
    <button
      {...props}
      className={cn(
        'transition-all duration-300 lgl:hidden group-data-[fullscreen=true]:rotate-180',
        props?.className
      )}
    >
      <svg
        width={34}
        height={34}
        viewBox='0 0 34 34'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle
          cx='16.6457'
          cy='16.6457'
          r='16.1457'
          stroke='white'
        />
        <circle
          cx='16.6441'
          cy='16.6441'
          r='13.6402'
          fill='white'
        />
        <path
          d='M11.9095 13.7807C11.8551 13.7168 11.7912 13.6668 11.7214 13.6336C11.6515 13.6005 11.5771 13.5847 11.5024 13.5874C11.4277 13.59 11.3541 13.6109 11.2859 13.649C11.2176 13.687 11.1561 13.7414 11.1047 13.809C11.0534 13.8767 11.0132 13.9563 10.9866 14.0432C10.96 14.1302 10.9473 14.2228 10.9494 14.3159C10.9516 14.4089 10.9684 14.5005 10.9989 14.5854C11.0295 14.6704 11.0732 14.747 11.1275 14.8109L16.2496 20.8337C16.3553 20.958 16.4952 21.0273 16.6406 21.0273C16.786 21.0273 16.9259 20.958 17.0316 20.8337L22.1543 14.8109C22.2098 14.7474 22.2546 14.6708 22.2862 14.5856C22.3177 14.5003 22.3354 14.4081 22.338 14.3143C22.3407 14.2205 22.3284 14.1269 22.3018 14.0391C22.2752 13.9513 22.2348 13.8709 22.1831 13.8027C22.1313 13.7344 22.0692 13.6797 22.0002 13.6416C21.9313 13.6035 21.857 13.5828 21.7817 13.5807C21.7063 13.5787 21.6313 13.5953 21.5612 13.6297C21.491 13.664 21.427 13.7153 21.3729 13.7807L16.6406 19.3443L11.9095 13.7807Z'
          fill='#10B0C1'
        />
      </svg>
    </button>
  );
};

const HintText = ({ children, ...props }) => {
  return (
    <span
      {...props}
      className={cn(
        'text-white text-center lgl:hidden px-5 block w-full group-data-[fullscreen=false]:hidden',
        props?.className
      )}
    >
      {children}
    </span>
  );
};
