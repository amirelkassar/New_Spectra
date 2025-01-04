import {
  MobileApp,
  SuccessStories,
} from '@/guest/_components/sections';
import { Intro } from './_components/intro';
import { MOBILE_APP, STORIES } from '@/data';

const StoriesPage = () => {
  return (
    <main>
      <Intro />
      <SuccessStories data={STORIES} />
      <MobileApp data={MOBILE_APP} />
    </main>
  );
};

export default StoriesPage;
