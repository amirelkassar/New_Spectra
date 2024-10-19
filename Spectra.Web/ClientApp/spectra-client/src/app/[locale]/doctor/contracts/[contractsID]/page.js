import React from 'react'
import ContractInformation from "../_components/contract-Information";
function page({params}) {
  return (
    
    <ContractInformation id={params.contractsID}/>
  
  )
}

export default page