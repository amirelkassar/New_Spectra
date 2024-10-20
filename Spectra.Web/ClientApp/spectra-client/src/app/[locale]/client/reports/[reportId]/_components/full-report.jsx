import { Link } from '@/navigation';

import ROUTES from '@/routes';
import Card from '@/components/card';
import BackIcon from '@/assets/icons/back-black';

export const FullReport = ({ id = '', title = '', content = '' }) => {
  return (
    <Card className='text-black space-y-3'>
      <Link href={ROUTES.CLIENT.REPORTS}>
        <BackIcon className='ltr:rotate-180' />
      </Link>
      <h2 className='lg:text-medium text-sm font-bold'>{title}</h2>
      <span className='text-xs lg:text-base block font-bold'>تقرير:{id}</span>

      <p className='text-xs lg:text-base lg:!leading-8'>
        {content.split('.').map((i,j) => (
          <span key={j}>
            {i}. <br />
          </span>
        ))}
      </p>
    </Card>
  );
};
