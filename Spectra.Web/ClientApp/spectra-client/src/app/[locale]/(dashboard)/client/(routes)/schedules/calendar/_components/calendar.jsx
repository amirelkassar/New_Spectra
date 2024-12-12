'use client';

import './calendar.css';
import { useLocale } from 'next-intl';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

export const Calendar = () => {
  const locale = useLocale();

  return (
    <div className='calendar_wrapper'>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
        locale={locale}
        headerToolbar={{
          left: locale === 'ar' && 'prev,title,next',
          right: locale === 'en' && 'prev,title,next',
        }}
        dayHeaderClassNames='!text-darkGray !text-xs mdl:!text-base !font-medium first:!rounded-ss-2xl last:!rounded-se-2xl'
      />
    </div>
  );
};
