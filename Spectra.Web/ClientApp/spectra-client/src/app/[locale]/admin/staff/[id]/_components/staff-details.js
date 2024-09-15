"use client";
import StarGoldIcon from "@/assets/icons/starGold";
import MenuActions from "@/components/menu-actions";
import Image from "next/image";
import React from "react";
import person from "@/assets/images/placeholder-person.png";
import CallIcon from "@/assets/icons/call";
import EmailIcon from "@/assets/icons/email";
import SmsIcon from "@/assets/icons/sms";
import SessionIcon from "@/assets/icons/session";
import { Link } from "@/navigation";
import BackIcon from "@/assets/icons/back";
import ROUTES from "@/routes";
import ActionMenu from "./ActionMenu";
const data = {
  name: "احمد محمد كمال",
  spec: "طبيب نفسى",
  email: "Ahmad@gmail.com",
  desc: " دكتورا في الفلسفة بالخدمة الاجتماعية مختص في تطوير الذات والعلاقات الاسرية والزوجية والمشاكل النفسية والإدمان ومشكلات العمل\nمرخص معتمد من الهيئة السعودية للتخصصات الصحية",
  title: "مرخص معتمد من الهيئة السعودية للتخصصات الصحية",
  star: 5,
  rating: 281,
  bookingCode: "DR-AHMED-2024",
  numPatients: 50,
  contact: {
    call: "0101010101",
    gmail: "Ahmad@gmail.com",
    sms: "01010101010",
  },
  service: {
    counseling: "100.00 $",
    early: "100.00 $",
    early2: "100.00 $",
  },
};

function StaffDetails() {
  const getStar = (num) => {
    const stars = [];
    for (let i = 1; i <= num; i++) {
      stars.push(
        <StarGoldIcon key={i} className={"w-[14px] lg:w-[18px] h-auto"} />
      );
    }
    return stars;
  };

  return (
    <div className="py-8 px-6 bg-white flex flex-col gap-5 lg:rounded-[10px] staffDetils">
      <div className="flex items-center gap-4 mb-8 justify-between">
        <div className="flex items-center  gap-2 lg:gap-3">
          <Link
            href={ROUTES.ADMIN.STAFF.DASHBOARD}
            className=" w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] rounded-[50%]  flex items-center justify-center"
          >
            <BackIcon className={"w-full h-full"} />
          </Link>
          <h2 className="text-base lg:text-xl font-bold ">الموظفين</h2>
        </div>
        <div className="md:block hidden">
          <ActionMenu />
        </div>
      </div>

      <div className="flex justify-center md:justify-between gap-5 flex-wrap flex-1 flex-col md:flex-row">
        <div className="flex gap-6 md:gap-[40px] flex-1 flex-wrap md:flex-nowrap ">
          <div className=" size-[120px] md:size-[228px] rounded-[10px]">
            <Image
              src={person}
              width={"100%^"}
              height={"100%"}
              className="w-[100%] h-[100%] object-cover object-top rounded-[10px]"
              alt="person"
            />
          </div>
          <div className="flex flex-col gap-1 mg:gap-2 text-start flex-1">
            <h2 className=" text-[14px] md:text-[16px] font-bold">
              {data.name}
            </h2>
            <h3 className=" text-[12px] md:text-[16px]">{data.spec}</h3>
            <h4 className=" text-[12px]">
              كود الحجز / الاحالة{" "}
              <span className="px-4 font-bold text-[12px] md:text-[14px]">
                {data.bookingCode}
              </span>
            </h4>
            <h5 className=" text-[12px] md:text-[16px] font-bold">
              {data.email}
            </h5>
            <h6 className=" text-[12px] md:text-[16px] font-bold">
              {data.numPatients} مريض
            </h6>
            <div className="flex items-center gap-[2px] mt-3">
              {getStar(data.star)}
            </div>
            <div className="flex items-center gap-6 mt-5 md:mt-1 px-1 md:justify-start justify-around">
              {data.contact.call && (
                <div className="bg-[#F1FCFF] rounded-[50%] p-1 flex items-center justify-center size-[35px]">
                  <CallIcon />
                </div>
              )}
              {data.contact.gmail && (
                <div className="bg-[#F1FCFF] rounded-[50%] p-1 flex items-center justify-center size-[35px]">
                  <EmailIcon />
                </div>
              )}
              {data.contact.sms && (
                <div className="bg-[#F1FCFF] rounded-[50%] p-1 flex items-center justify-center size-[35px]">
                  <SmsIcon />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className=" flex-1 mdl:divide-x-[2px] divide-solid mdl:divide-x-reverse flex min-h-[244px] gap-y-3 divide-grayLight  flex-col mdl:flex-row">
          <div className=" flex-col flex gap-4 w-full  justify-center pb-6 max-w-[300px] mdl:max-w-[300px] mx-auto">
            <div className="flex items-center justify-center gap-5 lg:gap-12">
              <h3 className=" flex-1 text-[12px] mdl:text-[16px]">
                خدمة الاستشارة
              </h3>
              <p className=" text-greenMain font-Bold text-[12px] mdl:text-[16px]">
                {data.service.counseling}
              </p>
            </div>
            <div className="flex items-center justify-center gap-5 lg:gap-12">
              <h3 className=" flex-1 text-[12px] mdl:text-[16px]">
                خدمة الكشف المبكر{" "}
              </h3>
              <p className=" text-greenMain font-Bold text-[12px] mdl:text-[16px]">
                {data.service.early}
              </p>
            </div>
            <div className="flex items-center justify-center gap-5 lg:gap-12">
              <h3 className=" flex-1 text-[12px] mdl:text-[16px]">
                خدمة الكشف المبكر{" "}
              </h3>
              <p className=" text-greenMain font-Bold text-[12px] mdl:text-[16px]">
                {data.service.early2}
              </p>
            </div>
          </div>

          <div className="mdl:ps-5 pt-3 mdl:pt-0  flex border-t-2 mdl:border-t-0 border-grayLight  justify-between mdl:justify-end flex-row mdl:flex-col flex-1 divide-x-[2px] mdl:divide-x-[0px]  divide-x-reverse mdl:divide-y-[2px] divide-solid  divide-grayLight w-full mdl:max-w-[200px]">
            <div className="flex flex-col justify-center items-center gap-3  pt-4 mdl:pt-0 flex-1">
              <h3 className=" text-[12px] mdl:text-[16px]">رقم الاعتماد</h3>
              <p className="text-[16px] mdl:text-[24px] font-Bold">285A</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-1 mdl:mb-2 mdl:pt-4 flex-1 ">
              <div className=" size-[34px] mdl:size-[42px] rounded-[50%] bg-blueLight p-2 flex items-center justify-center">
                <SessionIcon />
              </div>
              <p className="text-[16px] mdl:text-[24px] font-Bold">1,250</p>
              <h3 className=" text-[12px] mdl:text-[16px]">جلسة </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StaffDetails;
