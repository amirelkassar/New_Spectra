import ArrowLeft from '@/assets/icons/arrow-left';
import Button from '@/components/button';

export const Section = ({
  heading,
  type = 'basic',
  btnLabel = '',
  children,
  id,
  props,
}) => {
  return (
    <section
      role='region'
      {...props}
      className='my-20 w-full'
    >
      {type === 'basic' && (
        <h2
          id={id}
          className='text-2xl text-black leading-9 text-center mb-10'
        >
          {heading}
        </h2>
      )}
      {type === 'more' && (
        <div className='flex items-center justify-between mb-10'>
          <h2
            id={id}
            className='text-2xl text-black leading-9'
          >
            {heading}
          </h2>
          <Button className='flex items-center text-black text-[20px] font-bold leading-[30px]'>
            <span>{btnLabel}</span>
            <ArrowLeft />
          </Button>
        </div>
      )}
      {type === 'moreCenter' && (
        <div className='w-full relative mb-10'>
          <h2
            id={id}
            className='text-2xl text-black leading-9 text-center pt-2'
          >
            {heading}
          </h2>
          <Button className='flex items-center absolute left-0 top-0 text-black text-[20px] font-bold leading-[30px]'>
            <span>{btnLabel}</span>
            <ArrowLeft />
          </Button>
        </div>
      )}
      {children}
    </section>
  );
};
