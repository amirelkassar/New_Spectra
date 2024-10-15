"use client";
import BackIcon from "@/assets/icons/back";
import Button from "@/components/button";
import { Link } from "@/navigation";
import ROUTES from "@/routes";
import React, { useState } from "react";
import InputTime from "./InputTime";
const days = [
  { id: "saturday", label: "السبت", disable: true },
  { id: "sunday", label: "الأحد", disable: true },
  { id: "monday", label: "الاثنين", disable: true },
  { id: "tuesday", label: "الثلاثاء", disable: false },
  { id: "wednesday", label: "الأربعاء", disable: false },
  { id: "thursday", label: "الخميس", disable: false },
  { id: "friday", label: "الجمعة", disable: false },
];
function AddTimes() {
  const [selectedDays, setSelectedDays] = useState([]);
  const handleDayClick = (dayId) => {
    if (selectedDays.includes(dayId)) {
      setSelectedDays(selectedDays.filter((day) => day !== dayId));
    } else {
      setSelectedDays([...selectedDays, dayId]);
    }
  };
  const [TimeFrom, setTimeFrom] = useState({
    hours: 0,
    minutes: 0,
    period: "AM",
  });
  const [TimeTo, setTimeTo] = useState({
    hours: 0,
    minutes: 0,
    period: "AM",
  });


  return (
    <div className="p-4">
      <div className="flex items-center gap-8 flex-wrap mb-6">
        <div className="flex items-center gap-3">
          <Link href={ROUTES.DOCTOR.APPOINTMENTSWORK}>
            <BackIcon className={"w-[30px] h-[30px] mdl:w-11 mdl:h-11"} />
          </Link>
          <h2 className=" text-base mdl:text-xl">اضافة ميعاد</h2>
        </div>
      </div>
      <div className="flex flex-wrap gap-3 mdl:gap-5 mb-4">
        {days.map((day) => (
          <button
            key={day.id}
            onClick={() => {
              day.disable ? null : handleDayClick(day.id);
            }}
            className={` h-9 mdl:h-11 text-xs mdl:text-base duration-150 font-Bold rounded-lg mdl:rounded-xl w-[80px] mdl::w-[112px] hover:shadow-md flex items-center justify-center ${
              selectedDays.includes(day.id)
                ? "bg-greenMain text-white"
                : "bg-blueLight text-black"
            } ${day.disable && "opacity-50"} `}
          >
            {day.label}
          </button>
        ))}
      </div>

      <div className="flex lg:flex-row flex-col  gap-3 mdl:gap-5 mb-4 mt-9 mdl:mt-[60px]">
        <InputTime setTime={setTimeFrom} time={TimeFrom} title="من /" />
        <span className="w-[2px] hidden h-20 bg-grayLight lg:block"></span>
        <InputTime setTime={setTimeTo} time={TimeTo} title="الى /" />
      </div>

      <Button
        variant="secondary"
        className=" w-full font-Bold max-w-[288px] mt-16 mx-auto mdl:mx-0 text-xs mdl:text-base"
      >
        حفظ
      </Button>
    </div>
  );
}

export default AddTimes;
