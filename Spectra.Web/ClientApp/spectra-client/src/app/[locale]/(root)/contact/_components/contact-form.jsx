import Image from 'next/image';
import { Section } from '../../_components/section';
import { Link } from '@/navigation';
import WhatsAppIcon from '@/assets/icons/whatsapp';
import PhoneGreenIcon from '@/assets/icons/phone-green';
import TextInput from '@/components/inputs/text-input';
import { Textarea } from '@mantine/core';
import Button from '@/components/button';

export const ContactForm = () => {
  return (
    <Section
      id='contact-form'
      aria-labelledby='contact-form'
      aria-label='Contact Form'
      heading='اهلا بك'
      className='mt-20 mdl:mt-28'
    >
      <div className='flex flex-col mdl:flex-row *:flex-1 gap-10'>
        <Image
          src='https://s3-alpha-sig.figma.com/img/a656/d538/6d662a2c219664c9ef976ce872c00fff?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FLcfzvcEs0JOUcpCBLilYhAYcVOC7el6~aAluMkCkwxufV88Qzt48sE~IU4jA8io9s9fabSMd~AEm0YeInGAQo9hpNxaDxd8Wnzybd6JRW2yVsD9H04JCaVIHSpLNz0kkV~E8cvYIO4VT~Hekri45rTAXxzzIQZWVnApeNtI7gGsrrqyX22g6QWJTjzbKCeuhh62bAGfrCZxTdhNaPes7CKrtuY-BdOh4~PU4VZJcLTr6ZVtvI-UnDQ4vn-e5No071Vgy5i9VbTnREjw0gp0grIc7cFkhwOnpyfBfGMONYqsjJqxqf0Seg1NgEO9-Bw~Ic9aXOtkcmyPqyVt1Ci6Eg__'
          alt='Contact Page'
          width={700}
          height={700}
          className='mdl:w-1/2 w-full rounded-lg h-auto'
        />

        <div className='mdl:w1/2 w-full space-y-10'>
          <div className='flex items-center w-fit mx-auto gap-10 text-center'>
            <span className='flex flex-col gap-3'>
              <Link
                href='https://wa.me/+966500000000'
                className='size-14 mdl:size-24 rounded-lg flex items-center justify-center bg-blueLight'
              >
                <WhatsAppIcon className='size-8 mdl:size-14' />
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
