import React from "react";
import ContractDetails from "./contractDetails";

function page({params}) {

  return <ContractDetails id={params.contractsID} />;
}

export default page;
