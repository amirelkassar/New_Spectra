import ArrowLeft from '@/assets/icons/arrow-left';
import Button from '@/components/button';
import { cn } from '@/lib/utils';

export const Section = ({
  heading = '',
  type = 'basic',
  btnLabel = '',
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
        'mdl:py-20 py-10 w-full text-black container max-w-5xl mx-auto',
        className
      )}
    >
      {type === 'basic' && (
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
            <ArrowLeft />
          </Button>
        </div>
      )}

      {children}
    </section>
  );
};
