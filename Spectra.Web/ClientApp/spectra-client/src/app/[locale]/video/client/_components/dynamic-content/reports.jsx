'use client';

import { useState } from 'react';

import {
  ReportAccordion,
  ReportCard,
} from '@/app/[locale]/(dashboard)/client/_components/child';
import { REPORTSDATA } from '@/lib/demoData';
import BackIcon from '@/assets/icons/back';

export const Reports = () => {
  const [view, setView] = useState(null);
  return (
    <div className='space-y-5'>
      <div className='flex items-center gap-3 border-b border-grayLight pb-3'>
        {view && (
          <div role='button' onClick={() => setView(null)}>
            <BackIcon className='ltr:rotate-180 size-8 mdl:size-10' />
          </div>
        )}

        <h3 className='font-bold text-sm lgl:text-xl'>التقارير</h3>
      </div>
      {!view && (
        <div className='grid grid-cols-1 sml:grid-cols-2 mdl:grid-cols-3 lgl:grid-cols-1 gap-5'>
          {REPORTSDATA?.map((repo, i) => (
            <ReportCard
              key={i}
              data={repo}
              onClick={() => setView(repo)}
              clickable
            />
          ))}
        </div>
      )}

      {view && <ReportAccordion reports={view?.reportDetails} />}
    </div>
  );
};
