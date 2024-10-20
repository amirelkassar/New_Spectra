"use client";
import { TextInput } from "@mantine/core";
import { useSearchParams } from "next/navigation";
import React from "react";

function WorkNum({ addNew }) {
  const searchparams = useSearchParams();
  const activeEdit = addNew
    ? addNew
    : searchparams.get("editContracts") === "true";
  return (
    <div className="flex flex-col gap-5 my-9 ps-3 lgl:ps-14 " dir="ltr">
      <div className="flex md:items-center gap-x-8 gap-y-3 flex-col md:flex-row flex-wrap">
        <h4 className=" text-base mdl:text-xl font-Bold mdl:min-w-[430px] max-w-[430px]">
          Limit the number of hours worked per day{" "}
        </h4>
        <div className="flex items-center gap-3 flex-1">
          <div
            className={`flex flex-1 items-center w-[120px] justify-between h-11 overflow-hidden  rounded-xl border ${
              activeEdit ? "" : " opacity-45"
            }  border-grayDark/50 px-2 py-2`}
          >
            <TextInput
              defaultValue={0}
              type="number"
              className="flex-1"
              classNames={{
                input:
                  "border-none h-full flex-1 text-[12px] mdl:text-[16px] text-start px-3",
              }}
              readOnly={activeEdit ? false : true}
            />
            <span className="font-SemiBold text-sm">H</span>
          </div>
          <p className="text-base font-Regular">Daily</p>
        </div>
      </div>
      <div className="flex md:items-center gap-x-8 gap-y-3 flex-col md:flex-row flex-wrap">
        <h4 className=" text-base mdl:text-xl font-Bold min-w-[430px]">
          Limit the number of days per week
        </h4>
        <div className="flex items-center gap-3 flex-1">
          <div
            className={`flex flex-1 items-center w-[120px] justify-between h-11 overflow-hidden  rounded-xl border  ${
              activeEdit ? "" : " opacity-45"
            } border-grayDark/50 px-2 py-2`}
          >
            <TextInput
              defaultValue={0}
              type="number"
              className="flex-1"
              classNames={{
                input:
                  "border-none h-full flex-1 text-[12px] mdl:text-[16px] text-start px-3",
              }}
              readOnly={activeEdit ? false : true}
            />
            <span className="font-SemiBold text-sm">D</span>
          </div>
          <p className="text-base font-Regular">Weekly </p>
        </div>
      </div>
    </div>
  );
}

export default WorkNum;
