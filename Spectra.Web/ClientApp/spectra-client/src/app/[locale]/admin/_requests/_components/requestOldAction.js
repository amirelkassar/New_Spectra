import React from "react";
import Button from "@/components/button";
import useModal from "@/store/modal-slice";
import RecoveryIcon from "@/assets/icons/recovery";
import DeleteIcon from "@/assets/icons/delete";
import ActionMenu from "./ActionMenu";
function RequestOldAction({ id }) {
  const { modal, editModal } = useModal();
  return (
    <div className={"flex w-full justify-end items-center  gap-3 lg:gap-5  "}>
      <Button
        className={
          " btnReqTable  !py-0 text-[12px] lg:text-[14px] !px-2 lg:!px-5 font-bold items-center flex   justify-center h-[38px] lg:h-11 ring-1 !gap-4 !ring-black border-none text-[#010036]"
        }
      >
        <RecoveryIcon />
        استعادة
      </Button>
      <Button
        onClick={() => {
          editModal("type", "delete");
          editModal("open", true);
        }}
        className={
          "btnReqTable !py-0 text-[12px] lg:text-[14px] !px-2 lg:!px-5 flex font-bold items-center justify-center h-[38px] lg:h-11 ring-1 !ring-red text-red border-none"
        }
      >
        <DeleteIcon />
        مسح
      </Button>

      <ActionMenu id={id} />
    </div>
  );
}

export default RequestOldAction;
