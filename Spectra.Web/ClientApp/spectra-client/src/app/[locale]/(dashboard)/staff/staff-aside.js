"use client";

import { Link } from "@/navigation";
import ROUTES from "@/routes";
import clsx from "clsx";

import { useParams, usePathname } from "next/navigation";

const StaffAside = () => {
  const params = useParams();
  const path = usePathname();

  const pages = [
    {
      name: "الـمواعيد ",
      route: ROUTES.ADMIN.CLIENTS.ORGANIZATION.DETAILS(params.id),
      isActive:
        path === '/'+params.locale+ROUTES.ADMIN.STAFF.STAFFID(params.id),
    },
    {
      name: "الوصفات الطبية ",
      route: "",
      isActive: false,
    },
    {
      name: "الـعملاء ",
      route: ROUTES.ADMIN.CLIENTS.ORGANIZATION.CLIENTS(params.id),
      isActive:
        path === '/'+params.locale+ROUTES.ADMIN.CLIENTS.ORGANIZATION.CLIENTS(params.id),
    },
    {
      name: "الـمرضى ",
      route: ROUTES.ADMIN.CLIENTS.ORGANIZATION.DOCTORS(params.id),
      isActive:  path.includes('/'+params.locale+ROUTES.ADMIN.CLIENTS.ORGANIZATION.DOCTORS(params.id)),
    },
    {
      name: "معلومات",
      route: "",
      isActive: false,
    },
  ];
  return (
    <div className="w-[100%]  lg:w-56 shrink-0 overflow-auto bg-white lg:rounded-xl py-3 lg:pt-8 lg:ps-12 px-2 pe-6">
        <ul className="flex lg:flex-col  items-start  gap-5">
        {pages.map((page) => (
          <li key={page.name} className="lg:w-[100%] ">
            <Link
              href={page.route}
              className={clsx(
                " transition text-nowrap  w-full py-2 flex items-center justify-start px-3 text-[12px] md:text-[16px]   font-bold rounded-xl gap-3",
                page.isActive
                  ? "bg-greenMain text-white"
                  : "bg-transparent text-black"
              )}
            >
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StaffAside;