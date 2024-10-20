'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { Section } from '../../_components/section';
import { useRouter } from '@/navigation';
import ROUTES from '@/routes';
import { servicesData } from '@/lib/demoData';

export const OurServices = () => {
  const router = useRouter();

  return (
    <Section
      onClick={() =>
        router.push(ROUTES.CLIENT.MAIN.SERVICES)
      }
      className='hidden mdl:block'
      type='both'
      btnLabel='تصفح جميع الخدمات'
      heading='خدماتنا'
    >
      <h2 className='mdl:hidden font-bold text-black mb-5'>
        كيف يمكننا مساعدتك
      </h2>
      <Swiper
        spaceBetween={10}
        breakpoints={{
          0: {
            slidesPerView: 3.1,
          },
          500: {
            slidesPerView: 4.1,
          },
          768: {
            slidesPerView: 2.2,
          },
          1100: {
            slidesPerView: 3.1,
          },
        }}
        modules={[Pagination]}
      >
        {servicesData.map((service, index) => (
          <SwiperSlide key={index}>
            <div
              className={`rounded-[10px] h-[120px] w-full mdl:max-w-full mdl:h-full items-center flex flex-col mdl:flex-row justify-center min-h-24 text-center gap-3 text-xs font-Regular mdl:text-medium px-3 cursor-grabbing`}
              style={{ backgroundColor: service.color }}
            >
              <div
                className={`lg:size-9 size-8 rounded-full flex items-center justify-center shrink-0`}
                style={{ backgroundColor: service.color }}
              >
                {service.icon}
              </div>
              <span>{service.label}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};
