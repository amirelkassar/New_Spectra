import { useTranslations } from 'next-intl';

import { cn } from '@/lib/utils';
import { ActionButtons } from '@/components/buttons/action-buttons';
import { convertTo12HourFormat } from '@/lib/time';
import CalenderIcon from '@/assets/icons/calender';

export const WorkScheduleCard = ({
  dayName = '',
  times = [],
  showActions = false,
  onDelete = () => {},
  onEdit = () => {},
}) => {
  return (
    <div className='rounded-2xl border-[5px] border-blueLight py-4 px-6 flex flex-col gap-y-3 gap-x-1 2xl:flex-row 2xl:items-center min-h-24'>
      <div className='flex items-center gap-5 font-bold text-xs mdl:text-base'>
        <CalenderIcon className='size-5 mdl:size-6 shrink-0' />
        <p className='min-w-20 mdl:min-w-24'>{dayName}</p>
      </div>

      <div className='flex-1 space-y-1'>
        {times?.map((time) => (
          <div
            key={`${time.from}-${time.to}`}
            className={cn('', showActions && 'flex gap-2')}
          >
            <Time {...time} />

            {showActions && (
              <ActionButtons className='gap-2 flex-row'>
                <ActionButtons.Delete
                  className='size-7 mdl:size-8'
                  onClick={() => onDelete(time.id)}
                />

                <ActionButtons.Edit
                  onClick={() => onEdit(time)}
                  className='text-greenMain size-7 mdl:size-8'
                />
              </ActionButtons>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const Time = ({ id = '', from = '', to = '' }) => {
  const t = useTranslations('general_obj');

  const timeFrom = convertTo12HourFormat(from);
  const timeTo = convertTo12HourFormat(to);

  return (
    <div
      data-id={id}
      className='flex items-center justify-center gap-7 text-xs mdl:text-base bg-blueLighter px-4 py-1 rounded-xl min-w-52 mdl:min-w-72 shrink-0'
    >
      <span>
        <span className='text-grayDark'>{`${t('from')} / `}</span>
        {timeFrom}
      </span>
      <span>
        <span className='text-grayDark'>{`${t('to')} / `}</span>
        {timeTo}
      </span>
    </div>
  );
};
