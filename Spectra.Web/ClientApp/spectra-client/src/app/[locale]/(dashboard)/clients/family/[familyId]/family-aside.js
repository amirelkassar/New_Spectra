"use client";

import { Link } from "@/navigation";
import ROUTES from "@/routes";
import clsx from "clsx";

import { useParams, usePathname } from "next/navigation";

const FamilyAside = () => {
  const params = useParams();
  const path = usePathname();

  const pages = [
    {
      name: "بيانات عائلة الطفل",
      route: ROUTES.ADMIN.CLIENTS.FAMILY.DETAILS(params.familyId),
      isActive: path === ROUTES.ADMIN.CLIENTS.FAMILY.DETAILS(params.familyId),
    },
    {
      name: "المواعيد",
      route: ROUTES.ADMIN.CLIENTS.FAMILY.APPOINTMENTS(params.familyId),
      isActive:
        path === ROUTES.ADMIN.CLIENTS.FAMILY.APPOINTMENTS(params.familyId),
    },
    {
      name: "الوصفات الطبية",
      route: "",
      isActive: false,
    },
    {
      name: "المرضى / الاطفال",
      route: ROUTES.ADMIN.CLIENTS.FAMILY.PATIENTS(params.familyId),
      isActive: path === ROUTES.ADMIN.CLIENTS.FAMILY.PATIENTS(params.familyId),
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

export default FamilyAside;
