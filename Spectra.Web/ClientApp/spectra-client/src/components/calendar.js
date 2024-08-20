"use client";
import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import man from "@/assets/images/hero-section-img.png";
import Image from "next/image";
import { useParams } from "next/navigation";
function CalendarComp() {
  const params = useParams();
  console.log(params);
  const renderEventContent = (eventInfo) => {
    console.log(eventInfo);

    return (
      <dFiv className="flex flex-col py-4 px-2 gap-1">
        <Image
          src={eventInfo.event.extendedProps.src.src}
          alt="Avatar"
          width={28}
          height={28}
          className=" size-[28px] rounded-full object-cover object-top"
        />
        <h3 className="text-[14px] font-Bold">{eventInfo.event.title}</h3>
        <b>{eventInfo.timeText}</b>
      </dFiv>
    );
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      eventStartEditable={false}
      eventShortHeight={110}
      viewHeight={110}
      events={[
        {
          title: "عبدالله الشيخ",
          start: "2024-08-01T18:00:00",
          color: "#00A3E0",
          textColor: "#fff",
          src: man,
          display: "#00A3E0",
        },
        {
          title: "عبدالله الشيخ",
          start: "2024-08-02T18:00:00",
          color: "#7A7A7A",
          textColor: "#fff",
          src: man,
          display: "#00A3E0",
        },
      ]}
      editable={true}
      droppable={true}
      locale="ar"
      headerToolbar={{
        left: params.locale === "en" ? "prev,title,next" : "",
        right: params.locale === "en" ? "" : "prev,title,next",
      }}
      direction={params.locale === "en" ? "ltr" : "rtl"}
      eventContent={renderEventContent}
    />
  );
}

export default CalendarComp;
