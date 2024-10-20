import React from "react";
import MenuActions from "@/components/menu-actions";
import ROUTES from "@/routes";
function CardService({ data }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-2 justify-between flex-1">
        <div className="flex items-center gap-3">
          <div className=" size-[40px] rounded-[50%] items-center flex justify-center bg-greenMain/20 p-2  relative">
            {data.icon}
          </div>
          <div>
            <h3 className="text-[12px] font-bold">{data.title}</h3>
            <p className="text-[12px] font-Regular">{data.date}</p>
          </div>
        </div>
        {data.show ? (
          <span className="bg-blueLight font-bold text-greenMain flex items-center justify-center px-4 w-fit rounded-lg text-center h-7 text-[12px]">
            تعرض
          </span>
        ) : (
          <span className="bg-[#F5E4F9] font-bold text-[#8A22A0] flex items-center justify-center px-4 w-fit rounded-lg text-center h-7 text-[12px]">
            داخلية
          </span>
        )}
      </div>
      <div>
        <MenuActions
          type={2}
          path={ROUTES.ADMIN.SETTINGS.CONTENT.SERVICESDETAILS(data.id)}
          pathEdit={ROUTES.ADMIN.SETTINGS.CONTENT.SERVICESDETAILS(data.id)}
        />
      </div>
    </div>
  );
}

export default CardService;
