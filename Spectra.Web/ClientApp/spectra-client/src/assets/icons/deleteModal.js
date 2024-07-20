import Image from 'next/image'
import React from 'react'
import deleteModal from "@/assets/images/deleteModal.png";

function DeleteModalIcon() {
  return (
    <Image src={deleteModal} alt='deletIcon' priority />
  )
}

export default DeleteModalIcon