"use client";
import DeleteIcon from "@/assets/icons/delete";
import EditIcon from "@/assets/icons/edit";
import ExportIcon from "@/assets/icons/export";
import PrintIcon from "@/assets/icons/print";
import ReschedulingIcon from "@/assets/icons/rescheduling";
import ShowIcon from "@/assets/icons/show";
import StarIcon from "@/assets/icons/start";
import ThreeDotsIcon from "@/assets/icons/three-dots";
import { Link } from "@/navigation";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import useModal from "@/store/modal-slice";

export default function MenuActions({ id, className, type = 1, path,pathEdit ,routeClients}) {
  const { modal,editModal} = useModal();
  const options = [
    {
      icon: <DeleteIcon />,
      name: "الغاء الميعاد",
      action: () => { editModal('type','cancellation');editModal('open',true); },
    },
    {
      icon: <ReschedulingIcon />,
      name: "اعادة الجدولة",
      action: () => { editModal('type','date');editModal('open',true); },
    },
    {
      icon: <StarIcon />,
      name: " تقييم",
      action: () => {},
    },
    {
      icon: <EditIcon />,
      name: "تعديل",
      action: () => {},
    },
    {
      icon: <ExportIcon />,
      name: "تصدير",
      action: () => {},
    },

    {
      icon: <PrintIcon />,
      name: "طباعة",
      action: () => {},
    },
  ];
  const options2 = [
    {
      icon: <ShowIcon />,
      name: "عرض",
      action: () => {},
      path: path,
    },
    {
      icon: <EditIcon />,
      name: "تعديل",
      action: () => {},
      path:pathEdit
    },
    {
      icon: <ExportIcon />,
      name: "تصدير",
      action: () => {},
    },

    {
      icon: <PrintIcon />,
      name: "طباعة",
      action: () => {},
    },
  ];
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
        {type === 1
          ? options.map((option, index) => (
              <MenuItem key={index}>
                <button
                  onClick={option.action}
                  className="group flex w-full items-center gap-5 rounded-lg py-1.5 px-3 bg-transparent data-[focus]:bg-gray/80 transition font-bold "
                >
                  {option.icon}
                  {option.name}
                </button>
              </MenuItem>
            ))
          : options2.map((option, index) => (
              <MenuItem key={index+"o"}>
                {option.path ? (
                  <Link
                    href={ option.path}
                    className="group flex w-full items-center gap-5 rounded-lg py-1.5 px-3 bg-transparent data-[focus]:bg-gray/80 transition font-bold "
                  >
                    {option.icon}
                    {option.name}
                  </Link>
                ) : (
                  <button
                    onClick={option.action}
                    className="group flex w-full items-center gap-5 rounded-lg py-1.5 px-3 bg-transparent data-[focus]:bg-gray/80 transition font-bold "
                  >
                    {option.icon}
                    {option.name}
                  </button>
                )}
              </MenuItem>
            ))}
      </MenuItems>
    </Menu>
  );
}
