"use client";
import DateIcon from "@/assets/icons/date";
import DateIcon2 from "@/assets/icons/date2";
import Image from "next/image";
import React, { useState } from "react";
import person from "@/assets/images/child.png";
import BackIcon from "@/assets/icons/back";
import { useRouter } from "@/navigation";
import { useParams } from "next/navigation";
import Card from "@/components/card";
const data = {
  name: "محمد عبدالله",
  nationalID: "25814739658",
  gender: "ذكر",
  dateBirth: "10/10/2024",
  relationship: "الابن",
  diagnosis: "اضطراب طيف التوحد",
};
function PatientsDetails() {
  const [value, setValue] = useState(new Date());
  const [ShowDate, setShowDate] = useState(true);
  const router = useRouter();
  const params = useParams();

  return (
    <div className="flex gap-6 flex-col lgl:flex-row  staffDetils">
      <Card>
        <div className="flex items-center gap-3 md:gap-7 mb-12">
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
        <div className="flex gap-6 md:gap-[40px] flex-1 flex-wrap md:flex-nowrap flex-col sml:flex-row ">
          <div className=" size-[64px] md:size-[228px] rounded-[50%] md:rounded-[10px]">
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
              <li className="flex gap-5 items-center">
                <h3 className="min-w-[96px] text-[12px] font-Regular">الاسم</h3>
                <p className="font-Bold md:text-[16px] text-[12px]">
                  {data.name}
                </p>
              </li>
              <li className="flex gap-5 items-center">
                <h3 className="min-w-[96px] text-[12px] font-Regular">
                  الرقم القومى
                </h3>
                <p className="font-Bold md:text-[16px] text-[12px]">
                  {data.nationalID}
                </p>
              </li>
              <li className="flex gap-5 items-center">
                <h3 className="min-w-[96px] text-[12px] font-Regular">الجنس</h3>
                <p className="font-Bold md:text-[16px] text-[12px]">
                  {data.gender}
                </p>
              </li>
              <li className="flex gap-5 items-center">
                <h3 className="min-w-[96px] text-[12px] font-Regular">
                  تاريخ الميلاد
                </h3>
                <p className="font-Bold md:text-[16px] text-[12px]">
                  {data.dateBirth}
                </p>
              </li>
              <li className="flex gap-5 items-center">
                <h3 className="min-w-[96px] text-[12px] font-Regular">
                  علاقة العميل بالمريض
                </h3>
                <p className="font-Bold md:text-[16px] text-[12px]">
                  {data.relationship}
                </p>
              </li>
              <li className="flex gap-5 items-center">
                <h3 className="min-w-[96px] text-[12px] font-Regular">
                  التشخيص
                </h3>
                <p className="font-Bold md:text-[16px] text-[12px]">
                  {data.diagnosis}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </Card>

      <Card>
        <div className="w-full">
          <div className=" flex md:hidden items-center justify-between gap-4 flex-wrap">
            <h2>تقرير اسبوعى</h2>
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
        </div>
      </Card>
    </div>
  );
}

export default PatientsDetails;
