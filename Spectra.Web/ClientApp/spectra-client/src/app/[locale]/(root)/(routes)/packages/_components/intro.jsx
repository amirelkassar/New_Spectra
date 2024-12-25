'use client';

import { useRouter } from '@/i18n/routing';
import { useMemo } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Carousel } from '@mantine/carousel';

import { Container } from '@/guest/_components/ui';
import { usePublicPackages } from '@/hooks/queries/public/packages';
import { PackageIcon } from '@/components/packages/package-icon';
import Separator from '@/assets/icons/separator';
import ROUTES from '@/routes';
import { QueryWrapper } from '@/components/query-wrapper';
import CircleCheck from '@/assets/icons/circle-check';
import PackageTag from '@/assets/icons/pacakge-tag';
import ArrowLeft from '@/assets/icons/arrow-left';
import { useMediaQuery } from '@mantine/hooks';

export const Intro = () => {
  const t = useTranslations('packages_obj');

  const query = usePublicPackages();

  return (
    <Container
      aria-label='All Packages'
      id='all-packages'
      aria-labelledby='all-packages'
      className='mt-20 mdl:mt-24'
    >
      <div className='mb-12'>
        <h1
          id='all-packages'
          className='text-2xl mdl:text-4xl text-center font-bold mb-4 capitalize'
        >
          {t('all_packages')}
        </h1>
        <Separator className='mx-auto text-greenMain' />
      </div>

      <QueryWrapper query={query}>
        {({ data }) => <RenderPackages packages={data} />}
      </QueryWrapper>
    </Container>
  );
};

const RenderPackages = ({ packages = [] }) => {
  const t = useTranslations('packages_obj');

  const router = useRouter();

  const slidesToScroll = useSlideToScroll();

  const slides = useMemo(() => {
    return packages.map((item) => (
      <Carousel.Slide key={item.id}>
        <PackageCard
          data={item}
          onView={(id) =>
            router.push(ROUTES.ROOT.VIEW_PACKAGE.replace(':id', id))
          }
        />
      </Carousel.Slide>
    ));
  }, [packages, router]);

  return (
    <div
      style={{
        boxShadow: '6px 4px 24.5px 0px #0000000F',
        scrollbarWidth: 'none',
      }}
      className='bg-white/50 rounded-xl py-10 px-5 space-y-7 overflow-hidden relative pb-24 mdl:pb-10'
    >
      <div className='flex items-center gap-4'>
        <PackageTag className='text-greenMain shrink-0' />
        <h2 className='text-base mdl:text-[28px] font-bold'>
          {t('diagnostic_packages')}
        </h2>
      </div>

      <div className='max-w-[366px] lg:max-w-[736px] xl:max-w-[1106px] mx-auto min-h-[610px]'>
        <Carousel
          key={slidesToScroll}
          dir='ltr'
          withIndicators
          slideSize={{
            base: '100%',
            lg: '50%',
            xl: '33.33%',
          }}
          slideGap={20}
          align='start'
          slidesToScroll={slidesToScroll}
          height='100%'
          classNames={{
            container: '!ps-4',
            indicator:
              '!size-4 !rounded-full !bg-grayMedium data-[active]:!bg-greenMain data-[active]:!size-5',
            indicators:
              '!items-center !bottom-12 mdl:!bottom-16 !max-w-[350px] !overflow-hidden !mx-auto',
            controls:
              '!top-auto !bottom-10 mdl:!bottom-12 !px-10 lg:!px-32',
            control: '!group data-[inactive]:!cursor-not-allowed',
            root: '!static',
          }}
          nextControlIcon={<Next />}
          previousControlIcon={<Previous />}
        >
          {slides}
        </Carousel>
      </div>
    </div>
  );
};

const useSlideToScroll = () => {
  const lg = useMediaQuery('(min-width: 960px)');
  const xl = useMediaQuery('(min-width: 1280px)');

  return useMemo(() => {
    if (xl) return 3;
    if (lg) return 2;
    return 1;
  }, [lg, xl]);
};

