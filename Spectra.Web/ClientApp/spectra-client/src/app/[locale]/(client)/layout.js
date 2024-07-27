import { Header } from './_components/header';
import Sidebar from './_components/sidebar';

const Layout = ({ children }) => {
  return (
    <div className='relative flex flex-col gap-4 px-4 xl:px-8 py-5 gap-x-5 min-h-screen'>
      <Header />
      <div className='flex-1 h-full flex'>
        <Sidebar />
        <main className='bg-grayBlueLight max-w-[100%] rounded-3xl xl:rounded-[35px] grow flex-1 overflow-hidden p-0 mdl:p-4 xl:p-6'>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
