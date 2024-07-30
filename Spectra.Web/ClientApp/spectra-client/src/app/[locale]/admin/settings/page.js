import React from "react";
import CardSetting from "./components/cardSetting";
import ContentIcon from "@/assets/icons/content";
import PermissionsIcon from "@/assets/icons/permissions";
import PlansIcon from "@/assets/icons/plans";
import ROUTES from "@/routes";

function SettingPage() {
  const settings = [
    {
      id: 0,
      icon: <PermissionsIcon className={" w-[30px] md:w-[77px] h-auto"} />,
      title: "الأذونات",
      link:ROUTES.ADMIN.SETTINGS.PERMISSIONS.DASHBOARD
    },
    {
      id: 1,
      icon: <ContentIcon className={" w-[30px] md:w-[77px] h-auto"} />,
      title: "المحتوى",
      link:ROUTES.ADMIN.SETTINGS.CONTENT.DASHBOARD
    },
    {
      id: 3,
      icon: <PlansIcon className={" w-[30px] md:w-[77px] h-auto"} />,
      title: "الخطط",
      link:ROUTES.ADMIN.SETTINGS.PLANS.DASHBOARD
    },
  ];
  return (
    <div className="default-page flex-1  w-full">
      <h1 className="headTitleDash "> الاعدادات </h1>
      <div className="w-full flex gap-7 mdl:justify-center mdl:items-center flex-1 flex-col md:flex-row">
        {settings.map((setting) => {
          return (
            <CardSetting
              key={setting.id}
              icon={setting.icon}
              title={setting.title}
              link={setting.link}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SettingPage;
