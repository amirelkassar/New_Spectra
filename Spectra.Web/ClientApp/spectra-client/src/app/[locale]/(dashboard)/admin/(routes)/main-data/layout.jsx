import Card from '@/components/card';
import MainDataAside from './_components/main-data-aside';

export default function MainDataLayout({ children }) {
  return (
    <div className='flex flex-col lg:flex-row gap-5 h-full'>
      <MainDataAside />
      <Card className='flex-1 overflow-hidden !p-0'>{children}</Card>
    </div>
  );
}
