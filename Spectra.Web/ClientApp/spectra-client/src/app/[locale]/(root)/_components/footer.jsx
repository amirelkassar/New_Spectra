import { Link } from '@/navigation';
import ROUTES from '@/routes';
import TamaraIcon from '@/assets/icons/tamara';
import TabbyIcon from '@/assets/icons/tabby';
import { Nav } from './nav';
import { NAVDATA } from './header';
import YoutubeIcon from '@/assets/icons/youtube';
import TwitterXIcon from '@/assets/icons/twitter-x';
import FacebookIcon from '@/assets/icons/facebook';
import Logo from '@/assets/icons/logo';

const bgImage =
  'https://s3-alpha-sig.figma.com/img/ec12/0f42/c55a3cb0d850332e4a18da5e8692b5b2?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kMFQylW-HObuE97x26sn4msuvzpY5NW97JbMGi5AIjZKZzeIoliFXjQihYeDdoPA2anAvQimRYskSfNIHdardYxVPnmwEBY5blL4IJQ6-q~U81nebgc5gRDjrf8nk92BmyRNunw8vBsvF~YGy5ZQTcBkW1vSrDyMMQJ1BtR47Gf6paw9BXQ-1ZM7jjOEadFVROgM3LHLBIQ07TvV9~AC0lC9fIiD1lYbTWRTve2ysp6UmXAC41ndnBfZQT3S06P8dEbNUtHhO699Lt31qDXxBsQFupwuxhhqaQxikRpSXIs0L5UqbxVGEJ0ULeWVOG8r6fNa2~D6uVYOWbsqjw~jeg__';

const socialData = [
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

export const Footer = () => {
  return (
    <div>
      {/* Footer IMG AND SUBSCRIBE */}
      <div
        className='w-full bg-cover bg-center bg-no-repeat relative before:absolute before:w-full before:h-full before:bg-greenMain/60 top-0 start-0'
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className='mdl:p-14 p-8 space-y-5'>
          <div className='text-white text-center text-base mdl:text-3xl relative space-y-3'>
            <h5 className='font-bold'>
              ندعوك لتكون جزءا من عائلتنا
            </h5>

            <p className='font-light'>
              اشترك في قائمتنا البريدية لتصلك كافة أخبارنا
              أول بأول
            </p>
          </div>

          <Link
            href={ROUTES.AUTH.SIGNUP_FAMILY}
            className='bg-white text-sm mdl:text-medium text-black font-bold px-3 py-2 relative rounded-full mdl:rounded-lg text-center mdl:min-w-72 w-fit block mx-auto'
          >
            اشترك الان
          </Link>
        </div>
      </div>

      {/* PAYMENT METHODS */}
      <div className='bg-blueLight text-sm mdl:text-3xl text-black font-bold p-2 mdl:p-7 flex items-center justify-center gap-5'>
        <p>نقبل الدفع بالتقسيط عن طريق</p>

        <TamaraIcon className='w-14 mdl:w-28' />
        <TabbyIcon className='w-14 mdl:w-28' />
      </div>

      {/* NAV & SOCIAL */}
      <div className='py-3 px-16 lg:px-3 flex items-center justify-between container max-w-5xl mx-auto'>
        <Nav
          navLinks={NAVDATA}
          className='hidden lg:block'
        />
        <Link
          href={ROUTES.AUTH.SIGNUP_PROVIDER}
          className='text-xs mdl:text-base text-black font-bold'
        >
          انضم كأخصائي
        </Link>
        <div className='flex items-center gap-5'>
          {socialData.map(({ icon, href }) => (
            <Link
              key={href}
              href={href}
              className='text-black text-3xl'
            >
              {icon}
            </Link>
          ))}
        </div>
      </div>

      {/* LOGO & PARAGRAPH */}
      <div className='flex gap-5 flex-col mdl:flex-row items-center mdl:justify-between container max-w-5xl mx-auto py-3'>
        <Link href={ROUTES.ROOT.HOME}>
          <Logo className='w-28 h-11' />
        </Link>

        <p className='text-black text-xs mdl:text-base'>
          أول مركز طب إتصالي و رعاية عن بعد، يقوم بتشخيص و
          علاج و رعاية إضطرابات تطور و سلوك الاطفال، عن طريق
          فرقنا المتعددة التخصصات المختارة بعناية، وفق جودة
          و معايير فنية و مهنية عالمية
        </p>

        <Link
          className='text-xs mdl:text-base text-white font-bold bg-greenMain px-3 py-2 text-center rounded-lg w-full mdl:max-w-44'
          href={ROUTES.AUTH.SIGNUP_FAMILY}
        >
          اشترك الان
        </Link>
      </div>

      {/* COPYRIGHT */}
      <div className='text-xs mdl:text-base text-black container max-w-5xl mx-auto py-5 border-t border-t-grayMedium flex gap-10 items-center justify-center flex-wrap'>
        <Link href='#'>سياسة الخصوصية</Link>

        <Link href='#'>سياسة ملفات تعريف الارتباط</Link>

        <p>حقوق النشر @  مركز سبيكترا الطبي </p>

        <Link href='#'>صنع بوساطة شركة بروفاوند جروب</Link>
      </div>
    </div>
  );
};
