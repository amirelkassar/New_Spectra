"use client";

import { Link, usePathname } from "@/navigation";
import ROUTES from "@/routes";
import clsx from "clsx";
import { useParams, useSearchParams } from "next/navigation";

const StaffAside = () => {
  const params = useParams();
  const path = usePathname();
  const searchParams = useSearchParams();
  const pages = [
    {
      name: "الـمواعيد ",
      route:
        ROUTES.ADMIN.STAFF.STAFFID(params.id) +
        "?type=" +
        searchParams.get("type"),
      isActive: path === ROUTES.ADMIN.STAFF.STAFFID(params.id),
    },
    {
      name: "الوصفات الطبية ",
      route:
        ROUTES.ADMIN.STAFF.STAFFIDPRESCRIPTIONS(params.id) +
        "?type=" +
        searchParams.get("type"),
      isActive: path === ROUTES.ADMIN.STAFF.STAFFIDPRESCRIPTIONS(params.id),
    },

    {
      name: "العملاء ",
      route:
        ROUTES.ADMIN.STAFF.STAFFIDCLIENTS(params.id) +
        "?type=" +
        searchParams.get("type"),
      isActive: path === ROUTES.ADMIN.STAFF.STAFFIDCLIENTS(params.id),
    },
    {
      name: "بيانات",
      route:
        ROUTES.ADMIN.STAFF.STAFFIDINFORMATION(params.id) +
        "?type=" +
        searchParams.get("type"),
      isActive: path === ROUTES.ADMIN.STAFF.STAFFIDINFORMATION(params.id),
    },
    {
      name: "العقد",
      route:
        ROUTES.ADMIN.STAFF.STAFFIDCONTRACTS(params.id) +
        "?type=" +
        searchParams.get("type"),
      isActive: path === ROUTES.ADMIN.STAFF.STAFFIDCONTRACTS(params.id),
    },
  ];
  const pageSpecialist = [
    {
      name: "الـمواعيد ",
      route:
        ROUTES.ADMIN.STAFF.STAFFID(params.id) +
        "?type=" +
        searchParams.get("type"),
      isActive: path === ROUTES.ADMIN.STAFF.STAFFID(params.id),
    },

    {
      name: "العملاء ",
      route:
        ROUTES.ADMIN.STAFF.STAFFIDCLIENTS(params.id) +
        "?type=" +
        searchParams.get("type"),
      isActive: path === ROUTES.ADMIN.STAFF.STAFFIDCLIENTS(params.id),
    },
    {
      name: "بيانات",
      route:
        ROUTES.ADMIN.STAFF.STAFFIDINFORMATION(params.id) +
        "?type=" +
        searchParams.get("type"),
      isActive: path === ROUTES.ADMIN.STAFF.STAFFIDINFORMATION(params.id),
    },
  ];
  return (
    <div className="w-[100%]  lg:w-56 shrink-0 overflow-auto bg-white lg:rounded-xl py-3 lg:pt-8 lg:ps-12 px-2 pe-6 mb-8 md:mb-0">
      <ul className="flex lg:flex-col  items-start  gap-5">
        {searchParams.get("type") === "specialist"
          ? pageSpecialist.map((page) => (
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
            ))
          : pages.map((page) => (
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
        {}
      </ul>
    </div>
  );
};

export default StaffAside;
