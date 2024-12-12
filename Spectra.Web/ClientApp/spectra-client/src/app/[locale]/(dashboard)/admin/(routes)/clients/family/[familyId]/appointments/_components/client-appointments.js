"use client";
import { DataTable } from "@/components/data-table";
import { columns } from "./columns";
import ActionMenu from "./ActionMenuPage";
const data = [
  {
    id: 0,
    name: "عبدالله الشيخ",
    kinshipName: "عائلة طفل",
    doctor: "احمد محمد كمال",
    specialisationDoctor: " اخصائى نفسى",
    date: "25/4/2024",
    time: "10:00 pm",
    statu: "لم يبدأ بعد",
  },
  {
    id: 1,
    name: "عبدالله الشيخ",
    kinshipName: "عائلة طفل",
    doctor: "احمد محمد كمال",
    specialisationDoctor: " اخصائى نفسى",
    date: "25/4/2024",
    time: "10:00 pm",
    statu: "لم يبدأ بعد",
  },
  {
    id: 2,
    name: "عبدالله الشيخ",
    kinshipName: "عائلة طفل",
    doctor: "احمد محمد كمال",
    specialisationDoctor: " اخصائى نفسى",
    date: "25/4/2024",
    time: "10:00 pm",
    statu: "لم يبدأ بعد",
  },
  {
    id: 3,
    name: "عبدالله الشيخ",
    kinshipName: "عائلة طفل",
    doctor: "احمد محمد كمال",
    specialisationDoctor: " اخصائى نفسى",
    date: "25/4/2024",
    time: "10:00 pm",
    statu: "تمت",
  },
  {
    id: 4,
    name: "عبدالله الشيخ",
    kinshipName: "عائلة طفل",
    doctor: "احمد محمد كمال",
    specialisationDoctor: " اخصائى نفسى",
    date: "25/4/2024",
    time: "10:00 pm",
    statu: "تمت",
  },
  {
    id: 5,
    name: "عبدالله الشيخ",
    kinshipName: "عائلة طفل",
    doctor: "احمد محمد كمال",
    specialisationDoctor: " اخصائى نفسى",
    date: "25/4/2024",
    time: "10:00 pm",
    statu: "تمت",
  },
  {
    name: "عبدالله الشيخ",
    kinshipName: "عائلة طفل",
    doctor: "احمد محمد كمال",
    specialisationDoctor: " اخصائى نفسى",
    date: "25/4/2024",
    time: "10:00 pm",
    statu: "تمت",
  },
  {
    id: 7,
    name: "عبدالله الشيخ",
    kinshipName: "عائلة طفل",
    doctor: "احمد محمد كمال",
    specialisationDoctor: " اخصائى نفسى",
    date: "25/4/2024",
    time: "10:00 pm",
    statu: "تمت",
  },
];
const ClientAppointments = () => {
  return (
    <div className="rounded-xl relative bg-white pt-5  lg:p-8 grow w-[100%]">
      <div className=" absolute top-5 end-4">
        <ActionMenu />
      </div>
      <h1 className="ms-5 mb-5 lg:block hidden ">الـمواعيد</h1>

      <DataTable IsWidth={true} data={data} columns={columns} />
    </div>
  );
};

export default ClientAppointments;
