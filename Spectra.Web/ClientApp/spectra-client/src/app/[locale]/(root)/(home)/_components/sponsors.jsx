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
        loop
        slideGap='md'
        classNames={{
          root: 'px-0',
        }}
        slideSize={{ base: '50%', sm: '25%' }}
        data={[
          <Image
            src={
              'https://s3-alpha-sig.figma.com/img/709c/b25e/8124e51478789a6e303083c1e9063f57?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m~Mgcvk~8TiChJazpHouvoOCiAuS~xn~IqmW6qAqGaaNJpvIUAvOiSELyWfM21QmNYv7oHSn7VhYLsIK2QXzMhNbZAqEEGp-SeNf-Tk9uVESI0vKMTRiA2kkm-UBBmJdiuVhJmI1wy6U0gf6EaMXjpo-q7c8BHEJpI~moX-TuOrjJ7J-2z2O6rQt~LMFu-tyOEvlYCSjIx7ZRN-yz3PAfLV2JMtVzfDdbX6yEtnkhc8vp2cb29M2Ku816Yt3HGBUXSycXJARRrwBxmlDjYWTrnkT6HdeSVzTRayaqwxWI~dwawSSGzK39pm3W2~WBwuGL-gcSjOD9hnDxVZCIqto0g__'
            }
            alt='sponsor'
            width={450}
            height={350}
            className='object-cover object-center w-full'
          />,
          <Image
            src={
              'https://s3-alpha-sig.figma.com/img/709c/b25e/8124e51478789a6e303083c1e9063f57?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m~Mgcvk~8TiChJazpHouvoOCiAuS~xn~IqmW6qAqGaaNJpvIUAvOiSELyWfM21QmNYv7oHSn7VhYLsIK2QXzMhNbZAqEEGp-SeNf-Tk9uVESI0vKMTRiA2kkm-UBBmJdiuVhJmI1wy6U0gf6EaMXjpo-q7c8BHEJpI~moX-TuOrjJ7J-2z2O6rQt~LMFu-tyOEvlYCSjIx7ZRN-yz3PAfLV2JMtVzfDdbX6yEtnkhc8vp2cb29M2Ku816Yt3HGBUXSycXJARRrwBxmlDjYWTrnkT6HdeSVzTRayaqwxWI~dwawSSGzK39pm3W2~WBwuGL-gcSjOD9hnDxVZCIqto0g__'
            }
            alt='sponsor'
            width={450}
            height={350}
            className='object-cover object-center w-full'
          />,
          <Image
            src={
              'https://s3-alpha-sig.figma.com/img/709c/b25e/8124e51478789a6e303083c1e9063f57?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m~Mgcvk~8TiChJazpHouvoOCiAuS~xn~IqmW6qAqGaaNJpvIUAvOiSELyWfM21QmNYv7oHSn7VhYLsIK2QXzMhNbZAqEEGp-SeNf-Tk9uVESI0vKMTRiA2kkm-UBBmJdiuVhJmI1wy6U0gf6EaMXjpo-q7c8BHEJpI~moX-TuOrjJ7J-2z2O6rQt~LMFu-tyOEvlYCSjIx7ZRN-yz3PAfLV2JMtVzfDdbX6yEtnkhc8vp2cb29M2Ku816Yt3HGBUXSycXJARRrwBxmlDjYWTrnkT6HdeSVzTRayaqwxWI~dwawSSGzK39pm3W2~WBwuGL-gcSjOD9hnDxVZCIqto0g__'
            }
            alt='sponsor'
            width={450}
            height={350}
            className='object-cover object-center w-full'
          />,
          <Image
            src={
              'https://s3-alpha-sig.figma.com/img/709c/b25e/8124e51478789a6e303083c1e9063f57?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m~Mgcvk~8TiChJazpHouvoOCiAuS~xn~IqmW6qAqGaaNJpvIUAvOiSELyWfM21QmNYv7oHSn7VhYLsIK2QXzMhNbZAqEEGp-SeNf-Tk9uVESI0vKMTRiA2kkm-UBBmJdiuVhJmI1wy6U0gf6EaMXjpo-q7c8BHEJpI~moX-TuOrjJ7J-2z2O6rQt~LMFu-tyOEvlYCSjIx7ZRN-yz3PAfLV2JMtVzfDdbX6yEtnkhc8vp2cb29M2Ku816Yt3HGBUXSycXJARRrwBxmlDjYWTrnkT6HdeSVzTRayaqwxWI~dwawSSGzK39pm3W2~WBwuGL-gcSjOD9hnDxVZCIqto0g__'
            }
            alt='sponsor'
            width={450}
            height={350}
            className='object-cover object-center w-full'
          />,
          <Image
            src={
              'https://s3-alpha-sig.figma.com/img/709c/b25e/8124e51478789a6e303083c1e9063f57?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m~Mgcvk~8TiChJazpHouvoOCiAuS~xn~IqmW6qAqGaaNJpvIUAvOiSELyWfM21QmNYv7oHSn7VhYLsIK2QXzMhNbZAqEEGp-SeNf-Tk9uVESI0vKMTRiA2kkm-UBBmJdiuVhJmI1wy6U0gf6EaMXjpo-q7c8BHEJpI~moX-TuOrjJ7J-2z2O6rQt~LMFu-tyOEvlYCSjIx7ZRN-yz3PAfLV2JMtVzfDdbX6yEtnkhc8vp2cb29M2Ku816Yt3HGBUXSycXJARRrwBxmlDjYWTrnkT6HdeSVzTRayaqwxWI~dwawSSGzK39pm3W2~WBwuGL-gcSjOD9hnDxVZCIqto0g__'
            }
            alt='sponsor'
            width={450}
            height={350}
            className='object-cover object-center w-full'
          />,
        ]}
      />
    </Section>
  );
};
