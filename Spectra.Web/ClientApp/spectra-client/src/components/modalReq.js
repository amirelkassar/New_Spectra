"use client"
import ModalIcon from '@/assets/icons/modalImg'
import useMenu from '@/store/auth/signup/menu-store';
import { Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import React, { useState } from 'react'
import Button from './button';

function ModalReq({state,id}) {
    const {modalOneOpen,setModalOneOpen} = useMenu();
  return (
    <Modal opened={modalOneOpen} size={'lg'}  withCloseButton={false} centered onClose={()=>{setModalOneOpen(false)}} className='modelReq' >
  <div className='mainModal'>
    <div className='flex justify-center items-center mx-auto'>
    <ModalIcon/>

    </div>
    <p className='text-[22px] lg:text-[28px] text-center mt-3 font-bold'>
    {
        state==='accept' ?'هل انت متأكد من قبول الطلب' : 'هل انت متأكد من رفض الطلب'
    }
    </p>
   
   <div className='actionModal flex gap-5 md:gap-8 justify-center items-center max-w-[98%] w-[470px] mx-auto mt-8 flex-wrap'>
    <Button  onClick={()=>{setModalOneOpen(false)}} className={'bg-[#10B0C1] text-white h-[50px] font-bold text-[16px] md:text-[20px] border-none flex-1 min-w-[180px]'}>نعم , متأكد</Button>
    <Button onClick={()=>{setModalOneOpen(false)}} className={'h-[50px] font-bold text-[16px] md:text-[20px]  flex-1 min-w-[180px]'}>لا</Button>
   
   </div>
  </div>
  </Modal>
  )
}

export default ModalReq