import AppointmentsAllIcon from "@/assets/icons/appointmentsAll";
import AppointmentsNewIcon from "@/assets/icons/appointmentsNew";
import ClockIcon from "@/assets/icons/clock";
import React from "react";

function AppointmentSummary() {
  return (
    <div className="flex gap-6 flex-wrap mb-7 px-3">
      <div className="p-5 rounded-[10px] bg-greenMain min-w-[calc(50%-12px)] w-[160px] md:w-[182px] md:min-w-[18%] flex flex-col justify-between h-[126px] md:h-[150px] flex-1">
        <div className="flex  justify-between gap-3 flex-wrap mb-6">
          <AppointmentsAllIcon className={"h-auto w-[20px] mdl:w-[26px]"} />
          <h2 className="text-[24px] md:text-[36px] font-Bold text-white">200</h2>
        </div>
        <p className="text-white text-[16px] mdl:text-[24px]">الكل</p>
      </div>
      <div className="p-5 rounded-[10px] bg-[#0E9EAD] min-w-[calc(50%-12px)] w-[160px] md:w-[182px] md:min-w-[18%] flex flex-col justify-between h-[126px] md:h-[150px] flex-1">
        <div className="flex  justify-between gap-3 flex-wrap mb-6">
          <AppointmentsNewIcon className={"h-auto w-[18px] mdl:w-[26px]"} />
          <h2 className="text-[24px] md:text-[36px] font-Bold text-white">85</h2>
        </div>
        <p className="text-white text-[16px] mdl:text-[24px]">جديدة</p>
      </div>
      <div className="p-5 rounded-[10px] bg-[#0D8693] min-w-[calc(50%-24px)] w-[160px] md:w-[182px] md:min-w-[28%] flex flex-col justify-between h-[126px] md:h-[150px] flex-1">
        <div className="flex  justify-between gap-3 flex-wrap mb-6">
          <ClockIcon className={"h-auto w-[25px] mdl:w-[35px]"} />
          <h2 className="text-[24px] md:text-[36px] font-Bold text-white">45</h2>
        </div>
        <p className="text-white text-[16px] mdl:text-[24px]">كشف</p>
      </div>
      <div className="p-5 rounded-[10px] bg-white min-w-[calc(50%-24px)] w-[160px] md:w-[182px] md:min-w-[28%] flex flex-col justify-between h-[126px] md:h-[150px] flex-1 shadow-md mdl:shadow-none">
        <div className="flex  justify-between gap-3 flex-wrap mb-6">
          <ClockIcon className={"h-auto w-[25px] mdl:w-[35px]"} />
          <h2 className="text-[24px] md:text-[36px] font-Bold ">60</h2>
        </div>
        <p className=" text-[16px] mdl:text-[24px]">جلسة</p>
      </div>
    </div>
  );
}

export default AppointmentSummary;
