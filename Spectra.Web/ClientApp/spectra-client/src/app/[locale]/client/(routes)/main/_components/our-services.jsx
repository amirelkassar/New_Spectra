'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { Section } from '../../../_components/ui/section';
import { useRouter } from '@/navigation';
import {
  servicesData,
  SERVICESICONS as ICONS,
} from '@/lib/demoData';
import ROUTES from '@/routes';

export const OurServices = () => {
  const router = useRouter();

  return (
    <Section
      onClick={() =>
        router.push(ROUTES.CLIENT.SERVICE_REQUEST.SERVICES)
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
            slidesPerView: 3.2,
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
          <SwiperSlide className='!h-auto' key={index}>
            <div
              className={`h-full w-full cursor-grabbing text-xs mdl:text-xl flex flex-col items-center mdl:flex-row gap-3 p-4 rounded-xl`}
              style={{ backgroundColor: service.color }}
            >
              <div
                className={`size-8 mdl:size-9 rounded-full flex items-center justify-center shrink-0`}
                style={{
                  color:
                    ICONS[service.id]?.color ||
                    ICONS[1]?.color,
                  backgroundColor:
                    ICONS[service.id]?.bg || ICONS[1]?.bg,
                }}
              >
                {ICONS[service.id]?.icon || ICONS[1]?.icon}
              </div>
              <span className='text-center mdl:text-start'>
                {service.label}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};
