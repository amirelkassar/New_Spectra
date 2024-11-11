import Image from 'next/image';

import CheckHeartIcon from '@/assets/icons/check-heart';
import {
  Container,
  SectionHeading,
} from '@/guest/_components/ui';

export const SpectraLicenses = ({
  title = 'كوادرنا الصحية مرخصة لدى الهيئة السعودية للتخصصات الطبية',
  image = '/demo-sponsor-2.png',
}) => {
  return (
    <Container
      aria-label='Licenses'
      aria-labelledby='licenses'
      id='licenses'
    >
      <div className='flex flex-col items-center justify-center gap-x-10 gap-y-5 mdl:flex-row'>
        <SectionHeading className='max-w-sm text-center mdl:text-start'>
          {title}
        </SectionHeading>

        <div className='relative'>
          <Image
            src={image}
            width={530}
            height={274}
            className='w-auto h-48 object-contain'
            alt='Saudi Commission for Health Specialties'
          />
          <CheckHeartIcon className='mdl:size-11 size-8 absolute top-1/2 -translate-y-1/2 right-0' />
        </div>
      </div>
    </Container>
  );
};
