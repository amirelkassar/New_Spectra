import { EMAILS, SOCIAL } from '@/data';
import { ContactForm } from './_components/contact-form';
import { Emails } from './_components/emails';
import { SocialSites } from './_components/social-sites';

const ContactPage = () => {
  return (
    <main>
      <ContactForm />
      <Emails data={EMAILS} />
      <SocialSites data={SOCIAL} />
    </main>
  );
};

export default ContactPage;
