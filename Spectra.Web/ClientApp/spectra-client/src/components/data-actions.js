"use client";
import ThreeDotsIcon from "@/assets/icons/three-dots";
import { Link } from "@/navigation";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
export default function DataActions({ options, className }) {
  return (
    <Menu as={"div"} className={className}>
      <MenuButton className={"md:p-1"}>
        <ThreeDotsIcon />
      </MenuButton>
      <MenuItems
        transition
        anchor="bottom end"
        className="w-52 shadow-[3px_4px_4px_rgba(0,_0,_0,_0.08)] origin-top-right rounded-xl border border-white bg-white p-1 text-sm/6  transition duration-100 ease-out  data-[closed]:scale-95 data-[closed]:opacity-0"
      >
        {options.map((option, index) => (
          <MenuItem key={index}>
            {option.type === "link" ? (
              <Link
                href={option.link}
                className={` ${
                  option.color ? `text-[${option.color}]` : "text-black"
                }  group flex w-full items-center gap-5 rounded-lg py-1.5 px-3 bg-transparent data-[focus]:bg-gray/80 transition font-bold `}
              >
                {option.icon}
                {option.label}
              </Link>
            ) : (
              <button
                onClick={option.action}
                className={` ${
                  option.color
                    ? option.color === "red"
                      ? `text-[#FF3D3D]`
                      : option.color === "green"
                      ? "text-greenMain"
                      : "text-black"
                    : "text-black"
                }  group flex w-full items-center gap-5 rounded-lg py-1.5 px-3 bg-transparent data-[focus]:bg-gray/80 transition font-bold `}
              >
                {option.icon}
                {option.label}
              </button>
            )}
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
}
