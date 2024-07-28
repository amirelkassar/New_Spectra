import { cn } from '@/lib/utils';
import { Avatar as MantineAvatar } from '@mantine/core';

const Avatar = ({ src = '', name = '', className = '' }) => {
  return (
    <MantineAvatar
      variant='filled'
      src={src}
      className={cn('size-12', className)}
      color='cyan'
      radius='xl'
    >
      {name?.slice(0, 2)?.toUpperCase()}
    </MantineAvatar>
  );
};

export default Avatar;
