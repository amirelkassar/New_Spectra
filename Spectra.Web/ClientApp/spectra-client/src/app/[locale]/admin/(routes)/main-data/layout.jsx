import MainDataAside from './_components/main-data-aside';
import Card from '@/components/card';

export default function FamilyLayout({ children }) {
  return (
    <div className='my-5 md:m-0 md:p-5 lg:p-3 md:h-full flex flex-col lg:flex-row gap-5'>
      <MainDataAside />
      <Card>{children}</Card>
    </div>
  );
}
