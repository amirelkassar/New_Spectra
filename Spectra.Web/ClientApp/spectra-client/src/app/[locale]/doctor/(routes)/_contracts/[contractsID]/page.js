import React from "react";
import ContractInformation from "../_components/contract-Information";
import ContractsDetails from "../_components/contractsDetails";
function page({ params }) {
  return (
    <div className="w-full flex flex-col gap-6 flex-1"> 
      <ContractInformation id={params.contractsID} />
      <ContractsDetails />
    </div>
  );
}

export default page;
