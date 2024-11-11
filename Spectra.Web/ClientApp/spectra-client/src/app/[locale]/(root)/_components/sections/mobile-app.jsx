import Image from 'next/image';

import {
  Container,
  SectionHeading,
} from '@/guest/_components/ui';

export const MobileApp = ({
  data = {
    info: '',
    mobileApp: '',
    qr: '',
    googleIcon: null,
    appStoreIcon: null,
  },
  title = 'حمل تطبيق سبيكترا الان',
}) => {
  if (
    !data.info ||
    !data.mobileApp ||
    !data.qr ||
    !data.googleIcon ||
    !data.appStoreIcon
  )
    return null;
  return (
    <Container
      aria-label='Mobile App'
      aria-labelledby='mobile-app'
      id='mobile-app'
      className='flex items-center'
    >
      <div className='bg-greenMain px-5 mdl:px-20 py-10 rounded-3xl overflow-hidden relative flex-1'>
        <div
          className='w-full h-full bg-cover bg-center absolute top-0 start-0 opacity-10'
          style={{
            backgroundImage: `url('/rectangle-effect-bg.png')`,
          }}
        />
        <div className='relative pe-20'>
          <SectionHeading
            id='mobile-app'
            className='text-white'
          >
            {title}
          </SectionHeading>
          <p className='text-sm mdl:text-medium mt-5 mb-12 text-white'>
            {data.info}
          </p>
          <div className='flex items-center justify-between'>
            <div className='mdl:size-32 size-14 rounded-2xl bg-white flex items-center justify-center overflow-hidden'>
              <Image
                src='/demo-qr-code.png'
                alt='mobile app barcode'
                width={112}
                height={112}
                priority
                className='mdl:size-28 size-11'
              />
            </div>
            <div className='*:block space-y-3'>
              <a target='_blank' href='#'>
                {data.googleIcon}
              </a>

              <a target='_blank' href='#'>
                {data.appStoreIcon}
              </a>
            </div>
          </div>
        </div>
      </div>

      <Image
        src={data?.mobileApp}
        alt='mobile app'
        width={598}
        height={918}
        priority={false}
        className='object-contain h-auto w-32 mdl:w-72 -ms-20 relative z-10'
      />
    </Container>
  );
};
