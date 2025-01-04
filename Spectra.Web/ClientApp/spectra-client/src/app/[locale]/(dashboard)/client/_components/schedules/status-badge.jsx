import { cn } from '@/lib/utils';

export const StatusBadge = ({
  status = '',
  children,
  ...props
}) => {
  if (!status) return null;
  return (
    <div
      {...props}
      role='button'
      className={cn(
        'rounded-xl text-sm mdl:text-base py-2 px-5 min-w-24 mdl:min-w-28 text-center cursor-default',
        {
          'bg-greenMain text-white mdl:text-xl font-bold py-3 mdl:px-10 mdl:-ms-5 cursor-pointer transition hover:bg-greenMain/90':
            status === 'available',
          'bg-blueLight': status === 'done',
          'bg-grayLight': status === 'pending',
        },
        props.className
      )}
    >
      {children}
    </div>
  );
};
