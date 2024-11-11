import Image from 'next/image';

import { cn } from '@/lib/utils';
import CircleCheck from '@/assets/icons/circle-check';

export const PackageBadge = ({
  name = '',
  icon = '',
  price = 0,
  subscribed = false,
  active = false,
  features = [],
}) => {
  if (!name) return null;
  return (
    <div
      style={{
        background: active
          ? 'linear-gradient(271.33deg, #10B0C1 41.55%, #3EDDEE 99.96%)'
          : '#E9F7FF',
      }}
      className={cn(
        'px-5 py-10 rounded-3xl relative',
        active &&
          'before:absolute before:w-full before:h-full before:bg-[url(/noise.webp)] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-10 before:start-0 before:top-0 transition-all text-white'
      )}
    >
      <div className='relative flex items-center justify-around gap-5'>
        <NameAndStatus
          name={name}
          icon={icon}
          price={price}
          subscribed={subscribed}
        />

        <FeaturesList features={features} />

        <Price className='hidden mdl:block' value={price} />
      </div>
    </div>
  );
};

const Price = ({
  value = 0,
  currancy = '$',
  className = '',
}) => {
  return (
    <p
      dir='ltr'
      className={cn(
        'font-Bold text-2xl mdl:text-4xl',
        className
      )}
    >
      {currancy} {value?.toLocaleString('en-US')}
    </p>
  );
};

const FeaturesList = ({
  features = [],
  classNames = { container: '', item: '', icon: '' },
}) => {
  return (
    <ul className={cn('space-y-4', classNames?.container)}>
      {features?.map((feature) => (
        <li
          key={feature}
          className={cn(
            'flex items-start gap-2 text-sm mdl:text-xl font-bold tracking-wide',
            classNames?.item
          )}
        >
          <CircleCheck
            className={cn(
              'size-4 mt-0.5 mdl:mt-2',
              classNames?.icon
            )}
          />
          {feature}
        </li>
      ))}
    </ul>
  );
};

const NameAndStatus = ({
  name = '',
  icon = '',
  price = 0,
  subscribed = false,
}) => {
  return (
    <div className='space-y-2'>
      {subscribed && (
        <p className='text-xs mdl:text-base font-bold'>
          لقد اشتركت في
        </p>
      )}

      <div className='flex items-center gap-2'>
        {icon && (
          <div className='relative size-9'>
            <Image
              src={icon}
              alt={name}
              sizes='width: 36px; height: 36px;'
              fill
            />
          </div>
        )}

        <h4 className='text-base mdl:text-3xl font-bold'>
          {name}
        </h4>
      </div>

      <Price className='mdl:hidden' value={price} />
    </div>
  );
};
