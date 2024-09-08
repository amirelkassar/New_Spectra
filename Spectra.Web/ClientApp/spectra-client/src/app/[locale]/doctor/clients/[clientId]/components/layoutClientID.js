import React from 'react'
import DetailsAside from '../details-aside'

function LayoutClientID({ children }) {
  return (
    <section className="grow flex flex-col lg:flex-row lg:gap-6">
      <DetailsAside />
      {children}
    </section>
  )
}

export default LayoutClientID