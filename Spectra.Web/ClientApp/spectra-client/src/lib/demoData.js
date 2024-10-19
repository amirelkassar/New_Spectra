// Cspell: disable
import React from 'react';
import HeartIcon from '@/assets/icons/heart';
import TeamIcon from '@/assets/icons/team';
import FollowUpIcon from '@/assets/icons/followup';
import HandshakeIcon from '@/assets/icons/handshake';
import Autism from '@/assets/icons/autism';
import LanguageIssues from '@/assets/icons/language-issues';
import ADHD from '@/assets/icons/adhd';
import Disability from '@/assets/icons/disability';
import BehavioralIssues from '@/assets/icons/behavioral-issues';
import LearningDifficulties from '@/assets/icons/learning-difficulties';
import DevelopmentalDelay from '@/assets/icons/developmental-delay';
import AllSpecializations from '@/assets/icons/all-specializations';

export const childPopupData = [
  {
    id: 0,
    avatar: '',
    fullname: 'محمد عبدالله الشيخ',
    diagnosis: 'طيف التوحد',
  },

  {
    id: 1,
    avatar: '',
    fullname: 'احمد عبدالله الشيخ',
    diagnosis: 'طيف التوحد',
  },

  {
    id: 2,
    avatar: '',
    fullname: 'علي محمد علي',
    diagnosis: 'فرط حركة',
  },
];

export const MedicalTeamData = [
  {
    id: '1',
    doctor: 'احمد محمد كمال',
    profession: 'اخصائى نفسي',
    rate: 9.5,
    avatar: '',
    cost: 100,
  },
  {
    id: '2',
    doctor: 'احمد محمد كمال',
    profession: 'توحد',
    rate: 9.1,
    avatar: '',
    cost: 90,
  },
  {
    id: '3',
    doctor: 'احمد محمد كمال',
    profession: 'فرط حركة',
    rate: 8.5,
    avatar: '',
    cost: 80,
  },
  {
    id: '4',
    doctor: 'احمد محمد كمال',
    profession: 'ثنائي القطب',
    rate: 9.8,
    avatar: '',
    cost: 150,
  },
  {
    id: '5',
    doctor: 'احمد محمد كمال',
    profession: 'اخصائى نفسي',
    rate: 8.6,
    avatar: '',
    cost: 120,
  },
  {
    id: '6',
    doctor: 'احمد محمد كمال',
    profession: 'اخصائى نفسي',
    rate: 9.5,
    avatar: '',
    cost: 100,
  },
  {
    id: '7',
    doctor: 'احمد محمد كمال',
    profession: 'اخصائى نفسي',
    rate: 8.5,
    avatar: '',
    cost: 80,
  },
  {
    id: '8',
    doctor: 'احمد محمد كمال',
    profession: 'اخصائى نفسي',
    rate: 9.5,
    avatar: '',
    cost: 100,
  },
  {
    id: '9',
    doctor: 'احمد محمد كمال',
    profession: 'اخصائى نفسي',
    rate: 8.5,
    avatar: '',
    cost: 80,
  },
  {
    id: '10',
    doctor: 'احمد محمد كمال',
    profession: 'اخصائى نفسي',
    rate: 9.5,
    avatar: '',
    cost: 100,
  },
  {
    id: '11',
    doctor: 'احمد محمد كمال',
    profession: 'اخصائى نفسي',
    rate: 8.5,
    avatar: '',
    cost: 80,
  },
  {
    id: '12',
    doctor: 'احمد محمد كمال',
    profession: 'اخصائى نفسي',
    rate: 9.5,
    avatar: '',
    cost: 100,
  },
  {
    id: '13',
    doctor: 'احمد محمد كمال',
    profession: 'اخصائى نفسي',
    rate: 8.5,
    avatar: '',
    cost: 80,
  },
  {
    id: '14',
    doctor: 'احمد محمد كمال',
    profession: 'اخصائى نفسي',
    rate: 9.5,
    avatar: '',
    cost: 100,
  },
];

export const ClientsData = [
  {
    id: '1',
    clientName: 'عبد الله الشيخ',
    childrensNo: '1',
    email: 'sH9zZ@example.com',
    kind: 'family',
  },
  {
    id: '2',
    clientName: 'عبد الله الشيخ',
    childrensNo: '2',
    email: 'sH9zZ@example.com',
    kind: 'family',
  },
  {
    id: '3',
    clientName: 'عبد الله الشيخ',
    childrensNo: '3',
    email: 'sH9zZ@example.com',
    kind: 'medicalProvider',
  },
  {
    id: '4',
    clientName: 'عبد الله الشيخ',
    childrensNo: '4',
    email: 'sH9zZ@example.com',
    kind: 'firm',
  },
  {
    id: '5',
    clientName: 'عبد الله الشيخ',
    childrensNo: '5',
    email: 'sH9zZ@example.com',
    kind: 'medicalProvider',
  },
];

