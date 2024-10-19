export const FormTitle = ({
  heading = '',
  subheading = '',
  indicator = '',
}) => {
  return (
    <div>
      {heading && (
        <h1 className='mdl:text-3xl text-2xl font-bold text-center mdl:text-start'>
          {heading}
        </h1>
      )}

      {subheading && (
        <p className='text-center mdl:text-start text-sm mdl:text-base mt-3'>
          {subheading}
        </p>
      )}
    </div>
  );
};
