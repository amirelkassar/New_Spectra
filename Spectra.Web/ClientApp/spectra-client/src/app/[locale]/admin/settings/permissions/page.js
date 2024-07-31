"use client"
import ROUTES from "@/routes";
import HeaderPage from "./header-page";
import LayoutPermissions from "./layoutPermissions";
import PlusInsideCircleIcon from "@/assets/icons/plus-inside-circle";
import { Link } from "@/navigation";
import useMenu from "@/store/auth/signup/menu-store";

const PermissionsPage = () => {
  const Permissions = [
    {
      id: 1,
      title: "طبيب",
    },
    {
      id: 2,
      title: "مختص",
    },
    {
      id: 3,
      title: "سكرتير",
    },
    {
      id: 4,
      title: "محاسب",
    },
    {
      id: 5,
      title: "عائلة طفل",
    },
  ];
  const {  modal, editModal } = useMenu();

  return (
    <LayoutPermissions>
      <HeaderPage
        linkBack={ROUTES.ADMIN.SETTINGS.DASHBOARD}
        title={"الاعدادات - الأذونات"}
      />
      <button onClick={()=>{
        editModal('open',true); editModal('type','addClient')
      }} className="flex font-bold items-center justify-center gap-[8px] py-1 md:py-2 px-[18px] rounded-[12px] bg-[#E9F7FF] lg:h-[48px] h-[40px]">
        <PlusInsideCircleIcon />
        <p className="text-[12px] md:text-[16px] font-bold"> أضافة مستوى</p>
      </button>
      <div className="mt-10 flex flex-col gap-6">
        {Permissions.map((item) => {
          return (
            <div key={item.id} className="flex items-center justify-between gap-4 flex-wrap pb-5 border-b border-grayLight mdl:pb-8 ">
              <h3 className="text-[14px] md:text-[20px] font-bold">{item.title}</h3>
              <Link
                href={ROUTES.ADMIN.SETTINGS.PERMISSIONS.PERMISSIONSEDIT(item.id)}
                className="w-fit md:w-[140px] flex items-center justify-center py-2 px-7 rounded-[10px] bg-greenMain text-white font-Bold text-[14px] md:text-[20px]"
              >
                تعديل
              </Link>
            </div>
          );
        })}
      </div>
    </LayoutPermissions>
  );
};

export default PermissionsPage;
