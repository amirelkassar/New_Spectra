'use client';

import { createContext, useContext } from 'react';

import { cn } from '@/lib/utils';
import Button from '@/components/button';
import { SERVICESICONS } from '@/lib/demoData';

const ServiceCardContext = createContext(null);

export const ServiceCard = ({
  data = {
    id: '',
    icon: '',
    color: '',
    label: '',
    description: '',
    subscribed: false,
  },
  children,
  ...props
}) => {
  const { id } = data;
  return (
    <ServiceCardContext.Provider value={data}>
      <div
        {...props}
        data-id={id}
        className={cn(
          'p-5 flex flex-col gap-5 rounded-2xl border-2 border-transparent transition hover:border-greenMain',
          props?.className
        )}
      >
        {children}
      </div>
    </ServiceCardContext.Provider>
  );
};

const useServiceCard = () => {
  return useContext(ServiceCardContext);
};

const Icon = ({ ...props }) => {
  const { id } = useServiceCard();
  return (
    <div
      {...props}
      className={cn(
        'mdl:size-20 size-16 mx-auto rounded-full flex items-center justify-center *:size-8 mdl:*:size-10',
        props?.className
      )}
      style={{
        color:
          SERVICESICONS[id]?.color ||
          SERVICESICONS[1]?.color,
        backgroundColor:
          SERVICESICONS[id]?.bg || SERVICESICONS[1]?.bg,
      }}
    >
      {SERVICESICONS[id]?.icon || SERVICESICONS[1]?.icon}
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

const Label = ({ ...props }) => {
  const { label } = useServiceCard();
  return (
    <h4
      {...props}
      className={cn(
        'font-bold text-center mdl:min-h-14 text-sm mdl:text-xl',
        props?.className
      )}
    >
      {label}
    </h4>
  );
};

ServiceCard.Label = Label;

const Description = ({ ...props }) => {
  const { description } = useServiceCard();
  return (
    <p
      {...props}
      className={cn(
        'text-xs mdl:text-lg text-center row-span-2',
        props?.className
      )}
    >
      {description}
    </p>
  );
};

ServiceCard.Description = Description;

const Btn = ({ children, ...props }) => {
  const { subscribed } = useServiceCard();
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
