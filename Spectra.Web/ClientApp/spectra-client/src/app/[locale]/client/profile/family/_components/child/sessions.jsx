'use client';

import 'dayjs/locale/ar';
import { useLocale } from 'next-intl';
import { useState } from 'react';
import dayjs from 'dayjs';

import { cn } from '@/lib/utils';
import ArrowLeft from '@/assets/icons/arrow-left';
import HeartIcon from '@/assets/icons/heart';
import Card from '@/components/card';
import CalenderIcon from '@/assets/icons/calender';
import ClockWhite from '@/assets/icons/clock-white';
import FollowUpIcon from '@/assets/icons/followup';
import HandshakeIcon from '@/assets/icons/handshake';
import SessionIcon from '@/assets/icons/session';
import { BackButton } from '@/components/buttons/back-button';

import { packagesDataSpectra } from '@/lib/demoData';
import Button from '@/components/button';
import FileOutline from '@/assets/icons/file-outline';
import { PackageCard } from '@/app/[locale]/client/packages/_components/package-card';

const SESSIONS = [
  {
    id: 1,
    date: '2024-10-26T10:23:37.249Z',
    label: 'جلسة خدمة الكشف المبكر',
    doctor: 'احمد محمد كمال',
    icon: (
      <div className='bg-red/10 size-8 rounded flex justify-center items-center'>
        <HeartIcon className='size-5' />
      </div>
    ),
  },
  {
    id: 2,
    date: '2024-10-26T10:23:37.249Z',
    label: 'جلسة علاجية',
    doctor: 'احمد محمد كمال',
    icon: (
      <div className='bg-blueLight size-8 rounded flex justify-center items-center'>
        <SessionIcon className='size-5' />
      </div>
    ),
  },
  {
    id: 3,
    date: '2024-10-26T10:23:37.249Z',
    label: 'جلسة خدمة المتابعة الدوائية',
    doctor: 'احمد محمد كمال',
    icon: (
      <div className='bg-purple/10 size-8 rounded flex justify-center items-center'>
        <FollowUpIcon className='size-5' />
      </div>
    ),
  },
  {
    id: 4,
    date: '2024-10-26T10:23:37.249Z',
    label: 'جلسة خدمة التدريب',
    doctor: 'احمد محمد كمال',
    icon: (
      <div className='bg-blueLight size-8 rounded flex justify-center items-center'>
        <HandshakeIcon className='size-5' />
      </div>
    ),
  },
];

export const Sessions = () => {
  const [view, setView] = useState(null);

  const locale = useLocale();

  if (view)
    return (
      <SessionInfo
        locale={locale}
        data={view}
        onBack={() => setView(null)}
      />
    );
  else
    return SESSIONS.map((session) => (
      <SessionCard
        locale={locale}
        key={session.id}
        data={session}
        onView={setView}
        clickable
      />
    ));
};

const SessionCard = ({
  data = {},
  locale = 'ar',
  clickable = false,
  onView = () => {},
}) => {
  dayjs.locale(locale);
  const day = dayjs(data?.date).format('dddd');
  const date = dayjs(data?.date).format('YYYY/MM/DD');
  const time = dayjs(data?.date).format('hh:mm A');
  return (
    <div
      className={cn(
        'relative',
        clickable &&
          'ps-7 pb-5 before:absolute before:start-0 before:top-1/3 before:-translate-y-1/3 before:size-2 before:bg-greenMain before:rounded-full after:absolute after:start-1 after:top-1/3 after:h-full after:border-l after:border-dashed after:border-greenMain after:shrink-0 after:ltr:-translate-x-1/2 after:translate-x-1/2 after:last:border-none'
      )}
    >
      <Card
        onClick={() => {
          if (clickable) {
            onView(data);
          }
        }}
        role={clickable ? 'button' : 'div'}
        className={cn(
          'flex items-center gap-5 p-3 lg:p-5',
          clickable &&
            'transition-all lg:hover:shadow-lg border-2 border-grayLight lg:border-transparent hover:border-greenMain lg:hover:border-transparent'
        )}
      >
        {data?.icon}

        <div className='flex-1 flex flex-col gap-y-1 gap-x-5 mdl:flex-row mdl:*:flex-1'>
          <div className=''>
            <h5 className='text-sm mdl:text-xl font-bold'>
              {data?.label}
            </h5>

            <p className='text-xs mdl:text-base'>
              {locale === 'ar' ? 'الطبيب' : 'Doctor'}{' '}
              {data?.doctor}
            </p>
          </div>

          <div className='text-grayDark text-xs mdl:text-base mdl:pe-5 flex items-center gap-4 mdl:block'>
            <div className='flex items-center gap-2'>
              <CalenderIcon className='size-3' />
              {day} {date}
            </div>
            <div className='flex items-center gap-2'>
              <ClockWhite className='size-3 text-greenMain' />
              {time}
            </div>
          </div>
        </div>

        {clickable && (
          <div className='ltr:rotate-180 size-8 mdl:size-12 flex items-center justify-center bg-blueLight rounded-full shrink-0'>
            <ArrowLeft
              fill='#10B0C1'
              className='mdl:w-6 w-4'
            />
          </div>
        )}
      </Card>
    </div>
  );
};

