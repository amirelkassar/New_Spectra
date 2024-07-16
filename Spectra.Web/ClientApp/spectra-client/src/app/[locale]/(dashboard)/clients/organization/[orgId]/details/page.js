import { Link } from "@/navigation";
import ClientDetails from "../../../components/client-details";
import EditIcon from "@/assets/icons/edit";

const OrganizationDetails = () => {
  return (
    <div className=" grow">
      <ClientDetails title={"المنظمة"} />
      <div className=" bg-white lg:bg-transparent px-2 lg:px-0 pt-6 pb-14 lg:pb-0 ">
      <Link href={'#'} className=" bg-white h-12  w-[100%] flex justify-center items-center py-[9px] rounded-[10px] gap-4 md:w-[260px] ring-2 !ring-[#010036]">
      <EditIcon/>
      <p className="font-bold md:text-[20px] text-[14px]">تعديل</p>
      </Link>
      </div>
    </div>
  );
};

export default OrganizationDetails;

