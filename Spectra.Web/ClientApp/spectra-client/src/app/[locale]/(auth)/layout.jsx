import Logo from '@/assets/icons/logo';
import ROUTES from '@/routes';
import { Link } from '@/navigation';
import ArrowLeft from '@/assets/icons/arrow-left';
import MessageIcon from '@/assets/icons/message';
import Button from '@/components/button';
import Image from 'next/image';
import authImage from '@/assets/images/auth.png';

export default function authLayout({ children }) {
  return (
    <>
      <header className='container py-8 w-full max-w-[1400px] mx-auto'>
        <Link href={ROUTES.HOME}>
          <Logo />
        </Link>
      </header>

      <main className='w-full mdl:flex mdl:gap-10 mdl:*:flex-1 text-black container max-w-[1400px] mx-auto'>
        {children}

        <section className='mx-auto w-fit hidden mdl:flex mdl:flex-col mdl:justify-between gap-5'>
          <div className='w-fit rounded-2xl overflow-hidden'>
            <Image
              src={authImage}
              alt='Child Image'
              className='w-full max-h-[716px]'
              priority
              width={502}
              height={716}
            />
          </div>
          <div className='flex items-center flex-col lg:flex-row gap-5 *:flex-1'>
            <Link
              href='#'
              className='flex w-full items-center justify-center gap-3 p-2 border border-black rounded-lg transition hover:border-greenMain text-medium'
            >
              <MessageIcon />
              طلب المساعدة
            </Link>
            <Link
              href={ROUTES.HOME}
              className='flex w-full items-center justify-center gap-3 p-2 border border-black rounded-lg transition hover:border-greenMain text-medium'
            >
              العودة للرئيسية
              <ArrowLeft className='ltr:rotate-180' />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
