import { cn } from '@/lib/utils';

export const PackageTerms = ({
  terms = [
    'Lorem Absim Lorem AbsimLorem AbsimLorem AbsimLorem AbsimLorem AbsimLorem Lorem Absim Lorem AbsimLorem AbsimLorem AbsimLorem AbsimLorem AbsimLorem',
  ],
  className = '',
}) => {
  return (
    <div
      className={cn(
        'border border-greenMain bg-[#F9FEFF] mt-5 rounded-3xl space-y-5 p-5',
        className
      )}
    >
      <h4 className='text-sm mdl:text-xl font-bold'>
        الشروط والاحكام
      </h4>
      <div className='space-y-3'>
        {terms.map((term) => (
          <p
            key={term}
            className='text-xs mdl:text-base font-bold'
          >
            {term}
          </p>
        ))}
      </div>
    </div>
  );
};
