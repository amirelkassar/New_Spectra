'use client';

import { useRouter } from '@/i18n/routing';
import { useMemo } from 'react';
import { useLocale } from 'next-intl';

import { PackageCardItem } from '@/components/packages';
import { Container } from '@/guest/_components/ui';
import { usePublicPackages } from '@/hooks/queries/public/packages';
import { PackageIcon } from '@/components/packages/package-icon';
import Separator from '@/assets/icons/separator';
import ROUTES from '@/routes';
import { QueryWrapper } from '@/components/query-wrapper';

export const Intro = () => {
  const router = useRouter();

  const query = usePublicPackages();

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

      <QueryWrapper query={query}>
        {({ data }) => (
          <div className='lg:grid lg:grid-cols-fill-250 gap-5 p-5 relative'>
            {data.map((item) => (
              <PackageCard
                key={item.id}
                data={item}
                onView={(id) =>
                  router.push(
                    ROUTES.ROOT.VIEW_PACKAGE.replace(':id', id)
                  )
                }
              />
            ))}
          </div>
        )}
      </QueryWrapper>
    </Container>
  );
};

// const PackageCard = ({
//   id = '',
//   arName = '',
//   enName = '',
//   price = 0,
//   content = [],
// }) => {
//   const features = content.map((c) => c?.arName || c);
//   return (
//     <PackageCardItem className='bg-white w-full border-t-transparent border border-greenMain rounded-2xl first:border-4 first:border-grayLight first:border-t-greenMain first:-mt-5 first:hover:border-grayLight first:hover:border-t-greenMain last:lg:order-3 first:lg:order-2 group'>
//       <Link href={`${ROUTES.ROOT.PACKAGES}/${id}`}>
//         <PackageCardItem.Title className='flex items-center gap-2 transition group-hover:text-xl'>
//           <div className='relative size-9 hidden group-first:block'>
//             <Image
//               src={'/badge.svg'}
//               alt={label}
//               sizes='width: 36px; height: 36px;'
//               fill
//             />
//           </div>
//           {label}
//         </PackageCardItem.Title>
//       </Link>
//       <PackageCardItem.Price>${price}</PackageCardItem.Price>
//       <PackageCardItem.List features={features} />
//       <PackageCardItem.Button className='border border-greenMain hover:bg-transparent bg-transparent text-greenMain group-first:bg-greenMain group-first:text-white group-first:hover:bg-greenMain/90 relative z-10'>
//         احجز الان
//       </PackageCardItem.Button>
//     </PackageCardItem>
//   );
// };

const PackageCard = ({ data = {}, onView = () => {} }) => {
  const locale = useLocale();

  const { arName, enName, id, price, services, discount, iconCode } =
    data;

  const features = useMemo(() => {
    if (!services?.length) return [];

    const key = locale === 'ar' ? 'arName' : 'enName';

    // Count occurrences of each service
    const serviceCounts = services.reduce((acc, service) => {
      const serviceName = service[key];
      acc[serviceName] = (acc[serviceName] || 0) + 1;
      return acc;
    }, {});

    // Generate the array with counts and names
    return Object.entries(serviceCounts).map(
      ([name, count]) => `${count} ${name}`
    );
  }, [services, locale]);

  return (
    <PackageCardItem
      role='button'
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onView(id);
      }}
      data-id={id}
      className='bg-white'
    >
      <PackageCardItem.Title className='flex items-center gap-2'>
        <PackageIcon iconCode={iconCode} />
        {locale === 'ar' ? arName : enName}
      </PackageCardItem.Title>

      {discount ? (
        <PackageCardItem.PriceWithDiscount
          discount={discount}
          price={price}
          currancy='SAR'
        />
      ) : (
        <PackageCardItem.Price
          currancy='SAR'
          className='flex items-center gap-2'
        >
          {price?.toFixed(2)}
        </PackageCardItem.Price>
      )}

      <PackageCardItem.List features={features} />

      <PackageCardItem.Button>احجز الان</PackageCardItem.Button>
    </PackageCardItem>
  );
};
