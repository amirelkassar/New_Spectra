import { Section } from '../../_components/section';

const emails = [
  {
    email: 'info@startsmart.com',
    label: 'دعم العملاء',
  },
  {
    email: 'info@startsmart.com',
    label: 'الملاحظات والمقترحات',
  },
  {
    email: 'info@startsmart.com',
    label: 'دعم العملاء',
  },
];

export const Emails = () => {
  return (
    <div className='bg-[#F5F5F5]'>
      <Section
        id='emails'
        aria-labelledby='emails'
        aria-label='Emails'
        heading='أو عن طريق'
      >
        <div className='grid grid-cols-1 mdl:grid-cols-3 gap-5'>
          {emails.map(({ email, label }, index) => (
            <Email
              key={index}
              email={email}
              label={label}
            />
          ))}
          <Email />
        </div>
      </Section>
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
