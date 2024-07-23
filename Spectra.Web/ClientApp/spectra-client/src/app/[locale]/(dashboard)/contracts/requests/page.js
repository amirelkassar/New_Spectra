import React from "react";
import LayContracts from "../layContracts";
import NewContractsTable from "./newContracts-table";

function page() {
  return (
    <LayContracts>
      <NewContractsTable />
    </LayContracts>
  );
}

export default page;
