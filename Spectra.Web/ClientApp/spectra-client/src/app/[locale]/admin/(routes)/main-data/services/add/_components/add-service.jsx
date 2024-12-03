'use client';

import TvIcon from '@/assets/icons/tv';
import InsideIcon from '@/assets/icons/inside';
import { useAddService } from '../../_hooks/use-add-service';
import { ServiceFrom } from '../../_components/service-form';

export const AddService = () => {
  const [form, status] = useAddService();

  const { data, error, onSubmit, onChange, onReset } = form;

  return (
    <div>
      {!data?.serviceType && (
        <TypeSelect onChange={onChange} />
      )}

      {data?.serviceType && (
        <ServiceFrom
          data={data}
          error={error}
          onSubmit={onSubmit}
          onChange={onChange}
          onCancel={onReset}
          isPending={status.isPending}
          btnLabel='اضافة'
        />
      )}
    </div>
  );
};

const TypeSelect = ({ onChange = () => {} }) => {
  const onClick = (value) => {
    onChange({
      target: {
        name: 'serviceType',
        value,
      },
    });
  };

  return (
    <div className='flex flex-col md:flex-row gap-10 items-center pt-20'>
      <TypeButton onClick={() => onClick('1')}>
        <InsideIcon className='text-greenMain w-14 md:w-24' />
        خدمات داخلية
      </TypeButton>

      <TypeButton onClick={() => onClick('2')}>
        <TvIcon className='text-greenMain w-14 md:w-24' />
        خدمات تعرض
      </TypeButton>
    </div>
  );
};

const TypeButton = ({ children, ...props }) => {
  return (
    <div
      {...props}
      role='button'
      className='w-full max-w-64 md:max-w-md px-5 py-10 bg-blueLighter rounded-xl flex flex-col items-center justify-center gap-3 transition-shadow hover:shadow-md text-sm md:text-xl font-bold text-center'
    >
      {children}
    </div>
  );
};
