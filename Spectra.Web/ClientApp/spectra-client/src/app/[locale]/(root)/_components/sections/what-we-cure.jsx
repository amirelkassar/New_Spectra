import Image from 'next/image';
import { Link } from '@/i18n/routing';

import ThreeDotsRowIcon from '@/assets/icons/three-dots-row';
import { ArrowRightIcon } from '@/assets/icons/arrow-right';
import { Container, SectionHeading } from '@/guest/_components/ui';
import ROUTES from '@/routes';
import { useTranslations } from 'next-intl';

export const WhatWeCure = ({
  data = [],
  title = '',
  showOther = false,
}) => {
  const t = useTranslations('guest_obj');

  const titleValue = title || t('what_we_cure');

  if (!data.length) return null;
  return (
    <Container
      aria-label='What We Cure'
      id='what-we-cure'
      aria-labelledby='what-we-cure'
    >
      <SectionHeading className='text-center mb-10'>
        {titleValue}
      </SectionHeading>
      <div className='grid grid-cols-3 lg:grid-cols-4 gap-5'>
        {data?.map((item) => (
          <Treatment key={item?.label} {...item} />
        ))}
        {showOther && <Other />}
      </div>
    </Container>
  );
};

const Treatment = ({ image = '', label = '' }) => {
  return (
    <div className='flex flex-col items-center gap-y-4 text-center'>
      <div className='w-fit relative'>
        <Image
          src={image}
          alt={label}
          width={150}
          height={150}
          className='size-20 mdl:size-36 object-center object-cover rounded-full'
        />

        <span className='absolute size-6 mdl:size-10 rounded-full flex items-center justify-center bg-greenLight bottom-0 end-0'>
          <ArrowRightIcon className='size-4 mdl:size-6' />
        </span>
      </div>
      <p className='text-black text-base mdl:text-medium'>{label}</p>
    </div>
  );
};

const Other = () => {
  const tg = useTranslations('general_obj');

  return (
    <div className='flex flex-col items-center gap-y-4'>
      <Link
        href={ROUTES.ROOT.TREATMENT}
        className='size-20 mdl:size-36 bg-greenLight flex items-center justify-center rounded-full'
      >
        <ThreeDotsRowIcon className='w-6 mdl:w-11' />
      </Link>
      <div className='flex items-center gap-x-3 text-black mdl:text-medium text-base'>
        {tg('other')}
        <span className='ltr:rotate-180 block text-2xl mdl:text-4xl'>
          &larr;
        </span>
      </div>
    </div>
  );
};
