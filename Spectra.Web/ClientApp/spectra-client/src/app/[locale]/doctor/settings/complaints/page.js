import BackIcon from "@/assets/icons/back";
import True2Icon from "@/assets/icons/true2";
import Button from "@/components/button";
import Card from "@/components/card";
import InputGreen from "@/components/Input-green";
import { Link } from "@/navigation";
import ROUTES from "@/routes";
import { Select, Textarea } from "@mantine/core";
import React from "react";
const dataSelect = [
  "مدفوعات",
  "طبيب / اخصائى ",
  "شكاوى تتعلق بالتواصل",
  "شكاوى تتعلق بالخدمات",
];
function page() {
  return (
    <Card className={"h-full"}>
      <div className="flex items-center gap-5 md:p-3">
        <Link
          href={ROUTES.DOCTOR.SETTINGS.DASHBOARD}
          className=" w-8 mdl:w-11  h-8 mdl:h-11 rounded-full"
        >
          <BackIcon className={"w-full h-auto"} />
        </Link>
        <h2>الاعدادات - الشكاوى</h2>
      </div>
      <form className="w-full mx-auto mdl:px-14 flex flex-col gap-4 mdl:gap-6 mt-10 md:mt-14 md:mb-20">
        <InputGreen label="عنوان الشكوى" />
        <Textarea
          classNames={{
            input:
              "min-h-[130px] !h-10 h-auto text-[12px] md:text-[16px]  border-greenMain rounded-2xl",
            label: "text-[12px] mb-2  md:text-[16px]",
          }}
          label={"محتوى الشكوى "}
          name="notes"
        />
        <Select
          classNames={{
            root: "flex-1 w-full",
            input:
              "!h-14  lgl:!h-[66px] text-base md:text-xl font-Bold border-greenMain w-full rounded-lg  mdl:rounded-xl",
            label: "text-[12px] md:text-base mb-2",
            option: "text-base md:text-xl font-Bold",
          }}
          label={"اختر نوع الشكوى"}
          data={dataSelect}
          searchable
          nothingFoundMessage="Nothing found..."
        />
        <Button
          variant="secondary"
          className=" h-12 mdl:h-14 mt-10 mdl:mt-16 w-full max-w-[390px] mx-auto font-Bold text-base mdl:text-xl"
        >
          ارسال
        </Button>
        <div className="max-w-full justify-center w-[390px] mx-auto flex items-center gap-4  h-12 mdl:h-14 mt-10 mdl:mt-16 ">
          <True2Icon />
          <p className="font-Bold text-base mdl:text-xl text-greenMain">تم الارسال</p>
        </div>
      </form>
    </Card>
  );
}

export default page;
