import { DoctorSidebar } from './_components/layouts/doctor-sidebar';
import { Header } from './_components/layouts/header';

export default function DoctorLayout({ children }) {
  return (
    <div className='relative flex flex-col lg:gap-4 px-3 mdl:px-4 xl:px-8 py-5 min-h-screen'>
      <Header />
      <div className='flex-1 h-full flex'>
        <DoctorSidebar />
        <main className='bg-white lg:bg-grayBlueLight lg:rounded-3xl xl:rounded-[36px] flex-1 overflow-hidden py-4 lg:p-6 xl:p-9'>
          {children}
        </main>
      </div>
    </div>
  );
}
