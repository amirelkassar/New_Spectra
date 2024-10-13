'use client'
import { TextInput } from "@mantine/core";
import React from "react";

function ContractLine({
  service,
  title,
  type,
  terms,
  activeEdit = true,
  handleServiceDataChange,
  serviceData
}) {
  return (
    <li>
      <div className="flex lgl:items-center gap-3">
        <p className="font-Regular text-[12px] mdl:text-[15px] min-w-[120px] mdl:min-w-[150px]">
          {title}
        </p>
        <div className="flex items-center gap-3 flex-wrap">
          {/* Price Input */}
          <div className={`flex items-center w-full md:w-[200px] justify-between h-9 overflow-hidden mdl:h-11 rounded-xl border ${activeEdit?'border-black':'border-grayDark/50 opacity-40'}  px-2 py-2`}>
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
              readOnly={activeEdit ? false : true}
            />
            <span className="font-SemiBold text-[12px] mdl:text-[16px]">$</span>
          </div>

          {/* Duration Input */}
          <div className={`flex items-center w-full md:w-[200px] justify-between h-9 overflow-hidden mdl:h-11 rounded-xl border ${activeEdit?'border-black':'border-grayDark/50 opacity-40'}  px-2 py-2`}>
            <TextInput
              value={serviceData[service]?.duration}
              onChange={(e) => {
                activeEdit
                  ? handleServiceDataChange(
                      service,
                      "duration",
                      e.target.value,
                      type
                    )
                  : null;
              }}
              placeholder="Duration"
              type="number"
              className="flex-1"
              classNames={{
                input:
                  "border-none h-full flex-1 text-[12px] mdl:text-[16px] text-start px-2",
              }}
              readOnly={activeEdit ? false : true}
            />
            <span className="font-SemiBold text-xs">Min</span>
          </div>

          {/* Discount Input */}
          <div className={`flex items-center w-[156px] mdl:w-[200px] justify-between h-9 overflow-hidden mdl:h-11 rounded-xl border ${activeEdit?'border-black':'border-grayDark/50 opacity-40'} px-2 py-2`}>
            <TextInput
              value={serviceData[service]?.discount}
              onChange={(e) => {
                activeEdit
                  ? handleServiceDataChange(
                      service,
                      "discount",
                      e.target.value,
                      type
                    )
                  :  null;
              }}
              type="number"
              placeholder="Discount"
              className="flex-1"
              maxLength={3}
              classNames={{
                input:
                  "border-none h-full flex-1 text-[12px] mdl:text-[16px] text-start px-2",
              }}
              readOnly={activeEdit ? false : true}
            />
            <span className="font-SemiBold text-[12px] mdl:text-[16px]">%</span>
          </div>
        </div>
      </div>

      <p className="text-xs font-Regular mt-3 text-grayDark">
        <span className="text-greenMain"> Terms & Conditions</span> : {terms}
      </p>
    </li>
  );
}

export default ContractLine;
