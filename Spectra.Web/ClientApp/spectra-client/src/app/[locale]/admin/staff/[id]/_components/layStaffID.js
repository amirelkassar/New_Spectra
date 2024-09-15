"use client";
import React from "react";
import StaffDetails from "./staff-details";
import { useSearchParams } from "next/navigation";
import StaffAside from "./staff-aside";
import StaffInformation from "./StaffInformation";

function LayStaffID({ children }) {
  const searchParams = useSearchParams();
  return searchParams.get("type") === "doctor" ||
    searchParams.get("type") === "specialist" ? (
    <div className="flex flex-col lg:gap-7 h-[100%]">
      <StaffDetails />
      <div className=" flex-1 flex lg:gap-5 flex-col lg:flex-row">
        <StaffAside />
        {children}
      </div>
    </div>
  ) : <StaffInformation/>;
}

export default LayStaffID;
