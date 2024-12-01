import React from 'react'
import LayContractsID from './_components/LayContractsID'

function layout({children}) {
  return (
    <LayContractsID>
     {children}
    </LayContractsID>
  )
}

export default layout