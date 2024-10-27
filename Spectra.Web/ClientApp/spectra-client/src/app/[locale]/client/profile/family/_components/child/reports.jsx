'use client';

import { useState } from 'react';

import Card from '@/components/card';
import { ReportCard } from './report-card';
import { BackButton } from '@/components/buttons/back-button';
import { ReportAccordion } from './report-accordion';

const REPORTSDATA = [
  {
    reportTitle: 'الاسئلة العامة',
    reportNo: '2325',
    date: '2022-01-01',
    doctorName: 'احمد محمد كمال',
    reportDetails: [
      {
        label: 'Presenting compliant',
        content: [
          'Term : 9 months',
          'normal delivery',
          'Ventilation',
          'Birth weight : normal',
        ],
      },
      {
        label: 'Past medical history',
        content: [
          'Seizure',
          'surgery',
          'allergies',
          'medication',
          'hearing test',
        ],
      },
    ],
  },
  {
    reportTitle: 'التخاطب',
    reportNo: '2326',
    date: '2022-01-01',
    doctorName: 'احمد محمد كمال',
    reportDetails: [],
  },
  {
    reportTitle: 'المتابعة',
    reportNo: '2327',
    date: '2022-01-01',
    doctorName: 'احمد محمد كمال',
    reportDetails: [],
  },
];

export const Reports = () => {
  const [view, setView] = useState(null);

  return (
    <Card>
      {!view && (
        <div className='grid grid-cols-1 mdl:grid-cols-2 2xl:grid-cols-3 gap-5'>
          {REPORTSDATA.map((data, index) => (
            <ReportCard
              onView={setView}
              key={index}
              data={data}
            />
          ))}
        </div>
      )}

      {view && view?.reportDetails && (
        <div className='space-y-5'>
          <h3 className='text-base mdl:text-xl font-bold'>
            {view?.reportTitle}
          </h3>

          <ReportAccordion reports={view?.reportDetails} />

          <BackButton
            className='ms-auto'
            onClick={() => setView(null)}
          >
            السابق
          </BackButton>
        </div>
      )}
    </Card>
  );
};
