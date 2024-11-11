import AddReportIcon from "@/assets/icons/addReport";
import { Link, usePathname } from "@/navigation";
import { Menu } from "@mantine/core";
import React from "react";

function MultiReports({ data = [] }) {
  const pathName = usePathname();

  return (
    <div>
      <Menu shadow="md" position="top-end" width={280} radius={10} offset={-20}>
        <Menu.Target>
          <div
            className={`bg-greenMain duration-300 hover:shadow-md border-2  border-greenMain min-w-[96px] lgl:min-w-[154px] max-w-[154px] px-2 max-g-h-[95px] lgl:max-h-[154px] cursor-pointer flex-1 py-2 lgl:py-8 w-[96px] lgl:w-[154px] aspect-square flex flex-col justify-center items-center rounded-xl`}
          >
            <div className=" size-9 lgl:size-[58px]  mb-1 lgl:mb-2 mx-auto flex items-center justify-center ">
              <AddReportIcon className={"w-auto h-7 mdl:h-8 "} />
            </div>

            <h2 className="font-Bold text-white lgl:text-nowrap leading-5 text-xs lgl:text-base text-center">
              اضافة تقرير
            </h2>
          </div>
        </Menu.Target>
        <Menu.Dropdown classNames={{ dropdown: "py-4" }}>
          {data.map((category, index) => {
            return (
              <Link
                scroll={false}
                href={
                  pathName + "?category=addReport&reportNum=" + category.name
                }
                key={index}
                className={`bg-white h-14 duration-300 mb-1 hover:shadow-md border-2  ${
                  category.active ? "border-greenMain" : " border-transparent "
                }   cursor-pointer p-2   flex gap-5 items-center rounded-xl`}
              >
                <h2 className="font-Bold lgl:text-nowrap  text-xs lgl:text-base">
                  {category.label}
                </h2>
              </Link>
            );
          })}
        </Menu.Dropdown>
      </Menu>
    </div>
  );
}

export default MultiReports;
