import Image from 'next/image';

import Button from '@/components/button';

import HeroSectionImg from '@/assets/images/hero-section-img.png';
import LogoOnlyIcon from '@/assets/icons/logo-only-icon';
import PlayIcon from '@/assets/icons/play';
import { Container } from '@/guest/_components/ui';

export const HomeIntro = () => {
  return (
    <Container
      role='region'
      aria-label='Hero Section'
      aria-labelledby='hero-heading'
      className='mt-20 mdl:mt-28'
    >
      <div className='flex gap-5 justify-between'>
        {/* TEXT */}
        <div className='space-y-5'>
          <h1
            id='hero-heading'
            className='mdl:text-4xl text-2xl font-bold text-black mdl:leading-[54px]'
          >
            نحتضن تميزهم
            <br />
            بحب و إبداع
          </h1>
          <p className='text-black text-sm mdl:text-xl mdl:max-w-[80%]'>
            سبيكترا هو أول مركز طب اتصالي ورعاية عن بعد
            لتشخيص وعلاج الاضطرابات النمائية والسلوكية
            والنفسية للأطفال
          </p>
        </div>

        {/* IMAGE */}
        <div className='relative w-fit'>
          <div className='mdl:size-[400px] size-40 bg-greenLight rounded-full relative rounded-tl-none overflow-hidden'>
            <Image
              src={HeroSectionImg}
              alt='hero-section-img'
              priority
              className='w-full h-full object-cover'
              sizes='width:1024px; height:682px'
              fill
            />
          </div>
          <span className='absolute -start-4 bottom-8 size-12 mdl:size-20 mdl:start-2 mdl:bottom-10 rounded-full flex items-center justify-center bg-blueLight'>
            <LogoOnlyIcon className='size-8 mdl:size-16' />
          </span>
        </div>
      </div>

      {/* BUTTONS */}
      <div className='mdl:-mt-32 mt-5 flex flex-col gap-3'>
        <Button
          variant='secondary'
          className='w-full mdl:max-w-80 mdl:text-xl'
          aria-label='احجز استشارة مجانية'
        >
          احجز استشارة مدفوعة لمدة 30د
        </Button>
        <Button
          className='w-full mdl:max-w-80 mdl:text-xl'
          aria-label='تعرف علينا'
        >
          <PlayIcon className='size-5 mdl:size-6 text-greenMain' />
          تعرف علينا
        </Button>
      </div>
    </Container>
  );
};
