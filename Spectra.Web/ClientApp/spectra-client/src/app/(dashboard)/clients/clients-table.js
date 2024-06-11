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
    },
    {
      id: 1,
      name: "عبدالله الشيخ",
      numberOfChildren: "1",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
      type: "منظمة",
    },
    {
      id: 2,
      name: "عبدالله الشيخ",
      numberOfChildren: "1",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
      type: "مقدم الخدمة الطبية",
    },
    {
      id: 3,
      name: "عبدالله الشيخ",
      numberOfChildren: "1",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
      type: "عائلة طفل",
    },
    {
      id: 4,
      name: "عبدالله الشيخ",
      numberOfChildren: "1",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
      type: "منظمة",
    },
    {
      id: 5,
      name: "عبدالله الشيخ",
      numberOfChildren: "1",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
      type: "مقدم الخدمة الطبية",
    },
    {
      id: 6,
      name: "عبدالله الشيخ",
      numberOfChildren: "1",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
      type: "عائلة طفل",
    },
    {
      id: 7,
      name: "عبدالله الشيخ",
      numberOfChildren: "1",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
      type: "عائلة طفل",
    },
    {
      id: 8,
      name: "عبدالله الشيخ",
      numberOfChildren: "1",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
      type: "عائلة طفل",
    },
    {
      id: 10,
      name: "عبدالله الشيخ",
      numberOfChildren: "1",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
      type: "عائلة طفل",
    },
    {
      id: 11,
      name: "عبدالله الشيخ",
      numberOfChildren: "1",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
      type: "عائلة طفل",
    },
    {
      id: 12,
      name: "عبدالله الشيخ",
      numberOfChildren: "1",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
      type: "عائلة طفل",
    },
    {
      id: 13,
      name: "عبدالله الشيخ",
      numberOfChildren: "1",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
      type: "عائلة طفل",
    },
    {
      id: 14,
      name: "عبدالله الشيخ",
      numberOfChildren: "1",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
      type: "عائلة طفل",
    },
    {
      id: 15,
      name: "عبدالله الشيخ",
      numberOfChildren: "1",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
      type: "عائلة طفل",
    },
    {
      id: 16,
      name: "عبدالله الشيخ",
      numberOfChildren: "1",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
      type: "عائلة طفل",
    },
    {
      id: 17,
      name: "عبدالله الشيخ",
      numberOfChildren: "1",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
      type: "عائلة طفل",
    },
    {
      id: 18,
      name: "عبدالله الشيخ",
      numberOfChildren: "1",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
      type: "عائلة طفل",
    },
  ];

  const handleRouting = (id) => {
    router.push(`${ROUTES.DASHBOARD.CLIENTS}/${id}`);
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
            onClick={() => handleRouting(item.id)}
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
