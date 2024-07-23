'use client';

import { Avatar } from '@mantine/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { Section } from '../../../_components/section';

export const OurTeam = () => {
  return (
    <Section type='both' heading='تعرف علي فريقنا' btnLabel='جميع التخصصات'>
      {/* SCREEN */}
      <div className='hidden mdl:grid mdl:grid-cols-3 lg:grid-cols-4 gap-y-10 py-10'>
        {Array(8)
          .fill(0)
          .map((item, index) => (
            <TeamMember key={'team' + index} />
          ))}
      </div>

      {/* MOBILE */}
      <div className='mdl:hidden'>
        <Swiper
          className='!overflow-visible'
          spaceBetween={10}
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

const TeamMember = ({
  avatar,
  name = 'احمد محمد كمال',
  title = 'اخصائى نفسي',
  rating = 4.9,
}) => {
  return (
    <div className='rounded-[20px] cursor-grabbing mdl:cursor-default w-fit bg-gradient-to-b from-[#f5f5f5] to-white p-5 mdl:p-8 max-w-[228px] flex items-center justify-center'>
      <div className='flex flex-col items-center gap-2'>
        {/* AVATAR */}
        <Avatar
          variant='filled'
          src={avatar || ''}
          className='size-[75px] mdl:size-[129px] rounded-full mdl:-mt-16 -mt-10'
          color='cyan'
          radius='xl'
        >
          {name?.slice(0, 2)?.toUpperCase() || ''}
        </Avatar>
        <div className='flex-1 space-y-1 mdl:space-y-4'>
          {/* NAME & TITLE */}
          <div>
            <h3 className='text-sm font-bold mdl:text-medium text-black text-center'>
              {name || ''}
            </h3>
            <p className='text-sm mdl:text-medium font-Regular text-black'>
              {title || ''}
            </p>
          </div>
          {/* RATING */}
          <span className='bg-greenMain block text-white text-sm text-center py-1 mdl:py-2 w-[67px] h-[25px] mdl:w-[114px] mdl:h-[42px] mdl:text-medium mdl:font-bold rounded-[15px]'>
            &#9733; {rating || ''}
          </span>
        </div>
      </div>
    </div>
  );
};
