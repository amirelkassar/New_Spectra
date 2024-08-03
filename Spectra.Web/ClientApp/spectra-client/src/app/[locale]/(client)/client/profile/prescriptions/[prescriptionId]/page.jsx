import ChildPopover from '@/app/[locale]/(client)/_components/child-popover';
import Container from '@/app/[locale]/(client)/_components/container';
import { Heading } from '@/app/[locale]/(client)/_components/heading';
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
          <Link href={ROUTES.CLIENT.PROFILE}>
            <BackIcon className='ltr:rotate-180' />
          </Link>
        }
        className='flex-row-reverse justify-end gap-5'
      />
    </Container>
  );
};

export default Page;
