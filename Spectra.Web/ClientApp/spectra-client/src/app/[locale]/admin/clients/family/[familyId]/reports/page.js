import React from 'react';
import Card from '@/components/card';
import Report from '../../../components/report';
import imgDoctor from '@/assets/images/placeholder-person.png';
import imgPatient from '@/assets/images/placeholder-person.png';
import { Link } from '@/navigation';
import ROUTES from '@/routes';
const reports = [
  {
    id: 1,
    state: 'new',
    number: '2325',
    date: '20/2/2024',
    specialist: 'احمد محمد كمال',
    typeReport: 'تقرير تحليل صحي شامل',
    doctor: 'احمد محمد كمال',
    specialistDoctor: 'اخصائى نفسى',
    imgdoctor: imgDoctor,
    patient: 'عبدالله الشيخ',
    specialistPatient: ' الطفل / احمد',
    imgPatient: imgPatient,
  },
  {
    id: 2,
    state: 'old',
    number: '2325',
    date: '20/2/2024',
    specialist: 'احمد محمد كمال',
    typeReport: 'تقرير تحليل صحي شامل',
    doctor: 'احمد محمد كمال',
    specialistDoctor: 'اخصائى نفسى',
    imgdoctor: imgDoctor,
    patient: 'عبدالله الشيخ',
    specialistPatient: ' الطفل / احمد',
    imgPatient: imgPatient,
  },
  {
    id: 3,
    state: 'old',
    number: '2325',
    date: '20/2/2024',
    specialist: 'احمد محمد كمال',
    typeReport: 'تقرير تحليل صحي شامل',
    doctor: 'احمد محمد كمال',
    specialistDoctor: 'اخصائى نفسى',
    imgdoctor: imgDoctor,
    patient: 'عبدالله الشيخ',
    specialistPatient: ' الطفل / احمد',
    imgPatient: imgPatient,
  },
];
function page({ params }) {
  // console.log(params);

  return (
    <Card>
      <h2 className='text-base mb-7 lg:text-xl font-bold'>
        التقارير{' '}
      </h2>
      <div className='flex gap-6 flex-wrap mt-9'>
        {reports.map((report, i) => {
          return (
            <Report
              key={i}
              data={report}
              link={ROUTES.ADMIN.CLIENTS.FAMILY.REPORTSDETAILS(
                params.familyId,
                report.id
              )}
            />
          );
        })}
      </div>
    </Card>
  );
}

export default page;
