import Image from 'next/image';
import HeroSectionImg from '@/assets/images/hero-section-img.png';
import LogoOnlyIcon from '@/assets/icons/logo-only-icon';
import Button from '@/components/button';
import PlayIcon from '@/assets/icons/play';
export const Hero = () => {
  return (
    <section
      role='region'
      aria-label='Hero Section'
      aria-labelledby='hero-heading'
      className='mdl:py-20 py-10 container max-w-5xl mx-auto'
    >
      <div className='flex justify-between'>
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
          <p className='text-black text-sm mdl:text-medium max-w-[80%]'>
            سبيكترا هو أول مركز طب اتصالي ورعاية عن بعد
            لتشخيص وعلاج الاضطرابات النمائية والسلوكية
            والنفسية للأطفال
          </p>
        </div>

        {/* IMAGE */}
        <div className='relative w-fit'>
          <div className='mdl:size-[400px] size-40 bg-greenLight rounded-[254px] rounded-tl-none overflow-hidden'>
            <Image
              src={HeroSectionImg}
              alt='hero-section-img'
              priority
              className='w-full h-full object-cover'
              width={1024}
              height={682}
            />
          </div>
          <div className='absolute -start-4 bottom-8 size-12 mdl:size-20 mdl:start-2 mdl:bottom-10 rounded-full flex items-center justify-center bg-blueLight'>
            <LogoOnlyIcon className='size-8 mdl:size-16' />
          </div>
        </div>
      </div>

      {/* BUTTONS */}
      <div className='mdl:-mt-32 space-y-3 mt-5'>
        <Button
          variant='secondary'
          className='block w-full mdl:max-w-72 text-sm mdl:text-medium font-bold h-12 py-1 rounded-lg'
          aria-label='احجز استشارة مجانية'
        >
          احجز استشارة مجانية
        </Button>
        <Button
          variant='primary'
          className='w-full mdl:max-w-72 text-sm mdl:text-medium font-bold text-greenMain h-12 py-1 rounded-lg'
          aria-label='تعرف علينا'
        >
          <PlayIcon className='size-6 xl:size-7' />
          <span>تعرف علينا</span>
        </Button>
      </div>
    </section>
  );
};
