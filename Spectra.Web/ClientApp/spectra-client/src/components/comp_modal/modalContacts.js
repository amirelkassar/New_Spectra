import React from "react";
import Button from "../button";
import useModal from "@/store/modal-slice";
import OfferSendIcon  from '@/assets/icons/offerSend'
function ModalContacts() {
  const { modal, editModal } = useModal();
  return (
    <div className="">
      <div className="w-[190px] lg:w-[228px] h-auto mx-auto mb-10">
        <OfferSendIcon />
      </div>
      <h2 className="text-[20px] md:text-[28px] text-center font-Bold mb-3">
        لقد تم ارسال العقد الى المشرف و رئيس القسم{" "}
      </h2>
      <h3 className=" text-[14px] text-center md:text-[20px] font-Regular  mb-8">
      يمكنك متابعة طلب العقد من قسم العقود او الاشعارات الخاصة بك 
      </h3>
      <Button
        onClick={() => {
          editModal("open", false);
        }}
        className={
          "bg-greenMain mt-9 text-white max-w-[90%] h-[50px] font-bold text-[16px] md:text-[20px] border-none flex-1 min-w-[100%]"
        }
      >
        حسنا
      </Button>
    </div>
  );
}

export default ModalContacts;
