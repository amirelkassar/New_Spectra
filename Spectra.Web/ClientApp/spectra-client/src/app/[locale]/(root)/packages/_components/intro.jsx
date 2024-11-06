import { PackageCardItem } from '@/client/_components/packages';
import Separator from '@/assets/icons/separator';
import { packagesDataSpectra } from '@/lib/demoData';

export const Intro = () => {
  return (
    <>
      <div
        style={{
          clipPath:
            'polygon(50% 100%, 100% 85%, 100% 0, 0 0, 0 85%)',
        }}
        className='bg-blueLight h-[60vh] mdl:h-[55vh] pt-24 mdl:pt-28'
      >
        <h2
          id='all-packages'
          className='text-2xl mdl:text-3xl text-center font-bold mb-2'
        >
          جميع الباقات
        </h2>
        <Separator className='mx-auto text-greenMain' />
      </div>

      <section
        aria-label='All Packages'
        id='all-packages'
        aria-labelledby='all-packages'
        className='flex flex-col lg:flex-row items-center lg:items-start justify-center gap-5 p-5 mdl:-mt-72 -mt-96 relative'
      >
        {packagesDataSpectra.map((item) => (
          <PackageCard key={item.id} {...item} />
        ))}
      </section>
    </>
  );
};

const PackageCard = ({
  label = '',
  price = 0,
  content = [],
}) => {
  return (
    <PackageCardItem className='bg-white w-full max-w-[300px] border-t-transparent border-2 border-greenMain rounded-2xl first:border-4 first:border-grayLight first:border-t-greenMain first:-mt-5 first:lg:order-2 last:lg:order-3 first:hover:border-grayLight first:hover:border-t-greenMain group'>
      <PackageCardItem.Title>{label}</PackageCardItem.Title>
      <PackageCardItem.Price>
        ${price}
      </PackageCardItem.Price>
      <PackageCardItem.List features={content} />
      <PackageCardItem.Button className='border border-greenMain hover:bg-transparent bg-transparent text-greenMain group-first:bg-greenMain group-first:text-white group-first:hover:bg-greenMain/90'>
        احجز الان
      </PackageCardItem.Button>
    </PackageCardItem>
  );
};
