import React from "react";

function DraftIcon({ className }) {
  return (
    <svg
      width="18"
      height="24"
      viewBox="0 0 18 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <mask
        id="mask0_5217_38969"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="18"
        height="24"
      >
        <path
          d="M10.7078 1.75L16.9717 8.01385V21.111C16.9717 21.7374 16.4592 22.2499 15.8328 22.2499H2.16622C1.53984 22.2499 1.02734 21.7374 1.02734 21.111V2.88888C1.02734 2.2625 1.53984 1.75 2.16622 1.75H10.7078Z"
          fill="white"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.8477 2.32031V7.44528H16.9726L11.8477 2.32031Z"
          fill="black"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.707 1.75L16.9709 8.01385"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.99888 19.9722L13.5544 15.4166H10.7072V12H7.29056V15.4166H4.44336L8.99888 19.9722Z"
          fill="black"
        />
      </mask>
      <g mask="url(#mask0_5217_38969)">
        <path
          d="M22.6671 -1.66406H-4.66602V25.6691H22.6671V-1.66406Z"
          fill="#010036"
        />
      </g>
    </svg>
  );
}

export default DraftIcon;
