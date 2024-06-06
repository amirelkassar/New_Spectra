import React from "react";

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="35"
      fill="none"
      viewBox="0 0 46 46"
    >
      <circle cx="23.349" cy="22.831" r="17.651" fill="#fff"></circle>
      <mask
        id="mask0_2199_2647"
        style={{ maskType: "luminance" }}
        width="46"
        height="46"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path
          fill="#fff"
          stroke="#fff"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M23.345 44.485a21.585 21.585 0 0015.312-6.342 21.586 21.586 0 006.342-15.312A21.586 21.586 0 0038.657 7.52a21.585 21.585 0 00-15.312-6.342A21.586 21.586 0 008.034 7.52 21.587 21.587 0 001.69 22.83a21.586 21.586 0 006.343 15.312 21.588 21.588 0 0015.311 6.342z"
        ></path>
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14.68 22.831l6.497 6.497 12.992-12.993"
        ></path>
      </mask>
      <g mask="url(#mask0_2199_2647)">
        <path
          fill="#10B0C1"
          d="M-2.63-3.153h51.968v51.969H-2.63v-51.97z"
        ></path>
      </g>
    </svg>
  );
};

export default CheckIcon;
