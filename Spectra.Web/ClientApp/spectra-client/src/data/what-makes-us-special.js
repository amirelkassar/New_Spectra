import ClockWhite from '@/assets/icons/clock-white';
import TherapyIcon from '@/assets/icons/therapy';
import TeamIcon from '@/assets/icons/team';
import HoldingHands from '@/assets/icons/holding-hands';
import CalenderIcon from '@/assets/icons/calender';
import Gear from '@/assets/icons/gear';

export const WHAT_MAKES_US_SPECIAL = [
  {
    id: 1,
    title: {
      ar: 'تشخيص وعلاج سريع',
      en: 'Quick Diagnosis and Treatment',
    },
    content: {
      ar: 'نلتزم بتقديم حلول طبية سريعة وفعالة لتوفير الوقت وتحسين النتائج.',
      en: 'We are committed to providing fast and effective medical solutions to save time and improve outcomes.',
    },
    icon: <ClockWhite className='mdl:size-12 size-8 text-black' />,
  },
  {
    id: 2,
    title: {
      ar: 'خدمات متكاملة',
      en: 'Comprehensive Services',
    },
    content: {
      ar: 'نقدم رعاية شاملة تتضمن التشخيص، العلاج، والمتابعة المستمرة لضمان أفضل النتائج.',
      en: 'We provide comprehensive care, including diagnosis, treatment, and continuous follow-up, to ensure the best outcomes.',
    },
    icon: <TherapyIcon fill='black' className='mdl:size-12 size-8' />,
  },
  {
    id: 3,
    title: {
      ar: 'فريق طبي متخصص',
      en: 'Specialized Medical Team',
    },
    content: {
      ar: 'فريقنا الطبي يتكون من خبراء مختارين بعناية في مجال علاج التوحد وتأخر النمو وغيرها',
      en: 'Our medical team comprises carefully selected experts in autism treatment, developmental delays, and more.',
    },
    icon: <TeamIcon fill='black' className='mdl:size-12 size-8' />,
  },
  {
    id: 4,
    title: {
      ar: 'تجربة مريحة للمرضى',
      en: 'Comfortable Patient Experience',
    },
    content: {
      ar: 'نوفر خدمات طبية مريحة وداعمة تناسب احتياجات المرضى وأسرهم.',
      en: 'We provide comfortable and supportive medical services tailored to the needs of patients and their families.',
    },
    icon: <HoldingHands className='mdl:size-12 size-8' />,
  },
  {
    id: 5,
    title: {
      ar: 'متابعة دورية دقيقة',
      en: 'Accurate Periodic Follow-up',
    },
    content: {
      ar: 'نضمن متابعة دقيقة ومستدامة لتطورات الحالات وتحسين العلاج.',
      en: 'We ensure accurate and sustained follow-up on case developments to improve treatment.',
    },
    icon: (
      <CalenderIcon fill='black' className='mdl:size-12 size-8' />
    ),
  },
  {
    id: 6,
    title: {
      ar: 'تقنيات حديثة',
      en: 'Advanced Technologies',
    },
    content: {
      ar: 'نعتمد على أحدث التقنيات الطبية لتقديم خدمات متطورة وفعالة.',
      en: 'We rely on the latest medical technologies to provide advanced and effective services.',
    },
    icon: <Gear className='mdl:size-12 size-8' />,
  },
];
