import React from "react";
import BtnSendReq from "./_components/btnSendReq";
import ContractsList from "./_components/contracts-list";
import DraftContracts from "./_components/draftContracts";
function page({ params }) {
  return (
    <div className="h-full flex-1">
      <div className="flex  justify-center -mt-2 pt-10 gap-5 bg-white ">
        <BtnSendReq />
      </div>
      <div className="mt-5">
        
        <ContractsList />
        <DraftContracts />
      </div>
    
    </div>
  );
}

export default page;
