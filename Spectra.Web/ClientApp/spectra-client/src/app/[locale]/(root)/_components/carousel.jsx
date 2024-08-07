import {
  Carousel as MantineCarousel,
  CarouselSlide,
} from '@mantine/carousel';
import ArrowLeftMainGreen from '@/assets/icons/arrow-left-mainGreen';
import { useId } from 'react';

export const Carousel = ({ data = [] }) => {
  const id = useId();
  return (
    <MantineCarousel
      withIndicators
      height={'100%'}
      slideSize={{ base: '50%', sm: '33.3333%' }}
      slideGap='xl'
      align='start'
      slidesToScroll={1}
      controlsOffset='lg'
      dragFree
      nextControlIcon={
        <span className='rotate-180 h-32 mdl:h-52 -mt-14 mdl:-mt-20 mdl:w-16 w-10 rounded-full flex justify-center bg-[#f5f5f5] items-center'>
          <ArrowLeftMainGreen
            fill='black'
            className='size-6'
          />
        </span>
      }
      previousControlIcon={
        <span className='h-32 mdl:h-52 -mt-14 mdl:-mt-20 w-10 mdl:w-16 rounded-full flex justify-center bg-[#f5f5f5] items-center'>
          <ArrowLeftMainGreen
            fill='black'
            className='size-6'
          />
        </span>
      }
      classNames={{
        root: 'mdl:px-24 px-16',
      }}
      dir='ltr'
    >
      {data.map((slide, index) => (
        <CarouselSlide key={index + id}>
          {slide}
        </CarouselSlide>
      ))}
    </MantineCarousel>
  );
};
