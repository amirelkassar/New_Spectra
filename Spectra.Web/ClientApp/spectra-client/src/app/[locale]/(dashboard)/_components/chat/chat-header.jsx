'use client';

import { useImagePath } from '@/hooks/use-image-path';
import Avatar from '@/components/avatar';

export const ChatHeader = ({ roomName = '', chatImage = '' }) => {
  const path = useImagePath(chatImage);

  return (
    <div className='border-b border-b-grayMedium px-1 flex items-center pb-3 gap-4'>
      <Avatar className='size-11' name={roomName} src={path} />
      <h3 className='font-bold capitalize'>{roomName}</h3>
    </div>
  );
};
