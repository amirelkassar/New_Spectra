"use client";
import ContractsWhiteIcon from "@/assets/icons/contractsWhite";
import EditIcon from "@/assets/icons/edit";
import Card from "@/components/card";
import { Link, usePathname } from "@/navigation";
import ROUTES from "@/routes";
import React, { useState } from "react";
import ServicesFreelancer from "./services-freelancer";
import ServicesMember from "./services-member";
import { MultiSelect, Textarea } from "@mantine/core";
import Button from "@/components/button";
import RefuseIcon from "@/assets/icons/refuse";
import AcceptIcon from "@/assets/icons/accept";
import useModal from "@/store/modal-slice";
const serviceOptions = [
  { value: "examination", label: "Examination Service" },
  { value: "counseling", label: "Counseling Service" },
  { value: "diagnostic", label: "Diagnostic Service" },
  { value: "followup", label: "Follow-up Service" },
];

function ContractInformation({ id }) {
  const pathname = usePathname();
  const { modal, editModal } = useModal();

  const [selectedServices, setSelectedServices] = useState([]);
  const [freelancerServiceData, setFreelancerServiceData] = useState({});
  const [memberServiceData, setMemberServiceData] = useState({});
  const handleServiceChange = (values) => {
    setSelectedServices(values);

    const updatedFreelancerData = { ...freelancerServiceData };
    const updatedMemberData = { ...memberServiceData };
    
    values.forEach((service) => {
      if (!updatedFreelancerData[service]) {
        updatedFreelancerData[service] = { price: "", duration: "", discount: "" };
      }
      if (!updatedMemberData[service]) {
        updatedMemberData[service] = { price: "", duration: "", discount: "" };
      }
    });

    // Clean up services that were unselected
    Object.keys(updatedFreelancerData).forEach((service) => {
      if (!values.includes(service)) {
        delete updatedFreelancerData[service];
      }
    });
    Object.keys(updatedMemberData).forEach((service) => {
      if (!values.includes(service)) {
        delete updatedMemberData[service];
      }
    });

    setFreelancerServiceData(updatedFreelancerData);
    setMemberServiceData(updatedMemberData);
  };

  const handleServiceDataChange = (service, field, value, type) => {
    if (type === "freelancer") {
      setFreelancerServiceData((prevData) => ({
        ...prevData,
        [service]: {
          ...prevData[service],
          [field]: value,
        },
      }));
    } else if (type === "member") {
      setMemberServiceData((prevData) => ({
        ...prevData,
        [service]: {
          ...prevData[service],
          [field]: value,
        },
      }));
    }
  };


console.log(selectedServices);
console.log(freelancerServiceData);
console.log(memberServiceData);


  return (
    <Card>
      
        <div className="mb-6 flex items-start justify-start ps-3 lgl:ps-20" dir="ltr">
        <MultiSelect
          data={serviceOptions}
          placeholder="Choose Services"
          value={selectedServices}
          onChange={handleServiceChange}
          searchable
          nothingFoundMessage="No services found"
          className="lg:w-[500px] w-full lgl:min-w-fit"
          classNames={{
            input: "border-black min-h-[54px] flex items-center text-sm lgl:text-xl placeholder:text-xl rounded-xl placeholder:text-black",
            pill: "text-sm lgl:text-lg py-1 h-auto",
          }}
        />
        </div>
        <ServicesFreelancer
        selectedServices={selectedServices}
        serviceOptions={serviceOptions}
        serviceData={freelancerServiceData}
        handleServiceDataChange={handleServiceDataChange}
      />

      <ServicesMember
        selectedServices={selectedServices}
        serviceOptions={serviceOptions}
        serviceData={memberServiceData}
        handleServiceDataChange={handleServiceDataChange}
      />
     
        {pathname !== ROUTES.ADMIN.CONTRACTS.CONTRACTSUSERNEW(id) ? (
          <div className="flex px-1 flex-col mdl:flex-row gap-5 md:gap-8 justify-center items-center mdl:justify-end w-[100%] flex-wrap !mt-5 md:!mt-[40px]">
            <Button
              onClick={() => {
             
              }}
              className={
                "text-[12px] lg:text-[16px]   mdl:max-w-[260px] !w-full !py-0 !px-3 md:!px-5 font-bold items-center flex-1 flex  bg-greenMain justify-center  md:w-[120px] !min-h-11 ring-1 !gap-[8px] !ring-greenMain border-none text-white"
              }
            >
              <AcceptIcon />
              قبول
            </Button>
            <Button
              onClick={() => {
                editModal("type", "contractsReq");
                editModal("open", true);
              }}
              className={
                "text-[12px] lg:text-[16px]  mdl:max-w-[260px] !w-full  !py-0 !px-3 md:!px-5 flex font-bold items-center flex-1 justify-center !min-h-11 ring-1 !ring-red text-red border-none  md:w-[120px] !gap-[8px]"
              }
            >
              <RefuseIcon />
              رفض
            </Button>

            <Link
              href={`#`}
              className={
                "  mdl:max-w-[260px] w-full !py-0 text-[14px] md:text-[20px] min-w-[200px] !px-5  flex gap-[15px] font-bold items-center flex-1 justify-center !min-h-11 ring-1 !ring-[#010036] text-[#010036] border-none rounded-[10px]"
              }
            >
              <EditIcon />
              تعديل
            </Link>
          </div>
        ) : (
          <div className="flex px-1 flex-col mdl:flex-row gap-5 md:gap-8 justify-end w-[100%] flex-wrap !mt-5 md:!mt-[40px]">
            <Link
              href={ROUTES.ADMIN.CONTRACTS.CONTRACTSUSER(id) + `?chat=true`}
              className={
                " mdl:max-w-[260px]  !min-h-11  rounded-xl !py-0 text-[14px] md:text-[20px] min-w-[200px] flex-1 !px-5 font-bold   flex items-center bg-greenMain justify-center h-11 ring-1 !gap-4 !ring-greenMain border-none text-white mb-5 md:mb-0"
              }
            >
              <ContractsWhiteIcon />
              ارسال عقد
            </Link>

            <Link
              href={`#`}
              className={
                " mdl:max-w-[260px] !py-0 text-[14px]  !min-h-11  md:text-[20px] min-w-[200px] flex-1 !px-5  flex gap-[15px] font-bold items-center justify-center h-11 ring-1 !ring-[#010036] text-[#010036] border-none rounded-[10px]"
              }
            >
              <EditIcon />
              تعديل
            </Link>
          </div>
        )}
      
    </Card>
  );
}

export default ContractInformation;
