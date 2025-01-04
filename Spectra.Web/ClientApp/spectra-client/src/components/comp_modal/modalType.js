import React from "react";
import Button from "../button";
import DeleteModalIcon from "@/assets/icons/deleteModal";
import ModalIcon from "@/assets/icons/modalImg";
import CancelDateIcon from "@/assets/icons/cancelDate";
import CancelReqIcon from "@/assets/icons/CancelReq";
import useModal from "@/store/modal-slice";

function ModalType({ }) {
  const { modal, editModal } = useModal();
  const getTextWithSelect = () => {
    return modal.type === "accept"
      ? `هل انت متأكد من قبول ${modal.countSelect} طلبات`
      : modal.type === "req"
      ? `هل انت متأكد من رفض ${modal.countSelect} طلبات`
      : `هل انت متأكد من مسح  ${modal.countSelect} عناصر`;
  };

  const getText = () => {
    return modal.type === "accept"
      ? "هل انت متأكد من قبول الطلب"
      : modal.type === "req"
      ? "هل انت متأكد من رفض الطلب"
      : modal.type === "cancellation"
      ? "هل انت متأكد من الغاء الميعاد"
      : "هل انت متأكد من مسح الطلب";
  };
  return (
    <div className="mainModal">
      <div className="flex justify-center mb-10 mt-4 items-center mx-auto">
        {modal.type === "delete" ? (
          <DeleteModalIcon />
        ) : modal.type === "cancellation" ? (
          <CancelDateIcon className={'w-[170px] h-auto mdl:w-[220px]'} />
        ): modal.type === "req" ? (
          <CancelReqIcon />
        ) : (
          <ModalIcon />
        )}
      </div>
      <p className="text-[22px] lg:text-[28px] text-center mt-3 font-bold">
        {modal.countSelect > 1 ? getTextWithSelect() : getText()}
      </p>

      <div className="actionModal flex-col mdl:flex-row flex gap-5 md:gap-8 justify-center items-center max-w-[98%] w-full mdl::w-[470px] mx-auto mt-8 flex-wrap">
        <Button
          onClick={() => {
            editModal("open", false);
          }}
          className={
            "bg-greenMain text-white h-[50px] font-bold text-[16px] md:text-[20px] border-none w-full !flex-1 "
          }
        >
          نعم , متأكد
        </Button>
        <Button
          onClick={() => {
            editModal("open", false);
          }}
          className={
            "h-[50px] font-bold text-[16px] md:text-[20px]  !flex-1 w-full"
          }
        >
          لا
        </Button>
      </div>
    </div>
  );
}

export default ModalType;
