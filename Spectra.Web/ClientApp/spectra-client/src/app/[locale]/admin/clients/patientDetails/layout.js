import React from 'react'
import PatientsDetilsAside from '../components/patientDetails-aside'
import PatientsDetailsAppointments from './_components/patients-appointments'

function layout( {children}) {
  return (
    <section className="sec-page">
    <section className="grow flex flex-col  lg:gap-6">
     
      {children}
      <div className=' flex-1 flex lg:gap-5 flex-col lg:flex-row'>
      <PatientsDetilsAside/>
      <PatientsDetailsAppointments/>
    </div>
    </section>
  </section>
  )
}

export default layout