const PackageCard = ({
  data = {},
  onView = () => {},
  onSubscribe = () => {},
}) => {
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
    <div
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
      onClick={(e) => {
        e.stopPropagation();
        onView(id);
      }}
      data-id={id}
      className='rounded-3xl ring-[5px] m-[5px] bg-white ring-blueLight transition-colors hover:ring-transparent p-3 group min-h-[600px] max-w-[350px] flex flex-col cursor-pointer overflow-hidden relative'
    >
      {/* HOVER BG */}
      <div
        style={{
          backgroundImage: `url('/package-card-hover-bg.svg')`,
        }}
        className='absolute top-0 start-0 w-full h-full bg-cover opacity-0 group-hover:opacity-100'
      />

      {/* HEADER */}
      <div className='relative w-full h-[200px] p-7 rounded-xl overflow-hidden'>
        {/* BG */}
        <div
          style={{
            backgroundImage: `url('/package-card-header-bg.svg')`,
          }}
          className='bg-cover bg-top absolute top-0 start-0 w-full h-full group-hover:opacity-0'
        />

        {/* ICON AND PACKAGE NAME */}
        <div className='flex items-start gap-3 relative'>
          <div className='shadow-md w-fit rounded-lg overflow-hidden shrink-0'>
            <PackageIcon iconCode={iconCode} />
          </div>
          <h4 className='text-sm md:text-xl text-greenMain font-bold max-h-[82px] overflow-hidden'>
            {locale === 'ar' ? arName : enName}
          </h4>
        </div>

        {/* PRICE AND DISCOUNT */}
        <div className='mt-3 relative'>
          {discount ? (
            <div>
              <div className='flex items-start gap-3 justify-between'>
                <p
                  dir='ltr'
                  className='text-2xl mdl:text-4xl text-greenMain group-hover:text-white font-Bold w-fit text-nowrap'
                >
                  {(+price - (+price * +discount) / 100).toFixed(2)}{' '}
                  <span className='text-base mdl:text-xl'>SAR</span>
                </p>

                <span
                  dir='ltr'
                  className='text-xs text-white mdl:text-base font-bold rounded-tr-xl px-3 py-1 text-nowrap'
                  style={{
                    background:
                      'linear-gradient(104.19deg, #10B0C1 1.56%, #44D7E6 98.44%)',
                  }}
                >
                  -{discount} %
                </span>
              </div>
              <p
                dir='ltr'
                className='text-sm mdl:text-xl line-through text-grayDark group-hover:text-white text-end pe-5'
              >
                {price.toFixed(2)}{' '}
                <span className='text-base mdl:text-xl'>SAR</span>
              </p>
            </div>
          ) : (
            <p
              dir='ltr'
              className='text-2xl mdl:text-4xl text-greenMain group-hover:text-white font-Bold w-fit text-nowrap'
            >
              {price.toFixed(2)}{' '}
              <span className='text-base mdl:text-xl'>SAR</span>
            </p>
          )}
        </div>
      </div>

      {/* FEATURES */}
      <ul className='text-black text-xs mdl:text-base space-y-2 mdl:min-h-44 p-5 flex-1 relative'>
        {features.map((feature) => (
          <li key={feature} className='flex items-start gap-2 py-1'>
            <CircleCheck className='size-4 text-greenMain shrink-0 mt-1' />
            <span className='group-hover:text-white'>{feature}</span>
          </li>
        ))}
      </ul>

      {/* SUBSCRIBE BUTTON */}
      <div className='p-5 relative'>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSubscribe(id);
          }}
          className='rounded-xl border border-greenMain bg-white text-greenMain group-hover:bg-greenMain group-hover:text-white group-hover:border-transparent text-sm mdl:text-xl font-bold px-4 py-3 w-full'
        >
          احجز الان
        </button>
      </div>
    </div>
  );
};

const Previous = () => (
  <SwipeButton>
    <ArrowLeft className='w-4 mdl:w-5' />
  </SwipeButton>
);

const Next = () => (
  <SwipeButton>
    <ArrowLeft className='w-4 mdl:w-5 rotate-180' />
  </SwipeButton>
);

const SwipeButton = ({ children, ...props }) => {
  return (
    <div
      className='rounded-xl border border-black size-10 mdl:w-16 mdl:h-14 flex items-center justify-center transition hover:border-greenMain hover:ring-1 hover:ring-greenMain group-data-[inactive]:opacity-30 group-data-[inactive]:cursor-not-allowed group-data-[inactive]:pointer-events-none'
      {...props}
    >
      {children}
    </div>
  );
};
