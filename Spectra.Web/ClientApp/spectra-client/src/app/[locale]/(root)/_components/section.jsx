import ArrowLeft from '@/assets/icons/arrow-left';
import Button from '@/components/button';
import { cn } from '@/lib/utils';

export const Section = ({
  heading = '',
  type = 'basic',
  btnLabel = '',
  customBtn = <></>,
  children,
  id,
  className,
  props,
}) => {
  return (
    <section
      role='region'
      {...props}
      className={cn(
        'mdl:py-20 py-10 w-full px-5 xl:px-14 text-black  max-w-[1400px] mx-auto',
        className
      )}
    >
      {type === 'basic' && heading && (
        <h2
          id={id}
          className='text-base mdl:text-2xl text-center mb-10'
        >
          {heading}
        </h2>
      )}
      {type === 'more' && (
        <div className='flex items-center justify-between mb-10'>
          <h2 id={id} className='text-base mdl:text-2xl'>
            {heading}
          </h2>
          <Button className='text-sm mdl:text-medium gap-3 font-bold min-w-52 mdl:min-w-72'>
            <span>{btnLabel}</span>
            <ArrowLeft className='ltr:rotate-180' />
          </Button>
        </div>
      )}
      {type === 'custombtn' && (
        <div className='flex items-center justify-between mb-10'>
          <h2 id={id} className='text-base mdl:text-2xl'>
            {heading}
          </h2>
          <div>{customBtn}</div>
        </div>
      )}

      {children}
    </section>
  );
};