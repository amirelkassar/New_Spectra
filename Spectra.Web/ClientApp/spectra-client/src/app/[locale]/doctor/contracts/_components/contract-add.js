"use client";
import Card from "@/components/card";
import { usePathname } from "@/navigation";
import React, { useState } from "react";
import ServicesFreelancer from "./services-freelancer";
import ServicesMember from "./services-member";
import { MultiSelect, Textarea } from "@mantine/core";
import Button from "@/components/button";
import { useSearchParams } from "next/navigation";
import WorkNum from "./workNum";
import DraftIcon from "@/assets/icons/draft";
const serviceOptions = [
  { value: "examination", label: "Examination Service" },
  { value: "counseling", label: "Counseling Service" },
  { value: "diagnostic", label: "Diagnostic Service" },
  { value: "followup", label: "Follow-up Service" },
];

function ContractAdd({ id }) {
  const pathname = usePathname();
  const searchparams = useSearchParams();

  const [selectedServices, setSelectedServices] = useState([]);
  const [freelancerServiceData, setFreelancerServiceData] = useState({
    examination: {
      price: "54",
    },
    counseling: {
      price: "1",
    },
  });
  const [memberServiceData, setMemberServiceData] = useState({
    examination: {
      price: "54",
    },
    counseling: {
      price: "1",
    },
  });
  const handleServiceChange = (values) => {
    setSelectedServices(values);

    const updatedFreelancerData = {
      ...freelancerServiceData,
    };
    const updatedMemberData = { ...memberServiceData };

    values.forEach((service) => {
      if (!updatedFreelancerData[service]) {
        updatedFreelancerData[service] = {
          price: "",
        };
      }
      if (!updatedMemberData[service]) {
        updatedMemberData[service] = {
          price: "",
        };
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

  // console.log(selectedServices);
  // console.log(freelancerServiceData);
  // console.log(searchparams.get("editContracts"));

  return (
    <Card className="mt-5 ">
      <div
        className="mb-6 flex items-start justify-start ps-3 lgl:ps-20"
        dir="ltr"
      >
        <MultiSelect
          data={serviceOptions}
          placeholder="Choose Services"
          value={selectedServices}
          onChange={handleServiceChange}
          searchable
          nothingFoundMessage="No services found"
          className="lg:w-[500px] w-full lgl:min-w-fit"
          classNames={{
            input:
              "border-black min-h-[54px] flex items-center text-sm lgl:text-xl placeholder:text-xl rounded-xl placeholder:text-black",
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
      <WorkNum />

      <div className="flex px-1 flex-col mdl:flex-row gap-5 md:gap-8 justify-center items-center md:justify-start  w-[100%] flex-wrap !mt-5 md:!mt-[40px]">
        <Button
          className={
            "text-sm lg:text-xl   mdl:max-w-[260px] !w-full !py-0 !px-3 md:!px-5 font-bold items-center flex-1 flex  bg-greenMain justify-center  md:w-[120px] !min-h-11 ring-1 !gap-[8px] !ring-greenMain border-none text-white"
          }
        >
          ارسال
        </Button>

        <Button
          className={
            "  mdl:max-w-[260px] w-full !py-0 text-[14px] md:text-[20px] min-w-[200px] !px-5  flex gap-[15px] font-bold items-center flex-1 justify-center !min-h-11 ring-1 !ring-[#010036] text-[#010036] border-none rounded-[10px]"
          }
        >
          <DraftIcon />
          حفظ كمسودة
        </Button>
      </div>
    </Card>
  );
}

export default ContractAdd;
