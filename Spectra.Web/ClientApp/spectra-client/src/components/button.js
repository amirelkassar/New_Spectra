import { cn } from '@/lib/utils';
import React from 'react';

const Button = ({
  className = '',
  variant = 'primary',
  children,
  ...rest
}) => {
  const baseClasses =
    'flex items-center disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none justify-center gap-5 transition-all px-7';

  let variantClasses = '';

  switch (variant) {
    case 'primary':
      variantClasses =
        'border border-grayDark hover:border-greenMain ring-1 ring-transparent hover:ring-greenMain rounded-xl py-3';
      break;
    case 'secondary':
      variantClasses =
        'bg-greenMain hover:bg-greenMain/90 text-white rounded-xl py-3';
      break;
    case 'ternary':
      variantClasses =
        'border border-greenMain text-greenMain rounded-full py-2';
      break;
    case 'blueLight':
      variantClasses =
        'rounded-lg py-2 text-black bg-blueLight font-bold lg:text-base text-xs';
      break;
    default:
      variantClasses = '';
  }

  return (
    <button
      type='button'
      className={cn(baseClasses, variantClasses, className)}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
