import React from 'react'
import Prescriptions from './_components/Prescriptions'
import Nominations from './_components/Nominations'
import Rumors from './_components/rumors'

function page() {
  return (
    <div className='flex flex-col gap-6'>
        <Prescriptions/>
        <Nominations/>
        <Rumors/>
    </div>
  )
}

export default page