'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Draggable from 'react-draggable';

import { cn } from '@/lib/utils';
import { Controls } from './controls';
import {
  useClientVideoStore,
  useToggleFullScreenByDrag,
} from '../../_hooks';
import Avatar from '@/components/avatar';

export const VideoCall = ({ ...props }) => {
  const hostRef = useRef(null);
  const containerRef = useRef(null);

  const [participantCam, setParticipantCam] =
    useState(true);

  useToggleFullScreenByDrag(containerRef);

  const {
    toggleFullScreen,
    toggleView,
    view,
    mic,
    camera,
    toggleMic,
    toggleCamera,
  } = useClientVideoStore();

  return (
    <div
      ref={containerRef}
      data-participant-cam={participantCam}
      {...props}
      className={cn(
        'relative overflow-hidden lgl:rounded-xl lgl:m-5 group transition-all duration-500 ease-in-out lgl:shadow-video',
        props?.className
      )}
    >
      {participantCam ? (
        <Image
          priority
          src='/demo-videocall-guest.webp'
          alt='host'
          sizes='width:996px; height:664px'
          fill
          className='w-full h-full object-cover object-center max-w-full max-h-full pointer-events-none'
        />
      ) : (
        <ParticipantPlaceholder
          name='احمد محمد'
          src='/demo-videocall-guest.webp'
        />
      )}

      <button
        onClick={() => setParticipantCam((prev) => !prev)}
        className='absolute top-1/4 start-1/2 translate-x-1/2 -translate-y-1/4 z-10 bg-white p-2 rounded-md shadow-md font-bold text-sm'
      >
        toggle participant cam
      </button>

      <TagName className='absolute top-4 start-4'>
        الاستشاري احمد محمد
      </TagName>

      <CallDuration className='absolute top-4 end-4'>
        00:30
      </CallDuration>

      <div className='absolute bottom-3 start-1/2 translate-x-1/2 ltr:-translate-x-1/2 flex flex-col gap-2 justify-end w-full h-[30vh] px-5'>
        <Draggable bounds='parent' nodeRef={hostRef}>
          <Host
            data-cam={camera}
            data-mic={mic}
            ref={hostRef}
            className='mdl:w-40 mdl:h-44 w-24 h-28 shrink-0 mb-5 mdl:mb-0'
          />
        </Draggable>

        <Controls className='mx-auto'>
          <Controls.ChatBtn
            aria-checked={view === 'chat'}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleView('chat');
            }}
          />
          <Controls.VideoBtn
            aria-checked={camera}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleCamera();
            }}
          />
          <Controls.MicBtn
            aria-checked={mic}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleMic();
            }}
          />
          <Controls.LeaveBtn>
            <span className='hidden lgl:block'>مغادرة</span>
          </Controls.LeaveBtn>
        </Controls>

        <HintText>
          اسحب لأعلى او اضغط علي السهم لعرض التشخيص
          والترشيحات المرسلة من الطبيب
        </HintText>

        <MobileFullScreenToggle
          onClick={toggleFullScreen}
          className='mx-auto'
        />
      </div>
    </div>
  );
};

const Host = React.forwardRef(({ ...props }, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className={cn(
        'shadow-video bg-grayLight border border-grayDark rounded-xl overflow-hidden group flex items-center justify-center',
        props?.className
      )}
    >
      <Image
        priority
        src='/demo-videocall-host.webp'
        alt='host'
        width={996}
        height={664}
        className='w-full h-full object-cover object-center pointer-events-none hidden group-data-[cam=true]:block'
      />

      <Avatar
        className='size-12 mdl:size-16 rounded-full group-data-[cam=true]:hidden'
        src='/demo-videocall-host.webp'
        styles={{
          root: {
            boxShadow:
              '0 0 0 8px rgba(1, 0, 54, 0.03), 0 0 0 16px rgba(1, 0, 54, 0.03)',
          },
        }}
      />
    </div>
  );
});

Host.displayName = 'Host';

const ParticipantPlaceholder = ({ ...props }) => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <Avatar
        {...props}
        className={cn(
          'size-32 mdl:size-40 rounded-full',
          props?.className
        )}
        styles={{
          root: {
            boxShadow:
              '0 0 0 30px rgba(1, 0, 54, 0.03), 0 0 0 60px rgba(1, 0, 54, 0.03)',
            ...props?.style,
          },
        }}
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
        'transition-all duration-300 rounded-full lgl:hidden group-data-[fullscreen=true]:animate-bounce text-black group-data-[fullscreen=false]:rotate-180',
        props?.className
      )}
    >
      <svg
        width={34}
        height={34}
        viewBox='0 0 34 34'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='shadow-md rounded-full'
      >
        <circle
          cx='16.6473'
          cy='16.6434'
          r='16.1457'
          transform='rotate(180 16.6473 16.6434)'
          stroke='white'
        />
        <circle
          cx='16.6488'
          cy='16.6449'
          r='13.6402'
          transform='rotate(180 16.6488 16.6449)'
          fill='white'
        />
        <path
          d='M21.3835 19.5084C21.4378 19.5723 21.5017 19.6223 21.5716 19.6554C21.6414 19.6886 21.7159 19.7043 21.7906 19.7017C21.8653 19.6991 21.9389 19.6781 22.0071 19.6401C22.0753 19.6021 22.1369 19.5477 22.1882 19.48C22.2396 19.4124 22.2797 19.3328 22.3064 19.2458C22.333 19.1589 22.3456 19.0662 22.3435 18.9732C22.3414 18.8802 22.3246 18.7886 22.294 18.7036C22.2635 18.6187 22.2198 18.542 22.1655 18.4781L17.0434 12.4554C16.9377 12.331 16.7978 12.2617 16.6524 12.2617C16.5069 12.2617 16.367 12.331 16.2614 12.4554L11.1387 18.4781C11.0832 18.5416 11.0383 18.6182 11.0068 18.7035C10.9752 18.7887 10.9576 18.881 10.9549 18.9748C10.9523 19.0686 10.9646 19.1621 10.9912 19.2499C11.0178 19.3378 11.0581 19.4181 11.1099 19.4864C11.1617 19.5546 11.2238 19.6094 11.2927 19.6475C11.3616 19.6856 11.4359 19.7063 11.5113 19.7083C11.5867 19.7104 11.6616 19.6937 11.7318 19.6594C11.802 19.6251 11.866 19.5737 11.9201 19.5084L16.6524 13.9448L21.3835 19.5084Z'
          fill='currentColor'
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
        'text-white font-medium text-center lgl:hidden px-5 block w-full group-data-[fullscreen=false]:hidden group-data-[participant-cam=false]:text-black',
        props?.className
      )}
    >
      {children}
    </span>
  );
};
