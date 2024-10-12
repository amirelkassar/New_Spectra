import LogoOnlyIcon from "@/assets/icons/logo-only-icon";
import PlusInsideCircleIcon from "@/assets/icons/plus-inside-circle";
import Card from "@/components/card";
import { Link } from "@/navigation";
import CardPackages from "./_components/CardPackages";
import ROUTES from "@/routes";
const packages = [
  {
    title: "الباقة المتميزة",
    price: "$100.00",
    features: [
      "4 جلسات من تخصص الخطاب",
      "الوصول لأفضل النتائج والتوصيات",
      "1 جلسة إضافية لتقييم الذكاء",
    ],
    color: "#10B0C1",
  },
  {
    title: "الباقة المتميزة",
    price: "$100.00",
    features: [
      "4 جلسات من تخصص الخطاب",
      "الوصول لأفضل النتائج والتوصيات",
      "1 جلسة إضافية لتقييم الذكاء",
    ],
    color: "#8A22A0",
  },
  {
    title: "الباقة المتميزة",
    price: "$100.00",
    features: [
      "4 جلسات من تخصص الخطاب",
      "الوصول لأفضل النتائج والتوصيات",
      "1 جلسة إضافية لتقييم الذكاء",
    ],
    color: "#010036",
  },
];
const PlansPage = () => {
  return (
    <Card>
      <div className="flex items-center mb-12 gap-4 lg:gap-5 md:px-3">
        <h2 className="text-base mdl:text-lg font-Bold">الاعدادات - الباقات</h2>
        <Link
          href={ROUTES.ADMIN.SETTINGS.PACKAGES.PACKAGESADD}
          className="flex items-center justify-center w-40 h-10 rounded-xl bg-blueLight gap-4 font-bold"
        >
          <PlusInsideCircleIcon />
          <p className=" text-xs mdl:text-base font-bold">أضافة باقة </p>
        </Link>
      </div>
      <div className="mb-9">
        <div className="flex items-center gap-3 md:gap-5 mb-8">
          <LogoOnlyIcon className="w-[22px] md:w-8 h-auto" />
          <h3 className=" text-sm md:text-lg font-Bold">باقات سبيكترا</h3>
        </div>
        <div className="flex gap-4 mdl:gap-8 flex-wrap">
          {packages.map((item, index) => {
            return <CardPackages item={item} key={index} />;
          })}
        </div>
      </div>
      <div className="mb-9">
        <div className="flex items-center gap-3 md:gap-5 mb-8">
          <LogoOnlyIcon className="w-[22px] md:w-8 h-auto" />
          <h3 className=" text-sm md:text-lg font-Bold">باقات مرنة </h3>
        </div>
        <div className="flex gap-4 mdl:gap-8 flex-wrap">
          {packages.map((item, index) => {
            return <CardPackages item={item} key={index} />;
          })}
        </div>
      </div>
    </Card>
  );
};

export default PlansPage;
