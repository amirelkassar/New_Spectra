'use client';

import Image from 'next/image';
import { useState } from 'react';

export const ReviewVideo = ({ videoUrl = '', previewImage = '' }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className='relative w-full max-w-5xl h-auto aspect-video mx-auto mt-10 mdl:mt-20'>
      {!showVideo && (
        <>
          <Image
            src={previewImage}
            alt='Preview Image'
            fill
            sizes='width:100%, height:auto'
            className='object-cover object-center'
          />
          <div
            role='button'
            className='absolute top-0 start-0 w-full h-full flex items-center justify-center bg-[#000]/50'
            onClick={() => setShowVideo(true)}
          >
            <PlayIcon className='size-10 mdl:size-24' />
          </div>
        </>
      )}

      {showVideo && (
        <video autoPlay controls width='100%' height='100%'>
          <source src={videoUrl} type='video/webm' />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

const PlayIcon = ({ ...props }) => {
  return (
    <svg
      width={104}
      height={104}
      viewBox='0 0 104 104'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M52 104C58.8287 104 65.5906 102.655 71.8995 100.042C78.2085 97.4285 83.9409 93.5982 88.7695 88.7695C93.5982 83.9409 97.4285 78.2085 100.042 71.8995C102.655 65.5906 104 58.8287 104 52C104 45.1713 102.655 38.4094 100.042 32.1005C97.4285 25.7915 93.5982 20.0591 88.7695 15.2304C83.9409 10.4018 78.2085 6.57151 71.8995 3.95826C65.5906 1.34502 58.8287 -1.01756e-07 52 0C38.2087 2.05506e-07 24.9823 5.47855 15.2304 15.2304C5.47856 24.9823 0 38.2087 0 52C0 65.7913 5.47856 79.0177 15.2304 88.7695C24.9823 98.5214 38.2087 104 52 104ZM44.9684 28.8311L77.5782 46.9502C78.4785 47.4508 79.2286 48.1829 79.7508 49.0707C80.273 49.9586 80.5484 50.9699 80.5484 52C80.5484 53.0301 80.273 54.0414 79.7508 54.9293C79.2286 55.8171 78.4785 56.5492 77.5782 57.0498L44.9684 75.1689C43.9126 75.7558 42.7216 76.0566 41.5137 76.0416C40.3057 76.0266 39.1227 75.6962 38.0817 75.0832C37.0408 74.4701 36.1781 73.5958 35.579 72.5467C34.98 71.4976 34.6655 70.3103 34.6667 69.1022V34.8978C34.6655 33.6897 34.98 32.5024 35.579 31.4533C36.1781 30.4042 37.0408 29.5299 38.0817 28.9168C39.1227 28.3038 40.3057 27.9734 41.5137 27.9584C42.7216 27.9434 43.9126 28.2442 44.9684 28.8311Z'
        fill='white'
        fillOpacity='0.6'
      />
    </svg>
  );
};
