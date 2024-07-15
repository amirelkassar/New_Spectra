"use client";

import { Link } from "@/navigation";
import ROUTES from "@/routes";
import clsx from "clsx";

import { useParams, usePathname } from "next/navigation";

const OrgAside = () => {
  const params = useParams();
  const path = usePathname();

  const pages = [
    {
      name: "بيانات المنظمة",
      route: ROUTES.ADMIN.CLIENTS.ORGANIZATION.DETAILS(params.orgId),
      isActive:
        path === ROUTES.ADMIN.CLIENTS.ORGANIZATION.DETAILS(params.orgId),
    },
    {
      name: "موظفين المنظمة",
      route: "",
      isActive: false,
    },
    {
      name: "عملاء المنظمة",
      route: ROUTES.ADMIN.CLIENTS.ORGANIZATION.CLIENTS(params.orgId),
      isActive:
        path === ROUTES.ADMIN.CLIENTS.ORGANIZATION.CLIENTS(params.orgId),
    },
    {
      name: "اطباء المنظمة",
      route: "",
      isActive: false,
    },
    {
      name: "المواعيد",
      route: "",
      isActive: false,
    },
    {
      name: "الوصفات الطبية",
      route: "",
      isActive: false,
    },
    {
      name: "المرضى/الاطفال",
      route: ROUTES.ADMIN.CLIENTS.ORGANIZATION.PATIENTS(params.orgId),
      isActive:
        path === ROUTES.ADMIN.CLIENTS.ORGANIZATION.PATIENTS(params.orgId),
    },
  ];
  return (
    <div className="w-56 shrink-0 bg-white rounded-xl pt-8 ps-12 pe-6">
      <ul className="grid grid-cols-1 items-center gap-5">
        {pages.map((page) => (
          <li key={page.name}>
            <Link
              href={page.route}
              className={clsx(
                " transition  w-full py-2 flex items-center justify-start ps-3  font-bold rounded-xl gap-3",
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

export default OrgAside;
