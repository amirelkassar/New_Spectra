import Image from 'next/image';
import { Section } from '../../_components/section';
import Button from '@/components/button';
import PlayIcon from '@/assets/icons/play';
import NotificationIcon from '@/assets/icons/notification';
import ArrowGreenDownCircleWhite from '@/assets/icons/arrow-green-down-circle-white';

export const Intro = () => {
  return (
    <div className='bg-blueLight pt-20 mdl:pt-28 overflow-hidden custom-clip-path-triangle relative'>
      <div className='absolute top-0 start-0 max-w-full max-h-full'>
        <BGSVG />
      </div>
      <Section
        aria-label='Services Intro'
        id='Services-intro'
        aria-labelledby='Services-intro'
        className='flex items-center gap-5 !py-0 relative'
      >
        <div className='w-1/2'>
          <Image
            width={918}
            height={918}
            src='https://s3-alpha-sig.figma.com/img/fa00/3609/b6c019163ecbe09d406a8d8cef486bec?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Lnrn08zurVsCUQdA8N94vUpfciYp32fY8eibn6aaW6qyYDIx2GqwwJroJrWtA4-D7uXKYm-tTCu28HfH43YDS0iua4ff0C3h53athZB8Nb6jO3Ur7Xj7bqKlQ3DzaOGuIE6xqKVIcn7akeEcxwRP~WxkmqvESaV0bUiRHQynYECDmIJT5bjJasaOZxvd3kY8ntisuwZeboO0E05nZfp1wtwnspwym1NI~ivD-E3g5nIvXuzV-WmBI1BAxq8DXwjuD3Q7fuBL6pnqVwuzL8n59FEHm10Yc6rMUpU-42iqN8XzCoqacXT8o6TyfQbt0f5qSp69uCaSntFG2ZMF2nqhbQ__'
            alt='Smiling little girl'
            className='w-full h-full object-cover object-center'
          />
        </div>
        <div className='w-1/2 mdl:space-y-5 space-y-2 pb-16 mdl:pb-0'>
          <h1 className='text-medium mdl:space-y-3 mdl:text-4xl font-bold'>
            قصص النجاح
          </h1>
          <p className='text-sm mdl:text-medium'>
            سبيكترا هو أول مركز طب إتصالي و رعاية عن بعد،
            يقوم بتشخيص و علاج و رعاية إضطرابات تطور و سلوك
            الاطفال، عن طريق فرقنا المتعددة التخصصات
            المختارة بعناية، وفق جودة و معايير فنية و مهنية
            عالمية معتبرة
          </p>
        </div>
      </Section>
      <a
        href='#services'
        className='absolute bottom-1 end-1/2 ltr:translate-x-1/2 rtl:-translate-x-1/2'
      >
        <ArrowGreenDownCircleWhite className='size-10 mdl:size-16' />
      </a>
    </div>
  );
};

const BGSVG = ({ className = '' }) => (
  <svg
    className={className}
    width={594}
    height={767}
    viewBox='0 0 594 767'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      opacity='0.7'
      d='M581.918 469.929L581.917 469.936C568.407 581.479 475.848 673.819 372.47 712.687L372.458 712.691C308.484 736.839 238.393 749.598 171.508 755.634C176.742 736.182 184.152 717.235 193.77 699.153L193.774 699.145L193.779 699.136C231.134 628.578 282.215 597.403 332.431 573.049C340.274 569.245 348.223 565.554 356.145 561.875C373.307 553.905 390.339 545.996 405.874 537.14C428.941 523.989 450.005 508.102 466.135 485.042L466.137 485.039C474.223 473.47 478.981 460.728 475.812 448.967C472.409 436.342 461.244 429.245 447.557 426.498C433.899 423.756 415.71 424.746 393.399 429.638C370.932 434.563 343.602 443.599 311.341 457.601C230.296 492.708 177.358 501.838 136.981 484.895C96.5394 467.925 65.1723 423.336 31.7729 340.226L31.7717 340.223C18.4671 307.148 5.25844 281.151 -7.31325 261.568C-19.796 242.124 -32.0193 228.419 -43.5845 220.602C-55.127 212.8 -68.0666 209.718 -79.3902 216.376C-89.8801 222.543 -95.256 235.092 -97.4655 249.027L-97.4674 249.039C-101.861 276.966 -97.8294 303.331 -90.4964 329.202C-85.5564 346.631 -78.9081 364.448 -72.2015 382.422C-69.1008 390.732 -65.9877 399.075 -63.0251 407.428C-44.0823 460.842 -29.2365 519.73 -51.2858 596.7C-64.9865 644.459 -91.0677 686.562 -125.986 719.423C-126.085 719.097 -126.181 718.779 -126.276 718.47C-126.92 716.349 -127.438 714.645 -127.716 713.797L-127.756 713.676L-127.799 713.556C-164.151 611.61 -187.823 504.583 -186.183 397.539L-186.183 397.528C-185.143 324.378 -171.775 251.563 -143.276 185C-125.101 142.751 -101.527 103.309 -71.5403 69.0665C-55.6127 50.9409 -37.6695 35.0925 -17.1501 23.2116L-17.1415 23.2066C15.1399 4.47237 53.089 -4.25634 90.8491 -2.06888L90.8617 -2.06815L90.8743 -2.06745C134.914 0.372403 179.536 17.9993 210.187 49.9727C211.827 51.6896 213.192 53.1399 214.451 54.624C221.633 63.0892 227.618 72.5942 232.572 82.7808L232.822 83.3548L232.932 83.6072C233.179 84.2942 233.481 84.9031 233.798 85.4332C235.41 89.0665 236.899 92.7404 238.338 96.5301C242.107 106.757 245.081 117.246 247.414 128.002C250.31 141.584 252.971 155.102 254.285 168.412C254.572 172.499 254.817 176.111 254.765 179.674C254.763 179.837 254.761 180.046 254.758 180.294C254.751 181.098 254.74 182.307 254.677 183.675C254.652 184.211 254.622 184.682 254.59 185.072L251.103 190.931L257.524 196.405L257.619 196.486L261.129 199.477L265.683 198.751C269.802 198.093 274.4 196.571 277.798 195.446C278.974 195.057 280.006 194.716 280.825 194.474L280.876 194.459L280.927 194.443C285.406 193.068 290.029 192.117 294.946 191.375C317.434 188.229 340.536 190.25 363.529 194.961C384.785 199.34 405.704 206.253 425.21 215.823L425.217 215.827C466.302 235.94 505.23 266.076 533.352 302.384C554.737 330.001 570.227 361.804 577.919 395.453C583.517 419.97 584.917 445.326 581.918 469.929ZM107.561 295.546C91.9405 346.706 121.223 401.513 172.592 418.173C224.071 434.87 278.831 407.163 294.497 355.854C310.117 304.694 280.835 249.887 229.465 233.227C177.986 216.53 123.226 244.237 107.561 295.546Z'
      stroke='white'
      strokeOpacity='0.5'
      strokeWidth={20}
    />
  </svg>
);
