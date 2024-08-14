'use client';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgress = ({ percentage, text, variant = 'green',pathColor }) => {
  return (
    <>
      <CircularProgressbar
        strokeWidth={16}
        value={percentage}
        text={text}
        styles={{
          path: {
            stroke: pathColor?pathColor:'var(--main-color)',
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
