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
import DraftIcon from '@/assets/icons/draft'
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
  const [serviceData, setServiceData] = useState({});

  const handleServiceChange = (values) => {
    setSelectedServices(values);
    const updatedData = { ...serviceData };
    values.forEach((service) => {
      if (!updatedData[service]) {
        updatedData[service] = { price: "", duration: "", discount: "" };
      }
    });
    setServiceData(updatedData);
  };


  return (
    <div>
      <Card className={"mdl:!pe-12 "}>
        <div className="mb-6 flex items-start justify-start" dir="ltr">
          <MultiSelect
            data={serviceOptions}
            placeholder="Choose Services"
            value={selectedServices}
            onChange={handleServiceChange}
            searchable
            nothingFoundMessage="No services found"
            className="lg:w-[500px] w-full lgl:min-w-fit "
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
        />
        <ServicesMember
          selectedServices={selectedServices}
          serviceOptions={serviceOptions}
        />
        <div dir="ltr" className="mt-3 md:mt-7 flex flex-col gap-4">
          <div className="pb-7 border-t pt-6 border-grayLight">
            <h3 className="text-[16px] font-Bold md:text-[20px] mb-2 md:mb-5">
              Introduction
            </h3>
            <p className={"text-[12px] md:text-[16px]"}>
              My name is [Your Name], and I am a UX/UI designer based in
              [Country Name]. I am passionate about creating user-centered
              solutions that enhance the user experience and simplify complex
              problems. My expertise lies in designing web and mobile
              applications, and I possess a proven track record of delivering
              high-quality, user-friendly products. This proposal outlines my
              design approach for your project, which will ensure we achieve the
              desired outcome. It details the project timeline, scope of work,
              and associated costs.
            </p>
          </div>

          <div className="pb-7 border-t pt-6 border-grayLight">
            <h3 className="text-[16px] font-Bold md:text-[20px] mb-2 md:mb-5">
              Context
            </h3>
            <p className={"text-[12px] md:text-[16px]"}>
              [Replace the placeholder text with a concise and factual
              description of the company. This could include their founding
              year, core business activities, target audience, or any relevant
              achievements.] Project Goals & Vision:The client aims to become a
              leading player in the Indian e-grocery industry. They are
              targeting a user base of [XX,XXX] active monthly users and
              [XXX,XXX] registered users. This ambitious vision requires a
              user-friendly and effective design that will attract and retain
              customers.
            </p>
          </div>
          <div className="pb-7 rounded-xl px-6 py-4 border-t pt-6 border-grayLight bg-grayLight">
            <div className=" mb-2 md:mb-3 flex items-center gap-3">
              <h3 className="text-[16px] font-Bold md:text-[20px] ">Note</h3>
              <button>
                <EditIcon pathColor="#10B0C1" className={"w-4 h-auto"} />
              </button>
            </div>
            <p className={"text-[12px] md:text-[16px]"}>
              [Replace the placeholder text with a concise and factual
              description of the company. This could include their founding
              year, core business activities, target audience, or any relevant
              achievements.]
            </p>
          </div>
          <div className="pb-7 border-t pt-10 border-grayLight">
            <h3 className="text-[16px] font-Bold md:text-[20px] mb-2 md:mb-5">
              Notes *
            </h3>
            <div className="w-full border-b ">
              <Textarea
                classNames={{
                  input:
                    "border-none text-start py-0 text-[12px] md:text-[16px] ",
                }}
              />
            </div>
          </div>
        </div>
        {pathname === ROUTES.DOCTOR.CONTRACTS.CONTRACTSID(id) ? (
          <div className="flex px-1 flex-col mdl:flex-row gap-5 md:gap-8 justify-center items-center mdl:justify-end w-[100%] flex-wrap !mt-5 md:!mt-[40px]">
            <Button
              onClick={() => {
                editModal("type", "contractsAccept");
                editModal("open", true);
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
          <div className="flex px-1 flex-col mdl:flex-row gap-5 md:gap-8  w-[100%] flex-wrap !mt-5 md:!mt-[40px]">
            <Link
              href={pathname + `?chat=true`}
              onClick={() => {
                editModal("type", "contractsSend");
                editModal("open", true);
              }}
              className={
                " mdl:max-w-[260px]  !min-h-11  rounded-xl !py-0 text-[14px] md:text-[20px] min-w-[200px] flex-1 !px-5 font-bold   flex items-center bg-greenMain justify-center h-11 ring-1 !gap-4 !ring-greenMain border-none text-white mb-5 md:mb-0"
              }
            >
              <ContractsWhiteIcon />
              ارسال العقد
            </Link>
            <Link
              href={`#`}
              className={
                "  mdl:max-w-[260px] w-full !py-0 text-[14px] md:text-[20px] min-w-[200px] !px-5  flex gap-[15px] font-bold items-center flex-1 justify-center !min-h-11 ring-1 !ring-[#010036] text-[#010036] border-none rounded-[10px]"
              }
            >
              <DraftIcon />
              حفظ كمسودة
            </Link>
          </div>
        )}
      </Card>
    </div>
  );
}

export default ContractInformation;
