import { Header } from './_components/header';
import Sidebar from './_components/sidebar';

const Layout = ({ children }) => {
  return (
    <div className='relative flex flex-col gap-4 px-4 xl:px-8 py-5 gap-x-5 min-h-screen'>
      <Header />
      <div className='space-y-5 flex-1 h-full flex  '>
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
