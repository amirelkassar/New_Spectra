import { cn } from '@/lib/utils';

export const FormTitle = ({
  heading = '',
  subheading = '',
  currentStep = null,
  stepsCount = 2,
}) => {
  return (
    <div>
      {heading && !currentStep && (
        <h1 className='mdl:text-3xl text-2xl font-bold text-center mdl:text-start'>
          {heading}
        </h1>
      )}

      {heading && currentStep && (
        <div className='flex items-center justify-between gap-5'>
          <h1 className='mdl:text-3xl text-2xl font-bold text-center mdl:text-start'>
            {heading}
          </h1>

          <div>
            {Array.from({ length: stepsCount }).map(
              (_, i) => (
                <div
                  key={i}
                  className={cn(
                    'size-3 bg-grayDark rounded-full inline-block me-2 transition-colors duration-300 ease-in-out',
                    {
                      'bg-black': currentStep === i + 1,
                    }
                  )}
                />
              )
            )}
          </div>
        </div>
      )}
      {subheading && (
        <p className='text-center mdl:text-start text-sm mdl:text-base mt-3'>
          {subheading}
        </p>
      )}
    </div>
  );
};
