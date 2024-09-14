import React from "react";
import Input from "../../input";
import Button from "../../button";
import CloseModalClient from "../../closeModalClient";

function AddLevelModal() {
  return (
    <div>
      <h2 className="text-[14px] mdl:text-[20px] mb-8 font-Bold">
        اضافة مستوى
      </h2>
      <form className="flex flex-col gap-5 mb-14">
        <Input labelClassName={"text-[12px] md:text-[16px]"} label={"الاسم "} />
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

export default AddLevelModal;
