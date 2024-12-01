import React from "react";
import Prescriptions from "./_components/Prescriptions";
import Nominations from "./_components/Nominations";
import Rumors from "./_components/rumors";
import { Link } from "@/navigation";
import BackIcon from "@/assets/icons/back";
import ROUTES from "@/routes";
import Team from "./_components/team";
import DetectDetails from "./_components/detectDetails";

function page() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4 mdl:gap-8">
        <Link
          href={ROUTES.ADMIN.APPOINTMENTS}
          className=" w-8 mdl:w-11  h-8 mdl:h-11 rounded-full"
        >
          <BackIcon className={'w-full h-auto'} />
        </Link>
        <h2 className="font-Bold text-base mdl:text-2xl">المواعيد </h2>
      </div>
      <DetectDetails/>
      <Team />
      <Prescriptions />
      <Nominations />
      <Rumors />
    </div>
  );
}

export default page;
