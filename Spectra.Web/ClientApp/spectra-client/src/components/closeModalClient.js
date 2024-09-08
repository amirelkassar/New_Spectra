"use client";
import Button from '@/components/button'
import React from 'react'
import useModal from "@/store/modal-slice";

function CloseModalClient() {
    const {  editModal } = useModal();
  return (
    <Button  onClick={() => {editModal('open',false)}} className={"w-full font-bold  md:h-[60px]"}>
    الغاء
    </Button>
  )
}

export default CloseModalClient