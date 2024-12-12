import { cn } from '@/lib/utils';

export const ListCheckMark = ({ children, ...props }) => {
  return (
    <li
      {...props}
      className={cn(
        'text-xs py-2 mdl:py-4 mdl:text-base font-bold relative ps-6 mdl:ps-8 before:absolute before:size-4 mdl:before:size-5 before:bg-greenMain before:start-0 before:top-1/2 before:-translate-y-1/2 before:text-white before:flex before:items-center before:justify-center before:!content-["✔"]',
        props?.className
      )}
    >
      {children}
    </li>
  );
};
