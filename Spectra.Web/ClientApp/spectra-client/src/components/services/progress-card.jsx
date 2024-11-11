'use client';

import { createContext, useContext } from 'react';

import { cn } from '@/lib/utils';
import CircularProgress from '@/components/CircularProgress';
import Card from '@/components/card';

const ProgressCardContext = createContext({
  title: '',
  total: 0,
  current: 0,
});

export const ProgressCard = ({
  data = {
    title: '',
    total: 0,
    current: 0,
  },
  children,
  ...props
}) => {
  return (
    <ProgressCardContext.Provider value={data}>
      <Card
        {...props}
        className={cn(
          'border-2 border-grayLight lg:border-transparent flex flex-col items-center',
          props?.className
        )}
        size='sm'
      >
        {children}
      </Card>
    </ProgressCardContext.Provider>
  );
};

const useProgressCard = () =>
  useContext(ProgressCardContext);

const Progress = ({ ...props }) => {
  const { current, total } = useProgressCard();
  const percentage = Math.round((current / total) * 100);

  return (
    <div
      {...props}
      className={cn(
        'mdl:size-20 size-14',
        props?.className
      )}
    >
      <CircularProgress
        percentage={percentage}
        text={`${percentage}%`}
      />
    </div>
  );
};

ProgressCard.Progress = Progress;

const Title = ({ ...props }) => {
  const { title } = useProgressCard();
  return (
    <h4
      {...props}
      className={cn(
        'text-sm mdl:text-2xl mt-1 text-center',
        props?.className
      )}
    >
      {title}
    </h4>
  );
};

ProgressCard.Title = Title;

const Ratio = ({ ...props }) => {
  const { current, total } = useProgressCard();
  return (
    <p
      {...props}
      className={cn(
        'text-2xl mdl:text-3xl font-semibold my-3',
        props?.className
      )}
      dir='ltr'
    >
      {current}{' '}
      <span className='text-grayDark text-sm mdl:text-xl'>
        /{total}
      </span>
    </p>
  );
};

ProgressCard.Ratio = Ratio;

const Done = ({ children, ...props }) => {
  const { current } = useProgressCard();
  return (
    <p
      {...props}
      className={cn(
        'text-grayDark text-xs',
        props?.className
      )}
    >
      {children}{' '}
      <span className='text-greenMain mdl:text-base'>
        {current}
      </span>
    </p>
  );
};

ProgressCard.Done = Done;

const Remaning = ({ children, ...props }) => {
  const { current, total } = useProgressCard();
  const rem = total - current;
  return (
    <p
      {...props}
      className={cn(
        'text-grayDark text-xs',
        props?.className
      )}
    >
      {children}{' '}
      <span className='text-greenMain mdl:text-base'>
        {rem}
      </span>
    </p>
  );
};

ProgressCard.Remaning = Remaning;
