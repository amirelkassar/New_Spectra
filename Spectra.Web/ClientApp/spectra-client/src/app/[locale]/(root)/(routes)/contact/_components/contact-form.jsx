import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

import { Container, SectionHeading } from '@/guest/_components/ui';
import { Textarea } from '@/components/inputs/textarea';
import TextInput from '@/components/inputs/text-input';
import Button from '@/components/button';
import PhoneGreenIcon from '@/assets/icons/phone-green';
import WhatsappCircleIcon from '@/assets/icons/whatsapp-circle';

export const ContactForm = () => {
  const tg = useTranslations('general_obj');

  return (
    <Container
      id='contact-form'
      aria-labelledby='contact-form'
      aria-label='Contact Form'
      className='mt-20 mdl:mt-28'
    >
      <div className='flex flex-col mdl:flex-row *:flex-1 gap-10'>
        <div className='relative overflow-hidden rounded-xl min-h-[285px]'>
          <Image
            priority
            src='/contact-us-min.webp'
            alt='Contact Page'
            fill
            sizes='width:100%, height:100%'
            className='object-cover object-center'
          />
        </div>

        <div className='mdl:w1/2 w-full space-y-10'>
          <SectionHeading id='contact-form' className='mb-10'>
            {tg('welcome')}
          </SectionHeading>

          <div className='flex items-center w-fit mx-auto gap-10 text-center'>
            <span className='flex flex-col gap-3'>
              <Link
                href='https://wa.me/+966500000000'
                className='size-14 mdl:size-24 rounded-lg flex items-center justify-center bg-blueLight'
              >
                <WhatsappCircleIcon className='size-8 mdl:size-14' />
              </Link>
              <span className='block text-sm mdl:text-medium'>
                {tg('whats_app')}
              </span>
            </span>
            <span className='flex flex-col gap-3'>
              <Link
                href='tel:+966500000000'
                className='size-14 mdl:size-24 rounded-lg flex items-center justify-center bg-blueLight'
              >
                <PhoneGreenIcon className='size-8 mdl:size-14' />
              </Link>
              <span className='block text-sm mdl:text-medium'>
                {tg('call_us')}
              </span>
            </span>
          </div>

          <div className='space-y-5'>
            <h4 className='text-sm mdl:text-medium font-bold'>
              {tg('leave_message')}
            </h4>
            <form action='' className='grid grid-cols-2 gap-3'>
              <TextInput placeholder={tg('first_name')} />
              <TextInput placeholder={tg('last_name')} />
              <TextInput
                placeholder={tg('email')}
                className='col-span-2'
              />
              <TextInput
                placeholder={tg('phone_number')}
                className='col-span-2'
              />
              <Textarea
                placeholder={tg('message')}
                className='col-span-2'
              />

              <Button
                variant='secondary'
                className='col-span-2 w-full font-bold text-sm mdl:text-medium'
                type='submit'
              >
                {tg('send')}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};
