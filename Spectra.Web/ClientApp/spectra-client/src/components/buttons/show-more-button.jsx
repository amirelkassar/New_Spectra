import { Link } from '@/i18n/routing';

import { cn } from '@/lib/utils';

import ArrowLeft from '@/assets/icons/arrow-left';

export const ShowMoreButton = ({ children, ...props }) => {
  return (
    <Link
      {...props}
      href={props?.href || '#'}
      className={cn(
        'flex items-center disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none justify-center gap-3 transition-all px-5 mdl:px-7 border border-grayDark hover:border-greenMain ring-1 ring-transparent hover:ring-greenMain rounded-lg mdl:rounded-xl py-2 mdl:py-3 font-bold text-sm mdl:text-xl w-full max-w-48 mdl:max-w-72',
        props?.className
      )}
    >
      {children}
      <ArrowLeft className='ltr:rotate-180 w-4 mdl:w-5' />
    </Link>
  );
};
