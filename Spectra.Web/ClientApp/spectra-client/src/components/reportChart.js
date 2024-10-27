import { useCallback } from 'react';

const stateReport = [
  {
    title: 'تقدم ',
    color: '#10B0C1',
  },
  {
    title: 'تحسن طفيف',
    color: '#010036',
  },
  {
    title: 'تحسن معتدل',
    color: '#8A22A0',
  },
  {
    title: 'تأخر ',
    color: '#FF3D3D',
  },
];

function ReportChart({ max = 10, ReportDataChart = [] }) {
  const getColor = useCallback(
    (num) => {
      if (num >= 8 && num <= max) {
        return '#00b3b3'; // Color for normal (light blue)
      } else if (num >= 5 && num < 8) {
        return '#0b0033'; // Color for mild (dark blue)
      } else if (num >= 3 && num < 5) {
        return '#8b3bb4'; // Color for moderate (purple)
      } else if (num >= 0 && num < 3) {
        return '#f03e3e'; // Color for severe (red)
      } else {
        return '#ccc'; // Default color for out of range values
      }
    },
    [max]
  );

  return (
    <div>
      <div className='grid grid-cols-2 xl:grid-cols-4 place-items-center gap-5 pt-4 mb-5'>
        {stateReport?.map((item, i) => {
          return (
            <div
              key={i}
              className='flex items-center gap-2 min-w-32 xl:min-w-max *:shrink-0'
            >
              <span
                className='w-4 h-4 rounded-full block'
                style={{
                  backgroundColor: item?.color,
                }}
              ></span>
              <h4 className='text-xs mdl:text-base'>
                {item?.title}
              </h4>
            </div>
          );
        })}
      </div>
      <div className='max-w-[460px] mx-auto'>
        <div className='bar-chart-container w-full mx-auto mt-3 md:mt-5 relative'>
          <span className='w-full h-[1px] bg-grayMedium/60 absolute bottom-[9rem] left-0 ' />
          <span className='w-full h-[1px] bg-grayMedium/60 absolute bottom-[6.5rem] left-0 ' />
          <span className='w-full h-[1px] bg-grayMedium/60 absolute bottom-16 left-0 ' />
          <span className='w-full h-[1px] bg-grayMedium/60 absolute bottom-6 left-0 ' />
          <div className='flex items-end justify-between gap-3 lg:gap-6 h-[170px]'>
            {ReportDataChart?.map((item) => (
              <div
                key={item?.title}
                className='bar flex flex-col flex-1 items-center min-w-10 '
              >
                <div className='h-[144px] flex items-end w-[18px] md:w-6 relative'>
                  <div
                    className={`TopBarChart h-0 relative  transition-all duration-300 w-full hover:shadow-md cursor-pointer rounded-3xl`}
                    style={{
                      height: `${(item?.num / max) * 100}%`,
                      backgroundColor: getColor(item?.num),
                    }}
                  ></div>
                </div>
                <p className='text-xs font-Regular mt-2'>
                  {item?.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReportChart;
