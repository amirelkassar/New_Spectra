"use client";

import DeleteIcon from "@/assets/icons/delete";
import EditIcon from "@/assets/icons/edit";
import DeleteButton from "@/components/delete-button";
import EditButton from "@/components/edit-button";
import ROUTES from "@/routes";
import clsx from "clsx";
import { useRouter } from "next/navigation";

const ClientsTable = () => {
  const router = useRouter();
  const data = [
    {
      id: 0,
      name: "عبدالله الشيخ",
      numberOfChildren: "1",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
      type: "عائلة طفل",
      route: "family",
    },
    {
      id: 1,
      name: "عبدالله الشيخ",
      numberOfChildren: "1",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
      type: "منظمة",
      route: "organization",
    },
    {
      id: 2,
      name: "عبدالله الشيخ",
      numberOfChildren: "1",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
      type: "مقدم الخدمة الطبية",
      route: "provider",
    },
    {
      id: 3,
      name: "عبدالله الشيخ",
      numberOfChildren: "1",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
      type: "عائلة طفل",
      route: "family",
    },
    {
      id: 4,
      name: "عبدالله الشيخ",
      numberOfChildren: "1",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
      type: "منظمة",
      route: "organization",
    },
    {
      id: 5,
      name: "عبدالله الشيخ",
      numberOfChildren: "1",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
      type: "مقدم الخدمة الطبية",
      route: "provider",
    },
    {
      id: 6,
      name: "عبدالله الشيخ",
      numberOfChildren: "1",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
      type: "عائلة طفل",
      route: "family",
    },
    {
      id: 7,
      name: "عبدالله الشيخ",
      numberOfChildren: "1",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
      type: "عائلة طفل",
      route: "family",
    },
    {
      id: 8,
      name: "عبدالله الشيخ",
      numberOfChildren: "1",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
      type: "عائلة طفل",
      route: "family",
    },
    {
      id: 10,
      name: "عبدالله الشيخ",
      numberOfChildren: "1",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
      type: "عائلة طفل",
      route: "family",
    },
    {
      id: 11,
      name: "عبدالله الشيخ",
      numberOfChildren: "1",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
      type: "عائلة طفل",
      route: "family",
    },
    {
      id: 12,
      name: "عبدالله الشيخ",
      numberOfChildren: "1",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
      type: "عائلة طفل",
      route: "family",
    },
    {
      id: 13,
      name: "عبدالله الشيخ",
      numberOfChildren: "1",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
      type: "عائلة طفل",
      route: "family",
    },
  ];

  const handleRouting = (item) => {
    if (item.route === "organization") {
      router.push(ROUTES.ADMIN.CLIENTS.ORGANIZATION.DETAILS(item.id));
    }
    if (item.route === "family") {
      router.push(ROUTES.ADMIN.CLIENTS.FAMILY.DETAILS(item.id));
    }
  };

  return (
    <div className="grow max-h-[calc(100vh-325px)] overflow-auto ">
      <div className="grid grid-cols-[repeat(5,auto),1fr] text-center gap-y-1">
        <div className="contents ">
          <div className="bg-blueLight rounded-s-xl py-3 pe-10 ps-8 sticky top-0">
            الاسم
          </div>
          <div className="bg-blueLight py-3 px-10 sticky top-0">
            عدد الاطفال
          </div>
          <div className="bg-blueLight py-3 px-10 sticky top-0">الايميل</div>
          <div className="bg-blueLight py-3 px-10 sticky top-0">اخر دخول</div>
          <div className="bg-blueLight py-3 px-10 sticky top-0">نوع العميل</div>
          <div className="bg-blueLight rounded-e-xl py-3 px-10 sticky top-0 me-6"></div>
        </div>
        {data.map((item, index) => (
          <div
            onClick={() => handleRouting(item)}
            key={item.id}
            className="contents cursor-pointer group "
          >
            <div
              className={clsx(
                "py-5 ms-8 font-bold",
                index === data.length - 1 ? "" : "border-b border-b-grayMedium"
              )}
            >
              {item.name}
            </div>
            <div
              className={clsx(
                "py-5 px-10 font-bold",
                index === data.length - 1 ? "" : "border-b border-b-grayMedium"
              )}
            >
              {item.numberOfChildren}
            </div>
            <div
              className={clsx(
                "py-5 px-10 font-bold",
                index === data.length - 1 ? "" : "border-b border-b-grayMedium"
              )}
            >
              {item.email}
            </div>
            <div
              className={clsx(
                "py-5 px-10 font-bold",
                index === data.length - 1 ? "" : "border-b border-b-grayMedium"
              )}
            >
              {item.lastLogin}
            </div>{" "}
            <div
              className={clsx(
                "py-5 px-10 font-bold",
                index === data.length - 1 ? "" : "border-b border-b-grayMedium"
              )}
            >
              {item.type}
            </div>
            <div
              className={clsx(
                "py-3 px-10 me-14 flex items-center gap-3 content-end",
                index === data.length - 1 ? "" : "border-b border-b-grayMedium"
              )}
            >
              <EditButton />
              <DeleteButton />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientsTable;
