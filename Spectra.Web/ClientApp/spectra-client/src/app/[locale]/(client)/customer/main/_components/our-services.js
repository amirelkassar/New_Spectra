'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { Section } from '../../../_components/section';
import HeartIcon from '@/assets/icons/heart';
import TeamIcon from '@/assets/icons/team';
import FollowUpIcon from '@/assets/icons/followup';
import HandshakeIcon from '@/assets/icons/handshake';

export const OurServices = () => {
  const services = [
    {
      label: 'خدمة الكشف المبكر الالكتروني',
      icon: <HeartIcon />,
      color: 'bg-red/[0.18]',
    },
    {
      label: 'خدمات التشخيص الطبي عبر فرق متعددة التخصصات',
      icon: <TeamIcon />,
      color: 'bg-greenMain/[0.18]',
    },
    {
      label: 'خدمات المتابعة الدوائية',
      icon: <FollowUpIcon />,
      color: 'bg-purple/[0.18]',
    },
    {
      label: 'خدمات الاستشارات التخصصية',
      icon: <HandshakeIcon />,
      color: 'bg-greenMain/[0.18]',
    },
    {
      label: 'خدمات التأهيل العلاجي في مختلف التخصصات',
      icon: <HandshakeIcon />,
      color: 'bg-greenMain/[0.18]',
    },
    {
      label: 'خدمات التقارير الطبية والتخصصية',
      icon: <HandshakeIcon />,
      color: 'bg-greenMain/[0.18]',
    },
    {
      label: 'خدمات دعم المراكز والجهات',
      icon: <HandshakeIcon />,
      color: 'bg-greenMain/[0.18]',
    },
    {
      label: 'خدمات التدريب',
      icon: <HandshakeIcon />,
      color: 'bg-greenMain/[0.18]',
    },
  ];

  return (
    <Section
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
        {services.map((service, index) => (
          <SwiperSlide key={index + 1321056}>
            <div
              className={`rounded-[10px] h-[120px] w-full mdl:max-w-full mdl:h-full items-center flex flex-col mdl:flex-row justify-center min-h-24 text-center gap-3 text-xs font-Regular mdl:text-medium px-3 ${service.color} cursor-grabbing`}
            >
              <div
                className={`mdl:size-9 size-8 rounded-full ${service.color}`}
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
