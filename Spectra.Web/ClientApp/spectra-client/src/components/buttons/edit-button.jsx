import EditIcon from '@/assets/icons/edit';
import { cn } from '@/lib/utils';

export const EditButton = ({ children, ...props }) => {
  return (
    <button
      {...props}
      type='button'
      className={cn(
        'inline-flex gap-3 px-4 mdl:px-10 py-2 mdl:py-3 justify-center items-center bg-blueLight transition rounded-lg text-black font-bold mdl:text-base text-xs',
        props.className
      )}
    >
      <EditIcon className='mdl:size-5 size-4' />
      {children}
    </button>
  );
};
