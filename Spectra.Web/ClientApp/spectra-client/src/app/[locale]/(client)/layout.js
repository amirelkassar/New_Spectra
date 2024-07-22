import { Header } from './_components/header';
import Sidebar from './_components/sidebar';

const Layout = ({ children }) => {
  return (
    <div className='relative flex flex-col gap-4 px-4 xl:px-8 py-5 gap-x-5 min-h-screen'>
      <Header />
      <div className='space-y-5 flex-1 h-full flex'>
        <Sidebar />
        <main className='bg-grayBlueLight max-w-[100%] rounded-3xl xl:rounded-[35px] grow overflow-auto p-0 ms:p-4 lg:p-3 xl:p-6'>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
