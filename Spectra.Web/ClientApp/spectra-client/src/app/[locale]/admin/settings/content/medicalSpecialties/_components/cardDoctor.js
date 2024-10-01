'use client'
import React from "react";
import DeleteIcon from "@/assets/icons/delete";
import ChangeIcon from "@/assets/icons/change";
import doctor from "@/assets/images/placeholder-person.png";
import Image from "next/image";
import StarWhiteIcon from "@/assets/icons/starWhite";
import useModal from '@/store/modal-slice'
function CardDoctor() {
  const {editModal}= useModal()
  const handleButtonClick = (e) => {
    editModal('open', true);
    editModal('type', 'delete');
  };
    return (
    <div className="lgl:min-w-[230px] flex-1">
    
      <div className="flex items-center justify-center gap-4 mb-4">
        <button onClick={handleButtonClick} className="border hover:bg-red z-50 border-red rounded-[10px] size-8 lgl:size-[48px] flex items-center justify-center p-2 lgl:p-3">
          <DeleteIcon className={"w-full h-full"} />
        </button>
        <button className="border border-greenMain rounded-[10px] size-8 lgl:size-[48px] flex items-center justify-center p-2 lgl:p-3">
          <ChangeIcon />
        </button>
      </div>
      <div>
        <Image
          width={128}
          height={128}
          src={doctor}
          alt="doctor"
          className=" size-[76px] lgl:size-[128px] rounded-[50%] mx-auto block object-cover object-top"
        />
      </div>
      <div className="pt-[72px] lgl:pt-[122px] mt-[-56px] lgl:mt-[-110px] bg-gradient-to-b from-gray to-white rounded-[10px]">
        <h2 className="text-[14px] lgl:text-[20px] font-Bold text-center">احمد محمد كمال</h2>
        <h3 className="text-[14px] lgl:text-[20px] text-center"> اخصائى نفسى</h3>
        <div className="bg-greenMain w-[70px] lgl:w-[112px] flex justify-center items-center gap-2 mx-auto mt-1 lgl:mt-3 rounded-[10px] py-1 h-7 lgl:h-[40px]">
            <StarWhiteIcon className={'w-3 lgl:w-4 h-auto'}/>
            <p className="text-white text-[14px] lgl:text-[20px] font-Bold">4.9</p>
        </div>
      </div>
    </div>
  );
}

export default CardDoctor;
