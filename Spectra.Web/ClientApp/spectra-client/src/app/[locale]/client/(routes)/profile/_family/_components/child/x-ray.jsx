'use client';

import { Repo } from './repo';

const DATA = [
  {
    date: '5/5/2020',
    tests: [
      'الأشعة السينية x-ray',
      'الموجات فوق الصوتية (Ultrasonic)',
      'الأشعة المقطعية بالكمبيوتر (CT SCAN).',
    ],
  },
  {
    date: '5/5/2020',
    tests: [
      'الأشعة السينية x-ray',
      'الموجات فوق الصوتية (Ultrasonic)',
      'الأشعة المقطعية بالكمبيوتر (CT SCAN).',
    ],
  },
  {
    date: '5/5/2020',
    tests: [
      'الأشعة السينية x-ray',
      'الموجات فوق الصوتية (Ultrasonic)',
      'الأشعة المقطعية بالكمبيوتر (CT SCAN).',
    ],
  },
  {
    date: '5/5/2020',
    tests: [
      'الأشعة السينية x-ray',
      'الموجات فوق الصوتية (Ultrasonic)',
      'الأشعة المقطعية بالكمبيوتر (CT SCAN).',
    ],
  },
];

export const XRay = () => {
  return (
    <div className='grid grid-cols-1 mdl:grid-cols-2 gap-5'>
      {DATA.map((data, index) => (
        <Repo
          key={index}
          date={data.date}
          tests={data.tests}
        />
      ))}
    </div>
  );
};
