import React from "react";
import ContractsList from "./_components/contracts-list";
function Page({params}) {
  return <ContractsList idUser={params.contractsID} />;
}

export default Page;
