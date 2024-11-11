import {
  Header,
  Footer,
} from '@/guest/_components/layouts';

const Layout = ({ children }) => {
  return (
    <div className='overflow-hidden relative'>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
