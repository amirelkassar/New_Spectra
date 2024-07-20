"use client";
import EditImgIcon from "@/assets/icons/editImg";
import ImagePlaceholderIcon from "@/assets/icons/image-placeholder";
import Input from "@/components/input";
import SelectBox from "@/components/select-box";
import { Select } from "@mantine/core";
import { DateInput, DatePickerInput } from "@mantine/dates";
import { useParams } from "next/navigation";
import React from "react";

function ClientEdit() {
  const params = useParams();
  console.log(params);
  const data = {
    name: "عبدالله الشيخ",
    lastEntry: "25/4/2024",
    customerType: "عائلة طفل",
    nationalID: "623-456-782",
    address: "العنوان jabal Al Noor، العسيلة، مكة 24421",
    phone: "9874563+",
    email: "safwa@gmail.com",
    website: "safwa@gmail.com",
    gender: "ذكر",
    jop: "مدير مؤسسة حكومية",
    numChildren: "1 طفل",
    dateBirth: "2/8/1990",
  };

  return (
    <div className="default-page lg:w-[calc(100%-246px)] max-w-[100%]  text-xl  !justify-start !items-start  text-start !gap-y-3 md:!gap-y-8 ">
      <h2>بيانات {params.orgId ? "المنظمه" : " عائلة الطفل"}</h2>
      <form className="w-[100%] clientEdit">
        <div className="flex flex-col flex-wrap md:flex-row gap-x-4 gap-y-4 md:gap-y-12">
          <div className=" relative">
            <div className=" w-[100%] lg:w-auto lg:size-24 rounded-full overflow-hidden flex items-center justify-center">
              <label htmlFor="file" className="cursor-pointer">
                <ImagePlaceholderIcon />
              </label>
              <input id="file" type="file" className="hidden" />
            </div>
            <div className="bg-[#10B0C1] flex items-center justify-center p-[7px] rounded-[50%] size-[32px] absolute left-[50%] bottom-[-12px] border-[2px] border-white translate-x-[-50%]">
              <EditImgIcon />
            </div>
          </div>

          <Input
            label={"الاسم"}
            value={data.name}
            containerClassName={"!gap-1 min-w-[calc(50%-10px)] xl:min-w-[calc(42%-10px)]"}
            labelClassName={"!text-[16px] !mb-0 px-4"}
            inputClassName={
              "!h-[48px] rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold"
            }
          />
          <Input
            label={"اخر دخول"}
            value={data.lastEntry}
            containerClassName={"!gap-1 min-w-[calc(50%-10px)] xl:min-w-[calc(42%-10px)]"}
            labelClassName={"!text-[16px] !mb-0 px-4"}
            inputClassName={
              "!h-[48px] rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold"
            }
            readOnly={true}
          />
          <Select
            className=" min-w-[calc(50%-10px)]  !border-[#CFD0D7] !outline-none"
            label={"نوع العميل"}
            defaultValue={data.customerType}
            data={["عائلة طفل", "منظمه"]}
            searchable
            nothingFoundMessage="Nothing found..."
          />
          <Input
            label={"الرقم القومى"}
            value={data.nationalID}
            containerClassName={"!gap-1 min-w-[calc(50%-10px)]"}
            labelClassName={"!text-[16px] !mb-0 px-4"}
            inputClassName={
              "!h-[48px] rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold"
            }
          />
          <Input
            label={"العنوان"}
            value={data.address}
            containerClassName={"!gap-1 min-w-[calc(50%-10px)]"}
            labelClassName={"!text-[16px] !mb-0 px-4"}
            inputClassName={
              "!h-[48px] rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold"
            }
          />
          <Input
            label={"رقم الهاتف"}
            value={data.phone}
            containerClassName={"!gap-1 min-w-[calc(50%-10px)]"}
            labelClassName={"!text-[16px] !mb-0 px-4"}
            inputClassName={
              "!h-[48px] rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold"
            }
          />
          <Input
            label={"البريد الالكترونى "}
            type={"email"}
            value={data.email}
            containerClassName={"!gap-1 min-w-[calc(50%-10px)]"}
            labelClassName={"!text-[16px] !mb-0 px-4"}
            inputClassName={
              "!h-[48px] rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold"
            }
          />
          <Input
            label={"الموقع الالكترونى"}
            type={"email"}
            value={data.website}
            containerClassName={"!gap-1 min-w-[calc(50%-10px)]"}
            labelClassName={"!text-[16px] !mb-0 px-4"}
            inputClassName={
              "!h-[48px] rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold"
            }
          />
          <Select
            className=" min-w-[calc(50%-10px)]  !border-[#CFD0D7] !outline-none"
            label={"نوع الطفل "}
            defaultValue={data.gender}
            data={["ذكر", "انثى"]}
            searchable
            nothingFoundMessage="Nothing found..."
          />
          <DatePickerInput
            className=" min-w-[calc(50%-10px)]  !border-[#CFD0D7] !outline-none"
            label="Pick date"
            placeholder="Pick date"
            valueFormat="DD/MM/YYYY"
            defaultValue={new Date(data.dateBirth)}
            onChange={(e) => {
              console.log(e);
            }}
          />
          <Input
            label={"المهنة"}
            type={"email"}
            value={data.jop}
            containerClassName={"!gap-1 min-w-[calc(50%-10px)]"}
            labelClassName={"!text-[16px] !mb-0 px-4"}
            inputClassName={
              "!h-[48px] rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold"
            }
          />
          <Input
            label={"عدد الاطفال"}
            type={"email"}
            value={data.numChildren}
            containerClassName={"!gap-1 min-w-[calc(50%-10px)]"}
            labelClassName={"!text-[16px] !mb-0 px-4"}
            inputClassName={
              "!h-[48px] rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold"
            }
          />
        </div>
      </form>
    </div>
  );
}

export default ClientEdit;
