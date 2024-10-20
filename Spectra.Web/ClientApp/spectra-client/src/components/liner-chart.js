'use client';
import Chart from 'chart.js/auto';
import { useEffect } from 'react';
import { useRef } from 'react';

const LinerChart = ({ chartData = [{ x: '', y: '' }] }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      const newChart = new Chart(ctx, {
        type: 'line',

        data: {
          labels: chartData.map((d) => d.x),
          datasets: [
            {
              label: 'معدل الأداء',
              data: chartData.map((d) => d.y),
              fill: false,
              borderColor: '#000',

              pointBackgroundColor: function (context) {
                const value = context.raw;
                if (value >= 10 && value <= 30) {
                  return '#FF3D3D'; // أحمر
                } else if (value >= 40 && value <= 70) {
                  return '#8A22A0'; // بنفسجي
                } else {
                  return '#10B0C1'; // أخضر
                }
              },
              pointBorderColor: function (context) {
                const value = context.raw;
                if (value >= 10 && value <= 30) {
                  return '#FF3D3D'; // أحمر
                } else if (value >= 40 && value <= 70) {
                  return '#8A22A0'; // بنفسجي
                } else {
                  return '#10B0C1'; // أخضر
                }
              },
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: function (context) {
                const value = context.raw;
                if (value >= 10 && value <= 30) {
                  return '#FF3D3D'; // أحمر
                } else if (value >= 40 && value <= 70) {
                  return '#8A22A0'; // بنفسجي
                } else if (value > 70) {
                  return '#10B0C1'; // أخضر
                }
              },
              pointRadius: 14,
              borderWidth: 10,
              tension: 0,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              beginAtZero: true,
              grid: {
                display: false,
              },
            },
            y: {
              beginAtZero: true,
              ticks: {
                display: false,
              },
            },
          },
        },
      });

      chartRef.current.chart = newChart;
    }
  }, [chartData]);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
      className='space-y-5'
    >
      <canvas ref={chartRef} />
      <div className='w-full text-xs lg:text-base text-black flex items-center gap-5 justify-center'>
        <span className='flex items-center gap-3'>
          <span className='size-4 rounded-full bg-purple' />
          معدل معتدل
        </span>
        <span className='flex items-center gap-3'>
          <span className='size-4 rounded-full bg-red' />
          معدل متأخر
        </span>
        <span className='flex items-center gap-3'>
          <span className='size-4 rounded-full bg-greenMain' />
          معدل متقدم
        </span>
      </div>
    </div>
  );
};

export default LinerChart;
