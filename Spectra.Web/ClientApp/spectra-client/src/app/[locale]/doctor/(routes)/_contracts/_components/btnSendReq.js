import React from "react";
import ContractsIcon from "@/assets/icons/contracts";
import LinkGreen from "@/components/linkGreen";
import ROUTES from "@/routes";
function BtnSendReq() {
  return (
    <div>
      <LinkGreen href={ROUTES.DOCTOR.CONTRACTS.CONTRACTSNEW} className="mdl:min-h-[48px] mx-auto mb-4 min-h-[40px] rounded-[10px] bg-greenMain flex items-center justify-center gap-3 mdl:gap-5 px-10 w-[80%] md:w-fit">
        <ContractsIcon
          fill={"white"}
          className={"w-[17px] h-auto mdl:w-[22px]"}
        />
        <p className="text-white font-Bold text-[14px] mdl:text-[20px] mdl:block hidden">
          إرسال طلب انضمام
        </p>
      </LinkGreen>
    </div>
  );
}

export default BtnSendReq;
