'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import { SERVICES, SERVICESICONS as ICONS } from '@/data';
import {
  Section,
  SectionTitle,
} from '@/client/_components/ui';
import { ShowMoreButton } from '@/components/buttons/show-more-button';
import ROUTES from '@/routes';

export const OurServices = () => {
  return (
    <Section id='services'>
      <div className='flex justify-between items-center mb-5'>
        <SectionTitle id='services'>خدماتنا</SectionTitle>
        <ShowMoreButton
          href={`${ROUTES.CLIENT.SERVICE_REQUEST.SERVICES}`}
        >
          تصفح جميع الخدمات
        </ShowMoreButton>
      </div>
      <Swiper
        spaceBetween={20}
        breakpoints={{
          0: {
            slidesPerView: 3.2,
          },
          500: {
            slidesPerView: 4.1,
          },
          768: {
            slidesPerView: 2.2,
          },
          1100: {
            slidesPerView: 3.2,
          },
          1500: {
            slidesPerView: 4.2,
          },
          1600: {
            slidesPerView: 4.5,
          },
        }}
        modules={[Pagination]}
      >
        {SERVICES.map((service) => (
          <SwiperSlide className='!h-auto' key={service.id}>
            <Service
              label={service.label}
              color={service.color}
              id={service.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};

const Service = ({ label = '', color = '', id = '' }) => {
  return (
    <div
      className={`h-full w-full cursor-grabbing text-xs mdl:text-xl flex flex-col items-center mdl:flex-row gap-3 p-4 rounded-xl`}
      style={{ backgroundColor: color }}
    >
      <div
        className={`size-8 mdl:size-9 rounded-full flex items-center justify-center shrink-0`}
        style={{
          color: ICONS[id]?.color || ICONS[1]?.color,
          backgroundColor: ICONS[id]?.bg || ICONS[1]?.bg,
        }}
      >
        {ICONS[id]?.icon || ICONS[1]?.icon}
      </div>
      <span className='text-center mdl:text-start'>
        {label}
      </span>
    </div>
  );
};
