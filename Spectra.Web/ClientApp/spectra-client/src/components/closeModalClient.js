"use client";
import Button from '@/components/button'
import useMenu from '@/store/auth/signup/menu-store';
import React from 'react'

function CloseModalClient() {
    const { modalOneOpen, setModalOneOpen, modal, editModal } = useMenu();
  return (
    <Button  onClick={() => {editModal('open',false)}} className={"w-full font-bold  md:h-[60px]"}>
    الغاء
    </Button>
  )
}

export default CloseModalClient