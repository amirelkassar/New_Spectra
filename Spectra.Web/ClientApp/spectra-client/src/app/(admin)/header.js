import Logo from "@/assets/icons/logo";
import NotificationIcon from "@/assets/icons/notification";
import SearchIcon from "@/assets/icons/search";
import Link from "next/link";

const DashboardHeader = () => {
  return (
    <header className="h-16 flex items-center gap-2.5">
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
