import Button from '@/components/button';
import {
  PackageBadge,
  PackageGoals,
  PackageContent,
} from '@/client/_components/packages';

export const Package = ({ data = {} }) => {
  return (
    <div className='max-w-[1000px] mx-auto'>
      <PackageBadge
        name={data.label}
        price={data.price}
        features={data.features}
        icon='/badge.svg'
        active
      />

      <PackageContent content={data.content} />

      <PackageGoals goals={data.goalsOfPackage} />

      <Button
        className='mt-5 font-bold w-full'
        variant='secondary'
      >
        احجز الان
      </Button>
    </div>
  );
};
