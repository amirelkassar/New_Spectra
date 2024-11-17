'use client';

import { cn } from '@/lib/utils';
import { DynamicContent } from './_components/dynamic-content';
import { useClientVideoStore } from './_hooks';
import {
  VideoCall,
  VideoNavbar,
} from './_components/video';

const VideoClient = () => {
  const view = useClientVideoStore((s) => s.view);
  const isFullScreen = useClientVideoStore(
    (s) => s.isFullScreen
  );

  return (
    <div className='h-screen overflow-hidden relative lgl:grid lgl:grid-cols-12 lgl:grid-rows-[1fr,auto,auto] lgl:bg-[#F5F6FB]'>
      <VideoCall
        data-fullscreen={isFullScreen}
        className={cn(
          'h-[35%] lgl:h-full transition-all duration-500 ease-in-out lgl:col-span-9',
          !view &&
            'lgl:col-span-12 h-[calc(100vh-120px)] mdl:h-[calc(100vh-168px)]',
          isFullScreen && '!h-screen'
        )}
      />

      <VideoNavbar
        className={cn(
          'lgl:col-span-9 h-fit',
          !view && 'lgl:col-span-12'
        )}
      />

      <DynamicContent
        className={cn('lgl:-order-1 lgl:col-span-3')}
      />
    </div>
  );
};

export default VideoClient;
