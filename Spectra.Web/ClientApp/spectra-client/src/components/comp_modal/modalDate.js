import CloseIcon from "@/assets/icons/close";
import TimeIcon from "@/assets/icons/time";
import { ActionIcon } from "@mantine/core";
import { DatePicker, TimeInput } from "@mantine/dates";
import React, { useRef, useState } from "react";
import Button from "../button";
import SearchIcon from "@/assets/icons/search";
import useModal from "@/store/modal-slice";

function ModalDate({ id }) {
  const [valueDate, setValueDate] = useState();
  const { modal, editModal } = useModal();

  const ref = useRef(null);
  const pickerControl = (
    <ActionIcon
      variant="subtle"
      color="gray"
      onClick={() => ref.current?.showPicker()}
    >
      <TimeIcon />
    </ActionIcon>
  );
  return (
    <div className="">
      <div
        className=" size-[30px] mdl:size-[45px] rounded-[50%] mb-4 md:mb-6 cursor-pointer"
        onClick={() => {
          editModal("open", false);
        }}
      >
        <CloseIcon className={"w-[100%] h-[100%] rounded-[50%]"} />
      </div>
      <h2 className="ext-[14px] md:text-[20px] font-Bold mb-4">اعادة جدولة</h2>
      <ul className="flex items-center gap-8 flex-wrap justify-center mb-10">
        <li className="text-center text-[14px] md:text-[20px] font-Regular mb-0">
          العملاء{" "}
        </li>
        <li className="text-center text-[14px] md:text-[20px] font-Bold mb-0">
          عبدالله الشيخ{" "}
        </li>
        <li className="text-center text-[14px] md:text-[20px] font-Bold mb-0">
          عائلة الطفل{" "}
        </li>
      </ul>
      <ul className="flex flex-col gap-1 justify-center items-center text-center">
        <li className="text-center text-[14px] md:text-[20px] font-Bold mb-0 text-grayDark">
          الميعاد الحالى
        </li>
        <li className="text-center text-[14px] md:text-[20px] font-Bold mb-0">
          20/2/2024
        </li>
        <li className="text-center text-[14px] md:text-[20px] font-Bold mb-0">
          الاثنين
        </li>
        <li className="text-center text-[14px] md:text-[20px] font-Bold mb-0">
          8:00 مساءا
        </li>
      </ul>
      <h3 className="text-center text-[14px] md:text-[20px] font-Regular  mt-9 mb-3">
        اختر تاريخ اليوم والتوقيت للميعاد الجديد
      </h3>
      <h4 className=" text-[14px] md:text-[20px] font-Bold   mb-9">التاريخ</h4>
      <div className="boxDate flex items-center justify-center">
        <DatePicker onChange={setValueDate} size="md" />
      </div>
      <h4 className=" text-[14px] md:text-[20px] font-Bold   mb-9">التوقيت</h4>
      <div className="boxDate flex items-center justify-center">
        <TimeInput
          size="md"
          ref={ref}
          rightSection={pickerControl}
          className="w-[100%] max-w-[270px] mx-auto"
        />
      </div>
      <div>
        <h4 className=" text-[14px] md:text-[20px] font-Bold mb-3  mt-9">
          اسم الطبيب
        </h4>
        <div className="h-[60px] w-[100%] relative outline-greenMain flex border-greenMain border rounded-[10px] items-center px-5">
            <div className="iconSearchModal ">
                <SearchIcon/>
            </div>
          <input
            type="text"
            className="grow block !outline-none   rounded-none px-5  flex-1 h-[100%] "
           
          />
        </div>
        <Button
          onClick={() => {
            editModal("open", false);
          }}
          className={
            "bg-greenMain mt-9 text-white h-[50px] font-bold text-[16px] md:text-[20px] border-none flex-1 min-w-[100%]"
          }
        >
          تأكيد الميعاد
        </Button>
      </div>
    </div>
  );
}

export default ModalDate;
