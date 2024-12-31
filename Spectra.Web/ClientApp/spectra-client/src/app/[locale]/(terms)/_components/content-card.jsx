import { cn } from '@/lib/utils';

export const ContentCard = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className={cn(
        'rounded-xl border border-[#E3E3E3] bg-white p-2 mdl:p-5',
        props?.className
      )}
    >
      {children}
    </div>
  );
};
