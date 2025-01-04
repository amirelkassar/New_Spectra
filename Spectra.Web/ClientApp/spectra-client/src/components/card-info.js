import React from "react";

function CardInfo({ title, values }) {
  return (
    <div className="bg-white py-4 lg:py-7 px-6 lg:px-12 lg:rounded-xl flex flex-row lg:flex-col gap-2">
      <p className="text-nowrap w-[130px] md:w-auto text-[12px] md:text-[16px] flex items-center gap-1">
        {title} <span className="lg:hidden inline-block">/</span>{" "}
      </p>
      <div className="w-full flex flex-wrap gap-3 gap-y-2 ">
        {values.map((value, index) => (
          <h2 key={index} className="text-[13px] md:text-[16px] font-bold">
            {value}
          </h2>
        ))}
      </div>
    </div>
  );
}

export default CardInfo;
