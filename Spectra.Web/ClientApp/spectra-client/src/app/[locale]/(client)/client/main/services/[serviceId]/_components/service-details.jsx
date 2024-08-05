import { Heading } from '@/app/[locale]/(client)/_components/heading';
import BackIcon from '@/assets/icons/back-black';
import Card from '@/components/card';
import { Link } from '@/navigation';
import ROUTES from '@/routes';
import PackagesImage from '@/assets/images/packages-details-page-bg.png';
import Image from 'next/image';
import HeartCheckedIcon from '@/assets/icons/heart-checked';

export const ServiceDetails = ({ data = {} }) => {
  return (
    <div className='space-y-5 bg-white rounded-lg h-full'>
      <HeroSection label={data.label} fullDescription={data.fullDescription} />

      <ServiceList
        info={data.info}
        label={data.label}
        fullDescription={data.fullDescription}
      />
    </div>
  );
};

const HeroSection = ({ label = '', fullDescription = '' }) => {
  return (
    <section>
      <Card className='bg-blueLight overflow-hidden flex !p-0'>
        <div className='w-[50%] p-5 h-fit md:my-auto'>
          <Heading
            className='flex-row-reverse items-start justify-end gap-5 lg:text-4xl text-2xl lg:max-w-[70%] leading-relaxed'
            label={label}
            icon={
              <Link href={`${ROUTES.CLIENT.MAIN}/services`}>
                <BackIcon className='ltr:rotate-180 lg:size-11' />
              </Link>
            }
          />

          <p className='text-sm lg:text-medium hidden md:block'>
            {fullDescription}
          </p>
        </div>

        <Image
          src={PackagesImage}
          width={1536}
          height={1661}
          alt='Packages Details Image'
          priority
          className='w-full max-w-[50%] h-full object-contain'
        />
      </Card>
    </section>
  );
};

const ServiceList = ({ info = [], label = '', fullDescription = '' }) => {
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
