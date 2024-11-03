import { VideoBio } from './video-bio';
import { VideoNavbar } from './video-navbar';
import { VideoCall } from './videoCall';

export const Video = () => {
  return (
    <div className='lgl:col-span-9 lgl:p-7 rounded-md bg-[#F5F6FB]/80 lgl:flex lgl:flex-col lgl:h-[calc(100vh-80px)]'>
      <VideoBio />

      <VideoCall />

      <VideoNavbar />
    </div>
  );
};
