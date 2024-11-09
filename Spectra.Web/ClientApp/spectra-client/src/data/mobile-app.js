import GooglePlayIcon from '@/assets/icons/google-play';
import AppStoreIcon from '@/assets/icons/app-store';
import MobileAppIMG from '@/assets/images/mobile-app.png';

export const MOBILE_APP = {
  info: 'سبيكترا هو أول مركز طب إتصالي و رعاية عن بعد، يقوم بتشخيص و علاج و رعاية إضطرابات تطور و سلوك الاطفال، عن طريق فرقنا المتعددة التخصصات المختارة بعناية، وفق جودة و معايير فنية و مهنية عالمية .',
  mobileApp: MobileAppIMG.src,
  qr: '/demo-qr-code.png',
  googleIcon: (
    <GooglePlayIcon className='mdl:w-48 w-20 h-6 mdl:h-14' />
  ),
  appStoreIcon: (
    <AppStoreIcon className='mdl:w-48 w-20 h-6 mdl:h-14' />
  ),
};
