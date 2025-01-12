import { formatTimeForUserTimezone } from '@/lib/time';
import CalenderIcon from '@/assets/icons/calender';
import DeleteIcon from '@/assets/icons/delete';

export const WorkScheduleCard = ({
  dayName = '',
  times = [],
  deletable = false,
  onDelete = () => {},
}) => {
  const t = useTranslations('general_obj');

  return (
    <div className='flex items-center gap-2 *:shrink-0'>
      <div className='rounded-2xl border-[5px] border-blueLight py-4 px-6 flex items-center gap-10 h-24'>
        <div className='flex items-center gap-5 font-bold text-xs mdl:text-base'>
          <CalenderIcon className='size-5 mdl:size-6 shrink-0' />
          <p className='min-w-24'>{dayName}</p>
        </div>

        <div className='flex-1'>
          {times?.map((time) => (
            <div
              key={`${time.from}-${time.to}`}
              className='flex items-center gap-7 text-xs mdl:text-base'
            >
              <span>
                <span className='text-grayDark'>
                  {`${t('from')} / `}
                </span>
                {formatTimeForUserTimezone(time.from)}
              </span>
              <span>
                <span className='text-grayDark'>{`${t(
                  'to'
                )} / `}</span>
                {formatTimeForUserTimezone(time.to)}
              </span>
            </div>
          ))}
        </div>
      </div>
      {deletable && (
        <div
          role='button'
          onClick={onDelete}
          className='size-9 flex items-center justify-center border border-red rounded-md'
        >
          <DeleteIcon />
        </div>
      )}
    </div>
  );
};
