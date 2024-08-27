import EditIcon from "@/assets/icons/edit";
import { TextInput } from "@mantine/core";
import React from "react";

function ServicesMember() {
  return (
    <div dir="ltr" className="pb-8">
      <h2 className="text-[16px] mdl:text-xl font-Bold mb-4"> Price of your services as a freelancer</h2>
      <ul className="flex flex-col gap-3 ps-7">
        <li  className="flex items-center gap-3">
          <p className="font-Regular text-[12px] mdl:text-[15px] min-w-[120px] mdl:min-w-[150px]">examination service</p>
          <div className="flex items-center gap-3"> 
            <div  className="flex items-center w-[156px] mdl:w-[200px] justify-between h-9 overflow-hidden mdl:h-11 rounded-xl border border-greenMain px-4 py-2">
              <TextInput type='number' className="flex-1" classNames={{input:'border-none  h-full flex-1 text-[12px] mdl:text-[16px] text-start px-4'}}/>
              <span className="font-SemiBold text-[12px] mdl:text-[16px]">$</span>
            </div>
            <EditIcon pathColor="#10B0C1"/>
          </div>
        </li>
        <li  className="flex items-center gap-3">
          <p className="font-Regular text-[12px] mdl:text-[15px] min-w-[120px] mdl:min-w-[150px]">Counseling Service</p>
          <div className="flex items-center gap-3"> 
            <div  className="flex items-center w-[156px] mdl:w-[200px] justify-between h-9 overflow-hidden mdl:h-11 rounded-xl border border-grayDark px-4 py-2">
              <TextInput type='number' className="flex-1" classNames={{input:'border-none h-full flex-1 text-[12px] mdl:text-[16px] text-start px-4'}}/>
              <span className="font-SemiBold text-[12px] mdl:text-[16px]">$</span>
            </div>
          </div>
        </li>
        <li  className="flex items-center gap-3">
          <p className="font-Regular text-[12px] mdl:text-[15px] min-w-[120px] mdl:min-w-[150px]">Diagnostic Service </p>
          <div className="flex items-center gap-3"> 
            <div  className="flex items-center w-[156px] mdl:w-[200px] justify-between h-9 overflow-hidden mdl:h-11 rounded-xl border border-grayDark px-4 py-2">
              <TextInput type='number' className="flex-1" classNames={{input:'border-none h-full flex-1 text-[12px] mdl:text-[16px] text-start px-4'}}/>
              <span className="font-SemiBold text-[12px] mdl:text-[16px]">$</span>
            </div>
          </div>
        </li>
        <li  className="flex items-center gap-3">
          <p className="font-Regular text-[12px] mdl:text-[15px] min-w-[120px] mdl:min-w-[150px]">Follow-up Service  </p>
          <div className="flex items-center gap-3"> 
            <div  className="flex items-center w-[156px] mdl:w-[200px] justify-between h-9 overflow-hidden mdl:h-11 rounded-xl border border-grayDark px-4 py-2">
              <TextInput type='number' className="flex-1" classNames={{input:'border-none h-full flex-1 text-[12px] mdl:text-[16px] text-start px-4'}}/>
              <span className="font-SemiBold text-[12px] mdl:text-[16px]">$</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ServicesMember;
