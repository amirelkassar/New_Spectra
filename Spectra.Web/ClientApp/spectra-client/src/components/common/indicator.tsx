'use client';

import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

const Indicator: React.FC = () => {
  const indicatorRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<SVGPathElement>(null);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const totalLength = progressBarRef.current?.getTotalLength() ?? 0;
    if (progressBarRef.current) {
      progressBarRef.current.style.strokeDasharray = `${totalLength}`;
      progressBarRef.current.style.strokeDashoffset = `${totalLength}`;
    }

    const setTopValue = () => {
      if (indicatorRef.current) {
        const svg = indicatorRef.current.querySelector('svg');
        svg!.style.top = `${window.innerHeight * 0.5 - svg!.getBoundingClientRect().height * 0.5}px`;
      }
    };

    const setProgress = () => {
      if (!progressBarRef.current) return;

      const { clientHeight } = document.documentElement;
      const { scrollHeight } = document.documentElement;
      const { scrollTop } = document.documentElement;

      const percentage = scrollTop / (scrollHeight - clientHeight);
      progressBarRef.current.style.strokeDashoffset = `${totalLength - totalLength * percentage}`;

      setIsShow(scrollTop > 400);
    };

    setTopValue();
    setProgress();

    const handleScroll = () => {
      setProgress();
    };

    const handleResize = () => {
      setTopValue();
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault(); // Prevent the default Link behavior

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <section
      ref={indicatorRef}
      className={`indicator ${isShow ? 'is-show' : ''}`}
    >
      <Link className="indicator__circle" href="#topBar" onClick={handleClick}>
        <svg
          className="indicator__svg"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path
            ref={progressBarRef}
            className="indicator__progress"
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={{ transition: 'stroke-dashoffset 10ms linear 0s' }}
          />
        </svg>
        <div className="indicator__button">
          <svg
            width="26"
            height="15"
            viewBox="0 0 26 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.7 13.3999L13 1.6999L1.30001 13.3999"
              stroke="#00A6AA"
              strokeWidth="1.8"
            />
          </svg>
        </div>
      </Link>
    </section>
  );
};

export default Indicator;
