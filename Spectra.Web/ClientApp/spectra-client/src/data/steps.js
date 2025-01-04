const EN_STEPS = {
  traditionalSteps: [
    {
      id: 1,
      title: 'Family concern / Disorder onset',
      duration: '2 weeks',
    },
    {
      id: 2,
      title: 'Primary healthcare',
      duration: '1-2 months',
    },
    {
      id: 3,
      title: 'Referral to pediatrician',
      duration: '4-5 months',
    },
    {
      id: 4,
      title: 'Referral to specialized center',
      duration: '2-3 months',
    },
    {
      id: 5,
      title: 'Initial examination and assessment',
      duration: '1 month',
    },
    {
      id: 6,
      title: 'Final report from specialist',
      duration: '2 months',
    },
    {
      id: 7,
      title: 'Care plan',
      duration: 'hidden',
    },
  ],
  spectraSteps: [
    {
      id: 1,
      title: "Enter your child's details",
      duration: '1-2 days',
    },
    {
      id: 2,
      title: 'Early screening',
      duration: '1-2 days',
    },
    {
      id: 3,
      title: 'Initial consultation with screening clinic',
      duration: '2-4 days',
    },
    {
      id: 4,
      title: 'Diagnosis by multidisciplinary team (MDT)',
      duration: '4-6 days',
    },
    {
      id: 5,
      title: 'Final diagnosis and therapeutic plans',
      duration: 'hidden',
    },
  ],
};

const AR_STEPS = {
  traditionalSteps: [
    {
      id: 1,
      title: 'قلق العائلة /ظهور المشكلة',
      duration: 'اسبوعين',
    },
    {
      id: 2,
      title: 'الرعاية الصحية الاولية',
      duration: 'شهر - شهرين',
    },
    {
      id: 3,
      title: 'احالة الى طبيب اطفال',
      duration: '4- 5 اشهر',
    },
    {
      id: 4,
      title: 'احالة الى مركز متخصصة',
      duration: '2- 3 اشهر',
    },
    {
      id: 5,
      title: 'الكشف المبدئى و التقييم',
      duration: 'شهر',
    },
    {
      id: 6,
      title: 'التقرير النهائى من قبل المختص',
      duration: 'شهرين',
    },
    { id: 7, title: 'خطة الرعاية', duration: 'hidden' },
  ],

  spectraSteps: [
    {
      id: 1,
      title: 'اضف بيانات طفلك',
      duration: '1-2 ايام',
    },
    { id: 2, title: 'الكشف المبكر', duration: '1-2 ايام' },
    {
      id: 3,
      title: 'موعد مبدئى مع عيادة الفرز',
      duration: '2-4 ايام',
    },
    {
      id: 4,
      title: 'تشخيص فريق متعدد التخصصات ( MDT ) ',
      duration: '4-6 ايام',
    },

    {
      id: 5,
      title: 'التشخيص النهائى و الخطط التأهيلية العلاجية',
      duration: 'hidden',
    },
  ],
};

export const STEPS = { en: EN_STEPS, ar: AR_STEPS };
