import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';

export const PackageContent = ({
  content = [],
  className = '',
  locale = 'ar',
}) => {
  const key = locale === 'ar' ? 'arName' : 'enName';

  const t = useTranslations('packages_obj');

  return (
    <div
      className={cn(
        'border border-greenMain border-t-0 rounded-t-none rounded-3xl space-y-5 -mt-10 pt-10 bg-[#F9FEFF]',
        className
      )}
    >
      <div className='p-5'>
        <h4 className='text-sm mdl:text-xl font-bold'>
          {t('content')}
        </h4>

        <ul className='p-5'>
          {content?.map((item, index) => (
            <li
              key={index + 1}
              className='text-sm ps-8 mdl:text-xl py-3 relative after:absolute after:h-full after:w-[1px] after:border after:border-dashed after:border-greenMain after:start-3 after:ltr:-translate-x-1/2 after:translate-x-1/2 after:top-6 after:last:border-0'
            >
              <span className='absolute start-0 top-1/2 -translate-y-1/2 text-white bg-greenMain size-6 rounded-full font-bold flex items-center justify-center z-10 text-[15px]'>
                {item?.order || index + 1}
              </span>
              {item[key]}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
