
import ArrowNav from "@/assets/icons/arrow-nav";
import Logo from "@/assets/icons/logo";
import NotificationIcon from "@/assets/icons/notification";
import SearchIcon from "@/assets/icons/search";
import Link from "next/link";
import { useState } from "react";

const DashboardHeader = () => {
  const [Close ,setClose] =useState(false)
  return (
    <header className="h-16 flex items-center gap-2.5">
      <div className="hideShowLinks" onClick={()=>{setClose(!Close)}}>
        <ArrowNav/>
      </div>
       <Link href={"#"} className="block w-fit ">
        <Logo className={"w-[91px] h-[37px]"} />
      </Link>
      <div className="flex items-center gap-2.5 grow">
        <button className="size-[45px] bg-greenMain rounded-full flex items-center justify-center">
          <SearchIcon />
        </button>
        <input
          type="text"
          className="grow h-10 bg-gray rounded-full px-5 focus:outline-greenMain"
          placeholder="بحث..."
        />
      </div>
      <button className="size-[52px] bg-greenLight rounded-full flex items-center justify-center">
        <NotificationIcon />
      </button>
    </header>
  );
};

export default DashboardHeader;
