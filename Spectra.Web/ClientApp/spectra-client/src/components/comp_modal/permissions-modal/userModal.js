import React from "react";
import Input from "../../input";
import SelectBox from "../../select-box";
import Button from "../../button";
import CloseModalClient from "../../closeModalClient";
const cites = ["موظفين 1", " موظفين 2", "موظفين 3", "موظفين 4", "موظفين 5"];
const countries = ["عملاء 1", " عملاء 2", "عملاء 3", "عملاء 4", "عملاء 5"];
function UserModal() {
  return (
    <div>
      <h2 className="text-[14px] mdl:text-[20px] mb-8 font-Bold">
        اضافة مستخدم
      </h2>
      <form className="flex flex-col gap-5 mb-14">
        <Input
          labelClassName={"text-[12px] md:text-[16px]"}
          label={"الاسم الكامل"}
        />
        <Input
          labelClassName={"text-[12px] md:text-[16px]"}
          label={"البريد الإلكتروني "}
        />
        <Input
          labelClassName={"text-[12px] md:text-[16px]"}
          label={"كلمة المرور "}
        />
        <div className="flex items-end flex-col md:flex-row gap-5 w-full flex-1">
          <SelectBox
            options={countries}
            label={"نوع المستخدم"}
            labelClassName={"text-[12px] md:text-[16px]"}
            containerClassName={'flex-1 w-full'}
            placeholder={'عملاء'}
          />
          <SelectBox
            options={cites}
            labelClassName={"text-[12px] md:text-[16px]"}
            containerClassName={'flex-1 w-full'}
            placeholder={'موظفين'}

          />
        </div>
      </form>
      <div className="flex items-center gap-4 md:gap-10 flex-col md:flex-row">
        <Button
          variant="secondary"
          className={"w-full font-bold disabled:cursor-not-allowed md:h-[60px]"}
        >
          تأكيد
        </Button>
        <CloseModalClient />
      </div>
    </div>
  );
}

export default UserModal;
