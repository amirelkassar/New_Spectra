import React from "react";
import BtnSendReq from "./_components/btnSendReq";
import ContractInformation from "./_components/contract-Information";
function page() {
  return (
    <div className="h-full flex-1">
      <div className="flex  justify-center -mt-2 pt-10 gap-5 bg-white h-full">
        <BtnSendReq />
      </div>
      <ContractInformation/>
    </div>
  );
}

export default page;
