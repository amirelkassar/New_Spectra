import React from "react";
import BtnSendReq from "./_components/btnSendReq";
import ContractInformation from "./_components/contract-Information";
import ContractsList from "./_components/contracts-list";
function page({params}) {
  return (
    <div className="h-full flex-1">
      <div className="flex  justify-center -mt-2 pt-10 gap-5 bg-white h-full">
        <BtnSendReq />
      </div>
      <div className="mt-5">
      <ContractInformation id={params.contractsID}/>
      <ContractsList/>
      </div>
    </div>
  );
}

export default page;
