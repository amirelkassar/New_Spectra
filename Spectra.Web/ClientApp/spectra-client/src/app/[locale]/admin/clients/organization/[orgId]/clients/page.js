"use client";
import DeleteButton from "@/components/delete-button";
import EditButton from "@/components/edit-button";
import MenuActions from "@/components/menu-actions";
import TableComponents from "@/components/table-comp";
import { Link } from "@/navigation";
import ROUTES from "@/routes";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useState } from "react";

const OrganizationClientsPage = () => {
  const router = useRouter();
  const handleRouting = (id) => {
    router.push(ROUTES.ADMIN.CLIENTS.FAMILY.PATIENTS(id));
  };

  const data = [
    {
      id: 0,
      name: "عبدالله الشيخ",
      lastLogin: "25/4/2024",
      numberOfChildren: "1",
    },
    {
      id: 1,
      name: "عبدالله الشيخ",
      lastLogin: "25/4/2024",
      numberOfChildren: "1",
    },
    {
      id: 2,
      name: "عبدالله الشيخ",
      lastLogin: "25/4/2024",
      numberOfChildren: "1",
    },
    {
      id: 3,
      name: "عبدالله الشيخ",
      lastLogin: "25/4/2024",
      numberOfChildren: "1",
    },
    {
      id: 4,
      name: "عبدالله الشيخ",
      lastLogin: "25/4/2024",
      numberOfChildren: "1",
    },
    {
      id: 5,
      name: "عبدالله الشيخ",
      lastLogin: "25/4/2024",
      numberOfChildren: "1",
    },
    {
      id: 6,
      name: "عبدالله الشيخ",
      lastLogin: "25/4/2024",
      numberOfChildren: "1",
    },
    {
      id: 7,
      name: "عبدالله الشيخ",
      lastLogin: "25/4/2024",
      numberOfChildren: "1",
    },
    {
      id: 8,
      name: "عبدالله الشيخ",
      lastLogin: "25/4/2024",
      numberOfChildren: "1",
    },
    {
      id: 9,
      name: "عبدالله الشيخ",
      lastLogin: "25/4/2024",
      numberOfChildren: "1",
    },
    {
      id: 10,
      name: "عبدالله الشيخ",
      lastLogin: "25/4/2024",
      numberOfChildren: "1",
    },
  ];
  const [selected, setSelected] = useState([]);
  const updateRoute = (id) => {
    return  ROUTES.ADMIN.CLIENTS.ORGANIZATION.PATIENTS(id)
   };
 
  return (
    <section className="default-page grow">
      <div className="flex items-center justify-between">
        <h2 className=" lg:block hidden text-[20px]">عملاء المنظمة</h2>
        <MenuActions />
      </div>
      <TableComponents
        data={data}
        colNum={4}
        dataLine={1}
        header={["الاسم", " عدد الاطفال", "اخر دخول", ""]}
        order={["name", "numberOfChildren", "lastLogin", ""]}
        selectPage={selected}
        setSelected={setSelected}
        type={2}
        routeClients={true}
        route={ROUTES.ADMIN.CLIENTS.FAMILY.PATIENTS(5)}
        RouteFun={updateRoute}

      />

    </section>
  );
};

export default OrganizationClientsPage;
