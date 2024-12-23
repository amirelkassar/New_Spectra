import { useLocale, useTranslations } from 'next-intl';

import { cn } from '@/lib/utils';
import { Container, SectionHeading } from '@/guest/_components/ui';

export const Steps = ({ data, title = '' }) => {
  const t = useTranslations('guest_obj');

  const locale = useLocale();

  const titleValue = title || t('steps_sentence_1');

  const STEPS = data[locale];

  if (
    !STEPS?.traditionalSteps?.length &&
    !STEPS?.spectraSteps?.length
  )
    return null;

  const { spectraSteps, traditionalSteps } = STEPS;
  return (
    <Container
      aria-label='Steps'
      aria-labelledby='steps'
      id='steps'
      className='mb-10'
    >
      <SectionHeading id='steps' className='mb-10 text-center'>
        {titleValue}
      </SectionHeading>

      <div className='mdl:space-y-44 space-y-16'>
        <div>
          <h3 className='mdl:mb-20 mb-5 text-base mdl:text-2xl text-center font-bold'>
            {t('steps_sentence_2')}
          </h3>
          <Stepper steps={traditionalSteps} />
          <StepperMobile steps={traditionalSteps} />
        </div>

        <div className='relative mdl:px-20'>
          <div className='absolute -top-8 right-0 w-full h-[calc(100%+80px)] mdl:h-72 bg-blueLighter rounded-xl' />
          <h3 className='mdl:mb-20 mb-5 text-base mdl:text-2xl text-center font-bold relative'>
            {t('steps_sentence_3')}
          </h3>
          <Stepper variant='green' steps={spectraSteps} />
          <StepperMobile variant='green' steps={spectraSteps} />
        </div>
      </div>
    </Container>
  );
};

function getPosition(array = [], index) {
  const totalSteps = array.length + 1;
  const stepSize = 100 / totalSteps;
  return `calc(${(index + 1) * stepSize}% - 40px)`;
}

const Stepper = ({ variant = '', steps = [], className = '' }) => {
  if (!steps.length) return null;
  return (
    <div
      dir='ltr'
      className={cn(
        'w-full my-20 mdl:my-0 hidden mdl:block h-0.5 bg-black relative before:absolute before:size-6 before:rounded-full before:bg-gradient-to-b before:from-white before:to-[#DEDEDE] before:top-1/2 before:start-0 before:-translate-y-1/2 after:absolute after:size-6 after:rounded-full after:bg-gradient-to-b after:from-white after:to-[#DEDEDE] after:top-1/2 after:end-0 after:-translate-y-1/2',
        {
          'bg-greenMain': variant === 'green',
        },
        className
      )}
    >
      {steps?.map((step, index) => (
        <div
          key={step.id}
          className={`absolute top-0 -translate-y-1/4 h-48`}
          style={{
            left: getPosition(steps, index),
            width: `calc(100% / ${steps.length})`,
          }}
        >
          <span
            className={cn(
              'bg-black/10 text-black rounded-xl py-1 w-16 mdl:w-20 block text-xs text-center ms-8 mdl:ms-16',
              {
                'bg-greenMain/10': variant === 'green',
                invisible: step.duration === 'hidden',
              }
            )}
          >
            {step.duration}
          </span>

          <div className='flex flex-col w-fit items-start gap-5'>
            <div
              className={cn(
                'rounded-full mt-3 mdl:mt-0 size-6 mdl:size-10 border-white mdl:border-4 border-2 bg-black flex !text-white font-bold text-sm mdl:text-medium items-center justify-center relative before:absolute mdl:before:border-[10px] before:border-[7px] before:border-black before:border-b-transparent before:border-l-transparent before:border-r-transparent before:-bottom-5 mdl:before:-bottom-7 before:start-1/2 before:-translate-x-1/2 mx-auto',
                {
                  'bg-greenMain before:border-greenMain  before:border-b-transparent before:border-l-transparent before:border-r-transparent':
                    variant === 'green',
                }
              )}
            >
              {step.id}
            </div>
            <span className='block text-center max-w-12 mdl:max-w-28 text-xs mdl:text-base px-2'>
              {step.title}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

const StepperMobile = ({ variant = '', steps = [] }) => {
  if (!steps.length) return null;
  return (
    <div className='w-full rtl:ps-52 ltr:pe-52'>
      <div
        dir='ltr'
        style={{ height: `${steps.length * 100}px` }}
        className={cn(
          'w-0.5 mx-auto mdl:hidden bg-black relative before:absolute before:size-4 before:rounded-full before:bg-gradient-to-b before:from-white before:to-[#DEDEDE] before:top-0 before:start-1/2 before:-translate-x-1/2 after:absolute after:size-4 after:rounded-full after:bg-gradient-to-b after:from-white after:to-[#DEDEDE] after:bottom-0 after:start-1/2 after:-translate-x-1/2',
          {
            'bg-greenMain': variant === 'green',
          }
        )}
      >
        {steps?.map((step, index) => (
          <div
            key={step.id}
            className={`absolute left-0 -translate-x-1/2 h-48`}
            style={{
              top: getPosition(steps, index),
              height: `100px`,
            }}
          >
            <div className='space-y-1 relative'>
              <div
                className={cn(
                  'rounded-full size-5 border-white border-2 bg-black flex text-white font-bold text-xs items-center justify-center relative before:absolute before:border-[7px] before:border-black before:border-b-transparent before:border-t-transparent before:border-r-transparent before:top-1/2 before:-translate-y-1/2 before:start-6 before: mx-auto',
                  {
                    'bg-greenMain before:border-greenMain before:border-t-transparent before:border-b-transparent before:border-r-transparent':
                      variant === 'green',
                  }
                )}
              >
                {step.id}
              </div>
              <span
                className={cn(
                  'bg-[#D1D0DB] text-black rounded-xl py-1 w-20 block text-xs text-center ms-auto',
                  {
                    'bg-[#33C7D3]': variant === 'green',
                    invisible: step.duration === 'hidden',
                  }
                )}
              >
                {step.duration}
              </span>
              <span className='block w-52 absolute start-full text-end top-0 text-xs'>
                {step.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
