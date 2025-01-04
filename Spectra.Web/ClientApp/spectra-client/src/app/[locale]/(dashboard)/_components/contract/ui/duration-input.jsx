import { SectionTitle } from '@/dashboard/_components/ui/section-title';
import { Input } from '@/dashboard/_components/contract/ui';

export const DurationInput = ({
  title = '',
  indicator = '',
  label = '',
  value = '',
  onChange = () => {},
  readOnly = false,
  placeholder = '',
}) => {
  return (
    <div className='flex flex-col items-stretch lg:items-center lg:flex-row gap-3'>
      <label htmlFor={label} className='flex-1'>
        <SectionTitle>{title}</SectionTitle>
      </label>

      <div className='flex items-center gap-3 flex-1'>
        <Input
          indicator={indicator}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          name={label}
          id={label}
          className='text-center'
          readOnly={readOnly}
          placeholder={placeholder}
        />
        <label htmlFor={label}>{label}</label>
      </div>
    </div>
  );
};
