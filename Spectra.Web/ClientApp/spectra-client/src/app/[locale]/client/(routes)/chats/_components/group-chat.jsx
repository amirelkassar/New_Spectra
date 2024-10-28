import { AvatarGroup } from '@mantine/core';
import Avatar from '@/components/avatar';
import { cn } from '@/lib/utils';

export const GroupChat = ({ id, name, members, className, ...props }) => {
  return (
    <div
      role='button'
      className={cn(
        'py-3 mt-2 cursor-pointer rounded-lg border-b border-b-grayLight last:border-b-transparent px-2 hover:bg-blueLight transition flex items-center gap-4',
        className
      )}
      {...props}
    >
      <AvatarGroup spacing='lg'>
        {members.map((member) => (
          <Avatar
            key={member.id}
            className='lg:size-10 size-8'
            size='sm'
            name={member.name}
            src={member.avatar}
          />
        ))}
      </AvatarGroup>
      <div className='text-black'>
        <h3 className='font-bold'>{name}</h3>
      </div>
    </div>
  );
};
