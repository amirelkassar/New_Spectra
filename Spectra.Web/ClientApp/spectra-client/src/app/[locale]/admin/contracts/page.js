import React from "react";
import LayContracts from "./layContracts";
import ContractsTable from "./contracts-table";


function page({ children }) {
  return (
    <LayContracts>
      <ContractsTable />
    </LayContracts>
  );
}

export default page;
