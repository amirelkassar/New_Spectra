import PillsIcon from "@/assets/icons/pills";
import TherapyIcon from "@/assets/icons/therapy";
import { Link } from "@/navigation";
import React from "react";

function PrescriptionCard({ type = "all", data }) {
  return (
    <div
      className={`px-1 py-3 rounded-[10px] ${
        data.state === "new" ? "bg-[#F1FCFF]" : "bg-grayLight"
      }  w-[330px]`}
    >
      {data.state === "new" && (
        <span className="text-[12px]  font-Bold text-greenMain mb-2">
          جديدة
        </span>
      )}

      <div className={`${data.state !== "new" ? "pt-4" : ""} px-5 pb-3`}>
        <div className="flex items-center justify-center flex-col gap-1 pb-2 border-b-[0.5px] border-black">
          <h2 className="text-[14px] text-center sml:text-[16px] font-Bold">
            {type === "all"
              ? data.nameFamily
              : `  الاخصائى ${data.specialist}   `}
          </h2>
          <h3 className="text-[14px] text-center sml:text-[16px] ">
            {type == "all" ? data.patient : `   ${data.specialistDoctor}   `}
          </h3>
        </div>
        <div>
          <div className=" size-[64px] rounded-[10px] bg-white flex items-center justify-center mx-auto mt-4 mb-3">
            {data.pills ? <PillsIcon /> : <TherapyIcon />}
          </div>
          <div className="flex items-center justify-center gap-10 mb-2">
            {data.therapy.map((item, i) => {
              return (
                <p
                  key={i}
                  className="text-[14px] text-center sml:text-[16px] font-Bold"
                >
                  {item}
                </p>
              );
            })}
          </div>
          <p className="text-[14px] text-center sml:text-[16px] mb-2">
            اخذه طوال الشهر يوميا مع الاكل
          </p>
          <p className="text-[14px] text-center sml:text-[16px]">20/4/2024</p>
        </div>
      </div>
    </div>
  );
}

export default PrescriptionCard;
