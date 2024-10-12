import CalenderIcon from '@/assets/icons/calender'
import DeleteIcon from '@/assets/icons/delete'
import EditImgIcon from '@/assets/icons/editImg'
import { Link } from '@/navigation'
import ROUTES from '@/routes'
import React from 'react'

function CardAppointmentWork({data}) {
  return (
    <div  className="flex items-center gap-5 w-full">
    <div className="border-4 border-blueLight rounded-2xl flex-col mdl:flex-row px-4 mdl:px-6 py-2 flex  gap-2 mdl:gap-10 mdl:items-center mdl:justify-between flex-1 min-h-[90px]">
      <div className="flex items-center gap-4">
        <CalenderIcon className="w-5 h-auto mdl:w-6" />
        <h3 className="font-Bold text-xs mdl:text-base">
          {data.day}
        </h3>
      </div>
      <div className="flex mdl:items-center gap-3 flex-col mdl:flex-row flex-1 ps-8 mdl:ps-0 mdl:justify-between">
        <p className=" font-Regular text-xs mdl:text-base mdl:text-center flex-1">
          <span className="text-grayDark ">من /</span>
          {data.from}
        </p>
        <p className=" font-Regular text-xs mdl:text-base mdl:text-center flex-1">
          <span className="text-grayDark ">الى /</span>
          {data.to}
        </p>
      </div>
    </div>
    <div className="flex items-center gap-3">
      <button className=" rounded-md duration-200 hover:shadow-md border border-red flex items-center justify-center p-1 w-8 mdl:w-10 h-8 mdl:h-10">
        <DeleteIcon className={"h-4 w-auto"} />
      </button>
      <Link href={ROUTES.DOCTOR.APPOINTMENTSWORKID(data.id)} className=" rounded-md duration-200 hover:shadow-md border border-greenMain  flex items-center justify-center p-1 w-8 mdl:w-10 h-8 mdl:h-10">
        <EditImgIcon fill="#10B0C1" className={"h-5 w-auto"} />
      </Link>
    </div>
  </div>
  )
}

export default CardAppointmentWork