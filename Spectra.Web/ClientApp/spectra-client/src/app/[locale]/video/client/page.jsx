import { DynamicContent } from './_components/dynamic-content';
import { Video } from './_components/video';

const ClientVideoPage = () => {
  return (
    <div className='flex-1 lgl:grid lgl:grid-cols-12 flex flex-col-reverse bg-white'>
      <DynamicContent className='lgl:col-span-3' />
      <Video />
    </div>
  );
};

export default ClientVideoPage;