export const servicesData = [
  {
    id: '1',
    label: 'خدمة الكشف المبكر الالكتروني',
    icon: React.createElement(HeartIcon, {
      className: 'size-4 lg:size-5',
    }),
    color: 'rgb(255 61 61 / 0.18)',
    description:
      'نقدم خدمات الاكتشاف المبكر للاضطرابات النمائية و السلوكية',
    fullDescription:
      'الكشف المبكر للاضطرابات النمائية والسلوكية هو عبارة عن إخضاع قدرات الطفل المهارية و السلوكية والنفسية للتقييم للكشف عن وجود إحدى الاضطرابات النمائية والسلوكية للبدء بوضع خطط علاجية تدخلية وتنفيذها قبل تطور الأعراض ويتم تنفيذ التقييم في مركزنا من خلال توفير مقاييس عالمية معتمدة يتم الإجابة عنها من قبل ولي أمر الطفل إلكترونياً عبر الموقع بكل سهولة دون الحاجة لمغادرة المنزل أو إضاعة المزيد من الوقت وبعد ذلك يتم استعراض النتائج وتقديم المشورة والتوجيه المناسب .',

    info: [
      {
        id: '1',
        label: 'ما هي المقاييس النفسية؟',
        value:
          'هي عبارة عن استبيانات وفحوص تقييم الشخصية المبنية على آليات قياس الإدراكات والتي تشمل قياس المعرفة والقدرات العقلية والتوجهات وسمات الشخصية وقياس التعلم. وهنا في سبيكترا نقوم بتوفير مقاييس عالمية معتمدة مثل مقاييس التطور والنمو الشامل، التوحد، فرط الحركة ونقص الانتباه، المشاكل النفسية وغيرها.',
      },
      {
        id: '2',
        label: 'أهمية الكشف المبكر:',
        value:
          'نؤمن هنا بمركز سبيكترا الطبي بأهمية الكشف المبكر والتدخل المبكر وأنها أفضل وسيلة مثبتة علمياً تؤدي إلى تحسين وضع الطفل والارتقاء به لينعم بجودة حياة صحية وسليمة. كما أننا ملتزمون بالأساليب والممارسات العلمية المبنية على البراهين للتأكد من حصول طفلك وعلى عائلتك على أفضل وأجود الخدمات التي تعمل على توفير الراحة لطفلك ولكم.',
      },
      {
        id: '3',
        label: 'سعر الخدمة:',
        value:
          'نقدم خدمة الكشف المبكر مجاناً لفترة محدودة.',
      },
      {
        id: '4',
        label: 'طريقة طلب الخدمة :',
        value:
          'بامكانكم طلب الخدمة من خلال التسجيل و الاشتراك بموقعنا.',
      },
    ],
  },
  {
    id: '2',
    label: 'خدمات التشخيص الطبي عبر فرق متعددة التخصصات',
    icon: React.createElement(TeamIcon, {
      className: 'size-4 lg:size-5',
    }),
    color: 'rgb(16 176 193 / 0.18)',
    description:
      'نقدم خدمات الاكتشاف المبكر للاضطرابات النمائية و السلوكية كالتوحد و فرط الحركة وغيرها',
  },
  {
    id: '3',
    label: 'خدمات المتابعة الدوائية',
    icon: React.createElement(FollowUpIcon, {
      className: 'size-4 lg:size-5',
    }),
    color: 'rgb(138 34 160 / 0.18)',
    description:
      'نقوم بتشخيص الحالات التي تعاني من الاضطرابات النمائية والسلوكية عبر فريق محترف متعدد التخصصات',
  },
  {
    id: '4',
    label: 'خدمات الاستشارات التخصصية',
    icon: React.createElement(HandshakeIcon, {
      className: 'size-4 lg:size-5',
    }),
    color: 'rgb(16 176 193 / 0.18)',
    description:
      'نقدم خدمات استشارية مع أطباء إستشاريين في طب تطور سلوك الأطفال و الطب النفسي وغيره',
  },
  {
    id: '5',
    label: 'خدمات التأهيل العلاجي في مختلف التخصصات',
    icon: React.createElement(HandshakeIcon, {
      className: 'size-4 lg:size-5',
    }),
    color: 'rgb(16 176 193 / 0.18)',
    description:
      'نقدم خدمات استشارية مع أطباء إستشاريين في طب تطور سلوك الأطفال و الطب النفسي وغيره',
  },
  {
    id: '6',
    label: 'خدمات التقارير الطبية والتخصصية',
    icon: React.createElement(HandshakeIcon, {
      className: 'size-4 lg:size-5',
    }),
    color: 'rgb(16 176 193 / 0.18)',
    description:
      'نقدم خدمات استشارية مع أطباء إستشاريين في طب تطور سلوك الأطفال و الطب النفسي وغيره',
  },
  {
    id: '7',
    label: 'خدمات دعم المراكز والجهات',
    icon: React.createElement(HandshakeIcon, {
      className: 'size-4 lg:size-5',
    }),
    color: 'rgb(16 176 193 / 0.18)',
    description:
      'نقدم خدمات استشارية مع أطباء إستشاريين في طب تطور سلوك الأطفال و الطب النفسي وغيره',
  },
  {
    id: '8',
    label: 'خدمات التدريب',
    icon: React.createElement(HandshakeIcon, {
      className: 'size-4 lg:size-5',
    }),
    color: 'rgb(16 176 193 / 0.18)',
    description:
      'نقدم خدمات استشارية مع أطباء إستشاريين في طب تطور سلوك الأطفال و الطب النفسي وغيره',
  },
];

export const packagesDataSpectra = [
  {
    id: '1',
    label: 'الباقة المتميزة',
    price: 100,
    features: [
      '4 جلسات من تخصص التخاطب',
      'الوصول لافضل النتائج والتوصيات',
      '1 جلسة اضافية لقياس الذكاء',
    ],
    color: '#10B0C1',
  },
  {
    id: '2',
    label: 'الباقة المتميزة',
    price: 200,
    features: [
      '4 جلسات من تخصص التخاطب',
      'الوصول لافضل النتائج والتوصيات',
      '1 جلسة اضافية لقياس الذكاء',
    ],
    color: '#8A22A0',
  },
  {
    id: '3',
    label: 'الباقة المتميزة',
    price: 300,
    features: [
      '4 جلسات من تخصص التخاطب',
      'الوصول لافضل النتائج والتوصيات',
      '1 جلسة اضافية لقياس الذكاء',
    ],
    color: '#010036',
  },
];

export const packagesDataFlex = [
  {
    id: '1',
    label: 'الباقة المرنة',
    price: 100,
    features: [
      '4 جلسات من تخصص التخاطب',
      'الوصول لافضل النتائج والتوصيات',
      '1 جلسة اضافية لقياس الذكاء',
    ],
    color: '#10B0C1',
  },
  {
    id: '2',
    label: 'الباقة المرنة',
    price: 200,
    features: [
      '4 جلسات من تخصص التخاطب',
      'الوصول لافضل النتائج والتوصيات',
      '1 جلسة اضافية لقياس الذكاء',
    ],
    color: '#8A22A0',
  },
  {
    id: '3',
    label: 'الباقة المرنة',
    price: 300,
    features: [
      '4 جلسات من تخصص التخاطب',
      'الوصول لافضل النتائج والتوصيات',
      '1 جلسة اضافية لقياس الذكاء',
    ],
    color: '#010036',
  },
];

export const SpecialNeedsData = [
  {
    id: 1,
    label: 'اضراب طيف التوحد',
    icon: React.createElement(Autism, {
      className: 'size-11 lg:size-14',
    }),
  },

  {
    id: 2,
    label: 'مشاكل اللغة والتواصل',
    icon: React.createElement(LanguageIssues, {
      className: 'size-11 lg:size-14',
    }),
  },
  {
    id: 3,
    label: 'فرط الحركة و نقص الانتباه',
    icon: React.createElement(ADHD, {
      className: 'size-11 lg:size-14',
    }),
  },
  {
    id: 4,
    label: 'الاعاقة الذهنية والجسدية',
    icon: React.createElement(Disability, {
      className: 'size-11 lg:size-14',
    }),
  },
  {
    id: 5,
    label: 'العناد والعنف والخوف والقلق',
    icon: React.createElement(BehavioralIssues, {
      className: 'size-11 lg:size-14',
    }),
  },
  {
    id: 6,
    label: 'صعوبات التعلم',
    icon: React.createElement(LearningDifficulties, {
      className: 'size-11 lg:size-14',
    }),
  },
  {
    id: 7,
    label: 'التأخر النمائى',
    icon: React.createElement(DevelopmentalDelay, {
      className: 'size-11 lg:size-14',
    }),
  },
  {
    id: 8,
    label: 'جميع التخصصات',
    icon: React.createElement(AllSpecializations, {
      className: 'size-11 lg:size-14',
    }),
  },
];

