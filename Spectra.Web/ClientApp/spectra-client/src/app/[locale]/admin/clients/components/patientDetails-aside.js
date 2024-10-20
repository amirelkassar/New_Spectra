"use client";

import { Link, usePathname } from "@/navigation";
import ROUTES from "@/routes";
import clsx from "clsx";

import { useParams } from "next/navigation";

const PatientsDetilsAside = () => {
  const params = useParams();
  const path = usePathname();

  const pages = [
    {
      name: "بيانات الطفل",
      route: ROUTES.ADMIN.CLIENTS.PATIENTSDETAILS.DASHBOARD(params.patientsID),
      isActive:
        path ===
        ROUTES.ADMIN.CLIENTS.PATIENTSDETAILS.DASHBOARD(params.patientsID),
    },
    {
      name: "الـمواعيد",
      route: ROUTES.ADMIN.CLIENTS.PATIENTSDETAILS.APPOINTMENTS(params.patientsID),
      isActive:
        path ===
        ROUTES.ADMIN.CLIENTS.PATIENTSDETAILS.APPOINTMENTS(params.patientsID),
    },
    {
      name: "الوصفات الطبية ",
      route: ROUTES.ADMIN.CLIENTS.PATIENTSDETAILS.PRESCRIPTIONS(
        params.patientsID
      ),
      isActive:
        path ===
        ROUTES.ADMIN.CLIENTS.PATIENTSDETAILS.PRESCRIPTIONS(params.patientsID),
    },
    {
      name: "تقارير ",
      route: ROUTES.ADMIN.CLIENTS.PATIENTSDETAILS.REPORTS(params.patientsID),
      isActive:
        path ===
          ROUTES.ADMIN.CLIENTS.PATIENTSDETAILS.REPORTS(params.patientsID) ||
        path === ROUTES.ADMIN.CLIENTS.PATIENTSDETAILS.REPORTSID(params.patientsID, params.reportID),
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

export default PatientsDetilsAside;
