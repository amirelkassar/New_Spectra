import { SOCIAL } from '@/data';
import { ContactForm } from './_components/contact-form';
import { Emails } from './_components/emails';
import { SocialSites } from './_components/social-sites';

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

const ContactPage = () => {
  return (
    <main>
      <ContactForm />
      <Emails data={emails} />
      <SocialSites data={SOCIAL} />
    </main>
  );
};

export default ContactPage;
