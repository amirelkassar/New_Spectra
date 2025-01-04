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
        return '#10B0C1'; // Color for normal (light blue)
      } else if (num >= 5 && num < 8) {
        return '#010036'; // Color for mild (dark blue)
      } else if (num >= 3 && num < 5) {
        return '#8A22A0'; // Color for moderate (purple)
      } else if (num >= 0 && num < 3) {
        return '#FF3D3D'; // Color for severe (red)
      } else {
        return '#ccc'; // Default color for out of range values
      }
    },
    [max]
  );

  return (
    <div>
      <div className='flex flex-wrap justify-center gap-5 py-4 border-t border-grayMedium/50'>
        {stateReport?.map((item, i) => {
          return (
            <div
              key={i}
              className='flex items-center gap-2'
            >
              <span
                className='size-4 rounded-full'
                style={{
                  backgroundColor: item?.color,
                }}
              ></span>
              <span className='text-xs mdl:text-base whitespace-nowrap'>
                {item?.title}
              </span>
            </div>
          );
        })}
      </div>
      <div className='max-w-full overflow-x-auto overflow-y-hidden'>
        <div className=' w-fit md:w-[460px] min-w-fit mx-auto'>
          <div className='bar-chart-container w-full mx-auto relative'>
            <span className='w-full h-[1px] bg-grayLight absolute bottom-[9rem] left-0 ' />
            <span className='w-full h-[1px] bg-grayLight absolute bottom-[6.5rem] left-0 ' />
            <span className='w-full h-[1px] bg-grayLight absolute bottom-16 left-0 ' />
            <span className='w-full h-[1px] bg-grayLight absolute bottom-6 left-0 ' />
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
                        height: `${
                          (item?.num / max) * 100
                        }%`,
                        backgroundColor: getColor(
                          item?.num
                        ),
                      }}
                    ></div>
                  </div>
                  <p className='text-xs font-Regular text-nowrap text-center mt-2'>
                    {item?.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReportChart;
