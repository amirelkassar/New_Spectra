import { Link } from '@/i18n/routing';

import Button from '@/components/button';
import Card from '@/components/card';
import ROUTES from '@/routes';
import OfferSendIcon from '@/assets/icons/offerSend';

export const HasContractMessage = () => {
  return (
    <Card className='h-full flex flex-col gap-4 justify-center items-center'>
      <OfferSendIcon className='text-greenMain mx-auto !mb-10' />
      <h2 className='font-bold text-2xl mdl:text-3xl text-center'>
        لقد قمت بالفعل بارسال عرض عمل
      </h2>
      <p className='text-sm mdl:text-xl text-center'>
        يمكنك متابعة طلب العقد من قسم العقود او الاشعارات الخاصة بك
      </p>

      <Link href={ROUTES.DOCTOR.CONTRACTS.DASHBOARD}>
        <Button
          variant='secondary'
          className='text-sm mdl:text-xl px-16 font-bold mx-auto mt-5'
        >
          الذهاب لقسم العقود
        </Button>
      </Link>
    </Card>
  );
};
