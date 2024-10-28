import Avatar from '@/components/avatar';
import { cn } from '@/lib/utils';

export const Chat = ({ id, name, profession, avatar, className, ...props }) => {
  return (
    <div
      role='button'
      className={cn(
        'py-3 mt-2 cursor-pointer rounded-lg border-b border-b-grayLight last:border-b-transparent px-2 hover:bg-blueLight transition flex items-center gap-4',
        className
      )}
      {...props}
    >
      <Avatar className='lg:size-14 size-10' name={name} src={avatar} />
      <div className='text-black'>
        <h3 className='font-bold'>{name}</h3>
        <p>{profession}</p>
      </div>
    </div>
  );
};
