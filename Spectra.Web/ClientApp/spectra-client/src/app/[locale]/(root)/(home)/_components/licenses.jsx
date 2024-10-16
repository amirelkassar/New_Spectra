import Image from 'next/image';
import { Carousel } from '../../_components/carousel';
import { Section } from '../../_components/section';

export const Licenses = () => {
  return (
    <Section
      aria-label='Licenses'
      aria-labelledby='licenses'
      id='licenses'
      type='basic'
      heading='تراخيص'
    >
      <Carousel
        withControls={false}
        withIndicators={false}
        loop
        slideGap='md'
        classNames={{
          root: 'px-0',
        }}
        slideSize={{ base: '50%', sm: '33.33%' }}
        data={[
          ...Array.from({ length: 5 }).map((_, i) => (
            <Image
              key={i}
              src={'/demo-sponsor.png'}
              alt='sponsor'
              width={450}
              height={350}
              className='object-contian object-center w-56 h-20'
            />
          )),
        ]}
      />
    </Section>
  );
};
