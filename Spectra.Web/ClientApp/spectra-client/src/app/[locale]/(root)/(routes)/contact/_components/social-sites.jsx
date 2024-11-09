import {
  Container,
  SectionHeading,
} from '@/guest/_components/ui';

export const SocialSites = ({
  data = [],
  title = 'تابعنا علي',
}) => {
  if (!data.length) return null;
  return (
    <Container
      id='social-sites'
      aria-label='Social Sites'
      aria-labelledby='social-sites'
    >
      <SectionHeading
        className='text-center mb-10'
        id='social-sites'
      >
        {title}
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
