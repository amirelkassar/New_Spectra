import Image from 'next/image';
import { Section } from '../../_components/section';

export const Intro = () => {
  return (
    <section
      aria-label='Intro'
      aria-labelledby='intro'
      id='intro'
      className='h-auto flex mdl:items-center !p-0 max-h-screen'
    >
      <div className='px-5 mt-28 mdl:mt-40 mdl:px-20 space-y-5 w-1/2 relative'>
        <h1 className='text-base mdl:text-4xl font-bold'>
          العناية بطفلك اهم من كل شىء
        </h1>
        <p className='text-sm mdl:text-medium'>
          أول مركز طب اتصالي ورعاية عن بعد لتخيص وعلاج
          الاضطرابات النمائية للاطفال
        </p>
      </div>

      <div className='w-1/2 pt-10 mdl:pt-0 h-auto bg-blueLight pb-0 p-3 rounded-full ltr:rounded-tr-none rtl:rounded-tl-none overflow-hidden ring-[10px] mdl:ring-[20px] ring-blueLight/40'>
        <Image
          src='/demo-team.png'
          alt='Doctors Team'
          width={919}
          height={919}
          priority
          className='w-full h-full object-cover object-center'
        />
      </div>
    </section>
  );
};
