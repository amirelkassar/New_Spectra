import { Link } from '@/i18n/routing';

import { cn } from '@/lib/utils';

export const AsideCard = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className={cn(
        'w-full lg:w-56 shrink-0 overflow-auto bg-white lg:rounded-xl py-3 lg:pt-8 lg:ps-6 px-2 pe-6',
        props?.className
      )}
    >
      {children}
    </div>
  );
};

const Ul = ({ children, ...props }) => {
  return (
    <ul
      {...props}
      className={cn(
        'flex lg:flex-col items-start gap-5 lg:items-stretch',
        props?.className
      )}
    >
      {children}
    </ul>
  );
};

AsideCard.Ul = Ul;

const List = ({ children, ...props }) => {
  return (
    <li>
      <Link
        {...props}
        className={cn(
          'transition text-nowrap w-full py-2 flex items-center justify-start px-3 text-xs mdl:text-base bg-transparent font-bold rounded-xl gap-3 hover:bg-greenLight aria-pressed:bg-greenMain aria-pressed:text-white aria-pressed:hover:bg-greenMain',
          props?.className
        )}
      >
        {children}
      </Link>
    </li>
  );
};

AsideCard.List = List;
