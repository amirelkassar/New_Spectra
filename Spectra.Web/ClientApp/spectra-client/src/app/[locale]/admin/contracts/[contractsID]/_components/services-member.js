import ContractLine from "@/components/contractLine";
import { TextInput } from "@mantine/core";
import React from "react";

function ServicesMember({
  selectedServices,
  serviceOptions,
  serviceData,
  handleServiceDataChange,
}) {
  return (
    <div dir="ltr" className="pb-8 ps-3 lgl:ps-20">
      <h2 className="text-[16px] mdl:text-xl font-Bold mb-4">The price of your services as a member of the Spectra team</h2>
      <ul className="flex flex-col gap-3 lgl:ps-7">
        {selectedServices.map((service, i) => {
          const serviceInfo = serviceData[service] || { price: "", duration: "", discount: "" };

          return (
            <ContractLine
            activeEdit={false}
            key={i}
            title={serviceOptions.find((opt) => opt.value === service).label}
            handleServiceDataChange={handleServiceDataChange}
            type={'member'}
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

export default ServicesMember;
