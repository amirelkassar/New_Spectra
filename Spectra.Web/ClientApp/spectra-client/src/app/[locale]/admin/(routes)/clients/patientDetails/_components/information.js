import Image from "next/image";
import React from "react";
import person from "@/assets/images/child.png";
import Card from "@/components/card";
import ActionMenu from "./ActionMenuPatientsDetails";

const data = {
  name: "محمد عبدالله",
  nationalID: "25814739658",
  gender: "ذكر",
  dateBirth: "10/10/2024",
  relationship: "الابن",
  diagnosis: "اضطراب طيف التوحد",
  age: "8 سنين - 3 اشهر",
  height: "90 سنتيمتر",
  Weight: "40 كيلوجرام",
};


function Information({ id }) {
  return (
    <Card>
      <div className="flex items-center justify-between gap-7 mb-6 mdl:mb-10">
        <h3 className=" text-base mdl:text-lg font-Bold">بيانات الطفل</h3>
        <ActionMenu id={id} />
      </div>
      <div className="flex gap-6 md:gap-[40px] flex-1 flex-wrap md:flex-nowrap flex-col sml:flex-row ">
        <div className=" size-[84px] sml:size-[125px] rounded-[50%] sml:rounded-[10px]">
          <Image
            src={person}
            width={"100%^"}
            height={"100%"}
            className="w-[100%] h-[100%] object-cover object-top rounded-[50%] sml:rounded-[10px]"
            alt="person"
          />
        </div>
        <div className="flex flex-col gap-1 mg:gap-2 text-start flex-1">
          <ul className="flex flex-col gap-5">
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
              <h3 className="min-w-[96px] text-[12px] font-Regular">السن</h3>
              <p className="font-Bold md:text-[16px] text-[12px]">{data.age}</p>
            </li>
            <li className="flex gap-5 items-center">
              <h3 className="min-w-[96px] text-[12px] font-Regular">الطول</h3>
              <p className="font-Bold md:text-[16px] text-[12px]">
                {data.height}
              </p>
            </li>
            <li className="flex gap-5 items-center">
              <h3 className="min-w-[96px] text-[12px] font-Regular">الوزن</h3>
              <p className="font-Bold md:text-[16px] text-[12px]">
                {data.Weight}
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
              <h3 className="min-w-[96px] text-[12px] font-Regular">التشخيص</h3>
              <p className="font-Bold md:text-[16px] text-[12px]">
                {data.diagnosis}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </Card>
  );
}

export default Information;
