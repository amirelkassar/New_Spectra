import DeleteIcon from '@/assets/icons/delete'
import VerifyIcon from '@/assets/icons/verify'
import Image from 'next/image'
import React from 'react'
import bank from "@/assets/images/bank.png";

function BankAccounts() {
  return (
    <div className="xl:min-w-[350px] min-w-[300px] mdl:max-w-[420px] w-full md:w-[300px] xl:w-[420px] bg-white md:px-5 md:py-8  rounded-[10px] flex-1">
    <h2 className="mb-4 mdl:mb-6 text-[14px] mdl:text-[20px] font-Bold">
      حساباتى البنكية
    </h2>
    <div className="flex flex-col gap-4 w-full ">
      <div className="p-4 rounded-[10px] border-[2px] border-grayLight w-full flex items-center justify-between gap-4 ">
        <button className="bg-transparent size-[24px] me-4">
          <DeleteIcon />
        </button>
        <div className="flex items-center gap-5">
        <div>
            <h3 className="text-[#1D3A70] text-[12px] mb-1 font-Bold text-end">U.S Bank</h3>
            <p className="text-grayDark text-[12px] mb-1">احمد محمد كمال</p>
          </div>
          <div className=" size-[48px] rounded-[50%] flex items-center justify-center bg-grayLight p-2 relative">
            <Image
              src={bank}
              alt="bank"
              width={34}
              height={34}
              className=" object-fill w-full h-auto"
            />
            <VerifyIcon className={"absolute bottom-0 start-0"} />
          </div>
        
        </div>
      </div>
      <div className="p-4 rounded-[10px] border-[2px] border-grayLight w-full flex items-center justify-between gap-4 ">
        <button className="bg-transparent size-[24px] me-4">
          <DeleteIcon />
        </button>
        <div className="flex items-center gap-5">
        <div>
            <h3 className="text-[#1D3A70] text-[12px] mb-1 font-Bold text-end">U.S Bank</h3>
            <p className="text-grayDark text-[12px] mb-1">احمد محمد كمال</p>
          </div>
          <div className=" size-[48px] rounded-[50%] flex items-center justify-center bg-grayLight p-2 relative">
            <Image
              src={bank}
              alt="bank"
              width={34}
              height={34}
              className=" object-fill w-full h-auto"
            />
            <VerifyIcon className={"absolute bottom-0 start-0"} />
          </div>
        
        </div>
      </div>
      <div className="p-4 rounded-[10px] border-[2px] border-grayLight w-full flex items-center justify-between gap-4 ">
        <button className="bg-transparent size-[24px] me-4">
          <DeleteIcon />
        </button>
        <div className="flex items-center gap-5">
        <div>
            <h3 className="text-[#1D3A70] text-[12px] mb-1 font-Bold text-end">U.S Bank</h3>
            <p className="text-grayDark text-[12px] mb-1">احمد محمد كمال</p>
          </div>
          <div className=" size-[48px] rounded-[50%] flex items-center justify-center bg-grayLight p-2 relative">
            <Image
              src={bank}
              alt="bank"
              width={34}
              height={34}
              className=" object-fill w-full h-auto"
            />
            <VerifyIcon className={"absolute bottom-0 start-0"} />
          </div>
        
        </div>
      </div>
    </div>
  </div>
  )
}

export default BankAccounts