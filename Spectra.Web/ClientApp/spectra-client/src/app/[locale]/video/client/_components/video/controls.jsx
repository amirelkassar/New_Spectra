import ChatsIcon from '@/assets/icons/chats';
import LeaveCallIcon from '@/assets/icons/leaveCall';
import MicrophoneIcon from '@/assets/icons/microphone';
import VideoIcon from '@/assets/icons/video';
import { cn } from '@/lib/utils';

export const Controls = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className={cn(
        'flex gap-4 z-10 absolute bottom-5 start-1/2 ltr:-translate-x-1/2 translate-x-1/2',
        props?.className
      )}
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
        'bg-red rounded-lg text-white flex items-center gap-3 p-3 lgl:p-4 lgl:px-7 text-sm lgl:text-xl font-bold transition hover:bg-[#D93636]',
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
        'bg-grayLight rounded-lg p-3 lgl:p-4 transition hover:bg-grayMedium',
        props?.className
      )}
      type='button'
    >
      <MicrophoneIcon className='size-6 lgl:size-8' />
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
        'bg-grayLight rounded-lg p-3 lgl:p-4 transition hover:bg-grayMedium',
        props?.className
      )}
      type='button'
    >
      <VideoIcon className='size-6 lgl:size-8' />
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
        'bg-grayLight rounded-lg p-3 lgl:p-4 transition hover:bg-grayMedium',
        props?.className
      )}
      type='button'
    >
      <ChatsIcon
        fill='#010036'
        className='size-6 lgl:size-8'
      />
      {children}
    </button>
  );
};

Controls.ChatBtn = ChatBtn;
