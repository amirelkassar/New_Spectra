import MainDataAside from './_components/main-data-aside';

export default function MainDataLayout({ children }) {
  return (
    <div className='flex flex-col lg:flex-row gap-5 h-full'>
      <MainDataAside />
      {children}
    </div>
  );
}
