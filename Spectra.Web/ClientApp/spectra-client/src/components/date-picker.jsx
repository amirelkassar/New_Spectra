import {
  DatePicker as MantineDatePicker,
  DatePickerProps,
} from '@mantine/dates';
import { Indicator } from '@mantine/core';
import { cn } from '@/lib/utils';

/**
 * @typedef {Object} DatePickerProps

 */

/**
 * @param {DatePickerProps} props
 */

export const DatePicker = ({ locale = 'en', ...props }) => {
  return (
    <div
      className={cn('w-full max-w-2xl', props.className)}
    >
      <MantineDatePicker
        size='xl'
        minDate={new Date()}
        locale={locale}
        weekdayFormat={'ddd'}
        firstDayOfWeek={6}
        renderDay={dayRenderer}
        weekendDays={[5]}
        excludeDate={(date) => date.getDay() === 5}
        allowDeselect
        getDayProps={() => {
          return {
            className:
              'data-[selected=true]:bg-greenMain rounded-full hover:!bg-greenLight hover:data-[selected=true]:!bg-greenMain text-sm mdl:text-base',
          };
        }}
        classNames={{
          levelsGroup: '*:flex-1',
          calendarHeader: 'min-w-full',
          month: 'min-w-full',
          weekday:
            'text-center text-black font-bold text-sm mdl:text-base',
          monthCell: 'text-center font-medium',
          calendarHeaderLevel:
            'text-base mdl:text-xl text-greenMain hover:!bg-blueLighter rounded-xl',
          calendarHeaderControl:
            'text-greenMain hover:!bg-blueLighter rounded-xl',
          calendarHeaderControlIcon: '!w-[70%] !h-[70%]',
        }}
        {...props}
      />
    </div>
  );
};

const dayRenderer = (date) => {
  const day = date.getDate();
  return (
    <Indicator
      size={7}
      color='#10B0C1'
      offset={-4}
      disabled={day !== new Date().getDate()}
    >
      <div>{day}</div>
    </Indicator>
  );
};
