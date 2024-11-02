import { PackageCardItem } from '@/client/_components/packages';
import Separator from '@/assets/icons/separator';
import { packagesDataSpectra } from '@/lib/demoData';

export const Intro = () => {
  return (
    <>
      <div
        style={{
          clipPath:
            'polygon(50% 100%, 100% 80%, 100% 0, 0 0, 0 80%)',
        }}
        className='bg-blueLight h-[50vh] pt-24 mdl:pt-32'
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
        className='flex flex-wrap justify-center gap-5 p-5 -mt-72 relative'
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
    <PackageCardItem className='bg-white w-full max-w-sm first:border-t-transparent'>
      <PackageCardItem.Title>{label}</PackageCardItem.Title>
      <PackageCardItem.Price>
        ${price}
      </PackageCardItem.Price>
      <PackageCardItem.List features={content} />
      <PackageCardItem.Button>
        احجز الان
      </PackageCardItem.Button>
    </PackageCardItem>
  );
};
