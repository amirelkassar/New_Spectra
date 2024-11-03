import DotsIcon from "@/assets/icons/dots";
import { Link, usePathname } from "@/navigation";
import { Menu } from "@mantine/core";
import React from "react";

function Other({ data }) {
  const pathName = usePathname();

  return (
    <div>
      <Menu shadow="md" position="top-end" width={290} radius={10} offset={-20}>
        <Menu.Target>
          <div className="min-w-[96px] lgl:min-w-[154px] max-w-[154px]  max-g-h-[95px] lgl:max-h-[154px] cursor-pointer flex-1  w-[96px] lgl:w-[154px] aspect-square flex flex-col justify-center items-center rounded-xl">
            <div className=" size-16 lgl:size-[90px] duration-300 hover:shadow-md place-content-center flex items-center justify-center  p-2 lgl:p-[14px] mb-1 lgl:mb-2 mx-auto bg-greenMain  rounded-full ">
              <DotsIcon />
            </div>
            <h2 className="font-Bold lgl:text-nowrap leading-5 text-xs lgl:text-base text-center">
              اخرى
            </h2>
          </div>
        </Menu.Target>
        <Menu.Dropdown>
          {data.map((category, index) => {
            return (
              <Link
                scroll={false}
                href={pathName + "?category=" + category.name}
                key={index}
                className={`bg-white duration-300 mb-1 hover:shadow-md border-2  ${
                  category.active ? "border-greenMain" : "border-none "
                }   cursor-pointer p-2   flex gap-5 items-center rounded-xl`}
              >
                <div className=" size-8 lgl:size-11 rounded-lg p-2 lgl:p-3  bg-greenLight flex items-center justify-center ">
                  {category.icon}
                </div>

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

export default Other;
