import React from "react";
import ContractInformation from "./contract-Information";

function page({params}) {

  return <ContractInformation id={params.contractsID} />;
}

export default page;
