import { cn } from '@/lib/utils';

export const SummaryCard = ({
  label = '',
  value = '',
  icon = <></>,
  ...props
}) => {
  return (
    <div
      {...props}
      className={cn(
        'p-5 rounded-xl bg-greenMain text-white min-w-40 mdl:min-w-48 flex flex-col gap-3 justify-between h-32 mdl:h-40',
        props?.className
      )}
    >
      <div className='flex justify-between items-center gap-3'>
        <div className='shrink-0'>{icon}</div>
        <h2 className='text-2xl mdl:text-4xl font-bold'>{value}</h2>
      </div>
      <p className='text-base mdl:text-2xl'>{label}</p>
    </div>
  );
};
