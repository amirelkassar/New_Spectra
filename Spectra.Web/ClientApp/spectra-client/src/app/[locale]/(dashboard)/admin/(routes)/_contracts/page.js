import React from "react";
import LayContracts from "./layContracts";
import ContractsTable from "./contracts-table";


function page() {
  return (
    <LayContracts>
      <ContractsTable />
    </LayContracts>
  );
}

export default page;
