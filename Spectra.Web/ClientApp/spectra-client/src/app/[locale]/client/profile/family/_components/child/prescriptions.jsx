'use client';

import { useState } from 'react';

import { PrescriptionCard } from './prescrtiption-card';
import { PrescriptionInfo } from './prescription-info';
import Card from '@/components/card';

const prescriptionsData = [
  {
    id: 1,
    isNew: true,
    date: '20/04/2024',
    doctor: 'احمد محمد كمال',
    proffession: 'اخصائى نفسي',
    drugName: 'سيترالين',
    dose: '100mg',
    description: 'اخذه طوال الشهر يوميا مع الاكل',
    takingNo: 'مرتين',
    takingPeriod: 'اسبوعين',
    doctorNotes:
      'يتم اخذ الجرعة بشكل منتظم الا اذا ظهر اعراض جانبية',
    ingredient: 'الريتنول',
    scientificName: 'setraline',
    drugClass: 'مسكن',
    recommendedDose: [
      'الجرعة الأولية: 50 ملغ مرة واحدة يوميًا من الأقراص. لا تستخدم الكبسولات لبدء العلاج.',
      'جرعة الاستمرارية: يمكن زيادة الجرعة بمقدار 25 ملغ أسبوعيًا.',
      'الجرعة القصوى: 200 ملغ/اليوم.',
    ],
    drugConcentration: '50 %',
    drugInteractions: 'لوريم ابسيم - لوريم ابسم',
    warnings: [
      'فرط الحساسية تجاه العلاج أو لأي مكون آخر من مكوناته.',
      'الاستخدام المتزامن مع مثبطات أكسيداز أحادي الأمين (بالإنجليزية: Monoamine Oxidase Inhibitor or MAOI) وحتى 14 يوم بعد التوقف عن استخدامها.',
    ],
    drugNotes:
      'يحفظ العلاج في درجة حرارة الغرفة (15-25 درجة مئوية)، بعيدًا عن الرطوبة والحرارة، وبعيدًا عن متناول الأطفال.',
  },
  {
    id: 2,
    isNew: false,
    date: '20/04/2024',
    doctor: 'احمد محمد كمال',
    proffession: 'اخصائى نفسي',
    drug: 'سيترالين',
    dose: '100mg',
    description: 'اخذه طوال الشهر يوميا مع الاكل',
    takingNo: 'مرتين',
    takingPeriod: 'اسبوعين',
    doctorNotes:
      'يتم اخذ الجرعة بشكل منتظم الا اذا ظهر اعراض جانبية',
    ingredient: 'الريتنول',
    scientificName: 'setraline',
    drugClass: 'مسكن',
    recommendedDose: [
      'الجرعة الأولية: 50 ملغ مرة واحدة يوميًا من الأقراص. لا تستخدم الكبسولات لبدء العلاج.',
      'جرعة الاستمرارية: يمكن زيادة الجرعة بمقدار 25 ملغ أسبوعيًا.',
      'الجرعة القصوى: 200 ملغ/اليوم.',
    ],
    drugConcentration: '50 %',
    drugInteractions: 'لوريم ابسيم - لوريم ابسم',
    warnings: [
      'فرط الحساسية تجاه العلاج أو لأي مكون آخر من مكوناته.',
      'الاستخدام المتزامن مع مثبطات أكسيداز أحادي الأمين (بالإنجليزية: Monoamine Oxidase Inhibitor or MAOI) وحتى 14 يوم بعد التوقف عن استخدامها.',
    ],
    drugNotes:
      'يحفظ العلاج في درجة حرارة الغرفة (15-25 درجة مئوية)، بعيدًا عن الرطوبة والحرارة، وبعيدًا عن متناول الأطفال.',
  },
  {
    id: 3,
    isNew: false,
    date: '20/04/2024',
    doctor: 'احمد محمد كمال',
    proffession: 'اخصائى نفسي',
    drug: 'سيترالين',
    dose: '100mg',
    description: 'اخذه طوال الشهر يوميا مع الاكل',
    takingNo: 'مرتين',
    takingPeriod: 'اسبوعين',
    doctorNotes:
      'يتم اخذ الجرعة بشكل منتظم الا اذا ظهر اعراض جانبية',
    ingredient: 'الريتنول',
    scientificName: 'setraline',
    drugClass: 'مسكن',
    recommendedDose: [
      'الجرعة الأولية: 50 ملغ مرة واحدة يوميًا من الأقراص. لا تستخدم الكبسولات لبدء العلاج.',
      'جرعة الاستمرارية: يمكن زيادة الجرعة بمقدار 25 ملغ أسبوعيًا.',
      'الجرعة القصوى: 200 ملغ/اليوم.',
    ],
    drugConcentration: '50 %',
    drugInteractions: 'لوريم ابسيم - لوريم ابسم',
    warnings: [
      'فرط الحساسية تجاه العلاج أو لأي مكون آخر من مكوناته.',
      'الاستخدام المتزامن مع مثبطات أكسيداز أحادي الأمين (بالإنجليزية: Monoamine Oxidase Inhibitor or MAOI) وحتى 14 يوم بعد التوقف عن استخدامها.',
    ],
    drugNotes:
      'يحفظ العلاج في درجة حرارة الغرفة (15-25 درجة مئوية)، بعيدًا عن الرطوبة والحرارة، وبعيدًا عن متناول الأطفال.',
  },
];

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

      {view && (
        <PrescriptionInfo
          data={view}
          onBack={() => setView(null)}
        />
      )}
    </Card>
  );
};
