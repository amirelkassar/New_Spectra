import ContractLine from "@/components/contractLine";
import { useSearchParams } from "next/navigation";
import React from "react";

function ServicesMember({
  selectedServices,
  serviceOptions,
  serviceData,
  handleServiceDataChange,
}) {
  const searchparams = useSearchParams();

  return (
    <div
      dir="ltr"
      className="pb-8 ps-3 lgl:ps-14 border-b mt-8 border-grayDark"
    >
      <div className="flex items-center gap-6 flex-wrap mb-8 mdl:mb-12">
        <h2 className="text-[16px] mdl:text-xl font-Bold mb-4">
          The price of your services as a member of the Spectra team
        </h2>
        <div className="flex items-center gap-2 mdl:gap-4 flex-1">
          <div className="bg-blueLight flex-1 flex items-center gap-1 mdl:gap-2 max-w-[290px] justify-center rounded-xl border border-greenMain text-greenMain font-Bold  mdl:px-4 min-h-9 mdl:min-h-11">
            <h3 className="text-sm mdl:text-xl font-Bold">Duration :</h3>
            <p className="text-sm mdl:text-xl font-Bold">15 min</p>
          </div>
          <div className="bg-blueLight flex-1 flex items-center gap-1 mdl:gap-2 max-w-[290px] justify-center rounded-xl border border-greenMain text-greenMain font-Bold  mdl:px-4 min-h-9 mdl:min-h-11">
            <h3 className="text-sm mdl:text-xl font-Bold">Platform Fee :</h3>
            <p className="text-sm mdl:text-xl font-Bold">30%</p>
          </div>
        </div>
      </div>
      <ul className="flex flex-col gap-3 lgl:ps-7">
        {selectedServices.map((service, i) => {
          const serviceInfo = serviceData[service] || {
            price: "",
            duration: "",
            discount: "",
          };

          return (
            <ContractLine
              activeEdit={
                searchparams.get("editContracts") === "true" ? true : false
              }
              serviceData={serviceData}
              key={i}
              title={serviceOptions.find((opt) => opt.value === service).label}
              handleServiceDataChange={handleServiceDataChange}
              type={"member"}
              service={service}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ServicesMember;
