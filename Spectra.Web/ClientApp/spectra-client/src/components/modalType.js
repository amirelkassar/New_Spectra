import React from "react";
import Button from "./button";
import DeleteModalIcon from "@/assets/icons/deleteModal";
import ModalIcon from "@/assets/icons/modalImg";
import useMenu from "@/store/auth/signup/menu-store";
import CancelDateIcon from "@/assets/icons/cancelDate";

function ModalType({ state, GroubId }) {
  const { modal, editModal } = useMenu();
  const getTextWithSelect = () => {
    return state === "accept"
      ? `هل انت متأكد من قبول ${GroubId.length} طلبات`
      : state === "req"
      ? `هل انت متأكد من رفض ${GroubId.length} طلبات`
      : `هل انت متأكد من مسح  ${GroubId.length} عناصر`;
  };

  const getText = () => {
    return state === "accept"
      ? "هل انت متأكد من قبول الطلب"
      : state === "req"
      ? "هل انت متأكد من رفض الطلب"
      : state === "cancellation"
      ? "هل انت متأكد من الغاء الميعاد"
      : "هل انت متأكد من مسح الطلب";
  };
  return (
    <div className="mainModal">
      <div className="flex justify-center items-center mx-auto">
        {state === "delete" ? (
          <DeleteModalIcon />
        ) : state === "cancellation" ? (
          <CancelDateIcon />
        ) : (
          <ModalIcon />
        )}
      </div>
      <p className="text-[22px] lg:text-[28px] text-center mt-3 font-bold">
        {GroubId?.length > 1 ? getTextWithSelect() : getText()}
      </p>

      <div className="actionModal flex gap-5 md:gap-8 justify-center items-center max-w-[98%] w-[470px] mx-auto mt-8 flex-wrap">
        <Button
          onClick={() => {
            editModal("open", false);
          }}
          className={
            "bg-greenMain text-white h-[50px] font-bold text-[16px] md:text-[20px] border-none flex-1 min-w-[180px]"
          }
        >
          نعم , متأكد
        </Button>
        <Button
          onClick={() => {
            editModal("open", false);
          }}
          className={
            "h-[50px] font-bold text-[16px] md:text-[20px]  flex-1 min-w-[180px]"
          }
        >
          لا
        </Button>
      </div>
    </div>
  );
}

export default ModalType;
