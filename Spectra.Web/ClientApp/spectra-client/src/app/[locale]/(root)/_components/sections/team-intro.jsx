import { useTranslations } from 'next-intl';
import Image from 'next/image';

export const TeamIntro = () => {
  const t = useTranslations('guest_obj');

  return (
    <section
      aria-label='Team Intro'
      aria-labelledby='team-intro'
      id='team-intro'
      className='h-auto flex mdl:items-center !p-0 max-h-screen mb-10'
    >
      <div className='px-5 2xl:ps-40 mt-28 mdl:mt-40 mdl:px-20 space-y-5 w-1/2 relative'>
        <h1
          id='team-intro'
          className='text-base mdl:text-4xl font-bold capitalize'
        >
          {t('child_care_message')}
        </h1>
        <p className='text-sm mdl:text-medium'>
          {t('telemedicine_center_message')}
        </p>
      </div>

      <div className='w-1/2 pt-10 mdl:pt-0 h-auto bg-blueLight pb-0 p-3 rounded-full ltr:rounded-tr-none rtl:rounded-tl-none overflow-hidden ring-[10px] mdl:ring-[20px] ring-blueLight/40'>
        <Image
          src='/demo-team.png'
          alt='Doctors Team'
          width={919}
          height={919}
          priority
          className='w-full h-full object-cover object-center'
        />
      </div>
    </section>
  );
};
