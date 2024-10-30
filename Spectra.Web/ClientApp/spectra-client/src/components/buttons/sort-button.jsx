import { cn } from '@/lib/utils';

export const SortButton = ({
  children,
  state = 'normal',
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(
        'flex items-center gap-2 px-7 py-2 bg-blueLight rounded-lg font-medium',
        props?.className
      )}
    >
      <span className='w-8 bg-white rounded border border-blueLighter flex items-center justify-center p-1'>
        <svg
          width='12'
          height='15'
          viewBox='0 0 12 15'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M5.46967 14.5303C5.76256 14.8232 6.23744 14.8232 6.53033 14.5303L11.3033 9.75736C11.5962 9.46447 11.5962 8.98959 11.3033 8.6967C11.0104 8.40381 10.5355 8.40381 10.2426 8.6967L6 12.9393L1.75736 8.6967C1.46447 8.40381 0.989592 8.40381 0.696699 8.6967C0.403805 8.98959 0.403805 9.46447 0.696699 9.75736L5.46967 14.5303ZM5.25 6.55671e-08L5.25 14L6.75 14L6.75 -6.55671e-08L5.25 6.55671e-08Z'
            fill={state === 'asc' ? '#10B0C1' : '#939393'}
          />
        </svg>

        <svg
          width='12'
          height='15'
          viewBox='0 0 12 15'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M6.53033 0.46967C6.23744 0.176777 5.76256 0.176777 5.46967 0.46967L0.696699 5.24264C0.403806 5.53553 0.403806 6.01041 0.696699 6.3033C0.989593 6.59619 1.46447 6.59619 1.75736 6.3033L6 2.06066L10.2426 6.3033C10.5355 6.59619 11.0104 6.59619 11.3033 6.3033C11.5962 6.01041 11.5962 5.53553 11.3033 5.24264L6.53033 0.46967ZM6.75 15V1H5.25V15H6.75Z'
            fill={state === 'desc' ? '#10B0C1' : '#939393'}
          />
        </svg>
      </span>

      {children}
    </button>
  );
};
