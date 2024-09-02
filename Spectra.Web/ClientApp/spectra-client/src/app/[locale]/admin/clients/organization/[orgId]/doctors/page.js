"use client";
import { useParams } from "next/navigation";
import ROUTES from "@/routes";
import { DataTable } from "@/components/data-table";
import { columns } from "./_components/columns";
const data = [
  {
    id: 0,
    name: "عبدالله الشيخ",
    kinshipName: "عائلة طفل",
    doctor: "احمد محمد كمال",
    specialisationDoctor: " اخصائى نفسى",
    date: "25/4/2024",
    time: "10:00 pm",
    star: 5,
  },
  {
    id: 1,
    name: "عبدالله الشيخ",
    kinshipName: "عائلة طفل",
    doctor: "احمد محمد كمال",
    specialisationDoctor: " اخصائى نفسى",
    date: "25/4/2024",
    time: "10:00 pm",
    star: 5,
  },
  {
    id: 2,
    name: "عبدالله الشيخ",
    kinshipName: "عائلة طفل",
    doctor: "احمد محمد كمال",
    specialisationDoctor: " اخصائى نفسى",
    date: "25/4/2024",
    time: "10:00 pm",
    star: 4,
  },
  {
    id: 3,
    name: "عبدالله الشيخ",
    kinshipName: "عائلة طفل",
    doctor: "احمد محمد كمال",
    specialisationDoctor: " اخصائى نفسى",
    date: "25/4/2024",
    time: "10:00 pm",
    star: 3,
  },
  {
    id: 4,
    name: "عبدالله الشيخ",
    kinshipName: "عائلة طفل",
    doctor: "احمد محمد كمال",
    specialisationDoctor: " اخصائى نفسى",
    date: "25/4/2024",
    time: "10:00 pm",
    star: 3,
  },
  {
    id: 5,
    name: "عبدالله الشيخ",
    kinshipName: "عائلة طفل",
    doctor: "احمد محمد كمال",
    specialisationDoctor: " اخصائى نفسى",
    date: "25/4/2024",
    time: "10:00 pm",
    star: 3,
  },
  {
    id: 6,
    name: "عبدالله الشيخ",
    kinshipName: "عائلة طفل",
    doctor: "احمد محمد كمال",
    specialisationDoctor: " اخصائى نفسى",
    date: "25/4/2024",
    time: "10:00 pm",
    star: 3,
  },
  {
    id: 7,
    name: "عبدالله الشيخ",
    kinshipName: "عائلة طفل",
    doctor: "احمد محمد كمال",
    specialisationDoctor: " اخصائى نفسى",
    date: "25/4/2024",
    time: "10:00 pm",
    star: 3,
  },
];
const DoctorsOrg = ({}) => {
  const params = useParams();
  console.log(params);


  return (
    <div className="rounded-xl bg-white pt-5  lg:p-8 grow w-[100%]">
      <h1 className="ms-5 mb-5 lg:block hidden ">اطباء المنظمة</h1>
      
      <DataTable IsWidth={true} data={data} columns={columns}/>
    </div>
  );
};

export default DoctorsOrg;
