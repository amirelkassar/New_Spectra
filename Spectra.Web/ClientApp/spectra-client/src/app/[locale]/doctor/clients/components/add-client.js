"use client";
import PlusInsideCircleIcon from "@/assets/icons/plus-inside-circle";
import useMenu from "@/store/auth/signup/menu-store";
import React from "react";

function AddClient() {
    const {editModal } = useMenu();
  return (
    <div className=" md:hidden block">
      <button className="flex items-center justify-center w-40 h-10 rounded-xl bg-blueLight gap-4 font-bold" onClick={()=>{
        editModal('open',true); editModal('type','addClient')
      }}>
        <PlusInsideCircleIcon />
        <p className=" text-[14px] md:text-[16px] font-bold">إضافة عميل</p>
      </button>
    </div>
  );
}

export default AddClient;
