const LEGEND = [
  {
    key: 'new',
    label: 'جديدة',
    color: '#10B0C1',
  },
  {
    key: 'old',
    label: 'سابقة',
    color: '#939393',
  },
  {
    key: 'canceled',
    label: 'ملغاة',
    color: '#FF3D3D',
  },
  {
    key: 'postponed',
    label: 'مؤجلة',
    color: '#010036',
  },
];

export const Legend = () => {
  return (
    <div className='flex gap-3'>
      {LEGEND.map((item) => {
        return (
          <div
            key={item.key}
            className='flex items-center gap-2'
          >
            <div
              className='mdl:size-6 size-4 rounded-full'
              style={{ backgroundColor: item.color }}
            />
            <span className='text-xs mdl:text-base'>
              {item.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};
