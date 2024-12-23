'use client';

import { useRouter } from '@/i18n/routing';
import { useMemo, useRef, useState } from 'react';
import { useLocale } from 'next-intl';

import { Container } from '@/guest/_components/ui';
import { usePublicPackages } from '@/hooks/queries/public/packages';
import { PackageIcon } from '@/components/packages/package-icon';
import Separator from '@/assets/icons/separator';
import ROUTES from '@/routes';
import { QueryWrapper } from '@/components/query-wrapper';
import CircleCheck from '@/assets/icons/circle-check';
import PackageTag from '@/assets/icons/pacakge-tag';
import ArrowLeft from '@/assets/icons/arrow-left';

export const Intro = () => {
  const query = usePublicPackages();

  return (
    <Container
      aria-label='All Packages'
      id='all-packages'
      aria-labelledby='all-packages'
      className='mt-20 mdl:mt-24'
    >
      <div className='mb-12'>
        <h2
          id='all-packages'
          className='text-2xl mdl:text-4xl text-center font-bold mb-4'
        >
          جميع الباقات
        </h2>
        <Separator className='mx-auto text-greenMain' />
      </div>

      <QueryWrapper query={query}>
        {({ data }) => <RenderPackages packages={data} />}
      </QueryWrapper>
    </Container>
  );
};

const RenderPackages = ({ packages = [] }) => {
  const router = useRouter();
  const scrollContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(false);

  const scrollRight = () => {
    const container = scrollContainerRef.current;
    const visibleWidth = container.offsetWidth;
    container.scrollBy({ left: visibleWidth, behavior: 'smooth' });
  };

  const scrollLeft = () => {
    const container = scrollContainerRef.current;
    const visibleWidth = container.offsetWidth;
    container.scrollBy({ left: -visibleWidth, behavior: 'smooth' });
  };

  const updateScrollState = () => {
    const container = scrollContainerRef.current;
    const visibleWidth = container.offsetWidth;
    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth;

    // حساب المؤشر الحالي
    const newIndex = Math.round(scrollLeft / visibleWidth);
    setCurrentIndex(newIndex);

    // تحديث حالة الأزرار
    setIsLeftDisabled(scrollLeft === 0);
    setIsRightDisabled(scrollLeft + visibleWidth >= scrollWidth);
  };
  return (
    <div
      style={{
        boxShadow: '6px 4px 24.5px 0px #0000000F',
        scrollbarWidth: 'none',
      }}
      className='bg-white/50 rounded-xl py-10 px-5 space-y-7 overflow-hidden'
    >
      <div className='flex items-center gap-4'>
        <PackageTag className='text-greenMain shrink-0' />
        <h3 className='text-base mdl:text-[28px] font-bold'>
          الباقات التشخيصية
        </h3>
      </div>

      <div
        className='flex *:shrink-0 max-w-[366px] lg:max-w-[736px] xl:max-w-[1106px] mx-auto gap-5 p-1 overflow-x-auto scroll-snap-x'
        ref={scrollContainerRef}
        onScroll={updateScrollState}
        style={{
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none',
        }}
      >
        {packages.map((item) => (
          <PackageCard
            key={item.id}
            data={item}
            onView={(id) =>
              router.push(ROUTES.ROOT.VIEW_PACKAGE.replace(':id', id))
            }
            className='scroll-snap-align-start'
          />
        ))}
      </div>

      <div className='max-w-2xl mx-auto flex items-center justify-between gap-4'>
        <SwipeButton onClick={scrollRight} disabled={isLeftDisabled}>
          <ArrowLeft className='rtl:rotate-180 w-4 mdl:w-5' />
        </SwipeButton>

        <div className='flex justify-center items-center gap-2'>
          {Array.from({ length: Math.ceil(packages.length / 2) }).map(
            (_, index) => (
              <span
                key={index}
                className={`size-4 rounded-full ${
                  index === currentIndex
                    ? 'bg-greenMain size-5'
                    : 'bg-grayMedium'
                }`}
              />
            )
          )}
        </div>

        <SwipeButton onClick={scrollLeft} disabled={isRightDisabled}>
          <ArrowLeft className='ltr:rotate-180 w-4 mdl:w-5' />
        </SwipeButton>
      </div>
    </div>
  );
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
      onClick={(e) => {
        e.stopPropagation();
        onView(id);
      }}
      data-id={id}
      className='rounded-3xl ring-[5px] bg-white ring-blueLight transition-colors hover:ring-transparent p-3 group min-h-[600px] max-w-[350px] flex flex-col cursor-pointer overflow-hidden relative'
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
          <h4 className='text-sm md:text-xl text-greenMain font-bold'>
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

const SwipeButton = ({ children, ...props }) => {
  return (
    <button
      className='rounded-xl border border-black size-10 mdl:w-16 mdl:h-14 flex items-center justify-center transition hover:border-greenMain hover:ring-1 hover:ring-greenMain disabled:opacity-30 disabled:cursor-not-allowed disabled:pointer-events-none'
      {...props}
    >
      {children}
    </button>
  );
};
