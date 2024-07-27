import clsx from 'clsx';

const Container = ({ children, className }) => {
  return (
    <div className={clsx('max-w-6xl mx-auto relative', className)}>
      {children}
    </div>
  );
};

export default Container;
