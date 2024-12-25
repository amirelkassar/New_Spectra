import { useTranslations } from 'next-intl';

import { Container, SectionHeading } from '@/guest/_components/ui';

export const SocialSites = ({ data = [] }) => {
  const tg = useTranslations('general_obj');

  if (!data.length) return null;
  return (
    <Container
      id='social-sites'
      aria-label='Social Sites'
      aria-labelledby='social-sites'
    >
      <SectionHeading
        className='text-center mb-10 capitalize'
        id='social-sites'
      >
        {tg('follow_us_on')}
      </SectionHeading>
      <div className='flex items-center justify-evenly gap-5'>
        {data?.map((item, index) => (
          <a key={index} href={item?.href} target='_blank'>
            {item?.icon}
          </a>
        ))}
      </div>
    </Container>
  );
};
