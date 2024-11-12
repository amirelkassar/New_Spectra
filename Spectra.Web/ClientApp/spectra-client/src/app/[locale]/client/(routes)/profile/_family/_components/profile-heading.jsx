import { H1 } from '@/client/_components/ui';
import { AddChild } from './add-child';

export const ProfileHeading = () => {
  return (
    <div className='flex items-center gap-5 mt-5 lg:mt-0 mb-5'>
      <H1 id='family-profile'>ملفي</H1>

      <AddChild />
    </div>
  );
};
