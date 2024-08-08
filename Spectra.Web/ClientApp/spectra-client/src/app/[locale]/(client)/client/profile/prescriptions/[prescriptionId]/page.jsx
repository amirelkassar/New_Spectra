import ChildPopover from '@/app/[locale]/(client)/_components/child-popover';
import Container from '@/app/[locale]/(client)/_components/container';
import { Heading } from '@/app/[locale]/(client)/_components/heading';
import { PrescriptionDetails } from './_components/prescription-details';
import { ActionButton } from './_components/action-button';
import BackIcon from '@/assets/icons/back-black';
import { childPopupData } from '@/lib/demoData';
import { Link } from '@/navigation';
import ROUTES from '@/routes';

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
      <Heading
        label='ملفي - الوصفات الطبية'
        icon={
          <Link href={`${ROUTES.CLIENT.PROFILE}/prescriptions`}>
            <BackIcon className='ltr:rotate-180' />
          </Link>
        }
        className='flex-row-reverse justify-end gap-5'
      />
      <ActionButton className='absolute top-0 end-5' />
      <ChildPopover disabled data={childPopupData} />

      <PrescriptionDetails prescription={currentPrescription()} />
    </Container>
  );
};

export default Page;
