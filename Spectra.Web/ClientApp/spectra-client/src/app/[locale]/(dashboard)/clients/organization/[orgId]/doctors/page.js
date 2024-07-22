"use client"
import clsx from "clsx";
import MenuActions from "@/components/menu-actions";
import StarGoldIcon from "@/assets/icons/starGold";
import { Link } from "@/navigation";
import { useParams, usePathname } from "next/navigation";
import ROUTES from "@/routes";
import TableComponents from "@/components/table-comp";
import { useState } from "react";

const DoctorsOrg = ({}) => {
    const params = useParams();
console.log(params);
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
      route: ROUTES.ADMIN.CLIENTS.ORGANIZATION.DOCTORSDETAILS(params.orgId),
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
      id:6,
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
  const getStar = (num) => {
    const stars = [];
    for (let i = 1; i <= num; i++) {
      stars.push(<StarGoldIcon key={i} className={'w-[14px] lg:w-[18px] h-auto'}/>);
    }
    return stars;
  };
  const [selected, setSelected] = useState([]);
  const updateRoute = (id) => {
    return  ROUTES.ADMIN.CLIENTS.ORGANIZATION.PATIENTS(id)
   };
  return (
    <div className="rounded-xl bg-white pt-5  lg:p-8 grow w-[100%]">
      <h1 className="ms-5 mb-5 lg:block hidden ">اطباء المنظمة</h1>
      <TableComponents
        data={data}
        colNum={5}
        colNumSmall={4}
        dataLine={1}
        header={["الاسم", " تخصص الطبيب", "تاريخ الانضمام", "التقييم",'']}
        order={["doctor", "specialisationDoctor", "date", "stars",'']}
        selectPage={selected}
        setSelected={setSelected}
        type={2}
        hide={4}
        routeClients={true}
        route={ROUTES.ADMIN.CLIENTS.FAMILY.PATIENTS(5)}
        RouteFun={updateRoute}
      />
     
    </div>
  );
};

export default DoctorsOrg;
