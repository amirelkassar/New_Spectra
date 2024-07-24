import React from "react";
import PatientsDetails from "../../../components/patients-details";

function page({ children }) {
  return (
    <div className="flex flex-col lg:gap-7 h-[100%] w-[100%]">
      <PatientsDetails />
      {children}
    </div>
  );
}

export default page;
