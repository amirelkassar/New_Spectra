import { Link } from '@/i18n/routing';

import ContractsIcon from '@/assets/icons/contracts';
import ROUTES from '@/routes';

export const AskForJoin = () => {
  return (
    <Link
      className='bg-greenMain transition hover:bg-greenMain/90 flex items-center justify-center gap-2 font-bold text-sm lg:text-xl text-white py-2 px-5 rounded-xl w-full max-w-xs mx-auto'
      href={ROUTES.DOCTOR.CONTRACT.CONTRACTSNEW}
    >
      <ContractsIcon fill='white' className='w-4 lg:w-6' />
      إرسال طلب انضمام
    </Link>
  );
};
