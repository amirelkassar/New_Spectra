import { Link } from '@/navigation';

import ROUTES from '@/routes';
import BackIcon from '@/assets/icons/back-black';

export const BackButton = ({ href = '' }) => {
  return (
    <Link href={href || ROUTES.CLIENT.MAIN.HOME}>
      <BackIcon className='ltr:rotate-180 size-11' />
    </Link>
  );
};
