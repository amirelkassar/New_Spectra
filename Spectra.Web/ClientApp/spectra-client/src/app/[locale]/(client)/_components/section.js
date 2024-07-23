import ArrowLeft from '@/assets/icons/arrow-left';
import Button from '@/components/button';

export const Section = ({
  heading,
  type = 'basic',
  btnLabel = '',
  children,
  id,
  className,
  props,
}) => {
  return (
    <section role='region' {...props} className='my-16 w-full'>
      <div className={className}>
        {type === 'basic' && (
          <h2
            id={id}
            className='text-2xl text-black leading-9 text-start mb-10'
          >
            {heading}
          </h2>
        )}
        {type === 'both' && (
          <div className='flex items-center justify-between mb-10'>
            <h2
              id={id}
              className='lg:text-2xl md:text-lg text-sm text-black leading-9'
            >
              {heading}
            </h2>
            <Button className='flex items-center text-black font-bold md:leading-6 text-xs md:text-base'>
              <span>{btnLabel}</span>
              <ArrowLeft />
            </Button>
          </div>
        )}
        {type === 'button' && (
          <div className='w-full relative mb-10'>
            <Button className='block mr-auto text-black font-bold leading-6'>
              <span>{btnLabel}</span>
              <ArrowLeft />
            </Button>
          </div>
        )}
      </div>
      {children}
    </section>
  );
};
