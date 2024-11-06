"use client";
import { TextInput } from "@mantine/core";
import { useSearchParams } from "next/navigation";
import React from "react";

function WorkNum({ workLimits, setWorkLimits }) {
  const searchparams = useSearchParams();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkLimits((prevLimits) => ({
      ...prevLimits,
      [name]: value,
    }));
  };
  return (
    <div
      className="flex flex-col gap-5 my-9 ps-3 lgl:ps-14 pb-8 border-b  border-grayDark "
      dir="ltr"
    >
      <div className="flex md:items-center gap-x-8 gap-y-3 flex-col md:flex-row flex-wrap">
        <h4 className=" text-base mdl:text-xl font-Bold mdl:min-w-[430px] max-w-[430px]">
          Limit the number of hours worked per day{" "}
        </h4>
        <div className="flex items-center gap-8 flex-1">
          {searchparams.get("editContracts") === "true" ? (
            <TextInput
              name="hoursOfWork"
              value={workLimits.hoursOfWork || 0}
              onChange={handleChange}
              type="number"
              className="w-fit"
              classNames={{
                input:
                  "border-greenMain rounded-xl max-w-[90px] mdl:max-w-[120px] min-w-[80px] mdl:min-w-[110px] w-fit h-11 text-center text-[12px] mdl:text-[16px] font-Bold px-1",
              }}
              readOnly={
                searchparams.get("editContracts") === "true" ? false : true
              }
            />
          ) : (
            <p className="text-xl font-Bold">{workLimits.hoursOfWork || 0} </p>
          )}

          <span className="font-SemiBold text-sm">H</span>
          <p className="text-base font-Regular">Daily</p>
        </div>
      </div>
      <div className="flex md:items-center gap-x-8 gap-y-3 flex-col md:flex-row flex-wrap">
        <h4 className=" text-base mdl:text-xl font-Bold min-w-[430px]">
          Limit the number of days per week
        </h4>
        <div className="flex items-center gap-8  flex-1">
          {searchparams.get("editContracts") === "true" ? (
            <TextInput
              onChange={handleChange}
              value={workLimits.daysOfWork || 0}
              type="number"
              name="daysOfWork"
              className=" w-fit"
              classNames={{
                input:
                  "border-greenMain rounded-xl max-w-[90px] mdl:max-w-[120px] min-w-[80px] mdl:min-w-[110px] w-fit  h-11 text-center  text-[12px] mdl:text-[16px] font-Bold px-1",
              }}
              readOnly={
                searchparams.get("editContracts") === "true" ? false : true
              }
            />
          ) : (
            <p className="text-xl font-Bold">{workLimits.daysOfWork || 0} </p>
          )}

          <span className="font-SemiBold text-sm">D</span>

          <p className="text-base font-Regular">Weekly </p>
        </div>
      </div>
    </div>
  );
}

export default WorkNum;
