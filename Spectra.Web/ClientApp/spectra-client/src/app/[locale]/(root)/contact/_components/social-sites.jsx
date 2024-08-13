import { Section } from '../../_components/section';
import LinkedinIcon from '@/assets/icons/linkedin';
import SnapChatCircleIcon from '@/assets/icons/snapchat-circle';
import InstagramIcon from '@/assets/icons/instagram';
import FaceBookCircleIcon from '@/assets/icons/facebook-circle';
import XSocialCircleIcon from '@/assets/icons/x-social-circle';
import WhatsappCircleIcon from '@/assets/icons/whatsapp-circle';

const data = [
  {
    href: '#',
    icon: <LinkedinIcon className='size-7 mdl:size-16' />,
  },
  {
    href: '#',
    icon: (
      <SnapChatCircleIcon className='size-7 mdl:size-16' />
    ),
  },
  {
    href: '#',
    icon: <InstagramIcon className='size-7 mdl:size-16' />,
  },
  {
    href: '#',
    icon: (
      <FaceBookCircleIcon className='size-7 mdl:size-16' />
    ),
  },
  {
    href: '#',
    icon: (
      <XSocialCircleIcon className='size-7 mdl:size-16' />
    ),
  },
  {
    href: '#',
    icon: (
      <WhatsappCircleIcon className='size-7 mdl:size-16' />
    ),
  },
];

export const SocialSites = () => {
  return (
    <Section
      id='social-sites'
      aria-label='Social Sites'
      aria-labelledby='social-sites-heading'
      heading='تابعنا علي'
    >
      <div className='flex items-center justify-evenly gap-5'>
        {data?.map((item, index) => (
          <a key={index} href={item?.href} target='_blank'>
            {item?.icon}
          </a>
        ))}
      </div>
    </Section>
  );
};
