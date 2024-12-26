import { cn } from '@/lib/utils';
import { Avatar as MantineAvatar } from '@mantine/core';

const Avatar = ({
  src = '',
  name = '',
  className = '',
  size = 'lg',
  radius = 'xl',
  ...props
}) => {
  return (
    <MantineAvatar
      {...props}
      variant='filled'
      src={src}
      className={cn('size-12', className)}
      classNames={{
        placeholder: 'text-black text-[9px] mdl:text-base',
      }}
      color='#E9F7FF'
      radius={radius}
      size={size}
      name={name}
    />
  );
};

export default Avatar;
