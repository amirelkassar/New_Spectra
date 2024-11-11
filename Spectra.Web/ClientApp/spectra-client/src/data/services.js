import React from 'react';

import ScreeningIcon from '@/assets/icons/screening';
import TeamIcon from '@/assets/icons/team';
import FollowUpIcon from '@/assets/icons/followup';
import HandshakeIcon from '@/assets/icons/handshake';
import Watching from '@/assets/icons/watching';

export const SERVICES_1 = [
  {
    color: 'bg-red/10',
    icon: <ScreeningIcon className='size-6 mdl:size-11' />,
    label: 'خدمة الكشف المبكر الالكتروني',
  },
  {
    color: 'bg-greenMain/10',
    icon: (
      <TeamIcon className='size-6 mdl:size-11 text-greenMain' />
    ),
    label: `خدمات التشخيص الطبي 
    عبر فرق متعددة التخصصات`,
  },
  {
    color: 'bg-purple/10',
    icon: (
      <FollowUpIcon className='size-6 mdl:size-11 text-purple' />
    ),
    label: 'خدمات المتابعة الدوائية',
  },
  {
    color: 'bg-greenMain/10',
    icon: (
      <HandshakeIcon className='size-6 mdl:size-11 text-greenMain' />
    ),
    label: 'خدمات الاستشارات التخصصية',
  },
];

export const SERVICES = [
  {
    id: '1',
    label: 'خدمة الكشف المبكر الالكتروني',
    icon: React.createElement(Watching, {
      className: 'size-8',
    }),

    color: 'rgba(208, 235, 234, 0.2)',
    description:
      'نقدم خدمات الاكتشاف المبكر للاضطرابات النمائية و السلوكية',
    subscribed: true,
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
      className: 'size-8',
    }),
    color: 'rgba(248, 193, 189, 0.2)',
    description:
      'نقدم خدمات الاكتشاف المبكر للاضطرابات النمائية و السلوكية كالتوحد و فرط الحركة وغيرها',
  },
  {
    id: '4',
    label: 'خدمات الاستشارات التخصصية',
    icon: React.createElement(HandshakeIcon, {
      className: 'size-8',
    }),
    color: 'rgba(217, 182, 224, 0.2)',
    description:
      'نقدم خدمات استشارية مع أطباء إستشاريين في طب تطور سلوك الأطفال و الطب النفسي وغيره',
  },
  {
    id: '3',
    label: 'خدمات المتابعة الدوائية',
    icon: React.createElement(FollowUpIcon, {
      className: 'size-8',
    }),
    color: 'rgba(208, 235, 234, 0.2)',
    description:
      'نقوم بتشخيص الحالات التي تعاني من الاضطرابات النمائية والسلوكية عبر فريق محترف متعدد التخصصات',
  },
  {
    id: '5',
    label: 'خدمات التأهيل العلاجي في مختلف التخصصات',
    icon: React.createElement(HandshakeIcon, {
      className: 'size-8',
    }),
    color: 'rgba(208, 235, 234, 0.2)',
    description:
      'نقدم خدمات استشارية مع أطباء إستشاريين في طب تطور سلوك الأطفال و الطب النفسي وغيره',
  },
  {
    id: '6',
    label: 'خدمات التقارير الطبية والتخصصية',
    icon: React.createElement(HandshakeIcon, {
      className: 'size-8',
    }),
    color: 'rgba(208, 235, 234, 0.2)',
    description:
      'نقدم خدمات استشارية مع أطباء إستشاريين في طب تطور سلوك الأطفال و الطب النفسي وغيره',
  },
  {
    id: '7',
    label: 'خدمات دعم المراكز والجهات',
    icon: React.createElement(HandshakeIcon, {
      className: 'size-8',
    }),
    color: 'rgba(208, 235, 234, 0.2)',
    description:
      'نقدم خدمات استشارية مع أطباء إستشاريين في طب تطور سلوك الأطفال و الطب النفسي وغيره',
  },
  {
    id: '8',
    label: 'خدمات التدريب',
    icon: React.createElement(HandshakeIcon, {
      className: 'size-8',
    }),
    color: 'rgba(208, 235, 234, 0.2)',
    description:
      'نقدم خدمات استشارية مع أطباء إستشاريين في طب تطور سلوك الأطفال و الطب النفسي وغيره',
  },
];
