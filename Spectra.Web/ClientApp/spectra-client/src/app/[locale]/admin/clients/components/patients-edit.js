"use client";
import DateIcon from "@/assets/icons/date";
import DateIcon2 from "@/assets/icons/date2";
import MenuActions from "@/components/menu-actions";
import { DatePicker, DatePickerInput } from "@mantine/dates";
import Image from "next/image";
import React, { useState } from "react";
import person from "@/assets/images/child.png";
import BackIcon from "@/assets/icons/back";
import { useRouter } from "@/navigation";
import Input from "@/components/input";
import { Select } from "@mantine/core";

function PatientsEdit() {
  const [ShowDate, setShowDate] = useState(true);
  const router = useRouter();
  const [data, setData] = useState({
    name: "محمد عبدالله",
    nationalID: "25814739658",
    gender: "ذكر",
    dateBirth: "10/10/2024",
    relationship: "الابن",
    diagnosis: "اضطراب طيف التوحد",
  });
  const [value, setValue] = useState(new Date(data.dateBirth));

  const handleDescChange = (e,item) => {
    setData({ ...data, [item]: e.target.value });
  };
  const handleDescChangeMantine = (e,item) => {
    setData({ ...data, [item]: e });
  };
  console.log(new Date());
  return (
    <div className="py-4 md:py-8 px-2 md:px-6 bg-white lg:rounded-[10px] staffDetils">
      <div className=" mb-5 md:mb-16 flex items-start justify-between gap-4">
        <div className="flex items-center gap-3 md:gap-7">
          <div
            onClick={() => {
              router.back();
            }}
            className=" size-[30px]  md:size-[44px] flex items-center justify-center rounded-[50%] "
          >
            <BackIcon className={"w-full h-full"} />
          </div>
          <h2 className="text-[16px] md:text-[20px] font-Bold">
            عبدالله الشيخ - محمد عبدالله الشيخ
          </h2>
        </div>
       
      </div>

      <form className=" flex gap-5 clientEdit ">
        <div className="flex justify-center md:justify-between gap-5 flex-wrap flex-1 flex-col md:flex-row">
          <div className="flex gap-6 md:gap-[40px] flex-1 flex-wrap md:flex-nowrap flex-col lg:flex-row ">
            <div className=" size-[64px] sml:size-[228px] rounded-[50%] sml:rounded-[10px]">
              <Image
                src={person}
                width={"100%^"}
                height={"100%"}
                className="w-[100%] h-[100%] object-cover object-top rounded-[50%] sml:rounded-[10px]"
                alt="person"
              />
            </div>
            <div className="flex flex-col gap-1 mg:gap-2 text-start flex-1">
              <ul className="flex flex-col gap-2">
                <li className="flex gap-1 md:gap-5 flex-col md:flex-row   items-start  md:items-center ">
                  <h3 className="min-w-[96px] text-[12px] font-Regular">
                    الاسم
                  </h3>
                  <Input
                  handleOnChange={(e)=>{handleDescChange(e,'name')} }
                    setValue={setData}
                    containerClassName={"max-w-[100%] w-[100%] lg:max-w-[240px]"}
                    value={data.name}
                    inputClassName={
                      "!h-[48px] rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold"
                    }
                  />
                </li>
                <li className="flex gap-1 md:gap-5 flex-col md:flex-row items-start  md:items-center">
                  <h3 className="min-w-[96px] text-[12px] font-Regular">
                    الرقم القومى
                  </h3>
                  <Input
                    handleOnChange={(e)=>{handleDescChange(e,'nationalID')} }
                    containerClassName={"max-w-[100%] w-[100%] lg:max-w-[240px]"}
                    value={data.nationalID}
                    inputClassName={
                      "!h-[48px] rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold"
                    }
                  />
                </li>
                <li className="flex gap-1 md:gap-5 flex-col md:flex-row items-start  md:items-center">
                  <h3 className="min-w-[96px] text-[12px] font-Regular">
                    الجنس
                  </h3>
                  <Select
                    className=" max-w-[100%]  lg:max-w-[240px] w-[100%] !border-[#CFD0D7] !outline-none"
                    defaultValue={data.gender}
                    data={["ذكر", "انثى"]}
                    nothingFoundMessage="Nothing found..."
                    onChange={(e)=>{handleDescChangeMantine(e,'gender')} }
                  />
                </li>
                <li className="flex gap-1 md:gap-5 flex-col md:flex-row items-start  md:items-center">
                  <h3 className="min-w-[96px] text-[12px] font-Regular">
                    تاريخ الميلاد
                  </h3>
                  <DatePickerInput
                    className=" max-w-[100%] lg:max-w-[240px] w-[100%] !border-[#CFD0D7] !outline-none"
                    valueFormat="DD/MM/YYYY"
                    defaultValue={new Date(data.dateBirth)}
                    onChange={(e) => {
                     handleDescChangeMantine(e,'dateBirth')
                    }}
                  />
                </li>
                <li className="flex gap-1 md:gap-5 flex-col md:flex-row items-start  md:items-center">
                  <h3 className="min-w-[96px] text-[12px] font-Regular">
                    علاقة العميل بالمريض
                  </h3>
                  <Select
                    className=" max-w-[100%]  lg:max-w-[240px] w-[100%] !border-[#CFD0D7] !outline-none"
                    defaultValue={data.relationship}
                    data={["الابن", "راعي"]}
                    nothingFoundMessage="Nothing found..."
                    onChange={(e)=>{handleDescChangeMantine(e,'relationship')}}
                  />
                </li>
                <li className="flex gap-1 md:gap-5 flex-col md:flex-row items-start  md:items-center">
                  <h3 className="min-w-[96px] text-[12px] font-Regular">
                    التشخيص
                  </h3>
                  <Input
                    handleOnChange={(e)=>{handleDescChange(e,'diagnosis')} }
                    containerClassName={"max-w-[100%] w-[100%] lg:max-w-[240px]"}
                    value={data.diagnosis}
                    inputClassName={
                      "!h-[48px] rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold"
                    }
                  />
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className=" flex md:hidden items-center justify-between gap-4 flex-wrap">
              <h2>المواعيد</h2>
              <button
                className={`${
                  ShowDate ? "bg-[#E9F7FF]" : "bg-greenMain"
                } size-[50px] rounded-[50%]  flex items-center justify-center`}
                onClick={(e) => {
                  e.preventDefault;
                  setShowDate(!ShowDate);
                }}
              >
                {ShowDate ? <DateIcon /> : <DateIcon2 />}
              </button>
            </div>
            <div
              className={` justify-center mx-5 ${
                ShowDate ? "flex" : " hidden"
              }`}
            >
              <DatePicker   value={value} onChange={setValue}  />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PatientsEdit;
