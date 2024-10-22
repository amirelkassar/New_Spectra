import Button from "@/components/button";
import { TextInput } from "@mantine/core";
import React from "react";

function FormCreateEmail({ setPageForm, firstData, setFirstData }) {
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFirstData({
      ...firstData,
      [name]: value,
    });
  };
  return (
    <div>
      <form className="flex flex-col gap-3 lg:gap-6 px-3 mb-14 focus:">
        <TextInput
          label={"اسم المستخدم "}
          placeholder={"ادخل اسم المستخدم لاضافة حساب"}
          name="UserName"
          value={firstData.UserName || ""}
          onChange={handleOnChange}
          classNames={{
            input: " rounded-xl border-greenMain   !h-auto py-1 min-h-[60px]",
            label: "text-base lg:text-xl mb-2",
          }}
        />
        <TextInput
          label={"كلمة المرور"}
          placeholder={"ادخل كلمة مرور"}
          name="Password"
          value={firstData.Password || ""}
          onChange={handleOnChange}
          classNames={{
            input: " rounded-xl border-greenMain   !h-auto py-1 min-h-[60px]",
            label: "text-base lg:text-xl mb-2",
          }}
        />
        <TextInput
          label={"تأكيد كلمة المرور"}
          placeholder={"ادخل كلمة مرور مرة اخرى"}
          name="ConfirmPassword"
          value={firstData.ConfirmPassword || ""}
          onChange={handleOnChange}
          classNames={{
            input: " rounded-xl border-greenMain   !h-auto py-1 min-h-[60px]",
            label: "text-base lg:text-xl mb-2",
          }}
        />
        <div className="flex flex-col md:flex-row gap-4 md:gap-10 md:max-w-[94%] mx-auto  items-center mt-12 md:mt-20  justify-center flex-1 w-full">
          <Button
            onClick={() => {
              console.log("done seend ");
            }}
            variant="secondary"
            className="font-Bold flex-1 text-base md:text-xl w-[434px] h-14 max-w-full"
          >
            حفظ
          </Button>
          <Button
            onClick={() => setPageForm(2)}
            className="font-Bold flex-1 text-base md:text-xl w-[434px] h-14 max-w-full"
          >
            السابق
          </Button>
        </div>
      </form>
    </div>
  );
}

export default FormCreateEmail;
