import { storiesData } from '@/lib/demoData';
import { SuccessStories } from '../(home)/_components/success-stories';
import { MobileApp } from '../team/_components/mobile-app';
import { Intro } from './_components/intro';

const StoriesPage = () => {
  return (
    <main>
      <Intro />
      <SuccessStories type={null} data={storiesData} />

      <div className='mb-14'>
        <MobileApp />
      </div>
    </main>
  );
};

export default StoriesPage;
