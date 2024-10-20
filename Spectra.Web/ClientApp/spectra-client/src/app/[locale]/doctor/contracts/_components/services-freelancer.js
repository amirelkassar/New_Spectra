import ContractLine from "@/components/contractLine";
import { TextInput } from "@mantine/core";
import { useSearchParams } from "next/navigation";
import React from "react";

function ServicesFreelancer({
  selectedServices,
  serviceOptions,
  serviceData,
  handleServiceDataChange,
}) {
  const searchparams = useSearchParams();
  return (
<div dir="ltr" className="pb-8 ps-3 lgl:ps-14 border-b  border-grayDark">
      <h2 className="text-[16px] mdl:text-xl font-Bold mb-4">
        Price of your services as a Freelancer
      </h2>
      <ul className="flex flex-col gap-3 lgl:ps-7">
        {selectedServices.map((service, i) => {
          return (
            <ContractLine
              activeEdit={ searchparams.get("editContracts") === "true"? true : false }
              serviceData={serviceData}
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
    
    </div>
  );
}

export default ServicesFreelancer;
