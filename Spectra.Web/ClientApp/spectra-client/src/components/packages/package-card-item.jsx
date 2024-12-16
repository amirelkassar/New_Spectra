import { cn } from '@/lib/utils';
import Button from '@/components/button';
import CircleCheck from '@/assets/icons/circle-check';
import Image from 'next/image';

export const PackageCardItem = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className={cn(
        `rounded-lg mdl:w-full mdl:max-w-[300px] border-2 border-grayLight p-5 border-t-[6px] w-fit border-t-greenMain transition-all hover:border-greenMain hover:shadow-md flex flex-col gap-5 group`,
        props?.className
      )}
    >
      {children}
    </div>
  );
};

const PackageBtn = ({ children, ...props }) => {
  return (
    <Button
      {...props}
      variant={props?.variant || 'secondary'}
      className={cn(
        'font-bold w-full block py-2 text-sm mdl:text-base mt-auto',
        props?.className
      )}
    >
      {children}
    </Button>
  );
};

PackageCardItem.Button = PackageBtn;

const PackageList = ({ features = [], ...props }) => {
  return (
    <ul
      {...props}
      className={cn(
        'text-black text-xs mdl:text-base relative space-y-2 mdl:min-h-44',
        props?.className
      )}
    >
      {features.map((feature) => (
        <li key={feature} className='flex items-center gap-2 py-1'>
          <CircleCheck className='size-4 text-greenMain' />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
};

PackageCardItem.List = PackageList;

const PackagePrice = ({ children, currancy = '', ...props }) => {
  return (
    <p
      {...props}
      dir='ltr'
      className={cn(
        'mdl:text-4xl text-2xl text-greenMain font-Bold w-fit text-nowrap',
        props?.className
      )}
    >
      {children}{' '}
      <span className='text-base mdl:text-xl'>{currancy}</span>
    </p>
  );
};

PackageCardItem.Price = PackagePrice;

const Discount = ({ children, ...props }) => {
  return (
    <span
      {...props}
      dir='ltr'
      className={cn(
        'bg-greenMain text-xs text-white mdl:text-base font-bold rtl:rounded-tr-xl ltr:rounded-tl-xl px-3 py-1 text-nowrap',
        props?.className
      )}
    >
      -{children} %
    </span>
  );
};

PackageCardItem.Discount = Discount;

const OldPrice = ({ children, ...props }) => {
  return (
    <span
      {...props}
      dir='ltr'
      className={cn(
        'text-sm mdl:text-xl line-through text-grayDark',
        props?.className
      )}
    >
      {children}
    </span>
  );
};

PackageCardItem.OldPrice = OldPrice;

const PriceWithDiscount = ({
  discount,
  price,
  currancy = '',
  ...props
}) => {
  const priceWithDiscount = (
    +price -
    (+price * +discount) / 100
  ).toFixed(2);

  return (
    <div>
      <div
        {...props}
        className={cn(
          'flex items-start gap-2 flex-wrap',
          props?.className
        )}
      >
        <PackagePrice>
          {priceWithDiscount}{' '}
          <span className='text-base mdl:text-xl'>{currancy}</span>
        </PackagePrice>
        <Discount>{discount}</Discount>
      </div>
      <OldPrice>
        {price.toFixed(2)} {currancy}
      </OldPrice>
    </div>
  );
};

PackageCardItem.PriceWithDiscount = PriceWithDiscount;

const PackageTitle = ({ children, ...props }) => {
  return (
    <h3
      {...props}
      className={cn(
        'text-sm mdl:text-base font-bold text-greenMain',
        props?.className
      )}
    >
      {children}
    </h3>
  );
};

PackageCardItem.Title = PackageTitle;

const PackageIcon = ({ src = '', name, ...props }) => {
  if (!src) return null;
  return (
    <div
      {...props}
      className={cn('relative size-9', props?.className)}
    >
      <Image
        src={src}
        alt={name}
        sizes='width: 36px; height: 36px;'
        fill
      />
    </div>
  );
};

PackageCardItem.Icon = PackageIcon;
