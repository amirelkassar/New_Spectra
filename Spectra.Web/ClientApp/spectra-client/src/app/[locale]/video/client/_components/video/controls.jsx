import ChatsIcon from '@/assets/icons/chats';
import LeaveCallIcon from '@/assets/icons/leaveCall';
import MicOff from '@/assets/icons/mic-off';
import MicrophoneIcon from '@/assets/icons/microphone';
import VideoIcon from '@/assets/icons/video';
import VideoOff from '@/assets/icons/video-off';
import { cn } from '@/lib/utils';

export const Controls = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className={cn('flex gap-4', props?.className)}
    >
      {children}
    </div>
  );
};

const LeaveBtn = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className={cn(
        'bg-red shadow-md rounded-lg text-white flex items-center gap-3 p-3 lgl:p-4 lgl:px-7 text-sm lgl:text-xl font-bold transition hover:bg-[#D93636]',
        props?.className
      )}
      type='button'
    >
      {children}
      <LeaveCallIcon className={'lgl:size-8 size-6'} />
    </button>
  );
};

Controls.LeaveBtn = LeaveBtn;

const MicBtn = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className={cn(
        'bg-grayLight shadow-md rounded-lg p-3 lgl:p-4 transition hover:bg-grayMedium aria-checked:bg-black aria-checked:text-white group',
        props?.className
      )}
      type='button'
    >
      <MicrophoneIcon className='size-6 lgl:size-8 hidden group-aria-checked:block' />
      <MicOff className='size-6 lgl:size-8 group-aria-checked:hidden' />
      {children}
    </button>
  );
};

Controls.MicBtn = MicBtn;

const VideoBtn = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className={cn(
        'bg-grayLight shadow-md rounded-lg p-3 lgl:p-4 transition hover:bg-grayMedium aria-checked:bg-black aria-checked:text-white group',
        props?.className
      )}
      type='button'
    >
      <VideoIcon className='size-6 lgl:size-8 hidden group-aria-checked:block' />
      <VideoOff className='size-6 lgl:size-8 group-aria-checked:hidden' />
      {children}
    </button>
  );
};

Controls.VideoBtn = VideoBtn;

const ChatBtn = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className={cn(
        'bg-grayLight shadow-md rounded-lg p-3 lgl:p-4 transition hover:bg-grayMedium aria-checked:bg-black group',
        props?.className
      )}
      type='button'
    >
      <ChatsIcon className='size-6 lgl:size-8 group-aria-checked:text-white' />
      {children}
    </button>
  );
};

Controls.ChatBtn = ChatBtn;
