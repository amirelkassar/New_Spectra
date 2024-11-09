import { BackButton } from '@/client/_components/ui';
import { ViewService } from '@/components/services';

export const Service = ({ data = {} }) => {
  return (
    <ViewService>
      <ViewService.Intro className='pt-24 mdl:pt-28 rounded-none'>
        <ViewService.Image
          src={'/packages-details-page-bg.webp'}
          width={1536}
          height={1661}
          alt='Packages Details Image'
        />
        <div className='max-w-[1600px] mx-auto px-5 xl:px-14'>
          <BackButton className='ps-5 pt-5' />
        </div>
        <ViewService.Title className='max-w-[1600px] mx-auto px-5 xl:px-14'>
          {data?.label}
        </ViewService.Title>
        <ViewService.Description className='max-w-[1600px] mx-auto px-5 xl:px-14'>
          {data?.fullDescription}
        </ViewService.Description>
      </ViewService.Intro>
      <ViewService.Body className='max-w-[1600px] mx-auto px-5 xl:px-14'>
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
            نقدم خدمة الكشف المبكر مجاناً لفترة محدودة.
          </ViewService.FeatureDescription>
        </ViewService.Feature>
      </ViewService.Body>
    </ViewService>
  );
};
