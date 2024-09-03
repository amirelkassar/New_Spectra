
import React from "react";
import { Link } from "@/navigation";
import Button from "@/components/button";
import BackIcon from "@/assets/icons/back";
import ROUTES from "@/routes";
import { Textarea, TextInput } from "@mantine/core";
function ServicesNotShow() {
  return (
    <div>
      <div className="flex items-center gap-4 lg:gap-7 mb-12">
        <Link
          href={ROUTES.ADMIN.DATAMAIN.SERVICESADD}
          className=" w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] rounded-[50%] flex items-center justify-center"
        >
          <BackIcon className={"w-full h-full"} />
        </Link>
        <h2 className="text-[36px]"> اضافة خدمة - داخلية</h2>
      </div>
      <form className="lgl:max-w-[80%] flex flex-col gap-6 lg:gap-10 w-full mx-auto lgl:mt-20">
        <TextInput
          label="اسم الخدمة"
          classNames={{
            input:
              "min-h-[60px] h-auto  w-full rounded-lg   border-greenMain text-[24px] ",
            label: "text-base mb-2",
          }}
        />
        <TextInput
          label="تعريف للخدمة"
          classNames={{
            input:
              "min-h-[60px] h-auto  w-full rounded-lg   border-greenMain text-[24px] ",
            label: "text-base mb-2",
          }}
        />
        <TextInput
          label="سعر الخدمة"
          type="number"
          classNames={{
            input:
              "min-h-[60px] h-auto  w-full rounded-lg   border-greenMain text-[24px] ",
            label: "text-base mb-2",
          }}
        />
        <Textarea
          label="الشروط و الاحكام"
          radius="md"
          size="xl"
          autosize
          minRows={4}
          classNames={{
            input:
              "min-h-[160px] h-auto  w-full rounded-lg   border-greenMain text-[24px] ",
            label: "text-base mb-2",
          }}
        />
        <div className="flex flex-col mt-16 items-center gap-3">
          <Button
            className="w-full h-[60px] text-[20px] font-Bold duration-300 hover:shadow-md"
            variant="secondary"
          >
            حفظ
          </Button>

          <Link
            href={ROUTES.ADMIN.DATAMAIN.SERVICES}
            className="w-full duration-300 hover:shadow-md hover:border-red flex items-center justify-center border rounded-xl h-[60px] text-[20px] font-Bold"
          >
            إلغاء
          </Link>
        </div>
      </form>
    </div>
  );
}

export default ServicesNotShow;
