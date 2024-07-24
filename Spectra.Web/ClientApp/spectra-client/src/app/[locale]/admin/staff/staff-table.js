"use client";

import DeleteIcon from "@/assets/icons/delete";
import EditIcon from "@/assets/icons/edit";
import DeleteButton from "@/components/delete-button";
import EditButton from "@/components/edit-button";
import MenuActions from "@/components/menu-actions";
import TableComponents from "@/components/table-comp";
import { Link } from "@/navigation";
import ROUTES from "@/routes";
import clsx from "clsx";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useState } from "react";

const StaffTable = () => {
  const router = useRouter();
  const locale = useLocale();
  const data = [
    {
      id: 0,
      name: "عبدالله الشيخ",
      numberOfChildren: "50",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
      type: "سكرتير ",
      route: "family",
    },
    {
      id: 1,
      name: "عبدالله الشيخ",
      numberOfChildren: "50",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
      type: "طبيب",
      route: "organization",
    },
    {
      id: 2,
      name: "عبدالله الشيخ",
      numberOfChildren: "50",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
      type: "سكرتير  ",
      route: "provider",
    },
    {
      id: 3,
      name: "عبدالله الشيخ",
      numberOfChildren: "50",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
      type: "سكرتير ",
      route: "family",
    },
    {
      id: 4,
      name: "عبدالله الشيخ",
      numberOfChildren: "50",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
      type: "سكرتير",
      route: "organization",
    },
    {
      id: 5,
      name: "عبدالله الشيخ",
      numberOfChildren: "50",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
      type: " طبيب",
      route: "provider",
    },
    {
      id: 6,
      name: "عبدالله الشيخ",
      numberOfChildren: "50",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
      type: "طبيب ",
      route: "family",
    },
    {
      id: 7,
      name: "عبدالله الشيخ",
      numberOfChildren: "50",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
      type: "طبيب ",
      route: "family",
    },
    {
      id: 8,
      name: "عبدالله الشيخ",
      numberOfChildren: "50",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
      type: "طبيب ",
      route: "family",
    },
    {
      id: 10,
      name: "عبدالله الشيخ",
      numberOfChildren: "50",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
      type: "طبيب ",
      route: "family",
    },
    {
      id: 11,
      name: "عبدالله الشيخ",
      numberOfChildren: "50",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
      type: "طبيب ",
      route: "family",
    },
    {
      id: 12,
      name: "عبدالله الشيخ",
      numberOfChildren: "50",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
      type: "طبيب ",
      route: "family",
    },
    {
      id: 13,
      name: "عبدالله الشيخ",
      numberOfChildren: "50",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
      type: "طبيب ",
      route: "family",
    },
  ];

  const handleRouting = (item) => {
    if (item.route === "organization") {
      router.push(ROUTES.ADMIN.CLIENTS.ORGANIZATION.DETAILS(item.id));
    }
    if (item.route === "family") {
      router.push(ROUTES.ADMIN.CLIENTS.ORGANIZATION.DETAILS(item.id));
    }
  };
  const [selected, setSelected] = useState([]);
  return (
    <div className="grow max-h-[calc(100vh-325px)] overflow-auto min-h-[600px]">
      <TableComponents
        colNum={6}
        colNumSmall={5}
        hide={2}
        data={data}
        dataLine={1}
        header={["الاسم", "الايميل", "الوظيفة", "  تاريخ الانضمام",' عدد المرضى','']}
        order={["name", "email", "type", "lastLogin",'numberOfChildren','']}
        selectPage={selected}
        setSelected={setSelected}
        type={1}
        route={ROUTES.ADMIN.STAFF}
      />
    
    </div>
  );
};

export default StaffTable;
