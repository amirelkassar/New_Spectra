import Card from "@/components/card";
import React from "react";
import ActionMenu from "../_components/ActionMenuContracts";
import ContractLine from "@/components/contractLine";
import Button from "@/components/button";
import { TextInput } from "@mantine/core";

const services = [
  {
    serviceName: "examination service",
    price: 100.0,
    duration: 45,
    discount: 25,
    termsAndConditions:
      "Lorem Absim Lorem AbsimLorem AbsimLorem AbsimLorem AbsimLorem Absim",
  },
  {
    serviceName: "Counseling Service",
    price: 100.0,
    duration: 45,
    discount: 25,
    termsAndConditions:
      "Lorem Absim Lorem AbsimLorem AbsimLorem AbsimLorem AbsimLorem Absim",
  },
  {
    serviceName: "Diagnostic Service ",
    price: 100.0,
    duration: 45,
    discount: 25,
    termsAndConditions:
      "Lorem Absim Lorem AbsimLorem AbsimLorem AbsimLorem AbsimLorem Absim",
  },
  {
    serviceName: "Follow-up Service ",
    price: 100.0,
    duration: 45,
    discount: 25,
    termsAndConditions:
      "Lorem Absim Lorem AbsimLorem AbsimLorem AbsimLorem AbsimLorem Absim",
  },
];
function page() {
  return (
    <Card className={"max-w-full "}>
      <div className="flex items-center justify-between gap-5 mdl:px-3 mdl:mb-16 mb-11 ">
        <h3 className="text-sm mdl:text-xl font-Bold ">العقد</h3>
        <d iv className="flex items-center gap-10">
          <p className="text-xs mdl:text-base font-Bold px-3 py-1 rounded-xl bg-blueLight text-greenMain">
            نشط
          </p>
          <p className="text-xs mdl:text-base font-Bold px-3 py-1 rounded-xl bg-red/10 text-red">
            منتهى
          </p>
          <ActionMenu />
        </d>
      </div>
      <div dir="ltr" className="pb-8 ps-3 lgl:ps-20">
        <h2 className="text-[16px] mdl:text-xl font-Bold mb-4">
          Price of your services as a Freelancer
        </h2>
        <ul className="flex flex-col gap-3 lgl:ps-7">
          {services.map((service, i) => {
            return (
              <ContractLine
                serviceData={[]}
                activeEdit={false}
                key={i}
                title={service.serviceName}
                service={service}
                terms={service.termsAndConditions}
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
                className={`flex items-center w-[120px] justify-between h-11 overflow-hidden  rounded-xl border opacity-40  border-grayDark/50 px-2 py-2`}
              >
                <TextInput
                  value={4}
                  type="number"
                  className="flex-1"
                  classNames={{
                    input:
                      "border-none h-full flex-1 text-[12px] mdl:text-[16px] text-start px-3",
                  }}
                  readOnly
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
                className={`flex items-center w-[120px] justify-between h-11 overflow-hidden opacity-40 rounded-xl border  border-grayDark/50 px-2 py-2`}
              >
                <TextInput
                  value={5}
                  type="number"
                  className="flex-1"
                  classNames={{
                    input:
                      "border-none h-full flex-1 text-[12px] mdl:text-[16px] text-start px-3",
                  }}
                  readOnly
                />
                <span className="font-SemiBold text-sm">D</span>
              </div>
              <p className="text-base font-Regular">Weekly </p>
            </div>
          </div>
        </div>
      </div>
      <div
        dir="ltr"
        className="pb-8 ps-3 lgl:ps-20 pt-10 border-t-2 border-grayLight"
      >
        <h2 className="text-[16px] mdl:text-xl font-Bold mb-4">
          The price of your services as a member of the Spectra team
        </h2>
        <ul className="flex flex-col gap-3 lgl:ps-7">
          {services.map((service, i) => {
            return (
              <ContractLine
                activeEdit={false}
                key={i}
                title={service.serviceName}
                service={service}
                terms={service.termsAndConditions}
              />
            );
          })}
        </ul>
      </div>
      <Button
        className={
          "text-sm mdl:ms-8 lg:text-xl h-14 mt-10 mb-14  mdl:max-w-[230px] !w-full  !py-0 !px-3 md:!px-5 flex font-bold items-center flex-1 justify-center !min-h-11 ring-1 !ring-red text-red border-none  md:w-[120px] !gap-[8px]"
        }
      >
        الغاء العقد
      </Button>
      <Button
        variant="secondary"
        className={
          "text-sm font-Bold mdl:ms-8 lg:text-xl h-14 w-[230px] max-w-full "
        }
      >
        تجديد العقد
      </Button>
    </Card>
  );
}

export default page;
