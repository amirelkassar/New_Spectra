'use client';

import Logo from '@/assets/icons/logo';
import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

export const ContractA4 = forwardRef(({ children }, ref) => {
  return (
    <div
      ref={ref}
      className='relative bg-white text-black flex flex-col gap-5 contract-a4'
    >
      <Header />

      <Content>{children}</Content>

      <Footer />
    </div>
  );
});

ContractA4.displayName = 'ContractA4';

const Header = ({ className = '' }) => (
  <div
    dir='rtl'
    className={cn(
      'space-y-5 p-4 lg:p-8 print:fixed print:top-0 print:left-0 print:right-0',
      className
    )}
  >
    <div className='flex items-center justify-between'>
      <h1 className='text-base font-normal'>
        شركة المستقبل الرعاية الصحية
      </h1>
      <Logo className='h-9 shrink-0' />
    </div>
    <h2 className='text-base font-medium w-fit mx-auto'>
      عقد تقديم استشارات طبية
    </h2>
  </div>
);

const Content = ({ children }) => (
  <div
    dir='rtl'
    className='flex-1 px-4 lg:px-8 print:overflow-clip text-xs print:pt-[164px] print:break-before-page'
  >
    {children}
  </div>
);

const Footer = ({ className = '' }) => (
  <div
    dir='ltr'
    className={cn(
      'border-t-2 text-xs mdl:text-base border-greenMain flex items-center justify-between p-4 lg:p-8 print:fixed print:bottom-0 print:left-0 print:right-0',
      className
    )}
  >
    <OnlineContact />
    <PhoneContact />
    <Location />
  </div>
);

const OnlineContact = () => (
  <div>
    <div className='flex items-center gap-2'>
      <svg
        width={12}
        height={12}
        viewBox='0 0 12 12'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='shrink-0'
      >
        <g clipPath='url(#clip0_9102_24759)'>
          <path
            d='M11 6C11 8.76142 8.76142 11 6 11M11 6C11 3.23858 8.76142 1 6 1M11 6H1M6 11C3.23858 11 1 8.76142 1 6M6 11C7.25064 9.63082 7.96138 7.85398 8 6C7.96138 4.14602 7.25064 2.36918 6 1M6 11C4.74936 9.63082 4.03862 7.85398 4 6C4.03862 4.14602 4.74936 2.36918 6 1M1 6C1 3.23858 3.23858 1 6 1'
            stroke='#1E1E1E'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </g>
        <defs>
          <clipPath id='clip0_9102_24759'>
            <rect width={12} height={12} fill='white' />
          </clipPath>
        </defs>
      </svg>
      <span>www.spectra-sa.com</span>
    </div>

    <div className='flex items-center gap-2'>
      <svg
        width={12}
        height={12}
        viewBox='0 0 12 12'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='shrink-0'
      >
        <path
          d='M11 3C11 2.45 10.55 2 10 2H2C1.45 2 1 2.45 1 3M11 3V9C11 9.55 10.55 10 10 10H2C1.45 10 1 9.55 1 9V3M11 3L6 6.5L1 3'
          stroke='#1E1E1E'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
      <span>info@spectra-sa.com</span>
    </div>
  </div>
);

const PhoneContact = () => (
  <div>
    <div className='flex items-center gap-2'>
      <svg
        width={10}
        height={10}
        viewBox='0 0 10 10'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='shrink-0'
      >
        <g clipPath='url(#clip0_9102_24761)'>
          <path
            d='M9.16757 7.04874V8.29874C9.16805 8.41478 9.14428 8.52964 9.09779 8.63597C9.0513 8.74229 8.98312 8.83773 8.89761 8.91618C8.8121 8.99463 8.71115 9.05436 8.60122 9.09153C8.49129 9.12871 8.37481 9.14252 8.25924 9.13207C6.97709 8.99276 5.74549 8.55463 4.66341 7.85291C3.65667 7.21318 2.80313 6.35964 2.16341 5.35291C1.45923 4.26591 1.02101 3.02832 0.884241 1.7404C0.873829 1.62518 0.887523 1.50906 0.92445 1.39942C0.961377 1.28978 1.02073 1.18903 1.09873 1.10358C1.17673 1.01814 1.27166 0.949867 1.37749 0.903122C1.48332 0.856378 1.59772 0.832181 1.71341 0.832072H2.96341C3.16562 0.830081 3.36165 0.901688 3.51498 1.03354C3.6683 1.1654 3.76844 1.34851 3.79674 1.54874C3.8495 1.94877 3.94735 2.34154 4.08841 2.71957C4.14447 2.86871 4.1566 3.03079 4.12337 3.1866C4.09014 3.34242 4.01293 3.48545 3.90091 3.59874L3.37174 4.1279C3.96489 5.17105 4.8286 6.03476 5.87174 6.6279L6.40091 6.09874C6.51419 5.98671 6.65722 5.90951 6.81304 5.87628C6.96886 5.84305 7.13094 5.85518 7.28007 5.91124C7.6581 6.0523 8.05088 6.15015 8.45091 6.20291C8.65331 6.23146 8.83816 6.33341 8.9703 6.48936C9.10243 6.64531 9.17264 6.84439 9.16757 7.04874Z'
            stroke='#1E1E1E'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </g>
        <defs>
          <clipPath id='clip0_9102_24761'>
            <rect width={10} height={10} fill='white' />
          </clipPath>
        </defs>
      </svg>

      <span>+966 550383322</span>
    </div>
    <div className='ps-[18px]'>C.R: 1010697542</div>
  </div>
);

