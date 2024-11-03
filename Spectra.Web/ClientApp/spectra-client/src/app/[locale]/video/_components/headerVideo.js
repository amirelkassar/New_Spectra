import Logo from "@/assets/icons/logo";
import NotificationIcon from "@/assets/icons/notification";
import { Link } from "@/navigation";
import React from "react";

function HeaderVideo() {
  return (
    <header className="h-9 md:h-16 justify-between flex items-center gap-[10px] md:gap-[28px]">
      <Link href={"#"} className="block w-fit ">
        <Logo className={"w-[91px] h-[37px]"} />
      </Link>

      <button className=" relative p-[9px] md:p-0 size-[34px] md:size-[52px] bg-greenLight rounded-full flex items-center justify-center">
        <p
          className={
            "numNotification size-[18px] md:size-[22px]  p-1 rounded-full bg-[#FF3D3D] absolute bottom-0  start-[-6px] text-white flex items-center justify-center text-[10px] md:text-[12px] font-bold"
          }
        >
          1
        </p>
        <NotificationIcon />
      </button>
    </header>
  );
}

export default HeaderVideo;
