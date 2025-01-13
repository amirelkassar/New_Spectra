import { Logo } from '@/components/logo';
import { NotFound404 } from '@/components/not-found-404';

const NotFound = () => {
  return (
    <main className='h-screen flex flex-col p-4 mdl:p-8'>
      <Logo />
      <div className='flex-1 flex justify-center items-center'>
        <NotFound404 toHome className='h-fit flex-none' />
      </div>
    </main>
  );
};

export default NotFound;
