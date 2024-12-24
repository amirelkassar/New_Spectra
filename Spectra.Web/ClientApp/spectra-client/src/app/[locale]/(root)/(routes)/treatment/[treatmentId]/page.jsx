import { WHAT_WE_CURE } from '@/data';
import { WhatWeCure } from '@/guest/_components/sections';
import { Treatment } from '../_components/treatment';

const TreatmentPage = ({ params }) => {
  const treatmentId = params?.treatmentId;

  const DATA = WHAT_WE_CURE?.find((item) => item.id === treatmentId);

  const FILTERED_DATA = WHAT_WE_CURE?.filter(
    (item) => item.id !== treatmentId
  );

  return (
    <main>
      <Treatment data={DATA} />
      <div
        style={{
          clipPath:
            'polygon(50% 5%, 100% 10%, 100% 100%, 0 100%, 0 10%)',
          background:
            'linear-gradient(0deg, #FFFFFF 0%, #E8FAFF 66.1%)',
        }}
        className='pt-14'
      >
        <WhatWeCure data={FILTERED_DATA} />
      </div>
    </main>
  );
};

export default TreatmentPage;
