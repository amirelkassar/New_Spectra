import Image from 'next/image';
import { Link } from '@/navigation';

import {
  Container,
  SectionHeading,
} from '@/guest/_components/ui';
import ArrowLeft from '@/assets/icons/arrow-left';
import ROUTES from '@/routes';

export const SuccessStories = ({
  data = [],
  title = 'قصص النجاح',
}) => {
  if (!data.length) return null;
  return (
    <Container
      aria-label='Success Stories'
      aria-labelledby='success-stories'
      id='success-stories'
    >
      <SectionHeading
        id='success-stories'
        className='mb-10 text-center'
      >
        {title}
      </SectionHeading>
      <div className='grid grid-cols-2 mdl:grid-cols-3 gap-5'>
        {data.map((item) => (
          <Story key={item.childName} {...item} />
        ))}
      </div>
    </Container>
  );
};

const Story = ({
  childName = '',
  daignosis = '',
  image = '',
  id = '',
}) => {
  return (
    <div className='space-y-2'>
      <Link href={`${ROUTES.ROOT.SUCCESS_STORIES}/${id}`}>
        <div className='h-40 mdl:h-72 w-full rounded-lg overflow-hidden relative'>
          <Image
            src={image}
            alt={childName}
            priority={false}
            sizes='width: 384px; height: 288px;'
            fill
            className='w-full h-full object-cover object-center'
          />
        </div>
      </Link>

      <div className='flex items-center justify-between px-5'>
        <div>
          <p className='text-black text-sm mdl:text-medium font-bold'>
            {childName}
          </p>
          <p className='text-black text-sm mdl:text-medium'>
            {daignosis}
          </p>
        </div>
        <ArrowLeft className='ltr:rotate-180' />
      </div>
    </div>
  );
};