export const storiesData = [
  {
    id: 'story-1',
    childName: 'حلا محمد العانزي',
    daignosis: 'اضطراب طيف التوحد',
    image: '/demo-baby-1.png',
    story: {
      description:
        'اضطراب طيف التوحد عبارة عن حالة ترتبط بنمو الدماغ وتؤثر على كيفية تمييز الشخص للآخرين والتعامل معهم على المستوى الاجتماعي، مما يتسبب في حدوث مشكلات في التفاعل والتواصل الاجتماعي.',
      beforeTreatment: [
        'يرفض العناق والإمساك به، ويبدو أنه يفضل اللعب بمفرده؛ أي ينسحب إلى عالمه الخاص',
        'عدم الكلام أو التأخر في الكلام، أو قد يفقد الطفل قدرته السابقة على التلفظ بالكلمات والجمل',
        'يتكلم بنبرة أو إيقاع غير طبيعي؛ وقد يستخدم صوتًا رتيبًا أو يتكلم مثل الإنسان الآلي',
      ],
      cureMethod: [
        {
          id: '01',
          text: 'العلاجات التربوية. غالبًا ما يستجيب الأطفال المصابون باضطراب طيف التوحد جيدًا للبرامج التربوية التي تتميز بدرجة عالية من التنظيم.',
          image: '/demo-baby-6.png',
        },
        {
          id: '02',
          text: 'العلاج الأسري. يتعلم الآباء وأفراد الأسرة الآخرون كيفية اللعب والتفاعل مع أطفالهم المرضى بطرق تحفز المهارات الاجتماعية وتعالج المشكلات السلوكية',
          image: '/demo-baby-7.png',
        },
        {
          id: '03',
          text: 'العلاج الأسري. يتعلم الآباء وأفراد الأسرة الآخرون كيفية اللعب والتفاعل مع أطفالهم المرضى بطرق تحفز المهارات الاجتماعية وتعالج المشكلات السلوكية',
          image: '/demo-baby-8.png',
        },
      ],
      afterTreatment: [
        'لوريم إيبسو ملوريم إيبسوملوريم إيبسوم لوريم إيبسوملوريم إيبسوم لوريم إيبسوملوريم إيبسوملوري',
        'لوريم إيبسو ملوريم إيبسوملوريم إيبسوم لوريم إيبسوملوريم إيبسوم لوريم إيبسوملوريم',
      ],
      familyReview:
        'شكرا سبيكترا وكل الرفيق الطبى لطريقة العلاج المرنة جدا وشوط طريق طويل والنتيجة جدا رائعة',
      video: '',
    },
  },
  {
    id: 'story-2',
    childName: 'حلا محمد العانزي',
    daignosis: 'اضطراب طيف التوحد',
    image: '/demo-baby-2.png',
    story: {
      description:
        'اضطراب طيف التوحد عبارة عن حالة ترتبط بنمو الدماغ وتؤثر على كيفية تمييز الشخص للآخرين والتعامل معهم على المستوى الاجتماعي، مما يتسبب في حدوث مشكلات في التفاعل والتواصل الاجتماعي.',
      beforeTreatment: [
        'يرفض العناق والإمساك به، ويبدو أنه يفضل اللعب بمفرده؛ أي ينسحب إلى عالمه الخاص',
        'عدم الكلام أو التأخر في الكلام، أو قد يفقد الطفل قدرته السابقة على التلفظ بالكلمات والجمل',
        'يتكلم بنبرة أو إيقاع غير طبيعي؛ وقد يستخدم صوتًا رتيبًا أو يتكلم مثل الإنسان الآلي',
      ],
      cureMethod: [
        {
          id: '01',
          text: 'العلاجات التربوية. غالبًا ما يستجيب الأطفال المصابون باضطراب طيف التوحد جيدًا للبرامج التربوية التي تتميز بدرجة عالية من التنظيم.',
          image: '/demo-baby-6.png',
        },
        {
          id: '02',
          text: 'العلاج الأسري. يتعلم الآباء وأفراد الأسرة الآخرون كيفية اللعب والتفاعل مع أطفالهم المرضى بطرق تحفز المهارات الاجتماعية وتعالج المشكلات السلوكية',
          image: '/demo-baby-7.png',
        },
        {
          id: '03',
          text: 'العلاج الأسري. يتعلم الآباء وأفراد الأسرة الآخرون كيفية اللعب والتفاعل مع أطفالهم المرضى بطرق تحفز المهارات الاجتماعية وتعالج المشكلات السلوكية',
          image: '/demo-baby-8.png',
        },
      ],
      afterTreatment: [
        'لوريم إيبسو ملوريم إيبسوملوريم إيبسوم لوريم إيبسوملوريم إيبسوم لوريم إيبسوملوريم إيبسوملوري',
        'لوريم إيبسو ملوريم إيبسوملوريم إيبسوم لوريم إيبسوملوريم إيبسوم لوريم إيبسوملوريم',
      ],
      familyReview:
        'شكرا سبيكترا وكل الرفيق الطبى لطريقة العلاج المرنة جدا وشوط طريق طويل والنتيجة جدا رائعة',
      video: '',
    },
  },
  {
    id: 'story-3',
    childName: 'حلا محمد العانزي',
    daignosis: 'اضطراب طيف التوحد',
    image: '/demo-baby-3.png',
    story: {
      description:
        'اضطراب طيف التوحد عبارة عن حالة ترتبط بنمو الدماغ وتؤثر على كيفية تمييز الشخص للآخرين والتعامل معهم على المستوى الاجتماعي، مما يتسبب في حدوث مشكلات في التفاعل والتواصل الاجتماعي.',
      beforeTreatment: [
        'يرفض العناق والإمساك به، ويبدو أنه يفضل اللعب بمفرده؛ أي ينسحب إلى عالمه الخاص',
        'عدم الكلام أو التأخر في الكلام، أو قد يفقد الطفل قدرته السابقة على التلفظ بالكلمات والجمل',
        'يتكلم بنبرة أو إيقاع غير طبيعي؛ وقد يستخدم صوتًا رتيبًا أو يتكلم مثل الإنسان الآلي',
      ],
      cureMethod: [
        {
          id: '01',
          text: 'العلاجات التربوية. غالبًا ما يستجيب الأطفال المصابون باضطراب طيف التوحد جيدًا للبرامج التربوية التي تتميز بدرجة عالية من التنظيم.',
          image: '/demo-baby-6.png',
        },
        {
          id: '02',
          text: 'العلاج الأسري. يتعلم الآباء وأفراد الأسرة الآخرون كيفية اللعب والتفاعل مع أطفالهم المرضى بطرق تحفز المهارات الاجتماعية وتعالج المشكلات السلوكية',
          image: '/demo-baby-7.png',
        },
        {
          id: '03',
          text: 'العلاج الأسري. يتعلم الآباء وأفراد الأسرة الآخرون كيفية اللعب والتفاعل مع أطفالهم المرضى بطرق تحفز المهارات الاجتماعية وتعالج المشكلات السلوكية',
          image: '/demo-baby-8.png',
        },
      ],
      afterTreatment: [
        'لوريم إيبسو ملوريم إيبسوملوريم إيبسوم لوريم إيبسوملوريم إيبسوم لوريم إيبسوملوريم إيبسوملوري',
        'لوريم إيبسو ملوريم إيبسوملوريم إيبسوم لوريم إيبسوملوريم إيبسوم لوريم إيبسوملوريم',
      ],
      familyReview:
        'شكرا سبيكترا وكل الرفيق الطبى لطريقة العلاج المرنة جدا وشوط طريق طويل والنتيجة جدا رائعة',
      video: '',
    },
  },
  {
    id: 'story-4',
    childName: 'حلا محمد العانزي',
    daignosis: 'اضطراب طيف التوحد',
    image: '/demo-baby-1.png',
    story: {
      description:
        'اضطراب طيف التوحد عبارة عن حالة ترتبط بنمو الدماغ وتؤثر على كيفية تمييز الشخص للآخرين والتعامل معهم على المستوى الاجتماعي، مما يتسبب في حدوث مشكلات في التفاعل والتواصل الاجتماعي.',
      beforeTreatment: [
        'يرفض العناق والإمساك به، ويبدو أنه يفضل اللعب بمفرده؛ أي ينسحب إلى عالمه الخاص',
        'عدم الكلام أو التأخر في الكلام، أو قد يفقد الطفل قدرته السابقة على التلفظ بالكلمات والجمل',
        'يتكلم بنبرة أو إيقاع غير طبيعي؛ وقد يستخدم صوتًا رتيبًا أو يتكلم مثل الإنسان الآلي',
      ],
      cureMethod: [
        {
          id: '01',
          text: 'العلاجات التربوية. غالبًا ما يستجيب الأطفال المصابون باضطراب طيف التوحد جيدًا للبرامج التربوية التي تتميز بدرجة عالية من التنظيم.',
          image: '/demo-baby-6.png',
        },
        {
          id: '02',
          text: 'العلاج الأسري. يتعلم الآباء وأفراد الأسرة الآخرون كيفية اللعب والتفاعل مع أطفالهم المرضى بطرق تحفز المهارات الاجتماعية وتعالج المشكلات السلوكية',
          image: '/demo-baby-7.png',
        },
        {
          id: '03',
          text: 'العلاج الأسري. يتعلم الآباء وأفراد الأسرة الآخرون كيفية اللعب والتفاعل مع أطفالهم المرضى بطرق تحفز المهارات الاجتماعية وتعالج المشكلات السلوكية',
          image: '/demo-baby-8.png',
        },
      ],
      afterTreatment: [
        'لوريم إيبسو ملوريم إيبسوملوريم إيبسوم لوريم إيبسوملوريم إيبسوم لوريم إيبسوملوريم إيبسوملوري',
        'لوريم إيبسو ملوريم إيبسوملوريم إيبسوم لوريم إيبسوملوريم إيبسوم لوريم إيبسوملوريم',
      ],
      familyReview:
        'شكرا سبيكترا وكل الرفيق الطبى لطريقة العلاج المرنة جدا وشوط طريق طويل والنتيجة جدا رائعة',
      video: '',
    },
  },
  {
    id: 'story-5',
    childName: 'حلا محمد العانزي',
    daignosis: 'اضطراب طيف التوحد',
    image: '/demo-baby-2.png',
    story: {
      description:
        'اضطراب طيف التوحد عبارة عن حالة ترتبط بنمو الدماغ وتؤثر على كيفية تمييز الشخص للآخرين والتعامل معهم على المستوى الاجتماعي، مما يتسبب في حدوث مشكلات في التفاعل والتواصل الاجتماعي.',
      beforeTreatment: [
        'يرفض العناق والإمساك به، ويبدو أنه يفضل اللعب بمفرده؛ أي ينسحب إلى عالمه الخاص',
        'عدم الكلام أو التأخر في الكلام، أو قد يفقد الطفل قدرته السابقة على التلفظ بالكلمات والجمل',
        'يتكلم بنبرة أو إيقاع غير طبيعي؛ وقد يستخدم صوتًا رتيبًا أو يتكلم مثل الإنسان الآلي',
      ],
      cureMethod: [
        {
          id: '01',
          text: 'العلاجات التربوية. غالبًا ما يستجيب الأطفال المصابون باضطراب طيف التوحد جيدًا للبرامج التربوية التي تتميز بدرجة عالية من التنظيم.',
          image: '/demo-baby-6.png',
        },
        {
          id: '02',
          text: 'العلاج الأسري. يتعلم الآباء وأفراد الأسرة الآخرون كيفية اللعب والتفاعل مع أطفالهم المرضى بطرق تحفز المهارات الاجتماعية وتعالج المشكلات السلوكية',
          image: '/demo-baby-7.png',
        },
        {
          id: '03',
          text: 'العلاج الأسري. يتعلم الآباء وأفراد الأسرة الآخرون كيفية اللعب والتفاعل مع أطفالهم المرضى بطرق تحفز المهارات الاجتماعية وتعالج المشكلات السلوكية',
          image: '/demo-baby-8.png',
        },
      ],
      afterTreatment: [
        'لوريم إيبسو ملوريم إيبسوملوريم إيبسوم لوريم إيبسوملوريم إيبسوم لوريم إيبسوملوريم إيبسوملوري',
        'لوريم إيبسو ملوريم إيبسوملوريم إيبسوم لوريم إيبسوملوريم إيبسوم لوريم إيبسوملوريم',
      ],
      familyReview:
        'شكرا سبيكترا وكل الرفيق الطبى لطريقة العلاج المرنة جدا وشوط طريق طويل والنتيجة جدا رائعة',
      video: '',
    },
  },
  {
    id: 'story-6',
    childName: 'حلا محمد العانزي',
    daignosis: 'اضطراب طيف التوحد',
    image: '/demo-baby-3.png',
    story: {
      description:
        'اضطراب طيف التوحد عبارة عن حالة ترتبط بنمو الدماغ وتؤثر على كيفية تمييز الشخص للآخرين والتعامل معهم على المستوى الاجتماعي، مما يتسبب في حدوث مشكلات في التفاعل والتواصل الاجتماعي.',
      beforeTreatment: [
        'يرفض العناق والإمساك به، ويبدو أنه يفضل اللعب بمفرده؛ أي ينسحب إلى عالمه الخاص',
        'عدم الكلام أو التأخر في الكلام، أو قد يفقد الطفل قدرته السابقة على التلفظ بالكلمات والجمل',
        'يتكلم بنبرة أو إيقاع غير طبيعي؛ وقد يستخدم صوتًا رتيبًا أو يتكلم مثل الإنسان الآلي',
      ],
      cureMethod: [
        {
          id: '01',
          text: 'العلاجات التربوية. غالبًا ما يستجيب الأطفال المصابون باضطراب طيف التوحد جيدًا للبرامج التربوية التي تتميز بدرجة عالية من التنظيم.',
          image: '/demo-baby-6.png',
        },
        {
          id: '02',
          text: 'العلاج الأسري. يتعلم الآباء وأفراد الأسرة الآخرون كيفية اللعب والتفاعل مع أطفالهم المرضى بطرق تحفز المهارات الاجتماعية وتعالج المشكلات السلوكية',
          image: '/demo-baby-7.png',
        },
        {
          id: '03',
          text: 'العلاج الأسري. يتعلم الآباء وأفراد الأسرة الآخرون كيفية اللعب والتفاعل مع أطفالهم المرضى بطرق تحفز المهارات الاجتماعية وتعالج المشكلات السلوكية',
          image: '/demo-baby-8.png',
        },
      ],
      afterTreatment: [
        'لوريم إيبسو ملوريم إيبسوملوريم إيبسوم لوريم إيبسوملوريم إيبسوم لوريم إيبسوملوريم إيبسوملوري',
        'لوريم إيبسو ملوريم إيبسوملوريم إيبسوم لوريم إيبسوملوريم إيبسوم لوريم إيبسوملوريم',
      ],
      familyReview:
        'شكرا سبيكترا وكل الرفيق الطبى لطريقة العلاج المرنة جدا وشوط طريق طويل والنتيجة جدا رائعة',
      video: '',
    },
  },
];

