import Button from '@/components/button';
import CircleCheck from '@/assets/icons/circle-check';
import { cn } from '@/lib/utils';

export const Package = ({
  showPackageList = false,
  className = '',
  id = 0,
  label = '',
  price = 0,
  features = [],
  color = '',
}) => {
  return (
    <div
      data-id={id}
      className={cn(
        `rounded-lg mdl:min-w-[300px] border-2 border-grayLight p-5 border-t-[6px] w-fit`,
        className
      )}
      style={{ borderTopColor: color }}
    >
      <div className='mx-auto w-fit space-y-5'>
        <h3
          className='text-sm mdl:text-base font-bold'
          style={{
            color,
          }}
        >
          {label}
        </h3>

        <p
          className='mdl:text-4xl text-2xl font-bold'
          style={{ color }}
        >{`${price}.00 $`}</p>

        {showPackageList && (
          <ul className='text-black text-xs mdl:text-base relative space-y-2 min-h-44'>
            {features.map((feature) => (
              <li
                key={feature}
                className='flex items-center gap-3 py-1'
              >
                <CircleCheck
                  className='size-4 mdl:size-7'
                  fill={color}
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        <Button
          variant='secondary'
          className='font-bold w-full block py-2 text-sm mdl:text-base'
          style={{ backgroundColor: color }}
        >
          احجز الان
        </Button>
      </div>
    </div>
  );
};
