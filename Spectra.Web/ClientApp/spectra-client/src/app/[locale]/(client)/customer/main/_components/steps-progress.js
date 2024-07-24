import clsx from 'clsx';
import { Progress } from '@mantine/core';

import HelloHandIcon from '@/assets/icons/hello-hand';
import CheckIcon from '@/assets/icons/check';

export const StepsProgress = () => {
  const progressValue = 10;
  const steps = [
    {
      isDone: true,
      label: 'اضف طفل',
      description: 'اول خطوة اضافة طفل عن طريق ملئ بيانات خاصة بطفلك',
    },
    {
      isDone: false,
      label: 'الكشف المبكر',
      description:
        'فى مرحلة الكشف المبكر يتم تشخيص حالة طفلك بعناية وبدقة لصنع خطة علاجية مناسبة لطفلك',
    },
    {
      isDone: false,
      label: 'حجز الاستشارة المجانية',
      description:
        'حجز استشارة مع طبيب حتى يتم تحديد الخطة العلاجية الخاصة بطفلك',
    },
    {
      isDone: false,
      label: 'الاشتراك فى الباقة المناسبة',
      description:
        'الاشتراك فى الباقة المناسبة لطفلك حتى يتم علاج طفلك والتقدم فى حالته مع سبيكترا',
    },
  ];
  return (
    <section className='flex items-center flex-col xl:flex-row justify-center'>
      <p className='mdl:text-medium text-base text-center xl:text-start font-bold xl:max-w-[162px]'>
        اكمل الخطوات وسنرشح لك أفضل حل لطفلك
      </p>

      <div className='flex-1 xl:mt-0 mt-5 space-y-3 max-w-[887px]'>
        <span className='text-black mdl:text-medium text-base'>
          {progressValue}% من ملفك تم اكماله
        </span>
        <Progress
          transitionDuration={200}
          color='#10B0C1'
          radius='md'
          size='xl'
          value={progressValue}
        />
        <div className='h-fit bg-grayLight rounded-[10px] p-4 flex items-start justify-between gap-2 w-full lgl:flex-row flex-col'>
          {steps.map((step, index) => (
            <div key={index + 261652}>
              <Step
                step={step}
                isDone={step.isDone}
                length={steps.length}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Step = ({ step, isDone = false, length, index }) => {
  return (
    <div className={clsx('space-y-2 w-full', !isDone && 'opacity-40')}>
      <div
        className={clsx(
          'relative after:absolute after:h-[1px] after:w-full after:bg-grayDark after:top-1/2 after:-translate-y-1/2 after:left-0',
          isDone && 'after:bg-greenMain',
          length === index + 1 && 'after:hidden'
        )}
      >
        <div
          className={clsx(
            'w-8 h-8 shrink-0 rounded-full flex items-center justify-center relative z-10',
            isDone ? 'bg-greenMain' : 'bg-grayDark text-white text-[20px]'
          )}
        >
          {isDone ? <CheckIcon /> : index + 1}
        </div>
      </div>
      <p className='text-black w-full flex items-center font-semibold'>
        {step.label}
      </p>
      <p className='text-black text-xs lgl:max-w-[187px] text-end lgl:text-start'>
        {step.description}
      </p>
    </div>
  );
};
