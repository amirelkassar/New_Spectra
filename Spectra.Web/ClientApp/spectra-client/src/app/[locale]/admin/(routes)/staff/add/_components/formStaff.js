"use client";
import Button from "@/components/button";
import { Select, TextInput } from "@mantine/core";
import React, { useEffect, useState } from "react";
const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
const months = [
  "يناير",
  "فبراير",
  "مارس",
  "ابريل",
  "مايو",
  "يونيو",
  "يوليو",
  "أغسطس",
  "سبتمبر",
  "أكتوبر",
  "نوفمبر",
  "ديسمبر",
];
const years = Array.from({ length: 100 }, (_, i) => (2024 - i).toString());
function FormStaff({ handleOnChange,setPageForm, StaffData, setStaffData }) {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  useEffect(() => {
    if (year && month && day) {
      setStaffData({
        ...StaffData,
        TimeToJoin: `${year}-${String(month).padStart(2, "0")}-${String(
          day
        ).padStart(2, "0")}`,
      });
    }
  }, [year, month, day]);

  return (
    <div>
      <form className="flex flex-col gap-3 lg:gap-6 md:px-3 mb-14 focus:">
        <TextInput
          label={"المسمى الوظيفى"}
          onChange={handleOnChange}
          name="JobName"
          classNames={{
            input: " rounded-xl border-greenMain   !h-auto py-1 min-h-[60px]",
            label: "text-base lg:text-xl mb-2",
          }}
        />
        <Select
          data={["الماركيت", "الحسابات"]}
          label={"القسم"}
          name="Diagnoses"
          className="MultiSelect"
          onChange={(value) => setStaffData({ ...StaffData, Diagnoses: value })}
          classNames={{
            input: " rounded-xl border-greenMain   !h-auto py-1 min-h-[60px]",
            label: "text-base lg:text-xl mb-2",
          }}
        />
        <TextInput
          label={"المؤهلات "}
          name="Qualifications"
          onChange={handleOnChange}
          classNames={{
            input: " rounded-xl border-greenMain   !h-auto py-1 min-h-[60px]",
            label: "text-base lg:text-xl mb-2",
          }}
        />
        <div className="">
          <label className=" text-base lg:text-xl mb-3 block">
            تاريخ الانضمام
          </label>
          <div className="flex gap-5 flex-row lgl:gap-12 flex-1 w-full">
            <Select
              data={years}
              placeholder="سنة"
              value={year}
              onChange={setYear}
              classNames={{
                input: "rounded-xl border-greenMain !h-auto py-1 min-h-[60px]",
                label: "text-base lg:text-xl mb-2",
              }}
              className="flex-1"
            />
            <Select
              data={months.map((m, i) => ({ value: String(i + 1), label: m }))}
              placeholder="شهر"
              value={month}
              onChange={setMonth}
              classNames={{
                input: "rounded-xl border-greenMain !h-auto py-1 min-h-[60px]",
                label: "text-base lg:text-xl mb-2",
              }}
              className="flex-1"
            />
            <Select
              data={days}
              placeholder="يوم"
              value={day}
              onChange={setDay}
              classNames={{
                input: "rounded-xl border-greenMain !h-auto py-1 min-h-[60px]",
                label: "text-base lg:text-xl mb-2",
              }}
              className="flex-1"
            />
          </div>
        </div>
        <TextInput
          label={"ساعات العمل "}
          name="WorkingHours"
          onChange={handleOnChange}
          type="number"
          classNames={{
            input: " rounded-xl border-greenMain   !h-auto py-1 min-h-[60px]",
            label: "text-base lg:text-xl mb-2",
          }}
        />
        <div className="flex flex-col md:flex-row gap-4 md:gap-10 md:max-w-[94%] mx-auto  items-center mt-12 md:mt-20 justify-center flex-1 w-full">
          <Button
            onClick={() => setPageForm(3)}
            variant="secondary"
            className="font-Bold flex-1 text-base md:text-xl w-[434px] h-14 max-w-full"
          >
            التالى
          </Button>
          <Button
            onClick={() => setPageForm(1)}
            className="font-Bold flex-1 text-base md:text-xl w-[434px] h-14 max-w-full"
          >
            السابق
          </Button>
        </div>
      </form>
    </div>
  );
}

export default FormStaff;
