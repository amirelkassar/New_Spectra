import React from 'react'
import PatientsDetails from '../../../../components/patients-details'
import PatientsDetilsAside from '../../../../components/patientDetails-aside'
import PatientsDetailsAppointments from '../_components/patients-appointments'

function page() {
  return (
    <div className='flex flex-col lg:gap-7 h-[100%]'>
    <PatientsDetails/>
    <div className=' flex-1 flex lg:gap-5 flex-col lg:flex-row'>
      <PatientsDetilsAside/>
      <PatientsDetailsAppointments/>
    </div>
  </div>
    
  )
}

export default page