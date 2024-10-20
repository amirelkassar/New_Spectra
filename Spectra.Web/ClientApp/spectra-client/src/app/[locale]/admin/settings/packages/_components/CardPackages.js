import DeleteIcon from "@/assets/icons/delete";
import EditImgIcon from "@/assets/icons/editImg";
import True2Icon from "@/assets/icons/true2";
import { Link } from "@/navigation";
import ROUTES from "@/routes";
import React from "react";

function CardPackages({item}) {
  return (
    <div className="w-full flex flex-row-reverse md:flex-col gap-6 md:w-[300px]" >
      <div className="flex items-center flex-col md:flex-row gap-4  mt-5 md:mt-0 mx-2">
        <button className="border-red border rounded-md flex items-center justify-center p-2">
          <DeleteIcon />
        </button>
        <button className="border-greenMain border rounded-md flex items-center justify-center p-2">
          <EditImgIcon fill="#10B0C1" />
        </button>
      </div>
      <Link 
      href={ROUTES.ADMIN.SETTINGS.PACKAGES.PACKAGESDETAILS(item.id)}
        className={`w-full duration-300 hover:shadow-sm pt-5 border-2 border-x-grayLight border-b-grayLight  border-t-[6px] rounded-xl px-4 md:px-6 pb-7`}
        style={{ borderTopColor: item.color }}
      >
        <h4 className={` text-sm md:text-xl mb-3 font-Bold text-[${item.color}]`}>
          {item.title}
        </h4>
        <h5 className={` text-2xl md:text-[36px] font-Bold mb-3 md:mb-8 text-[${item.color}] `}>
          {item.price}
        </h5>
        <ul className="flex flex-col gap-3">
          {item.features.map((feature, i) => {
            return (
              <li className="flex items-center gap-3 mb-2" key={i}>
                <True2Icon fill={item.color} />
                <p className=" text-xs md:text-base font-Regular">
                  4 جلسات من تخصص التخاطب
                </p>
              </li>
            );
          })}
        </ul>
      </Link>
    </div>
  );
}

export default CardPackages;
