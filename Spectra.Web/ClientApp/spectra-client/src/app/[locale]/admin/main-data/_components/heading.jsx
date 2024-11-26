import { AddButton } from '@/components/buttons/add-button';
import { Link } from '@/navigation';

export const Heading = ({
  title = '',
  btnLabel = '',
  path = '',
}) => {
  return (
    <div className='flex mb-10 flex-col mt-6 lg:mt-0 flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-6'>
      <h2 className='headTitleDash'>{title}</h2>
      <Link href={path}>
        <AddButton>{btnLabel}</AddButton>
      </Link>
    </div>
  );
};
