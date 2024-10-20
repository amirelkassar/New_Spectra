import { Progress } from '@mantine/core';

import CheckIcon from '@/assets/icons/check';
import { cn } from '@/lib/utils';
import ROUTES from '@/routes';
import { Link } from '@/navigation';

const steps = [
  {
    isDone: true,
    label: 'اضف طفل',
    description:
      'اول خطوة اضافة طفل عن طريق ملئ بيانات خاصة بطفلك',
    href: '#',
  },
  {
    isDone: false,
    label: 'الكشف المبكر',
    description:
      'فى مرحلة الكشف المبكر يتم تشخيص حالة طفلك بعناية وبدقة لصنع خطة علاجية مناسبة لطفلك',
    href: ROUTES.CLIENT.MAIN.EARLY_CHECK,
  },
  {
    isDone: false,
    label: 'حجز الاستشارة المجانية',
    description:
      'حجز استشارة مع طبيب حتى يتم تحديد الخطة العلاجية الخاصة بطفلك',
    href: '#',
  },
  {
    isDone: false,
    label: 'الاشتراك فى الباقة المناسبة',
    description:
      'الاشتراك فى الباقة المناسبة لطفلك حتى يتم علاج طفلك والتقدم فى حالته مع سبيكترا',
    href: '#',
  },
];
export const StepsProgress = () => {
  const progressValue = 10;

  return (
    <section className='flex items-center flex-col xl:flex-row '>
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
            <div className='w-full' key={index}>
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
      className={cn(
        'space-y-2 w-full relative flex items-start gap-5 lgl:block hover:opacity-100 transition group',
        !isDone && 'opacity-40'
      )}
    >
      {/* ICON */}

      <div className='flex items-center'>
        <div
          role='button'
          className={cn(
            'w-8 h-8 shrink-0 rounded-full flex items-center justify-center relative z-10 transition group-hover:bg-greenMain',
            isDone
              ? 'bg-greenMain'
              : 'bg-grayDark text-white text-[20px]'
          )}
        >
          <Link href={step.href}>
            {isDone ? <CheckIcon /> : index + 1}
          </Link>
        </div>
        <p
          role='button'
          className='text-black min-w-40 lgl:min-w-fit font-semibold hidden lgl:block relative z-10 px-2 bg-grayLight'
        >
          <Link href={step.href}>{step.label}</Link>
        </p>
      </div>
      <div className='space-y-1 items-start flex flex-1 lgl:block'>
        {/* LABEL */}
        <p
          role='button'
          className='text-black min-w-40 lgl:min-w-fit font-semibold lgl:hidden'
        >
          <Link href={step.href}>{step.label}</Link>
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
            className={cn(
              'absolute w-full hidden lgl:block h-[1px] start-0 !m-0 top-4 bg-grayDark group-hover:bg-greenMain',
              isDone && 'bg-greenMain'
            )}
          />
          <div
            className={cn(
              'absolute w-[1px] h-[calc(100%-16px)] lgl:hidden start-4 top-5 bg-grayDark group-hover:bg-greenMain',
              isDone && 'bg-greenMain'
            )}
          />
        </>
      )}
    </div>
  );
};
