import { cn } from '@/lib/utils';
import Button from '@/components/button';

export const ServiceCard = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className={cn(
        'p-3 mdl:p-5 h-auto flex flex-col gap-5 rounded-2xl border-2 border-transparent transition hover:border-greenMain',
        props?.className
      )}
    >
      {children}
    </div>
  );
};

const Icon = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className={cn(
        'mdl:size-20 size-16 mx-auto rounded-full flex items-center justify-center *:size-8 mdl:*:size-10',
        props?.className
      )}
    >
      {children}
    </div>
  );
};

ServiceCard.Icon = Icon;

const Body = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className={cn(
        'flex-1 grid grid-rows-3 gap-2',
        props?.className
      )}
    >
      {children}
    </div>
  );
};

ServiceCard.Body = Body;

const Label = ({ children, ...props }) => {
  return (
    <h4
      {...props}
      className={cn(
        'font-bold text-center mdl:min-h-14 text-sm mdl:text-xl',
        props?.className
      )}
    >
      {children}
    </h4>
  );
};

ServiceCard.Label = Label;

const Description = ({ children, ...props }) => {
  return (
    <p
      {...props}
      className={cn(
        'text-xs mdl:text-lg text-center row-span-2',
        props?.className
      )}
    >
      {children}
    </p>
  );
};

ServiceCard.Description = Description;

const Btn = ({
  subscribed = false,
  children,
  ...props
}) => {
  return (
    <Button
      {...props}
      variant='secondary'
      className={cn(
        'font-bold text-sm mdl:text-xl py-2 w-full',
        {
          'text-greenMain bg-blueLight hover:bg-blueLight cursor-default':
            subscribed,
        },
        props?.className
      )}
    >
      {children}
    </Button>
  );
};

ServiceCard.Button = Btn;
