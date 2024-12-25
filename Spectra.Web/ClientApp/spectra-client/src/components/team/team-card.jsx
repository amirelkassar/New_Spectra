import { cn } from '@/lib/utils';
import A from '@/components/avatar';

export const TeamCard = ({ children, ...props }) => {
  return (
    <div
      className={cn(
        'rounded-2xl bg-gradient-to-b from-[#f5f5f5] to-white p-5 lg:p-8 shadow mb-3',
        props?.className
      )}
    >
      {children}
    </div>
  );
};

const Avatar = ({ ...props }) => {
  return (
    <A
      {...props}
      className={cn(
        '!size-16 mdl:!size-32 !rounded-full mdl:-mt-20 -mt-14 mx-auto mb-5 shrink-0',
        props?.className
      )}
    />
  );
};

TeamCard.Avatar = Avatar;

const Name = ({ children, ...props }) => {
  return (
    <h3
      {...props}
      className={cn(
        'text-sm font-bold mdl:text-xl text-center',
        props?.className
      )}
    >
      {children}
    </h3>
  );
};

TeamCard.Name = Name;

const Profession = ({ children, ...props }) => {
  return (
    <p
      {...props}
      className={cn(
        'text-sm mdl:text-xl text-center max-w-40 mx-auto',
        props?.className
      )}
    >
      {children}
    </p>
  );
};

TeamCard.Profession = Profession;

const Rating = ({ children, ...props }) => {
  return (
    <span
      dir='ltr'
      {...props}
      className={cn(
        'bg-greenMain font-bold block text-white text-sm mdl:text-base text-center rounded-xl w-fit py-1 px-5 mt-5 mx-auto',
        props?.className
      )}
    >
      {children} &#9733;
    </span>
  );
};

TeamCard.Rating = Rating;
