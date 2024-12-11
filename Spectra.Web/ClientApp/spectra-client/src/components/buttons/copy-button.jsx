import CopyIcon from '@/assets/icons/copy';
import { cn } from '@/lib/utils';

export const CopyButton = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className={cn(
        'text-sm mdl:text-xl font-bold text-greenMain rounded-xl bg-blueLight px-5 py-2 flex items-center gap-4 transition-shadow hover:shadow-md',
        props?.className
      )}
    >
      <CopyIcon className='size-4 mdl:size-6 shrink-0' />
      {children}
    </button>
  );
};
