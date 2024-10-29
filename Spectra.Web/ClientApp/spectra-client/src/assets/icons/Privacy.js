import React from "react";

function PrivacyIcon({className}) {
  return (
    <svg
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5.3125 8.1875L8.1875 11.0625L13.2188 6.03125M1 1V10.3438C1 12.4406 1.83298 14.4516 3.31569 15.9343C4.7984 17.417 6.80938 18.25 8.90625 18.25C11.0031 18.25 13.0141 17.417 14.4968 15.9343C15.9795 14.4516 16.8125 12.4406 16.8125 10.3438V1H1Z"
        stroke="#10B0C1"
        strokeWidth="2"
      />
    </svg>
  );
}

export default PrivacyIcon;
