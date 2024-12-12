import { Header } from '@/dashboard/_components/layouts/header';
import { Sidebar } from '@/dashboard/_components/layouts/sidebar';

const DashboardLayout = ({ children }) => {
  return (
    <div className='relative flex flex-col lg:gap-4 px-3 mdl:px-4 xl:px-8 py-5 min-h-screen'>
      <Header />
      <div className='flex-1 h-full flex'>
        <Sidebar />
        <main className='bg-white lg:bg-grayBlueLight rounded-3xl xl:rounded-[36px] flex-1 overflow-hidden lg:p-4 xl:p-6 py-4'>
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
