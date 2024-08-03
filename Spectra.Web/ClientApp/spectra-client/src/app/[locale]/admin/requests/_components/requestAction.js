import React from "react";
import MenuActions from "@/components/menu-actions";
import Button from "@/components/button";
import AcceptIcon from "@/assets/icons/accept";
import RefuseIcon from "@/assets/icons/refuse";
import useModal from "@/store/modal-slice";
function RequestAction() {
  const { modal, editModal } = useModal();
  return (
    <div
      className={"   flex w-full justify-end items-center  gap-3 lg:gap-5  "}
    >
      <Button
        onClick={() => {
          editModal("type", "accept");
          editModal("open", true);
        }}
        className={
          "btnReqTable !py-0 text-[12px] lg:text-[14px] !px-4 lg:!px-5 font-bold items-center flex  bg-greenMain justify-center h-[38px] lg:h-11 ring-1 !gap-4 !ring-greenMain border-none text-white"
        }
      >
        <AcceptIcon />
        قبول
      </Button>
      <Button
        onClick={() => {
          editModal("type", "req");
          editModal("open", true);
        }}
        className={
          " !py-0 text-[12px] lg:text-[14px] !px-4 lg:!px-5 flex font-bold items-center justify-center h-[38px] lg:h-11 ring-1 !ring-red text-red border-none"
        }
      >
        <RefuseIcon className={"mdl:block hidden"} />
        رفض
      </Button>

      <MenuActions />
    </div>
  );
}

export default RequestAction;
