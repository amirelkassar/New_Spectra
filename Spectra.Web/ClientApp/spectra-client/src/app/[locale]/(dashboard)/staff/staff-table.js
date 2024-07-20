"use client";
import DeleteIcon from "@/assets/icons/delete";
import EditIcon from "@/assets/icons/edit";
import DeleteButton from "@/components/delete-button";
import EditButton from "@/components/edit-button";
<<<<<<<< HEAD:Spectra.Web/ClientApp/spectra-client/src/app/[locale]/(dashboard)/clients/clients-table.js
import TableComponents from "@/components/table-comp";
========
import MenuActions from "@/components/menu-actions";
>>>>>>>> bce66fac595d5cfc08a1aa2171e3a7290a8c6922:Spectra.Web/ClientApp/spectra-client/src/app/[locale]/(dashboard)/staff/staff-table.js
import { Link } from "@/navigation";
import ROUTES from "@/routes";
import clsx from "clsx";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useState } from "react";

const StaffTable = () => {
  const router = useRouter();
<<<<<<<< HEAD:Spectra.Web/ClientApp/spectra-client/src/app/[locale]/(dashboard)/clients/clients-table.js
  const locale = useLocale();
========
  const locale = useLocale()
>>>>>>>> bce66fac595d5cfc08a1aa2171e3a7290a8c6922:Spectra.Web/ClientApp/spectra-client/src/app/[locale]/(dashboard)/staff/staff-table.js
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
<<<<<<<< HEAD:Spectra.Web/ClientApp/spectra-client/src/app/[locale]/(dashboard)/clients/clients-table.js
  const [selected, setSelected] = useState([]);
  const updateRoute = (id) => {
   return  ROUTES.ADMIN.CLIENTS.ORGANIZATION.DETAILS(id)
  };

  return (
    <div className="grow max-h-[calc(100vh-325px)] overflow-auto min-h-[600px]">
      <TableComponents
        data={data}
        colNum={6}
        dataLine={1}
        header={[
          "الاسم",
          " عدد الاطفال",
          "الايميل",
          "اخر دخول",
          "نوع العميل",
          "",
        ]}
        order={["name", "numberOfChildren", "email", "lastLogin", "type", ""]}
        selectPage={selected}
        setSelected={setSelected}
        type={2}
        routeClients={true}
        route={ROUTES.ADMIN.CLIENTS.ORGANIZATION.DETAILS(5)}
        RouteFun={updateRoute}
      />
========
  
  return (
    <div className="grow max-h-[calc(100vh-325px)] overflow-auto min-h-[600px]">
      <div className="grid  grid-cols-[repeat(6,minmax(120px,1fr))] md:grid-cols-[repeat(6,minmax(max-content,1fr))] text-center gap-y-1">
        <div className="contents ">
          <div className="bg-blueLight rounded-s-xl py-3 pe-10 ps-8 sticky top-0 text-nowrap  lg:text-[16px] text-[12px] text-start">
            الاسم
          </div>
          <div className="bg-blueLight py-3 px-10 sticky top-0 text-nowrap  lg:text-[16px] text-[12px]">
          الايميل
          </div>
          <div className="bg-blueLight py-3 px-10 sticky top-0 text-nowrap  lg:text-[16px] text-[12px]  hidden lg:block">الوظيفة</div>
          <div className="bg-blueLight py-3 px-10 sticky top-0 text-nowrap  lg:text-[16px] text-[12px]">تاريخ الانضمام </div>
          <div className="bg-blueLight py-3 px-10 sticky top-0 text-nowrap  lg:text-[16px] text-[12px]"> عدد المرضى</div>
          <div className="bg-blueLight rounded-e-xl py-3 px-10 sticky top-0 text-nowrap  lg:text-[16px] text-[12px] me-6"></div>
        </div>
        {data.map((item, index) => (
          <Link
          href={ROUTES.ADMIN.STAFF.STAFFID(item.id)}
            //onClick={() => handleRouting(item)}
            key={item.id}
            className="contents cursor-pointer group "
          >
            <div
              className={clsx(
                " py-2 lg:py-5 lg:text-[16px] text-[12px] ms-0 lg:ms-8 font-bold text-start",
                index === data.length - 1 ? "" : "border-b border-b-grayMedium"
              )}
            >
              {item.name}
            </div>
            <div
              className={clsx(
                " py-2 lg:py-5 lg:text-[16px] text-[12px] px-3 lg:px-10  hidden lg:block",
                index === data.length - 1 ? "" : "border-b border-b-grayMedium"
              )}
            >
              {item.email}
            </div>
            <div
              className={clsx(
                " py-2 lg:py-5 lg:text-[16px] text-[12px] px-3 lg:px-10 ",
                index === data.length - 1 ? "" : "border-b border-b-grayMedium"
              )}
            >
              {item.type}
            </div>
           
          
            <div
              className={clsx(
                " py-2 lg:py-5 lg:text-[16px] text-[12px] px-3 lg:px-10 ",
                index === data.length - 1 ? "" : "border-b border-b-grayMedium"
              )}
            >
              {item.lastLogin}
            </div>{" "}
            <div
              className={clsx(
                " py-2 lg:py-5 lg:text-[16px] text-[12px] px-3 lg:px-10 ",
                index === data.length - 1 ? "" : "border-b border-b-grayMedium"
              )}
            >
              {item.numberOfChildren}
            </div>
            <div
              className={clsx(
                "py-3 px-3 lg:px-10 me-14 flex items-center gap-3 content-end",
                index === data.length - 1 ? "" : "border-b border-b-grayMedium"
              )}
            >
            <MenuActions/>
            </div>
          </Link>
        ))}
      </div>
>>>>>>>> bce66fac595d5cfc08a1aa2171e3a7290a8c6922:Spectra.Web/ClientApp/spectra-client/src/app/[locale]/(dashboard)/staff/staff-table.js
    </div>
  );
};

export default StaffTable;
