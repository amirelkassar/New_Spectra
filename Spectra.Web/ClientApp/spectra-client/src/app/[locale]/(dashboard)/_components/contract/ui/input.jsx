import { cn } from '@/lib/utils';

export const Input = ({ indicator = '', ...props }) => {
  return (
    <div className='relative w-full max-w-72 text-xs lg:text-base font-bold'>
      <input
        {...props}
        type='number'
        placeholder={props.placeholder}
        className={cn(
          'w-full py-2 px-5 pe-10 border border-grayDark rounded-xl outline-none placeholder:font-normal read-only:bg-grayLight read-only:border-transparent read-only:text-center read-only:placeholder:text-transparent',
          props?.className
        )}
      />
      <span className='absolute inset-y-0 end-4 flex items-center'>
        {indicator}
      </span>
    </div>
  );
};
