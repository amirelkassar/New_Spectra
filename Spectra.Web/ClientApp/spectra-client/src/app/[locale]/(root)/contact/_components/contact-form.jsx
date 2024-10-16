import Image from 'next/image';
import { Section } from '../../_components/section';
import { Link } from '@/navigation';
import PhoneGreenIcon from '@/assets/icons/phone-green';
import TextInput from '@/components/inputs/text-input';
import { Textarea } from '@mantine/core';
import Button from '@/components/button';
import WhatsappCircleIcon from '@/assets/icons/whatsapp-circle';

export const ContactForm = () => {
  return (
    <Section
      id='contact-form'
      aria-labelledby='contact-form'
      aria-label='Contact Form'
      className='mt-20 mdl:mt-28'
    >
      <div className='flex flex-col mdl:flex-row *:flex-1 gap-10'>
        <div className='h-auto w-full rounded-lg overflow-hidden'>
          <Image
            priority
            src='/demo-blog-6.webp'
            alt='Contact Page'
            width={700}
            height={700}
            className='w-full h-full object-cover object-center'
          />
        </div>

        <div className='mdl:w1/2 w-full space-y-10'>
          <h2
            id='contact-form'
            className='text-base mdl:text-2xl mb-10'
          >
            اهلا بك
          </h2>

          <div className='flex items-center w-fit mx-auto gap-10 text-center'>
            <span className='flex flex-col gap-3'>
              <Link
                href='https://wa.me/+966500000000'
                className='size-14 mdl:size-24 rounded-lg flex items-center justify-center bg-blueLight'
              >
                <WhatsappCircleIcon className='size-8 mdl:size-14' />
              </Link>
              <span className='block text-sm mdl:text-medium'>
                عبر الواتساب
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
                اتصل بنا
              </span>
            </span>
          </div>

          <div className='space-y-5'>
            <h4 className='text-sm mdl:text-medium font-bold'>
              اترك لنا رسالة
            </h4>
            <form
              action=''
              className='grid grid-cols-2 gap-3'
            >
              <TextInput placeholder='الاسم الاول' />
              <TextInput placeholder='الاسم الثاني' />
              <TextInput
                placeholder='البريد الالكتروني'
                className='col-span-2'
              />
              <TextInput
                placeholder='رقم الهاتف'
                className='col-span-2'
              />
              <Textarea
                placeholder='رسالة'
                className='col-span-2'
                classNames={{
                  input:
                    'rounded-lg focus:border-greenMain',
                }}
              />

              <Button
                variant='secondary'
                className='col-span-2 w-full font-bold text-sm mdl:text-medium'
                type='submit'
              >
                ارسال
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
};
