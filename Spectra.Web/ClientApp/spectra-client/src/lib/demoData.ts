// Cspell: disable
import React from 'react';

import { MedicalTeamTableData } from '@/app/[locale]/(client)/client/team/_components/columns';
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
import { ClientsTableData } from '@/app/[locale]/(client)/client/profile/_components/clients-table-columns';

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

export const MedicalTeamData: MedicalTeamTableData[] = [
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
];

export const ClientsData: ClientsTableData[] = [
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
    image:
      'https://s3-alpha-sig.figma.com/img/20cb/48fd/6de565a9eca735dac8000b04c6c22c0c?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YlycV9LxfCaK3Yvl6qs-CQ7FvImTCE7glC5jkubXDuCNTAPer3irSjBEmQb49X2mGA1oWChtdV5-vd3yYoBMN~88ySH6BDlzdsHaKAKby2Nt9CoM~T1TYgLH37LJzy1Hge2xERpatZ9XZfPuc6CIOFoxjyPFx3CjIQD654n5MZi4wSceHk7UUFTGsjWPtdap8DQTDmXTyMk7GUoo7ZGgcfy67C9dRpnIALhsDY4mzG8czhmpBcQUF2djRoRZiYTnirIiRTDktie-SY91HP9c2PMU~DPHLUzNP6~YOX6hxBHESm1S7ULgdVyHKSFJRqv47KQsjtQrrgFgLZRGf8rStg__',
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
          image:
            'https://s3-alpha-sig.figma.com/img/9535/4ac3/f4f7add68ba594ecf2c04fc438e0317b?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ntt72hlgv711YSQvEoF~JWthX8q09tOjCKvboXHU91SzpwsPbXqZhhUvQS95PcmM73Ks8nijc~XVhvOZqdrniUecSHHfYByjb5m10TptwfqqKX50xs0aBOSuh~PTbyHxNLOVcH5cDWUJJSVd2HyIBl3ilLfI7GMsb~Ex1KjaBOdrfOPz0GNwspri05oAXNoft8PELbnGKfNpK2SyuCdvTgw6iNDra9-0lS7GuLBrJrkHwkNAl1ZoH25iqDGz9LN1yKTlu3CupvfgRxjDpwK3YoCK5fsP6yzvEfqLSRF1-58fQuX78xQogFmwEthHgN8T~k9kPbLN9jhxH68JTsXbxQ__',
        },
        {
          id: '02',
          text: 'العلاج الأسري. يتعلم الآباء وأفراد الأسرة الآخرون كيفية اللعب والتفاعل مع أطفالهم المرضى بطرق تحفز المهارات الاجتماعية وتعالج المشكلات السلوكية',
          image:
            'https://s3-alpha-sig.figma.com/img/93f4/2043/2ef5d95bcfb118176eef90016afd687b?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZbNRIoKCvOprB2TrPIyCDqZ988c81Ei3y7mCqEtdW9eR4SwqUmtCKcyBse9QXexoDB6ConHMx1~7jdFNxr5RpYMVXL1HIaO5p9bOjYug-qD7BGzDrADB4Se~z6UJlL~s0uWYH-C9~b1j0-Zb4NDZEmdM~NZFzYeDy4f9Obszn--L987phUfH5oQxgUE--3VguM0FYSARla0ll51dsHrwcyNAixXk5WdG71BYf9~nt-nWhfsY9qbcFWK3Um7a2UjHkYbeTJm9ILkD-IbBZ7Jg~ELkBU3hApEm8zf2JenKdAIN1Rp9s~7OYCxvmU-woJ298CsZgbLanoFz70WCpWeV0w__',
        },
        {
          id: '03',
          text: 'العلاج الأسري. يتعلم الآباء وأفراد الأسرة الآخرون كيفية اللعب والتفاعل مع أطفالهم المرضى بطرق تحفز المهارات الاجتماعية وتعالج المشكلات السلوكية',
          image:
            'https://s3-alpha-sig.figma.com/img/2f47/a613/6eaff050bcad70a55ae0471f745a9bd4?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QVyWvGQyUUHf3bFLjKlgZwZl4ZAYgKH5Vye77OCxDWu~xB1hpZ5-jUl71Ep69y80l~qLF3y7u2aDGWFYDzDlfTx2bzIBz4-34rzZZdI9gomXT8BlcZsouM9kMPMhHoKkm6AKTpiMlh6wOHFcTDQrQbNP5jTQffS8fFn6ZORob7WrF65QoJjg0ObMw5QtfUmJSD4JOK3Y~zqOpP~qVakO8q2FlyBSJ09YML75RQ1l5dYMuju6DztDQ9FuGWflgIvn9JhyHlYExNpoGxxstYUUic78CGBnXBpKrWWlmKir-KtVGu9sMwQm1pnMHKaP4GB-GmxspMiD8enDSqymmW3DHQ__',
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
    image:
      'https://s3-alpha-sig.figma.com/img/6d9b/594e/00075896c0a7cba9c1ac0866293ec93b?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EiT15ThXi7CPqNbpH0AgwgxFIFWATYthv8gRFYeL6Fhk17kDjV2qvtw4Q7bRfrIXDmfWkxYvLTdQhMrILH1230H5Ka9X105RSODSaTuuvQJyc3Fq-Elw4RAS9TXYIv6iu6BIYBUayXpu2MrKUxP~PkhC7MDKh3LzQaHTcSkTzLYBzsqO5HPMNAWX9fMWEwi9nqhh8BepKelNY0ehedToIH7c7KTAhB48HpTiUyi2Gb~UaK8XrrK6sya8yZl~wZhvObYWfEXquV9PgoKnYGVKisN06sbTC~AHqjd~N7~n~jL1nB0H5W6gsUodn9uZDA9ALSAY224enLcUAK-z-SA8vQ__',
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
          id: '1',
          text: 'العلاجات التربوية. غالبًا ما يستجيب الأطفال المصابون باضطراب طيف التوحد جيدًا للبرامج التربوية التي تتميز بدرجة عالية من التنظيم.',
          image:
            'https://s3-alpha-sig.figma.com/img/9535/4ac3/f4f7add68ba594ecf2c04fc438e0317b?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ntt72hlgv711YSQvEoF~JWthX8q09tOjCKvboXHU91SzpwsPbXqZhhUvQS95PcmM73Ks8nijc~XVhvOZqdrniUecSHHfYByjb5m10TptwfqqKX50xs0aBOSuh~PTbyHxNLOVcH5cDWUJJSVd2HyIBl3ilLfI7GMsb~Ex1KjaBOdrfOPz0GNwspri05oAXNoft8PELbnGKfNpK2SyuCdvTgw6iNDra9-0lS7GuLBrJrkHwkNAl1ZoH25iqDGz9LN1yKTlu3CupvfgRxjDpwK3YoCK5fsP6yzvEfqLSRF1-58fQuX78xQogFmwEthHgN8T~k9kPbLN9jhxH68JTsXbxQ__',
        },
        {
          id: '2',
          text: 'العلاج الأسري. يتعلم الآباء وأفراد الأسرة الآخرون كيفية اللعب والتفاعل مع أطفالهم المرضى بطرق تحفز المهارات الاجتماعية وتعالج المشكلات السلوكية',
          image:
            'https://s3-alpha-sig.figma.com/img/93f4/2043/2ef5d95bcfb118176eef90016afd687b?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZbNRIoKCvOprB2TrPIyCDqZ988c81Ei3y7mCqEtdW9eR4SwqUmtCKcyBse9QXexoDB6ConHMx1~7jdFNxr5RpYMVXL1HIaO5p9bOjYug-qD7BGzDrADB4Se~z6UJlL~s0uWYH-C9~b1j0-Zb4NDZEmdM~NZFzYeDy4f9Obszn--L987phUfH5oQxgUE--3VguM0FYSARla0ll51dsHrwcyNAixXk5WdG71BYf9~nt-nWhfsY9qbcFWK3Um7a2UjHkYbeTJm9ILkD-IbBZ7Jg~ELkBU3hApEm8zf2JenKdAIN1Rp9s~7OYCxvmU-woJ298CsZgbLanoFz70WCpWeV0w__',
        },
        {
          id: '3',
          text: 'العلاج الأسري. يتعلم الآباء وأفراد الأسرة الآخرون كيفية اللعب والتفاعل مع أطفالهم المرضى بطرق تحفز المهارات الاجتماعية وتعالج المشكلات السلوكية',
          image:
            'https://s3-alpha-sig.figma.com/img/2f47/a613/6eaff050bcad70a55ae0471f745a9bd4?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QVyWvGQyUUHf3bFLjKlgZwZl4ZAYgKH5Vye77OCxDWu~xB1hpZ5-jUl71Ep69y80l~qLF3y7u2aDGWFYDzDlfTx2bzIBz4-34rzZZdI9gomXT8BlcZsouM9kMPMhHoKkm6AKTpiMlh6wOHFcTDQrQbNP5jTQffS8fFn6ZORob7WrF65QoJjg0ObMw5QtfUmJSD4JOK3Y~zqOpP~qVakO8q2FlyBSJ09YML75RQ1l5dYMuju6DztDQ9FuGWflgIvn9JhyHlYExNpoGxxstYUUic78CGBnXBpKrWWlmKir-KtVGu9sMwQm1pnMHKaP4GB-GmxspMiD8enDSqymmW3DHQ__',
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
    image:
      'https://s3-alpha-sig.figma.com/img/b354/cc9d/8b891f91393d57cf404798b3b490d2bb?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CpKnRuKSHLd-e0EXbsT8dea29kwkMvY6Cmb-o3scVn9dLGp6Pr1-iAPeke~422CwnFex1IuBTv9s23PqQtFGlC2jY2jwLQOIv6JgAYXGv-KM5LCLB9q8Rx~SQCJnAaWYgoU1UgEhm58Zfkxf1v52zDy10DcudsE9ef8PTguylT7VEkL36wunRvgX0bv2P5Xhanur8NQjNufSFHco5gqtI0coWcH6fSkd03AOtHy~E~dE1DCah98hcwOqa0kRDzgAllr47VbvMyYRONDNBI7X44RTR~HHhBYCjs6TmB7PPDFbfZj4-EqBN1Tgi7wVrmTCFRfvixgDmIX7ll3XPbRkpA__',

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
          id: '1',
          text: 'العلاجات التربوية. غالبًا ما يستجيب الأطفال المصابون باضطراب طيف التوحد جيدًا للبرامج التربوية التي تتميز بدرجة عالية من التنظيم.',
          image:
            'https://s3-alpha-sig.figma.com/img/9535/4ac3/f4f7add68ba594ecf2c04fc438e0317b?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ntt72hlgv711YSQvEoF~JWthX8q09tOjCKvboXHU91SzpwsPbXqZhhUvQS95PcmM73Ks8nijc~XVhvOZqdrniUecSHHfYByjb5m10TptwfqqKX50xs0aBOSuh~PTbyHxNLOVcH5cDWUJJSVd2HyIBl3ilLfI7GMsb~Ex1KjaBOdrfOPz0GNwspri05oAXNoft8PELbnGKfNpK2SyuCdvTgw6iNDra9-0lS7GuLBrJrkHwkNAl1ZoH25iqDGz9LN1yKTlu3CupvfgRxjDpwK3YoCK5fsP6yzvEfqLSRF1-58fQuX78xQogFmwEthHgN8T~k9kPbLN9jhxH68JTsXbxQ__',
        },
        {
          id: '2',
          text: 'العلاج الأسري. يتعلم الآباء وأفراد الأسرة الآخرون كيفية اللعب والتفاعل مع أطفالهم المرضى بطرق تحفز المهارات الاجتماعية وتعالج المشكلات السلوكية',
          image:
            'https://s3-alpha-sig.figma.com/img/93f4/2043/2ef5d95bcfb118176eef90016afd687b?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZbNRIoKCvOprB2TrPIyCDqZ988c81Ei3y7mCqEtdW9eR4SwqUmtCKcyBse9QXexoDB6ConHMx1~7jdFNxr5RpYMVXL1HIaO5p9bOjYug-qD7BGzDrADB4Se~z6UJlL~s0uWYH-C9~b1j0-Zb4NDZEmdM~NZFzYeDy4f9Obszn--L987phUfH5oQxgUE--3VguM0FYSARla0ll51dsHrwcyNAixXk5WdG71BYf9~nt-nWhfsY9qbcFWK3Um7a2UjHkYbeTJm9ILkD-IbBZ7Jg~ELkBU3hApEm8zf2JenKdAIN1Rp9s~7OYCxvmU-woJ298CsZgbLanoFz70WCpWeV0w__',
        },
        {
          id: '3',
          text: 'العلاج الأسري. يتعلم الآباء وأفراد الأسرة الآخرون كيفية اللعب والتفاعل مع أطفالهم المرضى بطرق تحفز المهارات الاجتماعية وتعالج المشكلات السلوكية',
          image:
            'https://s3-alpha-sig.figma.com/img/2f47/a613/6eaff050bcad70a55ae0471f745a9bd4?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QVyWvGQyUUHf3bFLjKlgZwZl4ZAYgKH5Vye77OCxDWu~xB1hpZ5-jUl71Ep69y80l~qLF3y7u2aDGWFYDzDlfTx2bzIBz4-34rzZZdI9gomXT8BlcZsouM9kMPMhHoKkm6AKTpiMlh6wOHFcTDQrQbNP5jTQffS8fFn6ZORob7WrF65QoJjg0ObMw5QtfUmJSD4JOK3Y~zqOpP~qVakO8q2FlyBSJ09YML75RQ1l5dYMuju6DztDQ9FuGWflgIvn9JhyHlYExNpoGxxstYUUic78CGBnXBpKrWWlmKir-KtVGu9sMwQm1pnMHKaP4GB-GmxspMiD8enDSqymmW3DHQ__',
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
    image:
      'https://s3-alpha-sig.figma.com/img/20cb/48fd/6de565a9eca735dac8000b04c6c22c0c?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YlycV9LxfCaK3Yvl6qs-CQ7FvImTCE7glC5jkubXDuCNTAPer3irSjBEmQb49X2mGA1oWChtdV5-vd3yYoBMN~88ySH6BDlzdsHaKAKby2Nt9CoM~T1TYgLH37LJzy1Hge2xERpatZ9XZfPuc6CIOFoxjyPFx3CjIQD654n5MZi4wSceHk7UUFTGsjWPtdap8DQTDmXTyMk7GUoo7ZGgcfy67C9dRpnIALhsDY4mzG8czhmpBcQUF2djRoRZiYTnirIiRTDktie-SY91HP9c2PMU~DPHLUzNP6~YOX6hxBHESm1S7ULgdVyHKSFJRqv47KQsjtQrrgFgLZRGf8rStg__',
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
          id: '1',
          text: 'العلاجات التربوية. غالبًا ما يستجيب الأطفال المصابون باضطراب طيف التوحد جيدًا للبرامج التربوية التي تتميز بدرجة عالية من التنظيم.',
          image:
            'https://s3-alpha-sig.figma.com/img/9535/4ac3/f4f7add68ba594ecf2c04fc438e0317b?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ntt72hlgv711YSQvEoF~JWthX8q09tOjCKvboXHU91SzpwsPbXqZhhUvQS95PcmM73Ks8nijc~XVhvOZqdrniUecSHHfYByjb5m10TptwfqqKX50xs0aBOSuh~PTbyHxNLOVcH5cDWUJJSVd2HyIBl3ilLfI7GMsb~Ex1KjaBOdrfOPz0GNwspri05oAXNoft8PELbnGKfNpK2SyuCdvTgw6iNDra9-0lS7GuLBrJrkHwkNAl1ZoH25iqDGz9LN1yKTlu3CupvfgRxjDpwK3YoCK5fsP6yzvEfqLSRF1-58fQuX78xQogFmwEthHgN8T~k9kPbLN9jhxH68JTsXbxQ__',
        },
        {
          id: '2',
          text: 'العلاج الأسري. يتعلم الآباء وأفراد الأسرة الآخرون كيفية اللعب والتفاعل مع أطفالهم المرضى بطرق تحفز المهارات الاجتماعية وتعالج المشكلات السلوكية',
          image:
            'https://s3-alpha-sig.figma.com/img/93f4/2043/2ef5d95bcfb118176eef90016afd687b?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZbNRIoKCvOprB2TrPIyCDqZ988c81Ei3y7mCqEtdW9eR4SwqUmtCKcyBse9QXexoDB6ConHMx1~7jdFNxr5RpYMVXL1HIaO5p9bOjYug-qD7BGzDrADB4Se~z6UJlL~s0uWYH-C9~b1j0-Zb4NDZEmdM~NZFzYeDy4f9Obszn--L987phUfH5oQxgUE--3VguM0FYSARla0ll51dsHrwcyNAixXk5WdG71BYf9~nt-nWhfsY9qbcFWK3Um7a2UjHkYbeTJm9ILkD-IbBZ7Jg~ELkBU3hApEm8zf2JenKdAIN1Rp9s~7OYCxvmU-woJ298CsZgbLanoFz70WCpWeV0w__',
        },
        {
          id: '3',
          text: 'العلاج الأسري. يتعلم الآباء وأفراد الأسرة الآخرون كيفية اللعب والتفاعل مع أطفالهم المرضى بطرق تحفز المهارات الاجتماعية وتعالج المشكلات السلوكية',
          image:
            'https://s3-alpha-sig.figma.com/img/2f47/a613/6eaff050bcad70a55ae0471f745a9bd4?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QVyWvGQyUUHf3bFLjKlgZwZl4ZAYgKH5Vye77OCxDWu~xB1hpZ5-jUl71Ep69y80l~qLF3y7u2aDGWFYDzDlfTx2bzIBz4-34rzZZdI9gomXT8BlcZsouM9kMPMhHoKkm6AKTpiMlh6wOHFcTDQrQbNP5jTQffS8fFn6ZORob7WrF65QoJjg0ObMw5QtfUmJSD4JOK3Y~zqOpP~qVakO8q2FlyBSJ09YML75RQ1l5dYMuju6DztDQ9FuGWflgIvn9JhyHlYExNpoGxxstYUUic78CGBnXBpKrWWlmKir-KtVGu9sMwQm1pnMHKaP4GB-GmxspMiD8enDSqymmW3DHQ__',
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
    image:
      'https://s3-alpha-sig.figma.com/img/6d9b/594e/00075896c0a7cba9c1ac0866293ec93b?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EiT15ThXi7CPqNbpH0AgwgxFIFWATYthv8gRFYeL6Fhk17kDjV2qvtw4Q7bRfrIXDmfWkxYvLTdQhMrILH1230H5Ka9X105RSODSaTuuvQJyc3Fq-Elw4RAS9TXYIv6iu6BIYBUayXpu2MrKUxP~PkhC7MDKh3LzQaHTcSkTzLYBzsqO5HPMNAWX9fMWEwi9nqhh8BepKelNY0ehedToIH7c7KTAhB48HpTiUyi2Gb~UaK8XrrK6sya8yZl~wZhvObYWfEXquV9PgoKnYGVKisN06sbTC~AHqjd~N7~n~jL1nB0H5W6gsUodn9uZDA9ALSAY224enLcUAK-z-SA8vQ__',
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
          id: '1',
          text: 'العلاجات التربوية. غالبًا ما يستجيب الأطفال المصابون باضطراب طيف التوحد جيدًا للبرامج التربوية التي تتميز بدرجة عالية من التنظيم.',
          image:
            'https://s3-alpha-sig.figma.com/img/9535/4ac3/f4f7add68ba594ecf2c04fc438e0317b?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ntt72hlgv711YSQvEoF~JWthX8q09tOjCKvboXHU91SzpwsPbXqZhhUvQS95PcmM73Ks8nijc~XVhvOZqdrniUecSHHfYByjb5m10TptwfqqKX50xs0aBOSuh~PTbyHxNLOVcH5cDWUJJSVd2HyIBl3ilLfI7GMsb~Ex1KjaBOdrfOPz0GNwspri05oAXNoft8PELbnGKfNpK2SyuCdvTgw6iNDra9-0lS7GuLBrJrkHwkNAl1ZoH25iqDGz9LN1yKTlu3CupvfgRxjDpwK3YoCK5fsP6yzvEfqLSRF1-58fQuX78xQogFmwEthHgN8T~k9kPbLN9jhxH68JTsXbxQ__',
        },
        {
          id: '2',
          text: 'العلاج الأسري. يتعلم الآباء وأفراد الأسرة الآخرون كيفية اللعب والتفاعل مع أطفالهم المرضى بطرق تحفز المهارات الاجتماعية وتعالج المشكلات السلوكية',
          image:
            'https://s3-alpha-sig.figma.com/img/93f4/2043/2ef5d95bcfb118176eef90016afd687b?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZbNRIoKCvOprB2TrPIyCDqZ988c81Ei3y7mCqEtdW9eR4SwqUmtCKcyBse9QXexoDB6ConHMx1~7jdFNxr5RpYMVXL1HIaO5p9bOjYug-qD7BGzDrADB4Se~z6UJlL~s0uWYH-C9~b1j0-Zb4NDZEmdM~NZFzYeDy4f9Obszn--L987phUfH5oQxgUE--3VguM0FYSARla0ll51dsHrwcyNAixXk5WdG71BYf9~nt-nWhfsY9qbcFWK3Um7a2UjHkYbeTJm9ILkD-IbBZ7Jg~ELkBU3hApEm8zf2JenKdAIN1Rp9s~7OYCxvmU-woJ298CsZgbLanoFz70WCpWeV0w__',
        },
        {
          id: '3',
          text: 'العلاج الأسري. يتعلم الآباء وأفراد الأسرة الآخرون كيفية اللعب والتفاعل مع أطفالهم المرضى بطرق تحفز المهارات الاجتماعية وتعالج المشكلات السلوكية',
          image:
            'https://s3-alpha-sig.figma.com/img/2f47/a613/6eaff050bcad70a55ae0471f745a9bd4?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QVyWvGQyUUHf3bFLjKlgZwZl4ZAYgKH5Vye77OCxDWu~xB1hpZ5-jUl71Ep69y80l~qLF3y7u2aDGWFYDzDlfTx2bzIBz4-34rzZZdI9gomXT8BlcZsouM9kMPMhHoKkm6AKTpiMlh6wOHFcTDQrQbNP5jTQffS8fFn6ZORob7WrF65QoJjg0ObMw5QtfUmJSD4JOK3Y~zqOpP~qVakO8q2FlyBSJ09YML75RQ1l5dYMuju6DztDQ9FuGWflgIvn9JhyHlYExNpoGxxstYUUic78CGBnXBpKrWWlmKir-KtVGu9sMwQm1pnMHKaP4GB-GmxspMiD8enDSqymmW3DHQ__',
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
    image:
      'https://s3-alpha-sig.figma.com/img/b354/cc9d/8b891f91393d57cf404798b3b490d2bb?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CpKnRuKSHLd-e0EXbsT8dea29kwkMvY6Cmb-o3scVn9dLGp6Pr1-iAPeke~422CwnFex1IuBTv9s23PqQtFGlC2jY2jwLQOIv6JgAYXGv-KM5LCLB9q8Rx~SQCJnAaWYgoU1UgEhm58Zfkxf1v52zDy10DcudsE9ef8PTguylT7VEkL36wunRvgX0bv2P5Xhanur8NQjNufSFHco5gqtI0coWcH6fSkd03AOtHy~E~dE1DCah98hcwOqa0kRDzgAllr47VbvMyYRONDNBI7X44RTR~HHhBYCjs6TmB7PPDFbfZj4-EqBN1Tgi7wVrmTCFRfvixgDmIX7ll3XPbRkpA__',
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
          id: '1',
          text: 'العلاجات التربوية. غالبًا ما يستجيب الأطفال المصابون باضطراب طيف التوحد جيدًا للبرامج التربوية التي تتميز بدرجة عالية من التنظيم.',
          image:
            'https://s3-alpha-sig.figma.com/img/9535/4ac3/f4f7add68ba594ecf2c04fc438e0317b?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ntt72hlgv711YSQvEoF~JWthX8q09tOjCKvboXHU91SzpwsPbXqZhhUvQS95PcmM73Ks8nijc~XVhvOZqdrniUecSHHfYByjb5m10TptwfqqKX50xs0aBOSuh~PTbyHxNLOVcH5cDWUJJSVd2HyIBl3ilLfI7GMsb~Ex1KjaBOdrfOPz0GNwspri05oAXNoft8PELbnGKfNpK2SyuCdvTgw6iNDra9-0lS7GuLBrJrkHwkNAl1ZoH25iqDGz9LN1yKTlu3CupvfgRxjDpwK3YoCK5fsP6yzvEfqLSRF1-58fQuX78xQogFmwEthHgN8T~k9kPbLN9jhxH68JTsXbxQ__',
        },
        {
          id: '2',
          text: 'العلاج الأسري. يتعلم الآباء وأفراد الأسرة الآخرون كيفية اللعب والتفاعل مع أطفالهم المرضى بطرق تحفز المهارات الاجتماعية وتعالج المشكلات السلوكية',
          image:
            'https://s3-alpha-sig.figma.com/img/93f4/2043/2ef5d95bcfb118176eef90016afd687b?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZbNRIoKCvOprB2TrPIyCDqZ988c81Ei3y7mCqEtdW9eR4SwqUmtCKcyBse9QXexoDB6ConHMx1~7jdFNxr5RpYMVXL1HIaO5p9bOjYug-qD7BGzDrADB4Se~z6UJlL~s0uWYH-C9~b1j0-Zb4NDZEmdM~NZFzYeDy4f9Obszn--L987phUfH5oQxgUE--3VguM0FYSARla0ll51dsHrwcyNAixXk5WdG71BYf9~nt-nWhfsY9qbcFWK3Um7a2UjHkYbeTJm9ILkD-IbBZ7Jg~ELkBU3hApEm8zf2JenKdAIN1Rp9s~7OYCxvmU-woJ298CsZgbLanoFz70WCpWeV0w__',
        },
        {
          id: '3',
          text: 'العلاج الأسري. يتعلم الآباء وأفراد الأسرة الآخرون كيفية اللعب والتفاعل مع أطفالهم المرضى بطرق تحفز المهارات الاجتماعية وتعالج المشكلات السلوكية',
          image:
            'https://s3-alpha-sig.figma.com/img/2f47/a613/6eaff050bcad70a55ae0471f745a9bd4?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QVyWvGQyUUHf3bFLjKlgZwZl4ZAYgKH5Vye77OCxDWu~xB1hpZ5-jUl71Ep69y80l~qLF3y7u2aDGWFYDzDlfTx2bzIBz4-34rzZZdI9gomXT8BlcZsouM9kMPMhHoKkm6AKTpiMlh6wOHFcTDQrQbNP5jTQffS8fFn6ZORob7WrF65QoJjg0ObMw5QtfUmJSD4JOK3Y~zqOpP~qVakO8q2FlyBSJ09YML75RQ1l5dYMuju6DztDQ9FuGWflgIvn9JhyHlYExNpoGxxstYUUic78CGBnXBpKrWWlmKir-KtVGu9sMwQm1pnMHKaP4GB-GmxspMiD8enDSqymmW3DHQ__',
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
