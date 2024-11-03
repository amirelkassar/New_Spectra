import DashboardHeader from '@/components/dashboard-header';
import { Logo } from '@/components/logo';

const HeaderVideo = () => {
  return (
    <DashboardHeader className='justify-between lgl:py-10 px-4 bg-transparent lgl:bg-white lg:h-9 lgl:h-16 fixed lgl:relative z-30 opacity-80 lgl:opacity-100 w-full top-3 lgl:top-auto'>
      <Logo href='#' className='h-8 mdl:h-9' />

      <DashboardHeader.Notifications />
    </DashboardHeader>
  );
};

export default HeaderVideo;