const SessionInfo = ({
  locale = 'ar',
  data = {},
  onBack,
}) => {
  return (
    <div className='space-y-5'>
      <SessionCard data={data} locale={locale} />

      <Card
        className='border-2 border-grayLight lg:border-transparent p-3 mdl:p-5 space-y-5'
        title='الترشيحات'
      >
        {/* Packages */}
        <div className='space-y-3'>
          <h4 className='text-base mdl:text-xl'>الباقات</h4>

          <div className='grid grid-cols-2 xl:grid-cols-3 gap-5'>
            {packagesDataSpectra
              ?.slice(0, 2)
              ?.map((p, i) => (
                <PackageCard
                  className='lg:min-w-max w-auto'
                  key={i}
                  {...p}
                />
              ))}
          </div>
        </div>

        {/* Services */}
        <div className='space-y-3'>
          <h4 className='text-base mdl:text-xl'>الخدمات</h4>

          <div className='grid grid-cols-2 xl:grid-cols-3 gap-5'>
            <Service
              label='خدمات التأهيل العلاجي في مختلف التخصصات'
              icon={
                <SessionIcon className='size-8 mdl:size-12' />
              }
            />
          </div>
        </div>
      </Card>

      <TestsAndScansList
        data={[
          'الأشعة السينية x-ray',
          'الموجات فوق الصوتية (Ultrasonic)',
          'الأشعة المقطعية بالكمبيوتر (CT SCAN).',
        ]}
        title='التحاليل والاشعات الخارجية'
      />

      <PrescriptionsFiles
        title='الوصفات الطبية'
        data={[
          {
            fileName: 'Prescription.pdf',
            size: '1.2 MB',
            date: '2024-10-26T10:23:37.249Z',
          },
          {
            fileName: 'Prescription.pdf',
            size: '1.2 MB',
            date: '2024-10-26T10:23:37.249Z',
          },
        ]}
      />

      <BackButton onClick={onBack}>السابق</BackButton>
    </div>
  );
};

const Service = ({
  className = '',
  iconClassName = '',
  icon = <></>,
  label = '',
  status = 'open',
}) => {
  return (
    <div
      className={cn(
        'flex flex-col gap-5 items-center',
        className
      )}
    >
      <div
        className={cn(
          'mdl:size-20 size-16 rounded-full flex items-center justify-center bg-blueLight',
          iconClassName
        )}
      >
        {icon}
      </div>

      <h5 className='font-bold text-sm mdl:text-xl text-center'>
        {label}
      </h5>

      <Button
        variant={
          status === 'reserved' ? 'blueLight' : 'secondary'
        }
        className='py-2 font-bold'
      >
        {status === 'reserved' ? 'تم الحجز' : 'احجز الان'}
      </Button>
    </div>
  );
};

const TestsAndScansList = ({ data = [], title = '' }) => {
  if (!data.length) return null;

  return (
    <Card
      className='border-2 border-grayLight lg:border-transparent p-3 mdl:p-5'
      title={title}
    >
      <ul>
        {data?.map((item, i) => (
          <li
            className='text-xs py-2 mdl:py-4 mdl:text-base font-bold relative ps-6 mdl:ps-8 before:absolute before:size-4 mdl:before:size-5 before:bg-greenMain before:start-0 before:top-1/2 before:-translate-y-1/2 before:text-white before:flex before:items-center before:justify-center before:!content-["✔"]'
            key={i}
          >
            {item}
          </li>
        ))}
      </ul>
    </Card>
  );
};

const PrescriptionsFiles = ({ title = '', data = [] }) => {
  if (!data.length) return null;
  return (
    <Card
      className='border-2 border-grayLight lg:border-transparent p-3 mdl:p-5 space-y-5'
      title={title}
    >
      <div className='grid grid-cols-2 xl:grid-cols-3 gap-5'>
        {data?.map((item, i) => (
          <div key={i} className='flex items-center gap-3'>
            <FileOutline className='size-6 mdl:size-8 text-greenMain' />
            <div>
              <p className='font-Medium text-sm mdl:text-xl truncate'>
                {item?.fileName}
              </p>

              <span
                dir='ltr'
                className='text-xs mdl:text-base text-grayDark'
              >
                {item?.size} .{' '}
                {dayjs(item?.date)
                  .locale('en')
                  .format('DD MMM, YYYY')}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
