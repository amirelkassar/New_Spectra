"use client";
import Card from "@/components/card";
import Image from "next/image";
import person from "@/assets/images/child.png";
import React, { useState } from "react";
import Input from "@/components/input";
import { Select } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";

function InformationEdit() {
  const [data, setData] = useState({
    name: "محمد عبدالله",
    nationalID: "25814739658",
    gender: "ذكر",
    dateBirth: "10/10/2024",
    relationship: "الابن",
    diagnosis: "اضطراب طيف التوحد",
    age: "8 سنين - 3 اشهر",
    height: "90 سنتيمتر",
    Weight: "40 كيلوجرام",
  });

  const handleDescChange = (e, item) => {
    setData({ ...data, [item]: e.target.value });
  };
  const handleDescChangeMantine = (e, item) => {
    setData({ ...data, [item]: e });
  };
  return (
    <Card>
      <div className="flex items-center justify-between gap-7 mb-6 mdl:mb-10">
        <h3 className=" text-base mdl:text-lg font-Bold">بيانات الطفل</h3>
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
                    handleOnChange={(e) => {
                      handleDescChange(e, "name");
                    }}
                    setValue={setData}
                    containerClassName={
                      "max-w-[100%] w-[100%] lg:max-w-[240px]"
                    }
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
                    handleOnChange={(e) => {
                      handleDescChange(e, "nationalID");
                    }}
                    containerClassName={
                      "max-w-[100%] w-[100%] lg:max-w-[240px]"
                    }
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
                    onChange={(e) => {
                      handleDescChangeMantine(e, "gender");
                    }}
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
                      handleDescChangeMantine(e, "dateBirth");
                    }}
                  />
                </li>
                <li className="flex gap-1 md:gap-5 flex-col md:flex-row items-start  md:items-center">
                  <h3 className="min-w-[96px] text-[12px] font-Regular">
                    السن
                  </h3>
                  <Input
                    handleOnChange={(e) => {
                      handleDescChange(e, "age");
                    }}
                    containerClassName={
                      "max-w-[100%] w-[100%] lg:max-w-[240px]"
                    }
                    value={data.age}
                    inputClassName={
                      "!h-[48px] rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold"
                    }
                  />
                </li>
                <li className="flex gap-1 md:gap-5 flex-col md:flex-row items-start  md:items-center">
                  <h3 className="min-w-[96px] text-[12px] font-Regular">
                    الطول
                  </h3>
                  <Input
                    handleOnChange={(e) => {
                      handleDescChange(e, "height");
                    }}
                    containerClassName={
                      "max-w-[100%] w-[100%] lg:max-w-[240px]"
                    }
                    value={data.height}
                    inputClassName={
                      "!h-[48px] rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold"
                    }
                  />
                </li>
                <li className="flex gap-1 md:gap-5 flex-col md:flex-row items-start  md:items-center">
                  <h3 className="min-w-[96px] text-[12px] font-Regular">
                    الوزن
                  </h3>
                  <Input
                    handleOnChange={(e) => {
                      handleDescChange(e, "Weight");
                    }}
                    containerClassName={
                      "max-w-[100%] w-[100%] lg:max-w-[240px]"
                    }
                    value={data.Weight}
                    inputClassName={
                      "!h-[48px] rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold"
                    }
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
                    onChange={(e) => {
                      handleDescChangeMantine(e, "relationship");
                    }}
                  />
                </li>
                <li className="flex gap-1 md:gap-5 flex-col md:flex-row items-start  md:items-center">
                  <h3 className="min-w-[96px] text-[12px] font-Regular">
                    التشخيص
                  </h3>
                  <Input
                    handleOnChange={(e) => {
                      handleDescChange(e, "diagnosis");
                    }}
                    containerClassName={
                      "max-w-[100%] w-[100%] lg:max-w-[240px]"
                    }
                    value={data.diagnosis}
                    inputClassName={
                      "!h-[48px] rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold"
                    }
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </form>
    </Card>
  );
}

export default InformationEdit;
