import Image from 'next/image';
import { Link } from '@/navigation';

import Separator from '@/assets/icons/separator';
import { PackageCardItem } from '@/components/packages';
import { packagesDataSpectra } from '@/lib/demoData';
import { Container } from '@/guest/_components/ui';
import ROUTES from '@/routes';

export const Intro = () => {
  return (
    <Container
      aria-label='All Packages'
      id='all-packages'
      aria-labelledby='all-packages'
      className='mt-20 mdl:mt-24'
    >
      <div className='mb-10'>
        <h2
          id='all-packages'
          className='text-2xl mdl:text-3xl text-center font-bold mb-2'
        >
          جميع الباقات
        </h2>
        <Separator className='mx-auto text-greenMain' />
      </div>

      <div className='flex flex-col lg:flex-row items-center lg:items-start justify-center gap-5 p-5 relative'>
        {packagesDataSpectra.map((item) => (
          <PackageCard key={item.id} {...item} />
        ))}
      </div>
    </Container>
  );
};

const PackageCard = ({
  id = '',
  label = '',
  price = 0,
  content = [],
}) => {
  return (
    <PackageCardItem className='bg-white w-full border-t-transparent border-2 border-greenMain rounded-2xl first:border-4 first:border-grayLight first:border-t-greenMain first:-mt-5 first:hover:border-grayLight first:hover:border-t-greenMain last:lg:order-3 first:lg:order-2 group'>
      <Link href={`${ROUTES.ROOT.PACKAGES}/${id}`}>
        <PackageCardItem.Title className='flex items-center gap-2 transition group-hover:text-xl'>
          <div className='relative size-9 hidden group-first:block'>
            <Image
              src={'/badge.svg'}
              alt={label}
              sizes='width: 36px; height: 36px;'
              fill
            />
          </div>
          {label}
        </PackageCardItem.Title>
      </Link>
      <PackageCardItem.Price>
        ${price}
      </PackageCardItem.Price>
      <PackageCardItem.List features={content} />
      <PackageCardItem.Button className='border border-greenMain hover:bg-transparent bg-transparent text-greenMain group-first:bg-greenMain group-first:text-white group-first:hover:bg-greenMain/90 relative z-10'>
        احجز الان
      </PackageCardItem.Button>
    </PackageCardItem>
  );
};
