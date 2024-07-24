import clsx from 'clsx';

export const Heading = ({ label, icon = null, className }) => {
  return (
    <h1
      className={clsx(
        'text-black text-base mdl:text-medium font-Regular mdl:font-bold flex items-center gap-x-2 pb-3 mdl:pb-5',
        className
      )}
    >
      {label}
      {icon}
    </h1>
  );
};
