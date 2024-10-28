import Container from '@/app/[locale]/client/_components/ui/container';

import { PrescriptionDetails } from './_components/prescription-details';
import { ActionButton } from './_components/action-button';

const prescriptionsData = [
  {
    id: 1,
    date: '20/04/2024',
    doctor: 'احمد محمد كمال',
    proffession: 'اخصائى نفسي',
    drug: 'سيترالين',
    dose: '100mg',
    type: 'عقاقير',
    description: 'اخذه طوال الشهر يوميا مع الاكل',
    isNew: true,
    warnings: [
      'يجب عدم تطبيق الدواء لدى مرضى القصور الكبدي الشديد. يجب إنقاص الجرعة بمقدار النصف لدى مرضى القصور الكبدي البسيط إلى متوسط الشدة.',
      'يجب تطبيق الدواء بحذر وتحت المراقبة لدى مرضى الصرع، داء السكري؛ سابقة: نزف هضمي، اضطراب ثنائي القطب، أفكار انتحارية (لدى البالغين الصغار)، زرق مغلق الزاوية.',
      'يمكن أن يسبب: اضطرابات هضمية، نعاس (يتم استخدامه بحذر عند القيادة أو تشغيل الآلات)، إجهاد، صداع، دوار، نوبات، خلل أداء الوظيفة الجنسية، تغيم الرؤية، نقص صوديوم الدم بشكل خاص لدى المرضى المسنين. ',
    ],
  },
  {
    id: 2,
    date: '20/04/2024',
    doctor: 'احمد محمد كمال',
    proffession: 'اخصائى نفسي',
    type: 'توصيات',
    description: 'علاج تربوي',
    isNew: false,
  },
  {
    id: 3,
    date: '20/04/2024',
    doctor: 'احمد محمد كمال',
    proffession: 'اخصائى نفسي',
    type: 'توصيات',
    description: 'علاج تربوي',
    isNew: false,
  },
];

const Page = ({ params }) => {
  const { prescriptionId } = params;

  const currentPrescription = () => {
    return prescriptionsData.find(
      (item) => item?.id === Number(prescriptionId)
    );
  };

  return (
    <Container className='space-y-5'>
      <ActionButton className='absolute top-0 end-5' />

      <PrescriptionDetails
        prescription={currentPrescription()}
      />
    </Container>
  );
};

export default Page;
