import { cn } from '@/lib/utils';

export const ListParagraph = ({ children, ...props }) => {
  return (
    <p
      {...props}
      className={cn(
        'text-sm mdl:text-xl inline text-black',
        props?.className
      )}
    >
      {children}
    </p>
  );
};
