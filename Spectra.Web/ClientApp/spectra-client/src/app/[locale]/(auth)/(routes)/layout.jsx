import ROUTES from '@/routes';
import { Link } from '@/navigation';
import ArrowLeft from '@/assets/icons/arrow-left';
import MessageIcon from '@/assets/icons/message';
import Image from 'next/image';
import authImage from '@/assets/images/auth.png';
import { Logo } from '@/components/logo';
import Button from '@/components/button';

export default function AuthLayout({ children }) {
  return (
    <main className='relative w-full px-5 xl:px-14 text-black max-w-[1600px] flex *:flex-1 gap-10 mx-auto mdl:min-h-screen'>
      <section className='px-5 py-10 h-full w-full space-y-10'>
        <Logo className='w-24 mdl:w-32' />
        {children}
      </section>

      <section className='hidden mdl:flex flex-col gap-10 items-center sticky top-0 h-screen pt-10'>
        <div className='rounded-2xl relative overflow-hidden w-full h-full max-w-[502px] max-h-[716px]'>
          <Image
            priority
            src={authImage}
            alt='Child Image'
            className='object-cover object-center max-w-full max-h-full h-auto w-full'
            sizes='width: 502px; height: 716px'
            fill
          />
        </div>
        <div className='flex flex-col lg:flex-row gap-5'>
          <Link href='#'>
            <Button className='text-nowrap'>
              <MessageIcon className='size-6' />
              طلب المساعدة
            </Button>
          </Link>
          <Link href={ROUTES.HOME}>
            <Button className='text-nowrap'>
              العودة للرئيسية
              <ArrowLeft className='ltr:rotate-180' />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
