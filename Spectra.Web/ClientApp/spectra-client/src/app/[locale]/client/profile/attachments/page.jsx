import { Link } from '@/navigation';
import Container from '../../_components/container';
import { Heading } from '../../_components/heading';
import ROUTES from '@/routes';
import BackIcon from '@/assets/icons/back-black';
import ChildPopover from '../../_components/child-popover';
import { childPopupData } from '@/lib/demoData';
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

      <ChildPopover data={childPopupData} />

      <Atthachments />
    </Container>
  );
};

export default AtthachmentsPage;
