import Image from 'next/image';

import ArrowLeft from '@/assets/icons/arrow-left';
import { Section } from '../../_components/section';
import { Link } from '@/navigation';
import ROUTES from '@/routes';

export const SuccessStories = ({ data = [], ...props }) => {
  return (
    <Section
      aria-label='Success Stories'
      aria-labelledby='success-stories'
      id='success-stories'
      type='basic'
      heading='قصص النجاح'
      {...props}
    >
      <div className='grid grid-cols-2 mdl:grid-cols-3 gap-5'>
        {data.map((item) => (
          <Story key={item.childName} {...item} />
        ))}
      </div>
    </Section>
  );
};

const Story = ({
  childName = '',
  daignosis = '',
  image = '',
  id = '',
}) => {
  return (
    <Link href={`${ROUTES.ROOT.SUCCESS_STORIES}/${id}`}>
      <div className='space-y-2'>
        <div className='h-40 mdl:h-72 w-full rounded-lg overflow-hidden'>
          <Image
            src={image}
            alt={childName}
            priority={false}
            height={288}
            width={384}
            className='w-full h-full object-cover object-center'
          />
        </div>

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
    </Link>
  );
};
