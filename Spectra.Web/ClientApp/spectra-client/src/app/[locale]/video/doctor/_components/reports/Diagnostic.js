import ArrowSolidIcon from "@/assets/icons/arrowSolid";
import React from "react";
const data = [
  {
    category: "Presenting compliant",
    items: [
      { label: "Term : 9 months" },
      { label: "normal delivery" },
      { label: "Ventilation" },
      { label: "Birth weight" },
    ],
  },
  {
    category: "Past medical history",
    items: [
      { label: "Seizure" },
      { label: "surgery" },
      { label: "allergies" },
      { label: "medication" },
      { label: "hearing test" },
    ],
  },
];
function Diagnostic() {
  return (
    <div
      dir="ltr"
      className=" mx-1 lg:mx-8 border-2 border-blueLight rounded-xl py-4 px-4 lg:px-7"
    >
      <div>
        <div className="flex items-center gap-2 lg:gap-4 mb-4">
          <ArrowSolidIcon className={"h-auto w-2 lg:w-[13px]"} />
          <h2 className="text-xs lg:text-base font-Bold ">Medical History</h2>
        </div>
        <div className="ps-2">
          {data.map((item, index) => {
            return (
              <div key={index}>
                <div className="flex items-center gap-2 mb-4">
                  <span className=" block size-4 border-2 border-greenMain rounded-full"></span>
                  <h3 className="text-sm lg:tet-xl font-Regular">
                    {item.category}
                  </h3>
                </div>
                <div className="flex flex-col gap-3">
                  {item.items.map((val, j) => {
                    return (
                      <p
                        key={j}
                        className=" border-b border-grayLight pb-2 ps-7 text-sm lg:tet-xl font-Regular last-of-type:border-none"
                      >
                        {val.label}
                      </p>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Diagnostic;
