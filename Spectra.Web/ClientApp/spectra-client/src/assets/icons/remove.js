import React from "react";

function RemoveIcon({className}) {
  return (
    <svg
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="13.5" cy="13.5" r="12.5" stroke="white" stroke-width="2" />
      <path
        d="M7 14H19.5"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
}

export default RemoveIcon;
