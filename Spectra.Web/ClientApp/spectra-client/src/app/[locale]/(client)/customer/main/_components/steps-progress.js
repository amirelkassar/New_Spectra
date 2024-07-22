import HelloHandIcon from '@/assets/icons/hello-hand';
import { Progress } from '@mantine/core';
import { Step } from './step';

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
      <div className='space-y-3 w-full xl:w-fit'>
        <h2 className='paragraph font-[400] flex items-center gap-x-2'>
          <span>مرحبا احمد</span>
          <HelloHandIcon />
        </h2>
        <p className='paragraph text-center xl:text-start font-bold xl:max-w-[162px]'>
          اكمل الخطوات وسنرشح لك أفضل حل لطفلك
        </p>
      </div>
      <div className='flex-1 space-y-3 max-w-[887px]'>
        <span className='paragraph'>{progressValue}% من ملفك تم اكماله</span>
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
