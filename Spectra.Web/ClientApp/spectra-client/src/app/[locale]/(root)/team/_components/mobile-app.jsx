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
                src='https://s3-alpha-sig.figma.com/img/dac5/f531/c89cb95d4a9de011538498aa7e9c5156?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A3Xw7RGaB2dPygrW1F2pQcpTDq~tHHD~V0JXn2fGlD0Gda4h7Hh5tzwxkDldBFCZiNqp4bsilYeXJ6Yj4kQnOi2M1QuwGdT~1z2qklej-Fl-t9kLlZ56~bttpvDZgwk3XYg2PfKKSNSaF~gvFp3RH7NHkn4x3NKB-IepP1FhFzEWHX9VofASMYAu2KxwiGco8azOb-MUpKahvF0w46dW9aJgf6EcqatAUOmppzd5fOga8uIm~W7-HulQOsEx0Pmd-5--1sWOFg8cZvu60mtGphfWfyhKu3Yojg42d0Il645GGjonivNOUuCLMhFkz6ZwJD8qONmhkr93ikvNEvg9~Q__'
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

      <div className='absolute top-14 end-0 w-3/6 h-full'>
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
