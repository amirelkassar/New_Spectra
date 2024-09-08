"use client"
import Cards from "./cards";
import LastAppointments from "./last-appointments";
import HeaderMain from "./headerMain";
import { useState } from "react";
import BookingCode from "./bookingCode";

const MainDashboardPage = () => {
  const [active,setActive]=useState(false)
  return (
    <div className="w-full flex flex-col bg-white mdl:bg-transparent gap-6 h-full">
      <HeaderMain setActive={setActive} />
      <div className={`w-full flex flex-col bg-white mdl:bg-transparent gap-6 h-full ${active?'':'opacity-[0.5] pointer-events-none'} `} >
        <Cards />
        <LastAppointments />
        <BookingCode/>
      </div>
    </div>
  );
};

export default MainDashboardPage;
