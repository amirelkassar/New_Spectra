"use client";
import PlusInsideCircleIcon from "@/assets/icons/plus-inside-circle";
import ModalReq from "@/components/modalReq";
import useMenu from "@/store/auth/signup/menu-store";
import React from "react";

function AddClient() {
    const { modalOneOpen, setModalOneOpen, modal, editModal } = useMenu();
  return (
    <div>
      <button className="flex items-center justify-center w-40 h-10 rounded-xl bg-blueLight gap-4 font-bold" onClick={()=>{
        editModal('open',true); editModal('type','addClient')
      }}>
        <PlusInsideCircleIcon />
        <p className=" text-[14px] md:text-[16px] font-bold">إضافة عميل</p>
      </button>
      <ModalReq/>
    </div>
  );
}

export default AddClient;
