"use client";
import StarGoldIcon from "@/assets/icons/starGold";
import MenuActions from "@/components/menu-actions";
import Image from "next/image";
import React, { useState } from "react";
import person from "@/assets/images/placeholder-person.png";
import CallIcon from "@/assets/icons/call";
import EmailIcon from "@/assets/icons/email";
import SmsIcon from "@/assets/icons/sms";
import { DatePicker } from "@mantine/dates";
import DateIcon from "@/assets/icons/date";
import DateIcon2 from "@/assets/icons/date2";
function StaffDetails() {
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
  };

  const getStar = (num) => {
    const stars = [];
    for (let i = 1; i <= num; i++) {
      stars.push(
        <StarGoldIcon key={i} className={"w-[14px] lg:w-[18px] h-auto"} />
      );
    }
    return stars;
  };
  const [value, setValue] = useState(new Date());
  const [ShowDate, setShowDate] = useState(true);

  return (
    <div className="py-8 px-6 bg-white flex gap-5 lg:rounded-[10px] staffDetils">
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
        <div>
          <div className=" flex md:hidden items-center justify-between gap-4 flex-wrap">
            <h2>المواعيد</h2>
            <button
              className={`${ShowDate?'bg-[#E9F7FF]':'bg-greenMain'} size-[50px] rounded-[50%]  flex items-center justify-center`}
              onClick={(e) => {
                e.preventDefault;
                setShowDate(!ShowDate);
              }}
            >
                {ShowDate? <DateIcon />: <DateIcon2/> }
            </button>
          </div>
          <div className={` justify-center ${ShowDate?'flex':' hidden'}`}>
          <DatePicker value={value} />

          </div>
        </div>
      </div>
      <div className="md:block hidden">
        <MenuActions />
      </div>
    </div>
  );
}

export default StaffDetails;
