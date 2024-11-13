import { H1 } from '@/client/_components/ui';
import { AddChild } from './add-child';

export const FamilyHeading = ({ hasChild = false }) => {
  if (!hasChild)
    return (
      <H1 className='mt-5 mdl:mt-0' id='family-profile'>
        ملفي
      </H1>
    );
  return (
    <div className='flex items-center justify-between lg:justify-normal gap-5 mt-5 mdl:mt-0'>
      <H1 id='family-profile'>ملفي</H1>

      <AddChild />
    </div>
  );
};
