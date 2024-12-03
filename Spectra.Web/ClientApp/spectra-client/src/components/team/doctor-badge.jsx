import StarGoldIcon from '@/assets/icons/starGold';
import Avatar from '@/components/avatar';
import { cn } from '@/lib/utils';

export const DoctorBadge = ({
  className = '',
  avatar = '',
  name = '',
  profession = '',
  rate = '',
}) => {
  return (
    <div
      className={cn(
        'flex items-center justify-center flex-col lg:flex-row gap-4 py-4 px-7 mdl:px-4 border-2 border-blueLight rounded-xl shrink-0 bg-white',
        className
      )}
    >
      <Avatar
        src={avatar}
        name={name}
        className='size-16 rounded-full lg:rounded lg:size-20 min-w-max inline-flex shrink-0'
        radius='lg'
      />
      <div className='text-black text-center lg:text-start !text-xs lg:!text-base'>
        <h5 className='font-bold'>{name}</h5>
        <p>{profession}</p>
        {rate && (
          <p className='text-grayDark rounded-full border border-grayDark font-bold flex items-center justify-center gap-x-1 px-2 w-full mt-2'>
            {rate}
            <StarGoldIcon className='size-3' />
          </p>
        )}
      </div>
    </div>
  );
};
