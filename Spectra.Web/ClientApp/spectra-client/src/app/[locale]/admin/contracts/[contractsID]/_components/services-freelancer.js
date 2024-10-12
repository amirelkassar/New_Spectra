import ContractLine from "@/components/contractLine";
import { TextInput } from "@mantine/core";
import React from "react";

function ServicesFreelancer({
  selectedServices,
  serviceOptions,
  serviceData,
  handleServiceDataChange,
}) {
  return (
    <div dir="ltr" className="pb-8 ps-3 lgl:ps-20">
      <h2 className="text-[16px] mdl:text-xl font-Bold mb-4">
        Price of your services as a Freelancer
      </h2>
      <ul className="flex flex-col gap-3 lgl:ps-7">
        {selectedServices.map((service, i) => {
          return (
            <ContractLine
              activeEdit={false}
              key={i}
              type={"freelancer"}
              title={serviceOptions.find((opt) => opt.value === service).label}
              handleServiceDataChange={handleServiceDataChange}
              service={service}
              terms={
                "Lorem Absim Lorem AbsimLorem AbsimLorem AbsimLorem AbsimLorem AbsimLorem AbsimLorem AbsimLorem AbsimLorem AbsimLorem AbsimLorem AbsimLorem Absim "
              }
            />
          );
        })}
      </ul>
      <div className="flex flex-col gap-5 my-9">
        <div className="flex items-center gap-x-8 gap-y-3 flex-wrap">
          <h4 className=" text-base mdl:text-xl font-Bold mdl:min-w-[430px] max-w-[430px]">
            Limit the number of hours worked per day{" "}
          </h4>
          <div className="flex items-center gap-3">
            <div
              className={`flex items-center w-[120px] justify-between h-11 overflow-hidden  rounded-xl border  border-grayDark/50 px-2 py-2`}
            >
              <TextInput
                type="number"
                className="flex-1"
                classNames={{
                  input:
                    "border-none h-full flex-1 text-[12px] mdl:text-[16px] text-start px-3",
                }}
              />
              <span className="font-SemiBold text-sm">H</span>
            </div>
            <p className="text-base font-Regular">Daily</p>
          </div>
        </div>
        <div className="flex items-center gap-x-8 gap-y-3 flex-wrap">
          <h4 className=" text-base mdl:text-xl font-Bold min-w-[430px]">
            Limit the number of days per week
          </h4>
          <div className="flex items-center gap-3">
            <div
              className={`flex items-center w-[120px] justify-between h-11 overflow-hidden  rounded-xl border  border-grayDark/50 px-2 py-2`}
            >
              <TextInput
                type="number"
                className="flex-1"
                classNames={{
                  input:
                    "border-none h-full flex-1 text-[12px] mdl:text-[16px] text-start px-3",
                }}
              />
              <span className="font-SemiBold text-sm">D</span>
            </div>
            <p className="text-base font-Regular">Weekly </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesFreelancer;
