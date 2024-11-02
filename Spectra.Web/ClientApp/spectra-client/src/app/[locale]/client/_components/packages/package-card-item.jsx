import { cn } from '@/lib/utils';
import Button from '@/components/button';
import CircleCheck from '@/assets/icons/circle-check';

export const PackageCardItem = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className={cn(
        `rounded-lg mdl:min-w-[300px] border-2 border-grayLight p-5 border-t-[6px] w-fit border-t-greenMain transition-all hover:border-greenMain hover:shadow-md flex flex-col gap-5`,
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
        'font-bold w-full block py-2 text-sm mdl:text-base',
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
        <li
          key={feature}
          className='flex items-center gap-2 py-1'
        >
          <CircleCheck className='size-4 text-greenMain' />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
};

PackageCardItem.List = PackageList;

const PackagePrice = ({ children, ...props }) => {
  return (
    <p
      {...props}
      className={cn(
        'mdl:text-4xl text-2xl text-greenMain font-Bold',
        props?.className
      )}
    >
      {children}
    </p>
  );
};

PackageCardItem.Price = PackagePrice;

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
