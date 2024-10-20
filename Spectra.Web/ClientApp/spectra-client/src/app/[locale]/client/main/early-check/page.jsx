import Container from '../../_components/container';
import Card from '@/components/card';
import { Heading } from '../../_components/heading';
import { BackButton } from '../../_components/back-button';
import { MSQ } from './_components/msq';

const CHOOICES_1 = [
  {
    value: '1',
    label: 'دائما',
  },
  {
    value: '2',
    label: 'عادة',
  },
  {
    value: '3',
    label: 'أحيانا',
  },
  {
    value: '4',
    label: 'نادرا',
  },
  {
    value: '5',
    label: 'لا يحدث ابدا',
  },
];

const CHOOICES_2 = [
  {
    value: '1',
    label: 'عدة مرات يوميا',
  },
  {
    value: '2',
    label: 'مرات قليلة يوميا',
  },
  {
    value: '3',
    label: 'مرات قليلة اسبوعيا',
  },
  {
    value: '4',
    label: 'أقل من مرة اسبوعيا',
  },
  {
    value: '5',
    label: 'لا يحدث ابدا',
  },
];

const CHOOICES_3 = [
  {
    value: '1',
    label: 'يقول كلمة يعبر بها عما يريد',
  },
  {
    value: '2',
    label: 'يشير اليه بإصبعه',
  },
  {
    value: '3',
    label: 'يصل اليه',
  },
  {
    value: '4',
    label: 'يجذبك اليه',
  },
  {
    value: '5',
    label: 'يهمهم، أو يبكي، أو يصرخ',
  },
];
const CHOOICES_4 = [
  {
    value: '1',
    label: 'اللعب بالعرائس أو دمى الحيوانات المحشوة',
  },
  {
    value: '2',
    label: 'قرائة الكتب معك',
  },
  {
    value: '3',
    label: 'التسلق والجري والنشاط',
  },
  {
    value: '4',
    label: 'وضع الألعاب أو الأشياء الاخرى على شكل صف',
  },
  {
    value: '5',
    label: 'مشاهدة الأشياء تدور مثل المراوح والعجلات',
  },
];

const Q1 = [
  {
    id: 1,
    ques: 'هل يحضر طفلك الأشياء ليريها لك؟',
    chooices: CHOOICES_2,
  },
  {
    id: 2,
    ques: 'هل يهتم طفلك باللعب مع الأطفال الاخرين؟',
    chooices: CHOOICES_1,
  },
  {
    id: 3,
    ques: 'هل عندما تقول شيئًا ما أو تلوح بيدك يحاول طفلك تقليدك؟',
    chooices: CHOOICES_1,
  },
  {
    id: 4,
    ques: 'هل ينظر إليك طفلك عندما تنادي عليه باسمه؟',
    chooices: CHOOICES_1,
  },
  {
    id: 5,
    ques: 'هل ينظر طفلك عندما تشير إلى شيء ٍ ما في الغرفة؟',
    chooices: CHOOICES_1,
  },
];

const Q2 = [
  {
    id: 6,
    ques: 'كيف يريك طفلك عادة الشيء الذي يريده؟',
    chooices: CHOOICES_3,
  },
  {
    id: 7,
    ques: 'ما أنشطة اللعب المفضلة عند طفلك؟',
    chooices: CHOOICES_4,
  },
];

const EarlyCheckPage = () => {
  return (
    <Container>
      <Card className='space-y-5'>
        <div>
          <Heading
            label='خدمة الكشف المبكر'
            icon={<BackButton />}
            className='flex-row-reverse justify-end gap-2'
          />

          <p>
            تدور هذه الأسئلة حول مراحل تطور طفلك. يُرجى
            إخبارنا بمعدل قيام طفلك بهذه الأشياء. إذا توقف
            طفلك عن فعل شيء ما، فاختر الإجابة التي تصف معدل
            اعتياد طفلك على فعل هذه الأشياء. يُرجى التأكد من
            الإجابة عن جميع الأسئلة
          </p>
        </div>

        <MSQ data={{ 1: Q1, 2: Q2 }} />
      </Card>
    </Container>
  );
};

export default EarlyCheckPage;
