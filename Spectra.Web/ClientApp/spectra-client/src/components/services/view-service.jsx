import NextImage from 'next/image';

import HeartCheckedIcon from '@/assets/icons/heart-checked';
import { cn } from '@/lib/utils';

export const ViewService = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className={cn('bg-white', props?.className)}
    >
      {children}
    </div>
  );
};

const Intro = ({ children, ...props }) => {
  return (
    <section
      {...props}
      className={cn(
        'bg-blueLight overflow-hidden rounded-t-2xl relative',
        props?.className
      )}
    >
      {children}
    </section>
  );
};

ViewService.Intro = Intro;

const Title = ({ children, ...props }) => {
  return (
    <h1
      {...props}
      className={cn(
        'text-2xl p-3 mdl:p-5 mdl:text-4xl leading-relaxed capitalize',
        props?.className
      )}
    >
      {children}
    </h1>
  );
};

ViewService.Title = Title;

const Description = ({ children, ...props }) => {
  return (
    <p
      {...props}
      className={cn(
        'text-sm mdl:text-xl p-3 mdl:p-5 pt-0',
        props?.className
      )}
    >
      {children}
    </p>
  );
};

ViewService.Description = Description;

const Image = ({ ...props }) => {
  return (
    <NextImage
      {...props}
      priority={props?.priority || true}
      alt={props?.alt || 'Service Image'}
      className={cn(
        'w-1/2 max-w-fit h-auto max-h-[650px] object-contain float-end ltr:rotate-90 -me-2 ms-2 ltr:-mt-2',
        props?.className
      )}
    />
  );
};

ViewService.Image = Image;

const Body = ({ children, ...props }) => {
  return (
    <section
      {...props}
      className={cn(
        'p-2 mdl:p-5 space-y-5 my-5',
        props?.className
      )}
    >
      {children}
    </section>
  );
};

ViewService.Body = Body;

const Feature = ({
  withBorder = false,
  children,
  ...props
}) => {
  return (
    <div
      {...props}
      className={cn(
        'flex gap-x-3',
        withBorder &&
          'rounded-xl border-[3px] border-blueLight p-5',
        props?.className
      )}
    >
      <HeartCheckedIcon className='text-greenMain mt-1 shrink-0' />

      <div>{children}</div>
    </div>
  );
};

ViewService.Feature = Feature;

const FeatureTitle = ({ children, ...props }) => {
  return (
    <h3
      className={cn(
        'text-sm mdl:text-lg font-bold inline-block mb-2',
        props?.className
      )}
    >
      {children}
    </h3>
  );
};

ViewService.FeatureTitle = FeatureTitle;

const FeatureDescription = ({ children, ...props }) => {
  return (
    <p
      className={cn(
        'text-xs mdl:text-base',
        props?.className
      )}
    >
      {children}
    </p>
  );
};

ViewService.FeatureDescription = FeatureDescription;
