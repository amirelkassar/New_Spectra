import clsx from "clsx";
import React from "react";

export default function Separetor({ vertical, className }) {
  return (
    <div
      className={clsx(
        "bg-[#D9D9D9] ",
        vertical ? " w-px" : "w-full h-px",
        className
      )}
    ></div>
  );
}
