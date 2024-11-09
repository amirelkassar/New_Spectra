import Image from 'next/image';

import CheckHeartIcon from '@/assets/icons/check-heart';
import {
  Container,
  SectionHeading,
} from '@/guest/_components/ui';

export const WhyUs = ({
  data = [],
  title = 'لماذا نحن',
}) => {
  if (!data.length) return null;
  return (
    <Container
      aria-label='Why Us'
      aria-labelledby='why-us'
      id='why-us'
    >
      <SectionHeading
        id='why-us'
        className='mb-10 text-center'
      >
        {title}
      </SectionHeading>
      <div className='flex items-center gap-10'>
        <div className='w-1/2 overflow-hidden flex justify-end'>
          <Image
            src='/demo-why-us.webp'
            alt='happy child'
            width={452}
            height={439}
            priority={false}
            className='object-contain max-w-full max-h-full object-center'
          />
        </div>

        <div className='w-1/2'>
          <ul className='space-y-5'>
            {data?.map((item, index) => (
              <li
                key={index}
                className='text-sm mdl:text-medium flex items-center gap-5'
              >
                <CheckHeartIcon className='size-4 mdl:size-6' />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
};
