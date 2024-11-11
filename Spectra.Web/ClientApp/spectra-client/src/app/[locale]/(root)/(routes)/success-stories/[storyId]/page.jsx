import { Story } from './story';
import { storiesData } from '@/lib/demoData';

const StoryPage = ({ params: { storyId } }) => {
  const story = storiesData.find(
    (story) => story.id === storyId
  );

  return (
    <main>
      <Story data={story} />
    </main>
  );
};

export default StoryPage;
