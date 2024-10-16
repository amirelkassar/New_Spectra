import Image from 'next/image';
import { Carousel } from '../../_components/carousel';
import { Section } from '../../_components/section';

export const Sponsors = () => {
  return (
    <Section
      aria-label='Sponsors'
      aria-labelledby='sponsors'
      id='sponsors'
      heading='شركاء النجاح'
      type='basic'
    >
      <Carousel
        withControls={false}
        withIndicators={false}
        loop
        slideGap='md'
        classNames={{
          root: 'px-0',
        }}
        slideSize={{ base: '50%', sm: '25%' }}
        data={[
          ...Array.from({ length: 5 }).map((_, i) => (
            <Image
              key={i}
              src={'/demo-sponsor.png'}
              alt='sponsor'
              width={450}
              height={350}
              className='object-contain object-center w-56 h-20'
            />
          )),
        ]}
      />
    </Section>
  );
};
