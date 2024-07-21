import { Header } from './_components/header';

const Layout = ({ children }) => {
  return (
    <div className='container'>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
