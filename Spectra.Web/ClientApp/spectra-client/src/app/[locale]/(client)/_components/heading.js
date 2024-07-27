import { cn } from '@/lib/utils';

export const Heading = ({ label, icon = null, className }) => {
  return (
    <h1
      className={cn(
        'text-black text-base lg:text-medium font-Regular lg:font-bold flex items-center gap-x-2 pb-3 lg:pb-5',
        className
      )}
    >
      {label}
      {icon}
    </h1>
  );
};
