import ArrowRight from "@/assets/icons/arrow-right";
import Button from "@/components/button";
import Input from "@/components/input";
import { Select, TextInput } from "@mantine/core";
import React from "react";
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
function FormStaff({ setNextForm, StaffData, setStaffData }) {
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setStaffData({
      ...StaffData,
      [name]: value,
    });
  };
  return (
    <div>
      <form className="flex flex-col gap-3 lg:gap-6 md:px-3 mb-14 focus:">
        <TextInput
          label={"المسمى الوظيفى"}
          onChange={handleOnChange}
          classNames={{
            input: " rounded-xl border-greenMain   !h-auto py-1 min-h-[60px]",
            label: "text-base lg:text-xl mb-2",
          }}
        />
        <Select
          data={["الماركيت", "الحسابات"]}
          label={"القسم"}
          className="MultiSelect"
          classNames={{
            input: " rounded-xl border-greenMain   !h-auto py-1 min-h-[60px]",
            label: "text-base lg:text-xl mb-2",
          }}
        />
        <TextInput
          label={"المؤهلات "}
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
              classNames={{
                input:
                  " rounded-xl border-greenMain   !h-auto py-1 min-h-[60px]",
                label: "text-base lg:text-xl mb-2",
              }}
              className="flex-1"
            />
            <Select
              data={months}
              placeholder="شهر"
              classNames={{
                input:
                  " rounded-xl border-greenMain   !h-auto py-1 min-h-[60px]",
                label: "text-base lg:text-xl mb-2",
              }}
              className="flex-1"
            />
            <Select
              data={days}
              placeholder="يوم"
              classNames={{
                input:
                  " rounded-xl border-greenMain   !h-auto py-1 min-h-[60px]",
                label: "text-base lg:text-xl mb-2",
              }}
              className="flex-1"
            />
          </div>
        </div>
        <Select
          data={["غير نشط", "نشط"]}
          label={"الحالة الوظيفية"}
          className="MultiSelect"
          classNames={{
            input: " rounded-xl border-greenMain   !h-auto py-1 min-h-[60px]",
            label: "text-base lg:text-xl mb-2",
          }}
        />
        <TextInput
          label={"ساعات العمل "}
          classNames={{
            input: " rounded-xl border-greenMain   !h-auto py-1 min-h-[60px]",
            label: "text-base lg:text-xl mb-2",
          }}
        />
        <div className="flex flex-col md:flex-row gap-4 md:gap-10 md:max-w-[94%] mx-auto  items-center mt-12 md:mt-20 justify-center flex-1 w-full">
          <Button
            onClick={() => setNextForm(true)}
            variant="secondary"
            className="font-Bold flex-1 text-base md:text-xl w-[434px] h-14 max-w-full"
          >
            تأكيد
          </Button>
          <Button
            onClick={() => setNextForm(false)}
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
