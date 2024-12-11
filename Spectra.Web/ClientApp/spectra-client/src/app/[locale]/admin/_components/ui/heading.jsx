import { AddButton } from '@/components/buttons/add-button';
import { SectionTitle } from '.';
import { Link } from '@/i18n/routing';
import { BackButton } from '@/components/buttons/back-button';

export const Heading = ({
  title = '',
  btnLabel = '',
  path = '',
  withBackButton = false,
}) => {
  return (
    <div className='flex mb-10 flex-col mt-6 lg:mt-0 flex-wrap mdl:flex-row items-start mdl:items-center gap-4 mdl:gap-6'>
      <div className='flex gap-4 items-center mdl:gap-6'>
        {withBackButton && <BackButton />}
        <SectionTitle>{title}</SectionTitle>
      </div>
      <Link href={path}>
        <AddButton>{btnLabel}</AddButton>
      </Link>
    </div>
  );
};
