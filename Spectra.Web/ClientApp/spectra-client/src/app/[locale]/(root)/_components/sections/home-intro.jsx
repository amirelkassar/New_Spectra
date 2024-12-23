import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Container, IntroVideo } from '@/guest/_components/ui';
import Button from '@/components/button';
import PlayIcon from '@/assets/icons/play';

export const HomeIntro = () => {
  const t = useTranslations('guest_obj');

  return (
    <Container
      role='region'
      aria-label='Hero Section'
      aria-labelledby='hero-heading'
      className='mt-20 mdl:mt-28'
    >
      <div className='flex gap-5 justify-between'>
        {/* TEXT */}
        <div className='space-y-5 min-h-60'>
          <h1
            id='hero-heading'
            className='mdl:text-4xl ltr:mdl:text-3xl ltr:lgl:text-4xl text-2xl font-bold text-black mdl:leading-[54px] capitalize'
            dangerouslySetInnerHTML={{
              __html: t('spectra_intro'),
            }}
          />

          <p className='text-black text-sm mdl:text-xl mdl:max-w-[80%]'>
            {t('spectra_sub_intro')}
          </p>
        </div>

        {/* IMAGE */}
        <Image
          src='/intro.webp'
          alt='hero-section-img'
          priority
          width={420}
          height={409}
          quality={100}
          className='w-full h-auto object-contain shrink min-w-40 max-w-[420px]'
        />
      </div>

      {/* BUTTONS */}
      <div className='mt-5 lgl:-mt-32 flex flex-col gap-3'>
        <Button
          variant='secondary'
          className='w-full mdl:max-w-96 mdl:text-xl'
          aria-label='book a 30 minute free consultation'
        >
          {t('book_a_30_minute_paid_consultation')}
        </Button>
        <IntroVideo>
          <Button
            className='w-full mdl:max-w-96 mdl:text-xl'
            aria-label='get to know us'
          >
            <PlayIcon className='size-5 mdl:size-6 text-greenMain' />
            {t('get_to_know_us')}
          </Button>
        </IntroVideo>
      </div>
    </Container>
  );
};
