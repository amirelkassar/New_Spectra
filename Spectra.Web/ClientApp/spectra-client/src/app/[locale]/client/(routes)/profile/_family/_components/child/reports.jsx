'use client';

import { useState } from 'react';

import Card from '@/components/card';
import { BackButton } from '@/components/buttons/back-button';
import {
  ReportAccordion,
  ReportCard,
} from '@/client/_components/child';
import { REPORTSDATA } from '@/lib/demoData';

export const Reports = () => {
  const [view, setView] = useState(null);

  return (
    <Card>
      {!view && (
        <div className='grid grid-cols-1 mdl:grid-cols-2 2xl:grid-cols-3 gap-5'>
          {REPORTSDATA.map((data, index) => (
            <ReportCard
              onClick={() => setView(data)}
              key={index}
              data={data}
              clickable
              showActionMenu
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
