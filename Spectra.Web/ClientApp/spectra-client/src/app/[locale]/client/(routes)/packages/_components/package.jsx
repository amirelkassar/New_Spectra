import Button from '@/components/button';
import Card from '@/components/card';

import {
  PackageBadge,
  PackageGoals,
  PackageContent,
  PackageTerms,
} from '@/components/packages';
import {
  H1,
  BackButton,
  Section,
} from '@/client/_components/ui';

export const Package = ({ data = {} }) => {
  return (
    <Section className='pt-0'>
      <Card>
        <div className='flex items-center gap-5 mb-10'>
          <BackButton />
          <H1>الباقات - {data.label}</H1>
        </div>
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
      </Card>
    </Section>
  );
};
