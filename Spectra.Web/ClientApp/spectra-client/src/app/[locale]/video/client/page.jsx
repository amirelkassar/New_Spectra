import { DynamicContent } from './_components/dynamic-content';
import { Video } from './_components/video';
import { ClientVideoProvider } from './_hooks';

const ClientVideoPage = () => {
  return (
    <ClientVideoProvider>
      <div className='flex-1 lgl:grid lgl:grid-cols-12 flex flex-col-reverse bg-white'>
        <DynamicContent />
        <Video />
      </div>
    </ClientVideoProvider>
  );
};

export default ClientVideoPage;
