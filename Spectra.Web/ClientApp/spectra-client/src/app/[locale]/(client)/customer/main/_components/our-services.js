'use client';
import { Section } from '../../../_components/section';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
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
    <Section type='both' btnLabel='تصفح جميع الخدمات' heading='خدماتنا'>
      <Swiper
        modules={[Pagination]}
        className='mySwiper'
        breakpoints={{
          0: {
            slidesPerView: 3.1,
            spaceBetween: 10,
          },
          1536: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index + 1321056}>
            <div
              className={`xl:h-[120px] h-[170px] xl:w-[300px] flex-col xl:flex-row px-2 xl:px-5 py-5 flex items-center cursor-grab xl:justify-center xl:text-start text-center gap-7 rounded-[10px] ${service.color}`}
            >
              <div className={`w-9 h-9 rounded-full ${service.color}`}>
                {service.icon}
              </div>
              <span className='lg:paragraph text-black text-xs'>
                {service.label}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};
