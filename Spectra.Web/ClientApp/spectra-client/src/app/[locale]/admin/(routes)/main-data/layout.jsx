import MainDataAside from './_components/main-data-aside';
import Card from '@/components/card';

export default function FamilyLayout({ children }) {
  return (
    <div className='flex flex-col lg:flex-row gap-5 h-full'>
      <MainDataAside />
      <Card>{children}</Card>
    </div>
  );
}
