import React from 'react'
import PermissionsAside from './permissions-aside'

function LayoutPermissions({children}) {
  return (
    <section className="sec-page">
    <section className="grow flex flex-col lg:flex-row lg:gap-6">
      <PermissionsAside />
      <div className="rounded-xl bg-white pt-5  lg:p-8 grow w-[100%]">
      {children}
      </div>
    </section>
  </section>
  )
}

export default LayoutPermissions