'use client';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgress = ({ percentage }) => {
  return (
    <>
      <CircularProgressbar
        strokeWidth={16}
        value={percentage}
        text={`${percentage}%`}
        styles={{
          path: {
            stroke: 'var(--main-color)',
            strokeLinecap: 'revert',
          },
          trail: {
            stroke: 'var(--blue-light)',
            strokeWidth: 5,
          },
          text: {
            fill: '#010036',
            fontWeight: 'bold',
          },
        }}
      />
    </>
  );
};

export default CircularProgress;
