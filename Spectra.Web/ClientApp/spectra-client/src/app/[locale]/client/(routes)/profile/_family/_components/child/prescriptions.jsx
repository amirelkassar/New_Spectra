'use client';

import { useState } from 'react';

import Card from '@/components/card';
import { BackButton } from '@/components/buttons/back-button';
import { prescriptionsData } from '@/lib/demoData';
import {
  PrescriptionCard,
  PrescriptionInfo,
} from '@/client/_components/child';

export const Prescriptions = () => {
  const [view, setView] = useState(null);

  return (
    <Card>
      {!view && (
        <div className='flex flex-wrap justify-center gap-5'>
          {prescriptionsData?.map((prescription, i) => (
            <PrescriptionCard
              onView={setView}
              key={i}
              data={prescription}
            />
          ))}
        </div>
      )}

      {view && <PrescriptionInfo showCard data={view} />}

      {view && (
        <BackButton
          className='ms-auto'
          onClick={() => setView(null)}
        >
          السابق
        </BackButton>
      )}
    </Card>
  );
};
