'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import { Section } from '../../../_components/section';
import ADV_1 from '@/assets/images/adv/1.png';
import ADV_2 from '@/assets/images/adv/2.png';
import ADV_3 from '@/assets/images/adv/3.png';

export const Packages = () => {
  const adv = [ADV_1, ADV_2, ADV_3];
  return (
    <Section type='button' btnLabel='جميع الباقات' className='hidden mdl:block'>
      <div>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          className='mySwiper'
        >
          {adv.map((item, index) => (
            <SwiperSlide key={'adv' + index}>
              <Image
                priority
                src={item}
                alt='adv'
                className='max-w-full h-auto px-2'
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Section>
  );
};
