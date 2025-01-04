import { STORIES } from '@/data';
import { Story } from './story';

const StoryPage = ({ params }) => {
  const storyId = params?.storyId || '';

  const story = STORIES.find((story) => story.id === storyId);

  return (
    <main>
      <Story data={story} />
    </main>
  );
};

export default StoryPage;
