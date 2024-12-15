'use client';

import { useLocale } from 'next-intl';

import { NotFound404 } from '@/components/not-found-404';
import { QueryWrapper } from '@/components/query-wrapper';
import { ViewService } from '@/components/services';
import { usePublicServices } from '@/hooks/queries/public/services';
import { useImagePath } from '@/hooks/use-image-path';

export const Service = ({ id = '' }) => {
  const query = usePublicServices();

  return (
    <QueryWrapper query={query}>
      {({ data }) => <RenderService services={data} id={id} />}
    </QueryWrapper>
  );
};

const RenderService = ({ services = [], id }) => {
  const service = services.find((item) => item.id === id);

  if (!service)
    return (
      <div className='pt-24 mdl:pt-28'>
        <NotFound404 />
      </div>
    );

  return <ServiceItem data={service} />;
};

const ServiceItem = ({ data }) => {
  const locale = useLocale();

  const path = useImagePath(data?.heroImagePath);

  const label = locale === 'ar' ? data?.arName : data?.enName;

  const description =
    locale === 'ar' ? data?.arDescription : data?.enDescription;

  const titleKey = locale === 'ar' ? 'arTitle' : 'enTitle';
  const descriptionKey =
    locale === 'ar' ? 'arDescription' : 'enDescription';

  return (
    <ViewService>
      <ViewService.Intro className='rounded-none pt-24 mdl:pt-28'>
        <ViewService.Image
          src={path}
          width={1536}
          height={1661}
          alt={data?.enName}
        />
        <ViewService.Title className='max-w-[1600px] mx-auto  p-5 xl:p-14 pb-0 xl:pb-0'>
          {label}
        </ViewService.Title>
        <ViewService.Description className='max-w-[1600px] mx-auto px-5 xl:px-14'>
          {description}
        </ViewService.Description>
      </ViewService.Intro>
      <ViewService.Body className='max-w-[1600px] mx-auto px-5 xl:px-14'>
        {data?.contents?.map((feature) => (
          <ViewService.Feature key={feature?.enTitle}>
            <ViewService.FeatureTitle>
              {feature[titleKey]}
            </ViewService.FeatureTitle>
            <ViewService.FeatureDescription>
              {feature[descriptionKey]}
            </ViewService.FeatureDescription>
          </ViewService.Feature>
        ))}

        {/* <ViewService.Feature withBorder>
        <ViewService.FeatureTitle>
          سعر الخدمة:
        </ViewService.FeatureTitle>
        <ViewService.FeatureDescription>
          نقدم خدمة الكشف المبكر مجاناً لفترة محدودة.
        </ViewService.FeatureDescription>
      </ViewService.Feature> */}
      </ViewService.Body>
    </ViewService>
  );
};
