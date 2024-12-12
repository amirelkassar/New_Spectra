'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import { Section } from '@/app/[locale]/(dashboard)/client/_components/ui';

const adv = ['/adv-1.png', '/adv-2.png', '/adv-3.png'];

export const Advertisements = () => {
  return (
    <Section id='advertisements'>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        className='mySwiper'
      >
        {adv.map((item) => (
          <SwiperSlide key={item}>
            <Image
              priority
              src={item}
              alt='adv'
              width={3000}
              height={906}
              className='max-w-full w-full h-auto px-2'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};
