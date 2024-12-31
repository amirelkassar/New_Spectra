import { Logo } from '@/components/logo';

const TermsLayout = ({ children }) => {
  return (
    <div className='overflow-hidden relative'>
      <Header />

      <div className='max-w-[1600px] mx-auto py-2 px-5 lg:px-10 xl:px-14'>
        {children}
      </div>
    </div>
  );
};

export default TermsLayout;

const Header = () => {
  return (
    <header
      role='banner'
      aria-label='Site header'
      className='w-full py-8 px-5 xl:px-10 flex justify-center'
    >
      <Logo className='h-8 mdl:h-10' />
    </header>
  );
};
