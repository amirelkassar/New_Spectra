import Container from '../../_components/container';
import Card from '@/components/card';
import { Heading } from '../../_components/heading';
import { BackButton } from '../../_components/back-button';
import { Questions } from './_components/questions';

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

const DATA = [
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

const EarlyCheckPage = () => {
  return (
    <Container>
      <Card className='space-y-5'>
        <div>
          <Heading
            label='خدمة الكشف المبكر'
            icon={<BackButton />}
            className='flex-row-reverse justify-end gap-5'
          />

          <p>
            تدور هذه الأسئلة حول مراحل تطور طفلك. يُرجى
            إخبارنا بمعدل قيام طفلك بهذه الأشياء. إذا توقف
            طفلك عن فعل شيء ما، فاختر الإجابة التي تصف معدل
            اعتياد طفلك على فعل هذه الأشياء. يُرجى التأكد من
            الإجابة عن جميع الأسئلة
          </p>
        </div>

        <Questions
          discription='ملاحظات الاباء حول التفاعل الاجتماعي'
          questions={DATA}
        />
      </Card>
    </Container>
  );
};

export default EarlyCheckPage;
