import { cn } from '@/lib/utils';
import { Section } from '../../_components/section';

const traditionalSteps = [
  { id: 1, title: 'التشخيص', duration: 'اسبوعين' },
  {
    id: 2,
    title: 'موعد مع المختص الخاص بك',
    duration: '9-6 أسابيع',
  },
  {
    id: 3,
    title: 'لقاء مع المختص الخاص بك',
    duration: '14-5 أسابيع',
  },
  {
    id: 4,
    title: 'موعد مع طبيب أطفال/سلوك تنموي',
    duration: '14-5 أسابيع',
  },
  {
    id: 5,
    title: 'إجراء الفحص التنموي',
    duration: '14-5 أسابيع',
  },
  {
    id: 6,
    title: 'التعين مع أخصائي فريق تنموي',
    duration: 'اسبوعين',
  },
  { id: 7, title: 'خطة الرعاية', duration: 'اسبوعين' },
];

const spectraSteps = [
  { id: 1, title: 'اضف بيانات طفلك', duration: '0-1 ايام' },
  { id: 2, title: 'الكشف المبكر', duration: '1-4 ايام' },
  {
    id: 3,
    title: 'حجز الاستشارة المجانية',
    duration: '3-7 ايام',
  },
  {
    id: 4,
    title: 'خطة الاحتفاظ والرعاية',
    duration: 'تحدد',
  },
];

export const Steps = () => {
  return (
    <Section
      aria-label='Steps'
      aria-labelledby='steps'
      id='steps'
      className='!pt-0'
    >
      <h2 className='text-base mb-5 font-bold mdl:text-2xl text-center'>
        استبدل شهور من الانتظار بأسبوع واحد فقط من الرعاية
        الرقمية
      </h2>

      <div className='mdl:space-y-36 space-y-16'>
        <div>
          <h3 className='mdl:mb-20 mb-5 text-base mdl:text-2xl text-center font-bold'>
            سنتين للطريق التقليدي
          </h3>
          <Stepper steps={traditionalSteps} />
          <StepperMobile steps={traditionalSteps} />
        </div>

        <div>
          <h3 className='mdl:mb-20 mb-5 text-base mdl:text-2xl text-center font-bold'>
            10 ايام لسبيكترا
          </h3>
          <Stepper variant='green' steps={spectraSteps} />
          <StepperMobile
            variant='green'
            steps={spectraSteps}
          />
        </div>
      </div>
    </Section>
  );
};

function getPosition(array = [], index) {
  const totalSteps = array.length + 1;
  const stepSize = 100 / totalSteps;
  return `calc(${(index + 1) * stepSize}% - 40px)`;
}

const Stepper = ({ variant = '', steps = [] }) => {
  return (
    <div
      dir='ltr'
      className={cn(
        'w-full hidden mdl:block h-0.5 bg-black relative before:absolute before:size-6 before:rounded-full before:bg-gradient-to-b before:from-white before:to-[#DEDEDE] before:top-1/2 before:start-0 before:-translate-y-1/2 after:absolute after:size-6 after:rounded-full after:bg-gradient-to-b after:from-white after:to-[#DEDEDE] after:top-1/2 after:end-0 after:-translate-y-1/2',
        {
          'bg-greenMain': variant === 'green',
        }
      )}
    >
      {steps.map((step, index) => (
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
              'bg-black/10 text-black rounded-xl py-1 w-20 block text-xs text-center ms-16',
              {
                'bg-greenMain/10': variant === 'green',
              }
            )}
          >
            {step.duration}
          </span>

          <div className='flex flex-col w-fit items-start gap-5'>
            <div
              className={cn(
                'rounded-full size-10 border-white border-4 bg-black flex !text-white font-bold text-medium items-center justify-center relative before:absolute before:border-[10px] before:border-black before:border-b-transparent before:border-l-transparent before:border-r-transparent before:-bottom-7 before:start-1/2 before:-translate-x-1/2 mx-auto',
                {
                  'bg-greenMain before:border-greenMain  before:border-b-transparent before:border-l-transparent before:border-r-transparent':
                    variant === 'green',
                }
              )}
            >
              {step.id}
            </div>
            <span className='block text-center max-w-24'>
              {step.title}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

const StepperMobile = ({ variant = '', steps = [] }) => {
  return (
    <div className='w-full ps-52'>
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
        {steps.map((step, index) => (
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
