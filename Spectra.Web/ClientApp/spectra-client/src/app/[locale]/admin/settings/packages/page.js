import DeleteIcon from "@/assets/icons/delete";
import EditIcon from "@/assets/icons/edit";
import EditImgIcon from "@/assets/icons/editImg";
import LogoOnlyIcon from "@/assets/icons/logo-only-icon";
import PlusInsideCircleIcon from "@/assets/icons/plus-inside-circle";
import Button from "@/components/button";
import Card from "@/components/card";
import { Link } from "@/navigation";

const PlansPage = () => {
  return (
    <Card>
      <div className="flex items-center mb-12 gap-4 lg:gap-5 md:px-3">
        <h2 className="text-lg font-Bold">الاعدادات - الباقات</h2>
        <Link
          href={"#"}
          className="flex items-center justify-center w-40 h-10 rounded-xl bg-blueLight gap-4 font-bold"
        >
          <PlusInsideCircleIcon />
          <p className=" text-[14px] md:text-[16px] font-bold">أضافة باقة </p>
        </Link>
      </div>
      <div>
        <div className="flex items-center gap-5 mb-8">
          <LogoOnlyIcon />
          <h3 className="text-lg font-Bold">باقات سبيكترا</h3>
        </div>
        <div className="flex gap-7 flex-wrap">
          <div>
            <div className="flex items-center gap-4">
              <button className="border-red border rounded-md flex items-center justify-center p-2">
                <DeleteIcon />
              </button>
              <button className="border-greenMain border rounded-md flex items-center justify-center p-2">
                <EditImgIcon fill="#10B0C1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PlansPage;
