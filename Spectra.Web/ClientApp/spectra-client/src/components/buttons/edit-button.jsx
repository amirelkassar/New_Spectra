import EditIcon from '@/assets/icons/edit';
import { cn } from '@/lib/utils';

export const EditButton = ({ children, ...props }) => {
  return (
    <button
      {...props}
      type='button'
      className={cn(
        '!inline-flex gap-3 px-4 min-w-28 justify-center items-center bg-blueLight rounded-lg py-2 text-black font-bold mdl:text-base text-xs',
        props.className
      )}
    >
      <EditIcon />
      {children}
    </button>
  );
};
