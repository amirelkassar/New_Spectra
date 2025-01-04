'use client';

import { useDate } from '@/hooks/use-date';
import { SectionTitle } from '@/dashboard/_components/ui/section-title';
import { InfoData } from '@/dashboard/_components/ui/info-data';
import { ACADEMIC_DEGREE_OBJ } from '@/data/academic-degree';
import { CAREER_ICONS as ICONS } from '@/data/team';
import Card from '@/components/card';

export const DoctorCareerInfo = ({ data }) => {
  const date = useDate(data?.created);
  return (
    <div className='space-y-3'>
      <SectionTitle>الوصف الوظيفي</SectionTitle>
      <Card className='space-y-5'>
        <div className='flex gap-5'>
          {ICONS.joinDate}
          <InfoData
            direction='col'
            weight='reverse'
            label='تاريخ الانضمام'
            value={date.fullYear}
          />
        </div>

        <div className='flex gap-5'>
          {ICONS.summary}
          <InfoData
            direction='col'
            weight='reverse'
            label='نبذة'
            value={data?.jobDescription}
          />
        </div>
        <div className='flex gap-5'>
          {ICONS.qualifications}
          <InfoData
            direction='col'
            weight='reverse'
            label='المؤهلات والتراخيص'
            value={data?.qualification}
          />
        </div>
        <div className='flex gap-5'>
          {ICONS.licenseNo}
          <InfoData
            direction='col'
            weight='reverse'
            label='رقم الترخيص'
            value={data?.licenseNumber}
          />
        </div>
        <div className='flex gap-5'>
          {ICONS.approvedBy}
          <InfoData
            direction='col'
            weight='reverse'
            label='معتمد من'
            value={data?.approvedBy}
          />
        </div>
        <div className='flex gap-5'>
          {ICONS.exp}
          <InfoData
            direction='col'
            weight='reverse'
            label='سنوات الخبرة'
            value={data?.experienceYears}
          />
        </div>

        <div className='flex gap-5'>
          {ICONS.acadmiceDegree}
          <InfoData
            direction='col'
            weight='reverse'
            label='الدرجة العلمية'
            value={ACADEMIC_DEGREE_OBJ[data?.academicDegree]}
          />
        </div>
      </Card>
    </div>
  );
};
