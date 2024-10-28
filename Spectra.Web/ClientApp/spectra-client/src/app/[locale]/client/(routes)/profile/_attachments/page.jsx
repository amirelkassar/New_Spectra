import { Link } from '@/navigation';
import Container from '../../../_components/ui/container';
import { Heading } from '../../../_components/ui/heading';
import ROUTES from '@/routes';
import BackIcon from '@/assets/icons/back-black';

import { Atthachments } from './_components/atthachments';

const AtthachmentsPage = () => {
  return (
    <Container className='space-y-5'>
      <Heading
        label='ملفي - المرفقات'
        icon={
          <Link href={ROUTES.CLIENT.PROFILE}>
            <BackIcon className='ltr:rotate-180' />
          </Link>
        }
        className='flex-row-reverse justify-end gap-5'
      />

      <Atthachments />
    </Container>
  );
};

export default AtthachmentsPage;
