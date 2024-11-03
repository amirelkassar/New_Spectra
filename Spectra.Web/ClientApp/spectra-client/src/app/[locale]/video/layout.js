import ModalReq from '@/components/modalReq';
import HeaderVideo from './_components/headerVideo';

function layout({ children }) {
  return (
    <div className='relative flex flex-col min-h-screen'>
      <HeaderVideo />

      <main className='flex-1 flex flex-col justify-end h-full'>
        {children}
      </main>
      <ModalReq />
    </div>
  );
}

export default layout;
