'use client';

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
    <div className='h-screen overflow-hidden relative bg-grayBlueLight lgl:grid lgl:grid-cols-12 lgl:grid-rows-[1fr,auto]'>
      <VideoCall
        data-fullscreen={isFullScreen}
        data-view={!!view}
        className='h-full data-[fullscreen=false]:h-[calc(100%-120px)] data-[fullscreen=false]:mdl:h-[calc(100%-168px)] data-[view=true]:h-[calc(40%)] data-[view=true]:mdl:h-[calc(40%)] lgl:!h-auto lgl:col-span-12 data-[view=true]:col-span-9'
      />

      <VideoNavbar className='lgl:col-span-9 last:lgl:col-span-12' />

      <DynamicContent className='lgl:col-span-3 lgl:-order-1 lgl:row-span-2 h-[calc(60%-120px)] mdl:h-[calc(60%-168px)] lgl:h-auto' />
    </div>
  );
};

export default VideoClient;
