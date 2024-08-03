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
import { useRouter } from '@/navigation';
import ROUTES from '@/routes';

const adv = [ADV_1, ADV_2, ADV_3];
export const Packages = () => {
  const router = useRouter();
  return (
    <Section type='basic' btnLabel='جميع الباقات' className='hidden mdl:block'>
      <div>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          className='mySwiper'
        >
          {adv.map((item, index) => (
            <SwiperSlide key={'adv' + index}>
              <Image
                onClick={() => router.push(ROUTES.CLIENT.PACKAGES)}
                priority
                src={item}
                alt='adv'
                className='max-w-full h-auto px-2 cursor-pointer'
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Section>
  );
};
