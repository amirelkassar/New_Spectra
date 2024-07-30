import { cn } from '@/lib/utils';
import { Avatar as MantineAvatar } from '@mantine/core';

const Avatar = ({
  src = '',
  name = '',
  className = '',
  size = 'md',
  radius = 'xl',
  ...props
}) => {
  return (
    <MantineAvatar
      {...props}
      variant='filled'
      src={src}
      className={cn('size-12', className)}
      color='cyan'
      radius={radius}
      size={size}
      name={name}
    />
  );
};

export default Avatar;
