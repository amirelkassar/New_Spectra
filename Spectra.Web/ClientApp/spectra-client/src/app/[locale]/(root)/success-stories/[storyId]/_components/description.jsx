import Image from 'next/image';
import { Section } from '../../../_components/section';

export const Description = ({
  childName = '',
  daignosis = '',
  image = '',
  description = '',
}) => {
  return (
    <Section
      id='description'
      aria-label='Description'
      aria-labelledby='description'
      className='mt-20 mdl:mt-28 grid grid-cols-2 gap-5 mdl:grid-cols-4 mdl:gap-10'
    >
      {/* NAME AND DIAGNOSIS */}
      <div className='space-y-3 my-auto col-span-2 mdl:col-span-1 text-center mdl:text-start'>
        <span className='text-sm mdl:text-medium block'>
          قصة نجاح
        </span>
        <h1 className='text-2xl mdl:text-3xl font-bold'>
          {childName}
        </h1>
        <Separator className='mx-auto mdl:mx-0' />
        <span className='text-sm mdl:text-medium block'>
          {daignosis}
        </span>
      </div>

      {/* DESCRIPTION */}
      <p className='text-xs mdl:text-base my-auto'>
        {description}
      </p>

      {/* IMAGE */}
      <div className='rounded-xl overflow-hidden mdl:col-span-2'>
        <Image
          src={image}
          alt={childName}
          width={600}
          height={600}
          priority
          className='w-full h-full max-h-64 object-cover object-center'
        />
      </div>
    </Section>
  );
};

const Separator = ({ className = '' }) => (
  <svg
    width={149}
    height={15}
    viewBox='0 0 149 15'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
  >
    <path
      d='M148 4.25708C140 7.75708 28 -7.74293 1.5 13.2571'
      stroke='#10B0C1'
      strokeWidth={3}
    />
  </svg>
);
