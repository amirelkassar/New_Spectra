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
        slideSize={{ base: '50%', mdl: '33.33%' }}
      >
        {data.map((image, i) => (
          <Carousel.Slide key={image || i}>
            <div>
              <Image
                src={image}
                alt={image}
                width={450}
                height={350}
                className='object-contian object-center w-auto h-24 shrink-0 mx-auto'
              />
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </Container>
  );
};
