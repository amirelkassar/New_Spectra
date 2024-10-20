import { cn } from '@/lib/utils';

export const Heading = ({
  label = '',
  icon = null,
  className,
}) => {
  if (!label) return null;
  return (
    <h1
      className={cn(
        'text-black text-base lg:text-2xl font-regular lg:font-bold flex items-center gap-x-2 pb-3 lg:pb-5',
        className
      )}
    >
      {label}
      {icon}
    </h1>
  );
};