export const ARTICLES = [
  {
    id: 1,
    type: ['general', 'psychology'],
    title:
      'المشاكل المجتمعية والأسرية التي تواجه مصابي (ADHD)',
    poster: '/demo-blog-1.webp',
    writer: 'د/ايمان',
    date: '12/08/2024',
    mainContent:
      'الإدمان ما هو الا وسيلة أخرى للمدمن للتكيف والتعامل مع معاناته الناتجة عن الأعراض والاضطرابات الأخرى المصاحبة لاضطراب فرط الحركة ونقص الانتباه (ADHD)، مثل ضعف التركيز، فرط الحركة، القلق، الاكتئاب، إضرابات التعلم والسلوك وغيرها الكثير، التي تنتج بسبب نقص بكمية النواقل الكميائية الدوبامين والنورأدرينالين في الجبهة الأمامية من الدماغ.',
    likes: '10',
    isNew: true,
    readCount: 4,
    rate: null,
    content: [
      {
        title: '',
        image: '/demo-blog-1.webp',
        paragraphs: [
          'الإدمان ما هو الا وسيلة أخرى للمدمن للتكيف والتعامل مع معاناته الناتجة عن الأعراض والاضطرابات الأخرى المصاحبة لاضطراب فرط الحركة ونقص الانتباه (ADHD)، مثل ضعف التركيز، فرط الحركة، القلق، الاكتئاب، إضرابات التعلم والسلوك وغيرها الكثير،',
          'يعد اضطراب نقص الانتباه وفرط النشاط (ADHD) أحد أكثر اضطرابات النمو العصبي شيوعًا والأكثر دراسة لدى الأطفال: اكتشف العلماء أن هناك اختلافات في الأدمغة والشبكات العصبية والناقلات العصبية لدى المصابين بهذا الاضطراب. عد حالة دماغية طويلة الأمد (مزمنة) تسبب خللًا تنفيذيًا، مما يعني أنها تعطل قدرة الشخص على إدارة عواطفه وأفكاره وأفعاله. يجعل الاضطراب من الصعب على الأشخاص إدارة سلوكهم أو الانتباه أو السيطرة على النشاط الزائد أو تنظيم مزاجهم. أو اتباع التوجيهات. عادةً ما يتم تشخيص الأطفال أثناء مرحلة الطفولة، وغالبًا ما تستمر الحالة حتى مرحلة البلوغ. يعد العلاج الفعال متاح، وإذا تُرك اضطراب فرط الحركة ونقص الانتباه دون علاج، فيمكن أن يسبب مضاعفات خطيرة مدى الحياة.',
        ],
      },
      {
        title:
          'يتم تشخيص معظم الحالات عند الأطفال بعمر أقل من 12 عامًا، ولكن في بعض الأحيان يتم تشخيصها لاحقًا في مرحلة الطفولة.',
        image: '/demo-blog-1.webp',
        paragraphs: [
          'على الرغم من أن علامات الاضطراب يمكن أن تظهر أحيانًا عند الأطفال في مرحلة ما قبل المدرسة أو حتى الأطفال الأصغر سنًا، إلا أن تشخيص الاضطراب عند الأطفال الصغار جدًا أمر صعب.',
          'يعزى ذلك إلى أن مشكلات النمو مثل تأخر اللغة يمكن الخلط بينها وبين اضطراب فرط الحركة ونقص الانتباه. لذا، فإن الأطفال في سن ما قبل المدرسة أو الأصغر سنًا الذين يشتبه في إصابتهم بالاضطراب هم أكثر عرضة للتقييم من قبل متخصص.',
        ],
      },
      {
        title: '',
        image: '/demo-blog-1.webp',
        paragraphs: [
          'لا يوجد اختبار محدد لتشخيص الاضطراب ولكن من المرجح أن يتضمن التشخيص ما يلي: الفحص الطبي: للمساعدة في استبعاد الأسباب المحتملة الأخرى للأعراض. جمع المعلومات: مثل أي مشاكل طبية حالية والتاريخ الطبي الشخصي والعائلي والسجلات المدرسية المقابلات أو الاستبيانات لأفراد الأسرة أو غيرهم من الأشخاص الذين يعرفون المريض جيدًا. المعايير: معايير اضطراب فرط الحركة ونقص الانتباه من الدليل التشخيصي والإحصائي للاضطرابات النفسية DSM-5. كيف يتم تشخيص الاضطراب عند الأطفال الصغار؟ على الرغم من أن علامات الاضطراب يمكن أن تظهر أحيانًا عند الأطفال في مرحلة ما قبل المدرسة أو حتى الأطفال الأصغر سنًا، إلا أن تشخيص الاضطراب عند الأطفال الصغار جدًا أمر صعب. يعزى ذلك إلى أن مشكلات النمو مثل تأخر اللغة يمكن الخلط بينها وبين اضطراب فرط الحركة ونقص الانتباه. لذا، فإن الأطفال في سن ما قبل المدرسة أو الأصغر سنًا الذين يشتبه في إصابتهم بالاضطراب هم أكثر عرضة للتقييم من قبل متخصص.',
        ],
      },
    ],
  },
  {
    id: 2,
    type: ['general', 'meetings', 'counseling'],
    title:
      'المشاكل المجتمعية والأسرية التي تواجه مصابي (ADHD)',
    poster: '/demo-blog-2.webp',
    writer: 'د/ايمان',
    date: '12/08/2024',
    mainContent:
      'الإدمان ما هو الا وسيلة أخرى للمدمن للتكيف والتعامل مع معاناته الناتجة عن الأعراض والاضطرابات الأخرى المصاحبة لاضطراب فرط الحركة ونقص الانتباه (ADHD)، مثل ضعف التركيز، فرط الحركة، القلق، الاكتئاب، إضرابات التعلم والسلوك وغيرها الكثير، التي تنتج بسبب نقص بكمية النواقل الكميائية الدوبامين والنورأدرينالين في الجبهة الأمامية من الدماغ.',
    likes: '10',
    isNew: true,
    readCount: 4,
    rate: 4.5,
    content: [
      {
        title: '',
        image: '/demo-blog-2.webp',
        paragraphs: [
          'الإدمان ما هو الا وسيلة أخرى للمدمن للتكيف والتعامل مع معاناته الناتجة عن الأعراض والاضطرابات الأخرى المصاحبة لاضطراب فرط الحركة ونقص الانتباه (ADHD)، مثل ضعف التركيز، فرط الحركة، القلق، الاكتئاب، إضرابات التعلم والسلوك وغيرها الكثير،',
          'يعد اضطراب نقص الانتباه وفرط النشاط (ADHD) أحد أكثر اضطرابات النمو العصبي شيوعًا والأكثر دراسة لدى الأطفال: اكتشف العلماء أن هناك اختلافات في الأدمغة والشبكات العصبية والناقلات العصبية لدى المصابين بهذا الاضطراب. عد حالة دماغية طويلة الأمد (مزمنة) تسبب خللًا تنفيذيًا، مما يعني أنها تعطل قدرة الشخص على إدارة عواطفه وأفكاره وأفعاله. يجعل الاضطراب من الصعب على الأشخاص إدارة سلوكهم أو الانتباه أو السيطرة على النشاط الزائد أو تنظيم مزاجهم. أو اتباع التوجيهات. عادةً ما يتم تشخيص الأطفال أثناء مرحلة الطفولة، وغالبًا ما تستمر الحالة حتى مرحلة البلوغ. يعد العلاج الفعال متاح، وإذا تُرك اضطراب فرط الحركة ونقص الانتباه دون علاج، فيمكن أن يسبب مضاعفات خطيرة مدى الحياة.',
        ],
      },
      {
        title:
          'يتم تشخيص معظم الحالات عند الأطفال بعمر أقل من 12 عامًا، ولكن في بعض الأحيان يتم تشخيصها لاحقًا في مرحلة الطفولة.',
        image: '/demo-blog-2.webp',
        paragraphs: [
          'على الرغم من أن علامات الاضطراب يمكن أن تظهر أحيانًا عند الأطفال في مرحلة ما قبل المدرسة أو حتى الأطفال الأصغر سنًا، إلا أن تشخيص الاضطراب عند الأطفال الصغار جدًا أمر صعب.',
          'يعزى ذلك إلى أن مشكلات النمو مثل تأخر اللغة يمكن الخلط بينها وبين اضطراب فرط الحركة ونقص الانتباه. لذا، فإن الأطفال في سن ما قبل المدرسة أو الأصغر سنًا الذين يشتبه في إصابتهم بالاضطراب هم أكثر عرضة للتقييم من قبل متخصص.',
        ],
      },
      {
        title: '',
        image: '/demo-blog-2.webp',
        paragraphs: [
          'لا يوجد اختبار محدد لتشخيص الاضطراب ولكن من المرجح أن يتضمن التشخيص ما يلي: الفحص الطبي: للمساعدة في استبعاد الأسباب المحتملة الأخرى للأعراض. جمع المعلومات: مثل أي مشاكل طبية حالية والتاريخ الطبي الشخصي والعائلي والسجلات المدرسية المقابلات أو الاستبيانات لأفراد الأسرة أو غيرهم من الأشخاص الذين يعرفون المريض جيدًا. المعايير: معايير اضطراب فرط الحركة ونقص الانتباه من الدليل التشخيصي والإحصائي للاضطرابات النفسية DSM-5. كيف يتم تشخيص الاضطراب عند الأطفال الصغار؟ على الرغم من أن علامات الاضطراب يمكن أن تظهر أحيانًا عند الأطفال في مرحلة ما قبل المدرسة أو حتى الأطفال الأصغر سنًا، إلا أن تشخيص الاضطراب عند الأطفال الصغار جدًا أمر صعب. يعزى ذلك إلى أن مشكلات النمو مثل تأخر اللغة يمكن الخلط بينها وبين اضطراب فرط الحركة ونقص الانتباه. لذا، فإن الأطفال في سن ما قبل المدرسة أو الأصغر سنًا الذين يشتبه في إصابتهم بالاضطراب هم أكثر عرضة للتقييم من قبل متخصص.',
        ],
      },
    ],
  },
  {
    id: 3,
    type: ['general', 'autism'],
    title:
      'المشاكل المجتمعية والأسرية التي تواجه مصابي (ADHD)',
    poster: '/demo-blog-3.webp',
    writer: 'د/ايمان',
    date: '12/08/2024',
    mainContent:
      'الإدمان ما هو الا وسيلة أخرى للمدمن للتكيف والتعامل مع معاناته الناتجة عن الأعراض والاضطرابات الأخرى المصاحبة لاضطراب فرط الحركة ونقص الانتباه (ADHD)، مثل ضعف التركيز، فرط الحركة، القلق، الاكتئاب، إضرابات التعلم والسلوك وغيرها الكثير، التي تنتج بسبب نقص بكمية النواقل الكميائية الدوبامين والنورأدرينالين في الجبهة الأمامية من الدماغ.',
    likes: '10',
    isNew: true,
    readCount: 4,
    rate: 4.5,
    content: [
      {
        title: '',
        image: '/demo-blog-3.webp',
        paragraphs: [
          'الإدمان ما هو الا وسيلة أخرى للمدمن للتكيف والتعامل مع معاناته الناتجة عن الأعراض والاضطرابات الأخرى المصاحبة لاضطراب فرط الحركة ونقص الانتباه (ADHD)، مثل ضعف التركيز، فرط الحركة، القلق، الاكتئاب، إضرابات التعلم والسلوك وغيرها الكثير،',
          'يعد اضطراب نقص الانتباه وفرط النشاط (ADHD) أحد أكثر اضطرابات النمو العصبي شيوعًا والأكثر دراسة لدى الأطفال: اكتشف العلماء أن هناك اختلافات في الأدمغة والشبكات العصبية والناقلات العصبية لدى المصابين بهذا الاضطراب. عد حالة دماغية طويلة الأمد (مزمنة) تسبب خللًا تنفيذيًا، مما يعني أنها تعطل قدرة الشخص على إدارة عواطفه وأفكاره وأفعاله. يجعل الاضطراب من الصعب على الأشخاص إدارة سلوكهم أو الانتباه أو السيطرة على النشاط الزائد أو تنظيم مزاجهم. أو اتباع التوجيهات. عادةً ما يتم تشخيص الأطفال أثناء مرحلة الطفولة، وغالبًا ما تستمر الحالة حتى مرحلة البلوغ. يعد العلاج الفعال متاح، وإذا تُرك اضطراب فرط الحركة ونقص الانتباه دون علاج، فيمكن أن يسبب مضاعفات خطيرة مدى الحياة.',
        ],
      },
      {
        title:
          'يتم تشخيص معظم الحالات عند الأطفال بعمر أقل من 12 عامًا، ولكن في بعض الأحيان يتم تشخيصها لاحقًا في مرحلة الطفولة.',
        image: '/demo-blog-3.webp',
        paragraphs: [
          'على الرغم من أن علامات الاضطراب يمكن أن تظهر أحيانًا عند الأطفال في مرحلة ما قبل المدرسة أو حتى الأطفال الأصغر سنًا، إلا أن تشخيص الاضطراب عند الأطفال الصغار جدًا أمر صعب.',
          'يعزى ذلك إلى أن مشكلات النمو مثل تأخر اللغة يمكن الخلط بينها وبين اضطراب فرط الحركة ونقص الانتباه. لذا، فإن الأطفال في سن ما قبل المدرسة أو الأصغر سنًا الذين يشتبه في إصابتهم بالاضطراب هم أكثر عرضة للتقييم من قبل متخصص.',
        ],
      },
      {
        title: '',
        image: '/demo-blog-3.webp',
        paragraphs: [
          'لا يوجد اختبار محدد لتشخيص الاضطراب ولكن من المرجح أن يتضمن التشخيص ما يلي: الفحص الطبي: للمساعدة في استبعاد الأسباب المحتملة الأخرى للأعراض. جمع المعلومات: مثل أي مشاكل طبية حالية والتاريخ الطبي الشخصي والعائلي والسجلات المدرسية المقابلات أو الاستبيانات لأفراد الأسرة أو غيرهم من الأشخاص الذين يعرفون المريض جيدًا. المعايير: معايير اضطراب فرط الحركة ونقص الانتباه من الدليل التشخيصي والإحصائي للاضطرابات النفسية DSM-5. كيف يتم تشخيص الاضطراب عند الأطفال الصغار؟ على الرغم من أن علامات الاضطراب يمكن أن تظهر أحيانًا عند الأطفال في مرحلة ما قبل المدرسة أو حتى الأطفال الأصغر سنًا، إلا أن تشخيص الاضطراب عند الأطفال الصغار جدًا أمر صعب. يعزى ذلك إلى أن مشكلات النمو مثل تأخر اللغة يمكن الخلط بينها وبين اضطراب فرط الحركة ونقص الانتباه. لذا، فإن الأطفال في سن ما قبل المدرسة أو الأصغر سنًا الذين يشتبه في إصابتهم بالاضطراب هم أكثر عرضة للتقييم من قبل متخصص.',
        ],
      },
    ],
  },
  {
    id: 4,
    type: ['general', 'hyperactivity', 'awareness'],
    title:
      'المشاكل المجتمعية والأسرية التي تواجه مصابي (ADHD)',
    poster: '/demo-blog-4.webp',
    writer: 'د/ايمان',
    date: '12/08/2024',
    mainContent:
      'الإدمان ما هو الا وسيلة أخرى للمدمن للتكيف والتعامل مع معاناته الناتجة عن الأعراض والاضطرابات الأخرى المصاحبة لاضطراب فرط الحركة ونقص الانتباه (ADHD)، مثل ضعف التركيز، فرط الحركة، القلق، الاكتئاب، إضرابات التعلم والسلوك وغيرها الكثير، التي تنتج بسبب نقص بكمية النواقل الكميائية الدوبامين والنورأدرينالين في الجبهة الأمامية من الدماغ.',
    likes: '10',
    isNew: true,
    readCount: 4,
    rate: 4.5,
    content: [
      {
        title: '',
        image: '/demo-blog-4.webp',
        paragraphs: [
          'الإدمان ما هو الا وسيلة أخرى للمدمن للتكيف والتعامل مع معاناته الناتجة عن الأعراض والاضطرابات الأخرى المصاحبة لاضطراب فرط الحركة ونقص الانتباه (ADHD)، مثل ضعف التركيز، فرط الحركة، القلق، الاكتئاب، إضرابات التعلم والسلوك وغيرها الكثير،',
          'يعد اضطراب نقص الانتباه وفرط النشاط (ADHD) أحد أكثر اضطرابات النمو العصبي شيوعًا والأكثر دراسة لدى الأطفال: اكتشف العلماء أن هناك اختلافات في الأدمغة والشبكات العصبية والناقلات العصبية لدى المصابين بهذا الاضطراب. عد حالة دماغية طويلة الأمد (مزمنة) تسبب خللًا تنفيذيًا، مما يعني أنها تعطل قدرة الشخص على إدارة عواطفه وأفكاره وأفعاله. يجعل الاضطراب من الصعب على الأشخاص إدارة سلوكهم أو الانتباه أو السيطرة على النشاط الزائد أو تنظيم مزاجهم. أو اتباع التوجيهات. عادةً ما يتم تشخيص الأطفال أثناء مرحلة الطفولة، وغالبًا ما تستمر الحالة حتى مرحلة البلوغ. يعد العلاج الفعال متاح، وإذا تُرك اضطراب فرط الحركة ونقص الانتباه دون علاج، فيمكن أن يسبب مضاعفات خطيرة مدى الحياة.',
        ],
      },
      {
        title:
          'يتم تشخيص معظم الحالات عند الأطفال بعمر أقل من 12 عامًا، ولكن في بعض الأحيان يتم تشخيصها لاحقًا في مرحلة الطفولة.',
        image: '/demo-blog-4.webp',
        paragraphs: [
          'على الرغم من أن علامات الاضطراب يمكن أن تظهر أحيانًا عند الأطفال في مرحلة ما قبل المدرسة أو حتى الأطفال الأصغر سنًا، إلا أن تشخيص الاضطراب عند الأطفال الصغار جدًا أمر صعب.',
          'يعزى ذلك إلى أن مشكلات النمو مثل تأخر اللغة يمكن الخلط بينها وبين اضطراب فرط الحركة ونقص الانتباه. لذا، فإن الأطفال في سن ما قبل المدرسة أو الأصغر سنًا الذين يشتبه في إصابتهم بالاضطراب هم أكثر عرضة للتقييم من قبل متخصص.',
        ],
      },
      {
        title: '',
        image: '/demo-blog-4.webp',
        paragraphs: [
          'لا يوجد اختبار محدد لتشخيص الاضطراب ولكن من المرجح أن يتضمن التشخيص ما يلي: الفحص الطبي: للمساعدة في استبعاد الأسباب المحتملة الأخرى للأعراض. جمع المعلومات: مثل أي مشاكل طبية حالية والتاريخ الطبي الشخصي والعائلي والسجلات المدرسية المقابلات أو الاستبيانات لأفراد الأسرة أو غيرهم من الأشخاص الذين يعرفون المريض جيدًا. المعايير: معايير اضطراب فرط الحركة ونقص الانتباه من الدليل التشخيصي والإحصائي للاضطرابات النفسية DSM-5. كيف يتم تشخيص الاضطراب عند الأطفال الصغار؟ على الرغم من أن علامات الاضطراب يمكن أن تظهر أحيانًا عند الأطفال في مرحلة ما قبل المدرسة أو حتى الأطفال الأصغر سنًا، إلا أن تشخيص الاضطراب عند الأطفال الصغار جدًا أمر صعب. يعزى ذلك إلى أن مشكلات النمو مثل تأخر اللغة يمكن الخلط بينها وبين اضطراب فرط الحركة ونقص الانتباه. لذا، فإن الأطفال في سن ما قبل المدرسة أو الأصغر سنًا الذين يشتبه في إصابتهم بالاضطراب هم أكثر عرضة للتقييم من قبل متخصص.',
        ],
      },
    ],
  },
  {
    id: 5,
    type: ['general', 'family-relationships'],
    title:
      'المشاكل المجتمعية والأسرية التي تواجه مصابي (ADHD)',
    poster: '/demo-blog-5.webp',
    writer: 'د/ايمان',
    date: '12/08/2024',
    mainContent:
      'الإدمان ما هو الا وسيلة أخرى للمدمن للتكيف والتعامل مع معاناته الناتجة عن الأعراض والاضطرابات الأخرى المصاحبة لاضطراب فرط الحركة ونقص الانتباه (ADHD)، مثل ضعف التركيز، فرط الحركة، القلق، الاكتئاب، إضرابات التعلم والسلوك وغيرها الكثير، التي تنتج بسبب نقص بكمية النواقل الكميائية الدوبامين والنورأدرينالين في الجبهة الأمامية من الدماغ.',
    likes: '10',
    isNew: true,
    readCount: 4,
    rate: 4.5,
    content: [
      {
        title: '',
        image: '/demo-blog-5.webp',
        paragraphs: [
          'الإدمان ما هو الا وسيلة أخرى للمدمن للتكيف والتعامل مع معاناته الناتجة عن الأعراض والاضطرابات الأخرى المصاحبة لاضطراب فرط الحركة ونقص الانتباه (ADHD)، مثل ضعف التركيز، فرط الحركة، القلق، الاكتئاب، إضرابات التعلم والسلوك وغيرها الكثير،',
          'يعد اضطراب نقص الانتباه وفرط النشاط (ADHD) أحد أكثر اضطرابات النمو العصبي شيوعًا والأكثر دراسة لدى الأطفال: اكتشف العلماء أن هناك اختلافات في الأدمغة والشبكات العصبية والناقلات العصبية لدى المصابين بهذا الاضطراب. عد حالة دماغية طويلة الأمد (مزمنة) تسبب خللًا تنفيذيًا، مما يعني أنها تعطل قدرة الشخص على إدارة عواطفه وأفكاره وأفعاله. يجعل الاضطراب من الصعب على الأشخاص إدارة سلوكهم أو الانتباه أو السيطرة على النشاط الزائد أو تنظيم مزاجهم. أو اتباع التوجيهات. عادةً ما يتم تشخيص الأطفال أثناء مرحلة الطفولة، وغالبًا ما تستمر الحالة حتى مرحلة البلوغ. يعد العلاج الفعال متاح، وإذا تُرك اضطراب فرط الحركة ونقص الانتباه دون علاج، فيمكن أن يسبب مضاعفات خطيرة مدى الحياة.',
        ],
      },
      {
        title:
          'يتم تشخيص معظم الحالات عند الأطفال بعمر أقل من 12 عامًا، ولكن في بعض الأحيان يتم تشخيصها لاحقًا في مرحلة الطفولة.',
        image: '/demo-blog-5.webp',
        paragraphs: [
          'على الرغم من أن علامات الاضطراب يمكن أن تظهر أحيانًا عند الأطفال في مرحلة ما قبل المدرسة أو حتى الأطفال الأصغر سنًا، إلا أن تشخيص الاضطراب عند الأطفال الصغار جدًا أمر صعب.',
          'يعزى ذلك إلى أن مشكلات النمو مثل تأخر اللغة يمكن الخلط بينها وبين اضطراب فرط الحركة ونقص الانتباه. لذا، فإن الأطفال في سن ما قبل المدرسة أو الأصغر سنًا الذين يشتبه في إصابتهم بالاضطراب هم أكثر عرضة للتقييم من قبل متخصص.',
        ],
      },
      {
        title: '',
        image: '/demo-blog-5.webp',
        paragraphs: [
          'لا يوجد اختبار محدد لتشخيص الاضطراب ولكن من المرجح أن يتضمن التشخيص ما يلي: الفحص الطبي: للمساعدة في استبعاد الأسباب المحتملة الأخرى للأعراض. جمع المعلومات: مثل أي مشاكل طبية حالية والتاريخ الطبي الشخصي والعائلي والسجلات المدرسية المقابلات أو الاستبيانات لأفراد الأسرة أو غيرهم من الأشخاص الذين يعرفون المريض جيدًا. المعايير: معايير اضطراب فرط الحركة ونقص الانتباه من الدليل التشخيصي والإحصائي للاضطرابات النفسية DSM-5. كيف يتم تشخيص الاضطراب عند الأطفال الصغار؟ على الرغم من أن علامات الاضطراب يمكن أن تظهر أحيانًا عند الأطفال في مرحلة ما قبل المدرسة أو حتى الأطفال الأصغر سنًا، إلا أن تشخيص الاضطراب عند الأطفال الصغار جدًا أمر صعب. يعزى ذلك إلى أن مشكلات النمو مثل تأخر اللغة يمكن الخلط بينها وبين اضطراب فرط الحركة ونقص الانتباه. لذا، فإن الأطفال في سن ما قبل المدرسة أو الأصغر سنًا الذين يشتبه في إصابتهم بالاضطراب هم أكثر عرضة للتقييم من قبل متخصص.',
        ],
      },
    ],
  },
];
