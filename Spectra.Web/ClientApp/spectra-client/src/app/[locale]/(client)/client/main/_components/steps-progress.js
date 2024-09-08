import { Progress } from '@mantine/core';

import CheckIcon from '@/assets/icons/check';
import clsx from 'clsx';

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
        <div className='h-fit bg-grayLight rounded-[10px] p-4 flex items-start justify-between gap-4 w-full lgl:flex-row flex-col'>
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
    <div
      className={clsx(
        'space-y-2 w-full relative flex items-start gap-5 lgl:block',
        !isDone && 'opacity-40'
      )}
    >
      {/* ICON */}

      <div
        className={clsx(
          'w-8 h-8 shrink-0 rounded-full flex items-center justify-center relative z-10',
          isDone ? 'bg-greenMain' : 'bg-grayDark text-white text-[20px]'
        )}
      >
        {isDone ? <CheckIcon /> : index + 1}
      </div>

      <div className='space-y-1 items-start flex flex-1 lgl:block'>
        {/* LABEL */}
        <p className='text-black min-w-40 lgl:min-w-fit font-semibold'>
          {step.label}
        </p>

        {/* DESCRIPTION */}
        <p className='text-black text-xs lgl:max-w-[187px]'>
          {step.description}
        </p>
      </div>

      {/* STEP LINE */}
      {index !== length - 1 && (
        <>
          <div
            className={clsx(
              'absolute w-full hidden lgl:block h-[1px] start-0 !m-0 top-4 bg-grayDark',
              isDone && 'bg-greenMain'
            )}
          />
          <div
            className={clsx(
              'absolute w-[1px] h-[calc(100%-16px)] lgl:hidden start-4 top-5 bg-grayDark',
              isDone && 'bg-greenMain'
            )}
          />
        </>
      )}
    </div>
  );
};
