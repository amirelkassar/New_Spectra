import Image from 'next/image';

import { BackButton, H1 } from '@/client/_components/ui';
import Card from '@/components/card';
import HeartCheckedIcon from '@/assets/icons/heart-checked';
import Button from '@/components/button';

export const ServiceDetails = ({ data = {} }) => {
  return (
    <div className='space-y-5 bg-white rounded-lg h-full'>
      <HeroSection
        label={data.label}
        fullDescription={data.fullDescription}
      />

      <ServiceList
        info={data.info}
        label={data.label}
        fullDescription={data.fullDescription}
      />

      <ServicePrice price={100} />

      <div className='p-5'>
        <Button
          className='w-full mdl:max-w-xs'
          variant='secondary'
        >
          احجز الان
        </Button>
      </div>
    </div>
  );
};

const HeroSection = ({
  label = '',
  fullDescription = '',
}) => {
  return (
    <section>
      <Card className='bg-blueLight overflow-hidden flex justify-between items-start w-full !p-0 *:flex-1'>
        <div className='xl:p-10 p-5 space-y-7'>
          <H1 className='mdl:text-4xl text-base sm:text-2xl lg:max-w-[70%] leading-relaxed gap-5 flex-col mdl:flex-row items-start mdl:items-center'>
            <BackButton />
            {label}
          </H1>

          <p className='text-sm mdl:text-medium hidden mdl:block'>
            {fullDescription}
          </p>
        </div>

        <div className='justify-end flex items-start ltr:justify-start -me-2 ltr:rotate-180'>
          <Image
            src={'/packages-details-page-bg.webp'}
            width={1536}
            height={1661}
            alt='Packages Details Image'
            priority
            className='w-auto h-auto max-w-[85%] mdl:max-w-full max-h-[650px] object-contain'
          />
        </div>
      </Card>
    </section>
  );
};

const ServiceList = ({
  info = [],
  label = '',
  fullDescription = '',
}) => {
  return (
    <section className='space-y-5 md:space-y-0'>
      <div className='p-2 lg:p-5 space-y-3 md:hidden'>
        <div className='flex items-center gap-3'>
          <HeartCheckedIcon className='fill-greenMain' />
          <h2 className='font-bold text-black lg:text-medium text-sm'>
            {label}
          </h2>
        </div>
        <p className='text-black text-xs lg:text-base max-w-screen-mdl ps-8'>
          {fullDescription}
        </p>
      </div>

      <ul className='p-2 lg:p-5 space-y-3'>
        {info.map((item) => (
          <li key={item?.id} className='space-y-2'>
            <div className='flex items-center gap-3'>
              <HeartCheckedIcon className='fill-greenMain' />
              <h3 className='font-bold text-black lg:text-medium text-sm'>
                {item?.label}
              </h3>
            </div>
            <p className='text-black text-xs lg:text-base max-w-screen-mdl ps-8'>
              {item?.value}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

const ServicePrice = ({ price = 0 }) => {
  return (
    <Card>
      <div className='rounded-xl border-[3px] border-blueLight flex gap-2 items-start p-5'>
        <div className='mt-1'>
          <HeartCheckedIcon className='fill-greenMain' />
        </div>

        <div>
          <h3 className='font-bold lg:text-medium text-sm'>
            سعر الخدمة:
          </h3>
          <p
            dir='ltr'
            className='text-black text-xs lg:text-base rtl:text-end'
          >
            $ {price}
          </p>
        </div>
      </div>
    </Card>
  );
};
