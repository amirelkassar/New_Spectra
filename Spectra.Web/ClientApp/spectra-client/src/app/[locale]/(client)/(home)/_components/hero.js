import Image from 'next/image';
import HeroSectionImg from '@/assets/images/hero-section-img.png';
import CareImg from '@/assets/images/hero-section-care.png';
import Button from '@/components/button';
import PlayIcon from '@/assets/icons/play';
export const Hero = () => {
  return (
    <section
      role='region'
      aria-label='Hero Section'
      aria-labelledby='hero-heading'
      className='mt-[100px] flex items-center justify-between max-w-5xl mx-auto'
    >
      <div className='w-[346px] space-y-5'>
        <h1
          id='hero-heading'
          className='text-4xl font-bold text-black leading-[54px]'
        >
          نحتضن تميزهم
          <br />
          بحب و إبداع
        </h1>
        <p className='text-black text-[20px] font-Regular leading-[30px]'>
          سبيكترا هو أول مركز طب اتصالي ورعاية عن بعد لتشخيص وعلاج الاضطرابات
          النمائية والسلوكية والنفسية للأطفال
        </p>
        <Button
          variant='secondary'
          className='block w-full text-[20px] font-bold'
          aria-label='احجز استشارة مجانية'
        >
          احجز استشارة مجانية
        </Button>
        <Button
          variant='primary'
          className='block w-full text-[20px] font-bold text-greenMain'
          aria-label='تعرف علينا'
        >
          <PlayIcon />
          <span>تعرف علينا</span>
        </Button>
      </div>
      <div className='relative w-fit'>
        <div className='w-[398px] bg-greenLight h-[408.67px] rounded-[254px] rounded-tl-none overflow-hidden'>
          <Image
            src={HeroSectionImg}
            alt='hero-section-img'
            priority
            className='w-full h-full object-cover'
            width={588}
            height={393}
          />
        </div>
        <Image
          src={CareImg}
          alt='hero-section-img'
          className='absolute bottom-[95px] right-[-75px]'
          width={212}
          height={110}
        />
      </div>
    </section>
  );
};
