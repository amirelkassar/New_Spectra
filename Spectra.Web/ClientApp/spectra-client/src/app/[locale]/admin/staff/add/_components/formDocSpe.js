import ArrowRight from "@/assets/icons/arrow-right";
import Button from "@/components/button";
import Input from "@/components/input";
import { Select, TextInput } from "@mantine/core";
import React from "react";

function FormDocSpe({ setNextForm, DocSpeData, setDocSpeData }) {
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setDocSpeData({
      ...DocSpeData,
      [name]: value,
    });
  };
  return (
    <div>
      <form className="flex flex-col gap-3 lg:gap-6 px-3 mb-14 focus:">
        <Select
          data={["سكرتير", "دكتور"]}
          label={"التخصص"}
          placeholder="اختر المهنة"
          name="profession"
          value={DocSpeData.profession || ""}
          onChange={(value) =>
            setDocSpeData({ ...DocSpeData, profession: value })
          }
          className="MultiSelect"
          classNames={{
            input: " rounded-xl border-greenMain   !h-auto py-1 min-h-[60px]",
            label: "text-base lg:text-xl mb-2",
          }}
        />
        <TextInput
          label={"رقم الترخيص/الاعتماد "}
          type={"number"}
          placeholder={"ادخل رقم الترخيص او الاعتماد"}
          name="idNumber"
          value={DocSpeData.idNumber || ""}
          onChange={handleOnChange}
          classNames={{
            input: " rounded-xl border-greenMain   !h-auto py-1 min-h-[60px]",
            label: "text-base lg:text-xl mb-2",
          }}
        />
        <TextInput
          label={"مرخص / معتمد من "}
          placeholder={"ادخل جهة الترخيص او الاعتماد"}
          name="idNumber"
          value={DocSpeData.idNumber || ""}
          onChange={handleOnChange}
          classNames={{
            input: " rounded-xl border-greenMain   !h-auto py-1 min-h-[60px]",
            label: "text-base lg:text-xl mb-2",
          }}
        />
        <TextInput
          label={"الدرجة العلمية "}
          placeholder={"ادخل الدرجة العلمية"}
          name="idNumber"
          value={DocSpeData.idNumber || ""}
          onChange={handleOnChange}
          classNames={{
            input: " rounded-xl border-greenMain   !h-auto py-1 min-h-[60px]",
            label: "text-base lg:text-xl mb-2",
          }}
        />
        <div className="flex gap-4 items-end flex-wrap">
          <Input
            label={"الشهادات "}
            containerClassName={"flex-1 max-w-full"}
            labelClassName={"text-[14px] md:mb-4 mdl:text-[20px]"}
          />
          <div className="h-[56px] flex items-center justify-center gap-4 px-5 py-3 rounded-[10px] bg-greenMain max-w-full w-[132px]">
            <ArrowRight />
            <p className="text-white text-xs md:text-[16px] font-Bold">رفع ملف</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-10 md:max-w-[94%] mx-auto  items-center mt-12 md:mt-20  justify-center flex-1 w-full">
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

export default FormDocSpe;
