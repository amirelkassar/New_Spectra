import React from "react";

function ShareCodeIcon({className}) {
  return (
    <svg
      width="28"
      height="30"
      viewBox="0 0 28 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M20.8571 8.93333L14.0377 2L7.14286 8.93333M14.0377 2.0364V22.8M8.85714 14.1333H5.42857C4.51926 14.1333 3.64719 14.4986 3.00421 15.1487C2.36122 15.7988 2 16.6806 2 17.6V24.5333C2 25.4528 2.36122 26.3345 3.00421 26.9846C3.64719 27.6348 4.51926 28 5.42857 28H22.5714C23.4807 28 24.3528 27.6348 24.9958 26.9846C25.6388 26.3345 26 25.4528 26 24.5333V17.6C26 16.6806 25.6388 15.7988 24.9958 15.1487C24.3528 14.4986 23.4807 14.1333 22.5714 14.1333H19.1429"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ShareCodeIcon;