const Location = () => (
  <div>
    <div className='flex items-center gap-2'>
      <svg
        width={13}
        height={13}
        viewBox='0 0 13 13'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='shrink-0'
      >
        <path
          d='M6.50065 11.9154C6.37426 11.9154 6.26593 11.8793 6.17565 11.807C6.08537 11.7348 6.01767 11.64 5.97253 11.5227C5.801 11.0171 5.58433 10.5431 5.32253 10.1008C5.06975 9.65842 4.71315 9.13932 4.25273 8.54349C3.79232 7.94766 3.41767 7.37891 3.12878 6.83724C2.84891 6.29557 2.70898 5.64106 2.70898 4.8737C2.70898 3.81745 3.07461 2.9237 3.80586 2.19245C4.54614 1.45217 5.4444 1.08203 6.50065 1.08203C7.5569 1.08203 8.45065 1.45217 9.1819 2.19245C9.92218 2.9237 10.2923 3.81745 10.2923 4.8737C10.2923 5.69522 10.1343 6.38134 9.81836 6.93203C9.51142 7.4737 9.15482 8.01085 8.74857 8.54349C8.26107 9.19349 7.89093 9.73516 7.63815 10.1685C7.3944 10.5928 7.19128 11.0442 7.02878 11.5227C6.98364 11.649 6.91142 11.7484 6.81211 11.8206C6.72183 11.8838 6.61801 11.9154 6.50065 11.9154ZM6.50065 9.9789C6.65412 9.67196 6.82565 9.36953 7.01523 9.07161C7.21385 8.7737 7.50273 8.37647 7.8819 7.87995C8.2701 7.37439 8.58607 6.90946 8.82982 6.48516C9.0826 6.05182 9.20898 5.51467 9.20898 4.8737C9.20898 4.12439 8.94267 3.48793 8.41003 2.96432C7.88642 2.43168 7.24996 2.16536 6.50065 2.16536C5.75135 2.16536 5.11037 2.43168 4.57773 2.96432C4.05412 3.48793 3.79232 4.12439 3.79232 4.8737C3.79232 5.51467 3.91419 6.05182 4.15794 6.48516C4.41072 6.90946 4.73121 7.37439 5.1194 7.87995C5.49857 8.37647 5.78294 8.7737 5.97253 9.07161C6.17114 9.36953 6.34718 9.67196 6.50065 9.9789ZM6.50065 6.22786C6.87982 6.22786 7.2003 6.09696 7.46211 5.83516C7.72392 5.57335 7.85482 5.25286 7.85482 4.8737C7.85482 4.49453 7.72392 4.17404 7.46211 3.91224C7.2003 3.65043 6.87982 3.51953 6.50065 3.51953C6.12148 3.51953 5.801 3.65043 5.53919 3.91224C5.27739 4.17404 5.14648 4.49453 5.14648 4.8737C5.14648 5.25286 5.27739 5.57335 5.53919 5.83516C5.801 6.09696 6.12148 6.22786 6.50065 6.22786Z'
          fill='#1D1B20'
        />
      </svg>

      <div>Kingdom of Saudi Arabia</div>
    </div>
    <div className='ps-[21px]'>Riyadh</div>
  </div>
);
