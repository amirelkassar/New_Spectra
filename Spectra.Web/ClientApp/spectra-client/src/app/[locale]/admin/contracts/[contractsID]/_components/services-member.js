import { TextInput } from "@mantine/core";
import React from "react";

function ServicesMember() {
  return (
    <div dir="ltr" className="pb-8">
      <h2 className="text-xl font-Bold mb-4"> The price of your services as a member of the Spectra team</h2>
      <ul className="flex flex-col gap-3 pe-7">
        <li  className="flex items-center gap-3">
          <p className="font-Regular text-[15px] min-w-[150px]">examination service</p>
          <div>
            <div  className="flex items-center w-[200px] justify-between h-11 rounded-xl border border-grayDark px-4 py-2">
              <TextInput type='number' className="flex-1" classNames={{input:'border-none h-full flex-1 text-start px-4'}}/>
              <span className="font-SemiBold">$</span>
            </div>
          </div>
        </li>
        <li  className="flex items-center gap-3">
          <p className="font-Regular text-[15px] min-w-[150px]">Counseling Service</p>
          <div>
            <div  className="flex items-center w-[200px] justify-between h-11 rounded-xl border border-grayDark px-4 py-2">
              <TextInput type='number' className="flex-1" classNames={{input:'border-none h-full flex-1 text-start px-4'}}/>
              <span className="font-SemiBold">$</span>
            </div>
          </div>
        </li>
        <li  className="flex items-center gap-3">
          <p className="font-Regular text-[15px] min-w-[150px]">Diagnostic Service </p>
          <div>
            <div  className="flex items-center w-[200px] justify-between h-11 rounded-xl border border-grayDark px-4 py-2">
              <TextInput type='number' className="flex-1" classNames={{input:'border-none h-full flex-1 text-start px-4'}}/>
              <span className="font-SemiBold">$</span>
            </div>
          </div>
        </li>
        <li  className="flex items-center gap-3">
          <p className="font-Regular text-[15px] min-w-[150px]">Follow-up Service  </p>
          <div>
            <div  className="flex items-center w-[200px] justify-between h-11 rounded-xl border border-grayDark px-4 py-2">
              <TextInput type='number' className="flex-1" classNames={{input:'border-none h-full flex-1 text-start px-4'}}/>
              <span className="font-SemiBold">$</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ServicesMember;
