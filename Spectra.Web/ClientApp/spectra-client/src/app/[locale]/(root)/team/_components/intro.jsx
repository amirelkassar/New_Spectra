import Image from 'next/image';
import { Section } from '../../_components/section';

export const Intro = () => {
  return (
    <Section
      aria-label='Intro'
      aria-labelledby='intro'
      id='intro'
      className='mt-20 mdl:mt-28 flex items-center gap-5'
    >
      <div className='px-5 mdl:px-20 space-y-5 w-1/2'>
        <h1 className='text-base mdl:text-4xl font-bold'>
          العناية بطفلك اهم من كل شىء
        </h1>
        <p className='text-sm mdl:text-medium'>
          أول مركز طب اتصالي ورعاية عن بعد لتخيص وعلاج
          الاضطرابات النمائية للاطفال
        </p>
      </div>

      <div className='w-1/2 relative'>
        <div className='rounded-full ltr:rounded-tr-none rtl:rounded-tl-none bg-blueLight overflow-hidden'>
          <Image
            src='https://s3-alpha-sig.figma.com/img/f104/0f88/7308badef297a9530959202b51a862c4?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GJeQ-VmhF2J2zaoMIV0L7itA5BySfRJH8530f4fqg~1aLIUV07qHjG8VLrsk8jctlW1FdmCJpjB65hBn-2Uhyni92xKkH4wBCcBCGze7hGtD41j-i8aNo2sgtz7wu3fXmm5HWw868UP1bTHXB9SLhgcwnRUVvcqYAX0CkIXcvCSfM7LwibBP8nd3B4grwxarNzJ1dK8hUOqkfHeyOyUpnaRB6PhdWbxzwnH~R8Xf9kEuNAOKdw1J1JIg0ACPnoXcSTSqtDWhzHl2O7qi3K~WdCzPEvXBlHfdW3aIa8RjXCTjbnVBMsqZBGFViylNg7zhLuwxdknZVlTARue3o02aOw__'
            alt='Doctors Team'
            width={919}
            height={919}
            priority
            className='w-full h-full object-cover object-center'
          />
        </div>
      </div>
    </Section>
  );
};
