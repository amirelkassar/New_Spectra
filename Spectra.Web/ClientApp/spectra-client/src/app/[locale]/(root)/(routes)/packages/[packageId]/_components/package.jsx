import Button from '@/components/button';
import { Container } from '@/guest/_components/ui';
import {
  PackageBadge,
  PackageGoals,
  PackageContent,
  PackageTerms,
} from '@/components/packages';

export const Package = ({ data = {} }) => {
  return (
    <Container className='mt-20 mdl:mt-28'>
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

        <PackageTerms />

        <Button
          className='mt-5 font-bold w-full'
          variant='secondary'
        >
          احجز الان
        </Button>
      </div>
    </Container>
  );
};
