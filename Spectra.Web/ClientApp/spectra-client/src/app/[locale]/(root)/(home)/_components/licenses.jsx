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
              src={
                'https://s3-alpha-sig.figma.com/img/6176/3dee/de3859275fc391f809336ddb0ec627f4?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QzjwmGlBGIFXtBzQi5c0d5vs2ZGi6keQf1RhWtzjirfj-eCIrh3bD~iI1n2fR9QVkhpUuBigpVGeb5f6yHpSoy4CwnbffVIkp54aIMQdvFHAUpNL8RSNc4lZPiLJ2ycQ2Ln4ZwPkOK8Jo3umMgHA31syjLjjS1K1MRWAb0PtEi5MIMLdV78hEV6YyrMHQp6xAvq2x-A2wHjIyOwtn9iyjlWuwKKdfWkTQyoRT73Abk7QNn6bqkbR6JUg2WOF~-ltSBrXZCC4qDU09Dzfu8PAMYEawkpiT8-ko8yq0sx2svVXVUO4MzKvb29E4OLce3O28vhmHELMFRpBm2EQI1sGFw__'
              }
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
