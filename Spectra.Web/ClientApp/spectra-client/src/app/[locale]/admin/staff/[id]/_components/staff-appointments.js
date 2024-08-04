"use client";
import { DataTable } from "@/components/data-table";
import { columns } from "./columns";

const data = [
  {
    id: 0,
    name: "عبدالله الشيخ",
    DetectionNumber: "كشف 1",
    date: "25/4/2024",
    time: "10:00 pm",
    statu: "لم يبدأ بعد",
  },
  {
    id: 1,
    name: "عبدالله الشيخ",
    DetectionNumber: "متابعة",
    date: "25/4/2024",
    time: "10:00 pm",
    statu: "تمت",
  },
  {
    id: 2,
    name: "عبدالله الشيخ",
    DetectionNumber: " 5 كشف ",
    date: "25/4/2024",
    time: "10:00 pm",
    statu: "لم يبدأ بعد",
  },
  {
    id: 3,
    name: "عبدالله الشيخ",
    DetectionNumber: "متابعة",
    date: "25/4/2024",
    time: "10:00 pm",
    statu: "تمت",
  },
  {
    id: 4,
    name: "عبدالله الشيخ",
    DetectionNumber: "كشف 1",
    date: "25/4/2024",
    time: "10:00 pm",
    statu: "تمت",
  },
];
const StaffAppointments = () => {
  return (
    <div className="rounded-xl bg-white pt-5  lg:p-8 grow w-[100%] lg:max-w-[calc(100%-250px)]">
      <DataTable IsWidth={true} data={data} columns={columns} />
    </div>
  );
};

export default StaffAppointments;
