import {
  Container,
  SectionHeading,
} from '@/guest/_components/ui';

export const Emails = ({
  data = [],
  title = 'أو عن طريق',
}) => {
  if (!data.length) return null;
  return (
    <div className='bg-[#F5F5F5]'>
      <Container
        id='emails'
        aria-labelledby='emails'
        aria-label='Emails'
      >
        <SectionHeading className='text-center mb-10'>
          {title}
        </SectionHeading>
        <div className='grid grid-cols-1 mdl:grid-cols-3 gap-5'>
          {data.map(({ email, label }, index) => (
            <Email
              key={index}
              email={email}
              label={label}
            />
          ))}
          <Email />
        </div>
      </Container>
    </div>
  );
};

const Email = ({ email = '', label = '' }) => (
  <div className='text-center space-y-2'>
    <a
      href={`mailto:${email}`}
      className='font-bold text-sm mdl:text-medium block'
    >
      {email}
    </a>

    <p className='text-sm mdl:text-2xl font-light'>
      {label}
    </p>
  </div>
);
