import { Header } from './_components/header';
import { Footer } from './_components/footer';

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
