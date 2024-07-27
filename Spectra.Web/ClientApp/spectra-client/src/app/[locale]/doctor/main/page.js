"use client"
import ModalReq from "@/components/modalReq";
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
        <ModalReq state={"cancellation"} />

      </div>
    </div>
  );
};

export default MainDashboardPage;