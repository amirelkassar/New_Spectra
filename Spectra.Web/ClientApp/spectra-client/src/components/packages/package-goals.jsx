import { cn } from '@/lib/utils';

export const PackageGoals = ({
  goals = [],
  className = '',
  locale = 'ar',
}) => {
  const key = locale === 'ar' ? 'arName' : 'enName';

  return (
    <div
      className={cn(
        'border border-greenMain bg-[#F9FEFF] mt-5 rounded-3xl space-y-5',
        className
      )}
    >
      <div className='p-5'>
        <h4 className='text-sm mdl:text-xl font-bold'>
          الهدف من الباقة
        </h4>

        <ul className='p-5'>
          {goals?.map((item, index) => (
            <li
              key={item?.id || index}
              className='text-sm ps-4 mdl:text-xl py-3 relative'
            >
              <span className='absolute start-0 top-1/2 -translate-y-1/2 text-white bg-greenMain size-2 rounded-full font-bold flex items-center justify-center z-10' />
              {item[key] || item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
