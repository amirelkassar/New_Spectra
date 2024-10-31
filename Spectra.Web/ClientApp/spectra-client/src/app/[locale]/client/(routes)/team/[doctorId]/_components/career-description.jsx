import BriefIcon from '@/assets/icons/brief';
import CalendarFill from '@/assets/icons/calendar-fill';
import HourglassIcon from '@/assets/icons/Hourglass';
import LicenseIcon from '@/assets/icons/License';
import QualificationsIcon from '@/assets/icons/qualifications';
import Card from '@/components/card';
import { Info } from '@/client/_components/ui';
import { getDate } from '@/lib/utils';

const ICONS = {
  joinDate: <CalendarFill className='size-5 mdl:size-7' />,
  summary: <BriefIcon className='size-5 mdl:size-7' />,
  qualifications: (
    <QualificationsIcon className='size-5 mdl:size-7' />
  ),
  licenseNo: <LicenseIcon className='size-5 mdl:size-7' />,
  exp: <HourglassIcon className='size-5 mdl:size-7' />,
};

export const CareerDescription = ({ data }) => {
  const { fullYear } = getDate(data?.joinDate);

  return (
    <Card className='space-y-5' title='الوصف الوظيفي'>
      <div className='flex gap-5'>
        {ICONS.joinDate}
        <Info
          titleClassName='font-bold'
          valueClassName='font-normal'
          title='تاريخ الانضمام'
          value={fullYear}
        />
      </div>

      <div className='flex gap-5'>
        {ICONS.summary}
        <Info
          titleClassName='font-bold'
          valueClassName='font-normal'
          title='نبذة'
          value={data?.summary}
        />
      </div>
      <div className='flex gap-5'>
        {ICONS.qualifications}
        <Info
          titleClassName='font-bold'
          valueClassName='font-normal'
          title='المؤهلات والتراخيص'
          value={data?.qualifications}
        />
      </div>
      <div className='flex gap-5'>
        {ICONS.licenseNo}
        <Info
          titleClassName='font-bold'
          valueClassName='font-normal'
          title='رقم الترخيص'
          value={data?.licenseNo}
        />
      </div>
      <div className='flex gap-5'>
        {ICONS.exp}
        <Info
          titleClassName='font-bold'
          valueClassName='font-normal'
          title='سنوات الخبرة'
          value={data?.exp}
        />
      </div>
    </Card>
  );
};
