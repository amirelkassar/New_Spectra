import clsx from 'clsx';
import React from 'react';

const Button = ({ className, variant = 'primary', children, ...rest }) => {
  const baseClasses =
    'flex items-center justify-center gap-5  transition-all  px-7 ';

  let variantClasses = '';

  switch (variant) {
    case 'primary':
      variantClasses =
        'border border-grayDark hover:border-greenMain ring-1 ring-transparent hover:ring-greenMain rounded-xl py-3';
      break;
    case 'secondary':
      variantClasses = 'bg-greenMain text-white rounded-xl py-3';
      break;
    case 'ternary':
      variantClasses =
        'border border-greenMain text-greenMain rounded-full py-2';
      break;
    case 'blueLight':
      variantClasses =
        'rounded-[10px] text-black bg-blueLight py-3 font-bold mdl:text-base text-xs !px-5';
      break;
    default:
      variantClasses = '';
  }

  return (
    <button
      type='button'
      className={clsx(baseClasses, variantClasses, className)}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
