"use client";
import React from "react";
import Button from "@/components/button";
import ReschedulingIcon from "@/assets/icons/rescheduling";
import DeleteIcon from "@/assets/icons/delete";
import MenuActions from "@/components/menu-actions";
import useModal from "@/store/modal-slice";
function ActionDeferred() {
  const { modal, editModal } = useModal();
  return (
    <div className={"flex gap-2 lg:gap-5 justify-end items-center "}>
      <Button
        onClick={() => {
          editModal("type", "date");
          editModal("open", true);
        }}
        className={
          " btnReqTable  !py-0 text-[12px] lg:text-[14px] text-nowrap !px-2 lg:!px-5 font-bold items-center flex   justify-center h-[38px] lg:h-11 ring-1 !gap-4 !ring-black border-none text-[#010036]"
        }
      >
        <ReschedulingIcon />
        اعادة جدولة
      </Button>
      <Button
        onClick={() => {
          editModal("type", "delete");
          editModal("open", true);
        }}
        className={
          "btnReqTable !py-0 text-[12px] lg:text-[14px] !px-2 min-w-[60px]  mdl:!min-w-[100px] flex font-bold items-center justify-center h-[38px] lg:h-11 ring-1 !ring-red text-red border-none"
        }
      >
        <DeleteIcon />
        مسح
      </Button>
    </div>
  );
}

export default ActionDeferred;
