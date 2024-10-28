"use client";
import { TextInput } from "@mantine/core";
import React from "react";
import ShowTerms from "./ShowTerms";

function ContractLine({
  service,
  title,
  type,
  terms,
  activeEdit = true,
  handleServiceDataChange,
  serviceData = {},
}) {
  return (
    <li className="pb-3 border-b border-grayLight">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
        <div className="flex items-center justify-between md:justify-start gap-3">
          <p className="font-Regular text-[12px] mdl:text-[15px] min-w-[120px] mdl:min-w-[150px]">
            {title}
          </p>

          {/* Price Input */}
          <div
            className={`flex items-center w-[130px] lg:w-[200px] gap-4  h-9 overflow-hidden mdl:h-11 rounded-xl border ${
              activeEdit ? "border-greenMain justify-between" : "border-none "
            }  px-2 py-2`}
          >
            {activeEdit ? (
              <TextInput
                value={serviceData[service]?.price}
                onChange={(e) => {
                  activeEdit
                    ? handleServiceDataChange(
                        service,
                        "price",
                        e.target.value,
                        type
                      )
                    : null;
                }}
                type="number"
                className="flex-1"
                classNames={{
                  input:
                    "border-none h-full flex-1 text-[12px] mdl:text-[16px] text-start px-2",
                }}
              />
            ) :
            (
              <p className="font-Bold text-xs mdl:text-base">{serviceData[service]?.price}</p>
            ) }

            <span className="font-SemiBold text-[12px] mdl:text-[16px]">$</span>
          </div>
        </div>

        <div className="flex flex-row md:flex-col items-center gap-2 justify-between md:justify-start">
          <h4 className="mdl:text-base text-xs font-Regular text-grayDark ">
            Net Earnings
          </h4>
          <p className="bg-blueLight text-xs mdl:text-base text-center px-7 min-h-9 mdl:min-h-11 border min-w-[130px] md:min-w-[140px] border-greenMain rounded-xl flex items-center justify-center">
            {Math.round((serviceData[service]?.price * 70) / 100)} $
          </p>
        </div>
      </div>
      {terms && (
        <div className="max-w-[730px] flex gap-1 mt-2 ">
          <span className="!text-greenMain text-xs text-nowrap">
            {" "}
            Terms & Conditions{" "}
          </span>
          <ShowTerms>{terms}</ShowTerms>
        </div>
      )}
    </li>
  );
}

export default ContractLine;
