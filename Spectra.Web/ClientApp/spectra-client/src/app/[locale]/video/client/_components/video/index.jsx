import { VideoCall } from './videoCall';

export const Video = () => {
  return (
    <div className='lgl:col-span-9 lgl:p-7 rounded-md bg-[#F5F6FB]/80 lgl:flex lgl:flex-col lgl:h-screen only:lgl:col-span-12'>
      <VideoCall />
    </div>
  );
};
