import Image from 'next/image';

import {
  Container,
  Carousel,
  SectionHeading,
} from '@/guest/_components/ui';

export const Sponsors = ({
  data = [],
  title = 'شركاء النجاح',
}) => {
  if (!data.length) return null;
  return (
    <Container
      aria-label='Sponsors'
      aria-labelledby='sponsors'
      id='sponsors'
    >
      <SectionHeading
        className='mb-10 text-center'
        id='sponsors'
      >
        {title}
      </SectionHeading>
      <Carousel
        withControls={false}
        withIndicators={false}
        loop
        dragFree
        slideGap='md'
        classNames={{
          root: 'px-0',
        }}
        slideSize={{ base: '50%', sm: '20%' }}
        align='center'
      >
        {data?.map((image, i) => (
          <Carousel.Slide key={i}>
            <Image
              src={image}
              alt='sponsor'
              width={450}
              height={350}
              className='object-contain object-center w-56 h-20'
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Container>
  );
};
