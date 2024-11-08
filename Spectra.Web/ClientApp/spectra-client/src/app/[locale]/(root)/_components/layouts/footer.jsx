import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';

import { Nav } from '@/guest/_components/layouts';
import { Logo } from '@/components/logo';
import { NAVDATA } from '@/data';
import { RegisterModal } from '@/guest/_components/sections';

import TamaraIcon from '@/assets/icons/tamara';
import TabbyIcon from '@/assets/icons/tabby';
import YoutubeIcon from '@/assets/icons/youtube';
import TwitterXIcon from '@/assets/icons/twitter-x';
import FacebookIcon from '@/assets/icons/facebook';
import ROUTES from '@/routes';

const bgImage = '/demo-footer-bg.png';

export const Footer = () => {
  return (
    <footer className='footer-cn'>
      {/* Footer IMG AND SUBSCRIBE */}
      <EmailSubscription />

      {/* PAYMENT METHODS */}
      <PaymentMethods />

      {/* NAV & SOCIAL */}
      <div className='py-3 px-16 lg:px-10 flex items-center justify-between mx-auto'>
        <NavLinks />

        <Social />
      </div>

      {/* LOGO & PARAGRAPH */}
      <LogoAndRegister />

      {/* COPYRIGHT */}
      <Copyright />
    </footer>
  );
};

const EmailSubscription = () => {
  const t = useTranslations();
  return (
    <div
      className='w-full bg-cover bg-center bg-no-repeat relative before:absolute before:w-full before:h-full before:bg-greenMain/60 top-0 start-0'
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className='mdl:p-14 p-8 space-y-5'>
        <div className='text-white text-center text-base mdl:text-3xl relative space-y-3'>
          <h5 className='font-bold'>
            {t('be_part_of_our_family')}
          </h5>

          <p className='font-light'>
            {t('subscribe_to_our_newsletter')}
          </p>
        </div>

        <Link
          href={ROUTES.AUTH.SIGNUP_FAMILY}
          className='bg-white text-sm mdl:text-medium text-black font-bold px-3 py-2 relative rounded-full mdl:rounded-lg text-center mdl:min-w-72 w-fit block mx-auto'
        >
          {t('subscribe_now')}
        </Link>
      </div>
    </div>
  );
};

const PaymentMethods = () => {
  const t = useTranslations();

  return (
    <div className='bg-blueLight text-sm mdl:text-3xl text-black font-bold p-2 mdl:p-7 flex items-center justify-center gap-5'>
      <p>{t('we_accept_instalments_from')}</p>

      <TamaraIcon className='w-14 mdl:w-28' />
      <TabbyIcon className='w-14 mdl:w-28' />
    </div>
  );
};

const NavLinks = () => {
  const t = useTranslations();
  return (
    <div className='flex gap-x-6'>
      <Nav navLinks={NAVDATA} className='hidden lg:flex' />
      <Link
        href={ROUTES.AUTH.SIGNUP_PROVIDER}
        className='text-xs mdl:text-base text-black font-bold'
      >
        {t('join_as_doctor')}
      </Link>
    </div>
  );
};

const SOCIALDATA = [
  {
    icon: <YoutubeIcon className='size-6' />,
    href: '#',
  },
  {
    icon: <TwitterXIcon className='size-6' />,
    href: '#',
  },
  {
    icon: <FacebookIcon className='size-6' />,
    href: '#',
  },
];

const Social = () => {
  return (
    <div className='flex items-center gap-5'>
      {SOCIALDATA.map(({ icon, href }) => (
        <Link
          key={href}
          href={href}
          className='text-black text-3xl'
        >
          {icon}
        </Link>
      ))}
    </div>
  );
};

const LogoAndRegister = () => {
  const t = useTranslations();

  return (
    <div className='flex gap-5 flex-col mdl:flex-row items-center mdl:justify-between px-3 mdl:px-5 lg:px-10 mx-auto py-3'>
      <Logo className='h-10' />

      <p className='text-black text-xs mdl:text-base'>
        {t('spectra_description')}
      </p>

      <RegisterModal>{t('register')}</RegisterModal>
    </div>
  );
};

const Copyright = () => {
  const t = useTranslations();
  return (
    <div className='text-xs px-3 mdl:px-5 lg:px-10 mdl:text-base text-black mx-auto py-5 border-t border-t-grayMedium flex gap-10 items-center justify-center mdl:justify-between flex-wrap'>
      <div className='flex items-center gap-x-10 text-center'>
        <Link href='#'>{t('terms_and_conditions')}</Link>

        <Link href='#'>{t('privacy_policy')}</Link>

        <p>©️ {t('copyright')}</p>
      </div>

      <Link className='text-center' href='#'>
        {t('made_by_profound')}
      </Link>
    </div>
  );
};
