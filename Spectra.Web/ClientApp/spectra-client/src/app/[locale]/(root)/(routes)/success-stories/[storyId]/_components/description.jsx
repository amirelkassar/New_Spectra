import Image from 'next/image';
import Separator from '@/assets/icons/separator';
import { Container } from '@/guest/_components/ui';

export const Description = ({
  childName = '',
  daignosis = '',
  image = '',
  description = '',
}) => {
  return (
    <Container
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
        <h1
          id='description'
          className='text-2xl mdl:text-3xl font-bold'
        >
          {childName}
        </h1>
        <Separator className='mx-auto mdl:mx-0 text-greenMain' />
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
    </Container>
  );
};
