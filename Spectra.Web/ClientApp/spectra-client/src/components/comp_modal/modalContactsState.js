import React from "react";
import CloseIcon from "@/assets/icons/close";
import Button from "../button";
import useModal from "@/store/modal-slice";
import OfferReqIcon from "@/assets/icons/offerReq";
import OfferAccIcon from "@/assets/icons/offerAcc";
function ModalContactsState({ accept = true }) {
  const { modal, editModal } = useModal();
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
      <div className="w-[190px] lg:w-[228px] h-auto mx-auto mb-5">
        {accept ? <OfferAccIcon /> : <OfferReqIcon />}
      </div>
      <h2 className="text-[20px] md:text-[28px] text-center font-Bold mb-5">
        {accept
          ? " تهانيا لقد انضممت لفريق سبيكترا"
          : " هل انت متأكد من رفض العرض"}
      </h2>

      <Button
        onClick={() => {
          editModal("open", false);
        }}
        className={
          "bg-greenMain mt-9 text-white h-[50px] font-bold text-[16px] md:text-[20px] border-none flex-1 min-w-[100%]"
        }
      >
        {accept ? " الرجوع للصفحة الرئيسية" : " نعم . مـتأكد"}
      </Button>
    </div>
  );
}

export default ModalContactsState;
