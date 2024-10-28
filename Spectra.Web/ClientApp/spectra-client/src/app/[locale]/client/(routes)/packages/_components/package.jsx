import CircleCheck from '@/assets/icons/circle-check';
import Button from '@/components/button';

export const Package = ({ data = {} }) => {
  return (
    <div className='max-w-[1000px] mx-auto'>
      <PackageHeader
        packageName={data.label}
        price={data.price}
        features={data.features}
      />

      <PackageContent content={data.content} />

      <PackageGoals goals={data.goalsOfPackage} />

      <Button
        className='mt-5 font-bold w-full'
        variant='secondary'
      >
        احجز الان
      </Button>
    </div>
  );
};

const PackageHeader = ({
  packageName = '',
  price = 0,
  features = [],
}) => {
  return (
    <div
      style={{
        background:
          'linear-gradient(90.97deg, #67D5E1 20.89%, #10B0C1 99.9%)',
        boxShadow: '0px 4px 10px 0px #00000033',
      }}
      className='px-5 py-7 rounded-3xl text-white flex gap-3 mdl:gap-5 items-center justify-center mdl:justify-around'
    >
      <div className='space-y-3 pb-7'>
        <h3 className='text-base mdl:text-xl font-bold'>
          {packageName}
        </h3>
        <p
          dir='ltr'
          className='mdl:text-4xl text-2xl font-Bold'
        >
          $ {price}.00
        </p>
      </div>

      <ul className='space-y-4 pb-7'>
        {features?.map((feature) => (
          <li
            key={feature}
            className='flex items-start gap-2 text-sm mdl:text-xl font-bold tracking-wide'
          >
            <CircleCheck className='size-4 mt-0.5 mdl:mt-2' />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

const PackageContent = ({ content = [] }) => {
  return (
    <div className='border border-greenMain border-t-0 rounded-t-none rounded-3xl space-y-5 -mt-5 pt-10 bg-[#F9FEFF]'>
      <div className='p-5'>
        <h4 className='text-sm mdl:text-xl font-bold'>
          محتوي الباقة
        </h4>

        <ul className='p-5'>
          {content?.map((item, index) => (
            <li
              key={index}
              className='text-sm ps-8 mdl:text-xl py-3 relative after:absolute after:h-full after:w-[1px] after:border after:border-dashed after:border-greenMain after:start-3 after:ltr:-translate-x-1/2 after:translate-x-1/2 after:top-6 after:last:border-0'
            >
              <span className='absolute start-0 top-1/2 -translate-y-1/2 text-white bg-greenMain size-6 rounded-full font-bold flex items-center justify-center z-10 text-[15px]'>
                {index + 1}
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const PackageGoals = ({ goals = [] }) => {
  return (
    <div className='border border-greenMain bg-[#F9FEFF] mt-5 rounded-3xl space-y-5'>
      <div className='p-5'>
        <h4 className='text-sm mdl:text-xl font-bold'>
          الهدف من الباقة
        </h4>

        <ul className='p-5'>
          {goals?.map((item, index) => (
            <li
              key={index}
              className='text-sm ps-4 mdl:text-xl py-3 relative'
            >
              <span className='absolute start-0 top-1/2 -translate-y-1/2 text-white bg-greenMain size-2 rounded-full font-bold flex items-center justify-center z-10' />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
