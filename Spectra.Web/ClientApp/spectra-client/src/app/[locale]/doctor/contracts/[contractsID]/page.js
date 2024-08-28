import React from 'react'
import ContractInformation from "../_components/contract-Information";
function page({params}) {
  return (
    <div className="mt-5">
    <ContractInformation id={params.contractsID}/>
  </div>
  )
}

export default page