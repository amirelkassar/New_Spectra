'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { Section } from '../../../_components/section';
import { TeamMember } from '../_components/team-member';
import { useRouter } from '@/navigation';
import ROUTES from '@/routes';

export const OurTeam = () => {
  const router = useRouter();
  return (
    <Section
      onClick={() => router.push(`${ROUTES.CLIENT.MAIN}/team`)}
      type='both'
      heading='تعرف علي فريقنا'
      btnLabel='جميع التخصصات'
    >
      {/* SCREEN */}
      <div className='hidden lg:grid lg:grid-cols-fill-200 gap-y-20 gap-x-5 py-10'>
        {Array(8)
          .fill(0)
          .map((item, index) => (
            <TeamMember key={'team' + index} />
          ))}
      </div>

      {/* MOBILE */}
      <div className='lg:hidden py-10'>
        <Swiper
          className='!overflow-visible'
          spaceBetween={15}
          breakpoints={{
            0: {
              slidesPerView: 2.3,
            },
            500: {
              slidesPerView: 3.3,
            },
            768: {
              slidesPerView: 4.3,
            },
          }}
          modules={[Pagination]}
        >
          {Array(8)
            .fill(0)
            .map((item, index) => (
              <SwiperSlide key={'team' + index}>
                <TeamMember />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      {/* <TeamMember /> */}
    </Section>
  );
};
