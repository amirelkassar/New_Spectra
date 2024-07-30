import { cn } from '@/lib/utils';

export const TabsFilter = ({
  data = [{ label: '', icon: '' }],
  className = '',
  setTab = () => {},
  tab = 'الكل',
}) => {
  return (
    <div className={cn('flex items-center *:flex-1', className)}>
      {data.map((t) => (
        <div className='border-e border-grayMedium last:border-transparent flex justify-center'>
          <button
            key={t?.label}
            onClick={() => setTab(t?.label)}
            className={cn(
              'flex items-center gap-2 px-7 py-1 rounded-lg hover:bg-blueLight font-bold text-xs lg:text-base',
              {
                'bg-blueLight': tab === t?.label,
              }
            )}
          >
            {t?.icon}
            {t?.label}
          </button>
        </div>
      ))}
    </div>
  );
};
