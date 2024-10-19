import { childPopupData } from '@/lib/demoData';
import ChildPopover from '../../../_components/child-popover';
import { cn } from '@/lib/utils';
import PlayIcon from '@/assets/icons/play';
import FileIcon from '@/assets/icons/file';
import CheckedIcon from '@/assets/icons/checked';
import Card from '@/components/card';

const stepsData = [
  {
    id: 1,
    title: `خطوة 1`,
    description: 'تصوير فيديو للطفل',
    isDone: true,
    icon: <PlayIcon className='lg:size-10 size-5' />,
  },
  {
    id: 2,
    title: `خطوة 2`,
    description: 'تحميل ملفات للطفل بعد اول جلسة علاجية',
    isDone: false,
    icon: <FileIcon className='lg:w-8 lg:h-10' />,
  },
];

export const Steps = () => {
  return (
    <section className='space-y-5'>
      <ChildPopover data={childPopupData} />
      <Card>
        {stepsData.map((step) => (
          <Step {...step} />
        ))}
      </Card>
    </section>
  );
};

const Step = ({ title, isDone = false, description, id, icon }) => {
  return (
    <div className='text-black py-5 border-b border-grayDark last:border-transparent flex items-center justify-between'>
      <div className='flex items-center gap-5'>
        {/* ICON */}
        <div className='shrink-0'>{icon}</div>

        {/* TITLE & DESCRIPTION */}
        <div>
          <h4 className='text-xs lg:text-base font-bold'>{title}</h4>
          <p className='text-sm lg:text-medium'>{description}</p>
        </div>
      </div>

      {/* IS DONE ICON */}
      <div>
        <CheckedIcon className='lg:size-9' checked={isDone} />
      </div>
    </div>
  );
};
