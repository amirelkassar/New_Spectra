import React from 'react'
import StaffDetails from '../components/staff-details'
import StaffAside from '../staff-aside'
import StaffAppointments from './_components/staff-appointments'

function page() {
  return (
    <div className='flex flex-col lg:gap-7 h-[100%]'>
      <StaffDetails/>
      <div className=' flex-1 flex lg:gap-5 flex-col lg:flex-row'>
        <StaffAside/>
        <StaffAppointments/>
      </div>
    </div>
  )
}

export default page