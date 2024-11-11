import ConfirmModal from '@/components/modal/confirm-modal';
import { Header, Sidebar } from '../_components/layout';

const Layout = ({ children }) => {
  return (
    <div className='relative flex flex-col lg:gap-4 px-4 xl:px-8 py-5 min-h-screen'>
      <Header />
      <div className='flex-1 h-full flex'>
        <Sidebar />
        <main className='bg-grayBlueLight rounded-3xl xl:rounded-[36px] flex-1 overflow-hidden lg:p-4 xl:p-6'>
          {children}
        </main>
      </div>
      <ConfirmModal />
    </div>
  );
};

export default Layout;
