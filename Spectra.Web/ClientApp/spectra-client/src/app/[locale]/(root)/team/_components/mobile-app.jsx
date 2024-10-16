import Image from 'next/image';

import { Section } from '../../_components/section';
import rectangleEffectBg from '@/assets/images/rectangle-effect-bg.png';
import MobileAppIMG from '@/assets/images/mobile-app.png';
import GooglePlayIcon from '@/assets/icons/google-play';
import AppStoreIcon from '@/assets/icons/app-store';

export const MobileApp = () => {
  return (
    <Section
      aria-label='Mobile App'
      aria-labelledby='mobile-app'
      id='mobile-app'
      className='relative'
    >
      <div className='bg-greenMain px-5 mdl:px-20 py-10 rounded-3xl overflow-hidden relative w-5/6'>
        <div
          className='w-full h-full bg-cover bg-center absolute top-0 start-0 opacity-10'
          style={{
            backgroundImage: `url(${rectangleEffectBg.src})`,
          }}
        />
        <div className='w-5/6 space-y-5 relative z-10'>
          <h2
            id='mobile-app'
            className='text-base mdl:text-3xl text-white'
          >
            حمل تطبيق سبيكترا الان
          </h2>
          <p className='text-sm mdl:text-medium text-white'>
            سبيكترا هو أول مركز طب إتصالي و رعاية عن بعد،
            يقوم بتشخيص و علاج و رعاية إضطرابات تطور و سلوك
            الاطفال، عن طريق فرقنا المتعددة التخصصات
            المختارة بعناية، وفق جودة و معايير فنية و مهنية
            عالمية .
          </p>
          <div className='flex items-center justify-between'>
            <div className='mdl:size-32 size-14 rounded-2xl bg-white flex items-center justify-center overflow-hidden'>
              <Image
                src='/demo-qr-code.png'
                alt='mobile app barcode'
                width={112}
                height={112}
                priority
                className='mdl:size-28 size-11'
              />
            </div>
            <div className='*:block space-y-3'>
              <a target='_blank' href='#'>
                <GooglePlayIcon className='mdl:w-48 w-20 h-6 mdl:h-14' />
              </a>

              <a target='_blank' href='#'>
                <AppStoreIcon className='mdl:w-48 w-20 h-6 mdl:h-14' />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='absolute top-5 end-2 w-2/6 h-full'>
        <Image
          src={MobileAppIMG}
          alt='mobile app'
          width={598}
          height={918}
          priority={false}
          className='object-contain w-full h-full'
        />
      </div>
    </Section>
  );
};
