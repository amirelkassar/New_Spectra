import DateIcon2 from '@/assets/icons/date2'
import { Link } from '@/navigation'
import ROUTES from '@/routes'
import React from 'react'

function LinkToCalender() {
  return (
    <Link
    href={ROUTES.DOCTOR.APPOINTMENTSCALENDAR}
    className={`
      bg-greenMain
   size-[45px] md:size-[50px] rounded-[50%]  flex items-center justify-center`}
  >
    <DateIcon2 />
  </Link>
  )
}

export default LinkToCalender