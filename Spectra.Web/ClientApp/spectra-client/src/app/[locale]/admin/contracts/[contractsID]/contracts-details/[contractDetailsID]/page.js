import React from "react";
import ContractInformation from "./_components/contract-Information";

function page({ params }) {
  return <ContractInformation employeeID={params.contractsID} id={params.contractDetailsID} />;
}

export default page;
