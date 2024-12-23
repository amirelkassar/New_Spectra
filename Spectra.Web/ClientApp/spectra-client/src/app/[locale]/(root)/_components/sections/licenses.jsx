import { useTranslations } from 'next-intl';
import Image from 'next/image';

import {
  Container,
  Carousel,
  SectionHeading,
} from '@/guest/_components/ui';

export const Licenses = ({ data = [], title = '' }) => {
  const tg = useTranslations('guest_obj');

  const titleValue = title || tg('licenses');

  if (!data.length) return null;
  return (
    <Container
      aria-label='Licenses'
      aria-labelledby='licenses'
      id='licenses'
    >
      <SectionHeading
        id='licenses'
        className='text-center mb-10 capitalize'
      >
        {titleValue}
      </SectionHeading>
      <Carousel
        withControls={false}
        withIndicators={false}
        loop
        slideGap='md'
        classNames={{
          root: 'px-0',
        }}
        slideSize={{ base: '50%', sm: '33.33%' }}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <Carousel.Slide key={i}>
            <Image
              src={'/demo-sponsor.png'}
              alt='sponsor'
              width={450}
              height={350}
              className='object-contian object-center w-56 h-20'
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Container>
  );
};
