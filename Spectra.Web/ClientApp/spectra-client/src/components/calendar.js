"use client";
import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import man from "@/assets/images/hero-section-img.png";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useMediaQuery } from "@mantine/hooks";
const events = [
  {
    title: "عبدالله الشيخ",
    start: "2024-11-01T18:00:00",
    color: "#10B0C1",
    textColor: "#fff",
    src: man,
    display: "#10B0C1",
  },
  {
    title: "عبدالله الشيخ",
    start: "2024-11-04T18:00:00",
    color: "#939393",
    textColor: "#fff",
    src: man,
    display: "#939393",
  },
];
function CalendarComp() {
  const params = useParams();
  const isMobile = useMediaQuery("(max-width: 992px)");

  const renderEventContent = (eventInfo) => {
    const dayOfMonth = eventInfo.event.start.getDate();
    return (
      <div className="mdl:p-3 p-1 pb-0 h-full w-full">
        <p className="text-xs mdl:text-lg text-end text-white">{dayOfMonth}</p>
        <div className="flex flex-col  gap-1 -mt-1 mdl:-mt-4">
          <Image
            src={eventInfo.event.extendedProps.src.src}
            alt="Avatar"
            width={28}
            height={28}
            className=" size-4 mdl:size-[28px] rounded-full object-cover object-top"
          />
          <h3 className=" text-xs truncate max-w-full mdl:text-[14px] font-Bold">
            {eventInfo.event.title}
          </h3>
          <b className="text-xs   mdl:text-[14px] font-Regular">
            {eventInfo.timeText}
          </b>
        </div>
      </div>
    );
  };
  const dayCellClassNames = (arg) => {
    return "size-[40px]";
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      eventStartEditable={false}
      resourceAreaHeaderClassNames="bg-greenMain/10 !border-none rounded-t-3xl"
      eventOverlap={false}
      slotMinWidth={isMobile ? 40 : 74}
      eventShortHeight={40}
      contentHeight={600}
      events={events}
      editable={true}
      droppable={true}
      locale={params.locale}
      headerToolbar={{
        left: params.locale === "en" ? "prev,title,next" : "",
        right: params.locale === "en" ? "" : "prev,title,next",
      }}
      direction={params.locale === "en" ? "ltr" : "rtl"}
      eventContent={renderEventContent}
      dayCellClassNames={dayCellClassNames}
    />
  );
}

export default CalendarComp;
