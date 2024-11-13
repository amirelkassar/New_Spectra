import Button from '@/components/button';
import {
  BackButton,
  Section,
} from '@/client/_components/ui';
import { ViewService } from '@/components/services';

export const ServiceDetails = ({ data = {} }) => {
  return (
    <Section id='service-details' className='py-0'>
      <ViewService>
        <ViewService.Intro>
          <ViewService.Image
            src={'/packages-details-page-bg.webp'}
            width={1536}
            height={1661}
            alt='Packages Details Image'
          />

          <BackButton className='ps-5 pt-5' />
          <ViewService.Title id='service-details'>
            {data?.label}
          </ViewService.Title>
          <ViewService.Description>
            {data?.fullDescription}
          </ViewService.Description>
        </ViewService.Intro>
        <ViewService.Body>
          {data?.info?.map((feature) => (
            <ViewService.Feature key={feature?.id}>
              <ViewService.FeatureTitle>
                {feature?.label}
              </ViewService.FeatureTitle>
              <ViewService.FeatureDescription>
                {feature?.value}
              </ViewService.FeatureDescription>
            </ViewService.Feature>
          ))}

          <ViewService.Feature withBorder>
            <ViewService.FeatureTitle>
              سعر الخدمة:
            </ViewService.FeatureTitle>
            <ViewService.FeatureDescription>
              100 $
            </ViewService.FeatureDescription>
          </ViewService.Feature>
        </ViewService.Body>

        <div className='p-5'>
          <Button
            className='w-full mdl:max-w-xs'
            variant='secondary'
          >
            احجز الان
          </Button>
        </div>
      </ViewService>
    </Section>
  );
};
