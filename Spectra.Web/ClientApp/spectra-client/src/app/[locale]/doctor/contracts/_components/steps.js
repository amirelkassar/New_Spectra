import React from "react";
import Card from "@/components/card";
import { Stepper } from "@mantine/core";
import CorrectICon from "@/assets/icons/correct";
import { Link } from "@/navigation";
import ChatsIcon from "@/assets/icons/chats";
import MenuActions from "@/components/menu-actions";
function Steps({ active, pathname, searchparams }) {
  
  return (
    <Card>
      <div className="flex justify-between items-center gap-5 mb-10 lg:mb-14">
        <h2 className="text-sm lg:text-xl">العقود</h2>
        {active > 1 && (
          <div className="flex items-center gap-9">
            <Link
              href={
                searchparams.get("chat") === "true"
                  ? pathname + "?chat=false"
                  : pathname + "?chat=true"
              }
              className="flex items-center duration-300 hover:shadow-md justify-center p-2 md:p-3 rounded-[50%] bg-blueLight size-10 md:size-[50px]"
            >
              <ChatsIcon fill="#10B0C1" className={"w-full h-auto"} />
            </Link>
            <MenuActions />
          </div>
        )}
      </div>
      <div className="mt-16 ">
        <Stepper
          color="#10B0C1"
          active={active}
          allowNextStepsSelect={false}
          completedIcon={<CorrectICon />}
          clicka
          classNames={{
            stepLabel: "text-[12px] lg:text-[16px] text-nowrap",
            root: "max-w-[850px] mx-auto",
            steps: "flex-nowrap overflow-x-auto pb-7 lg:pb-10 px-5",
            step: "data-[completed]:opacity-100 opacity-40 ",
            stepBody: "ms-1 lg:ms-3",
            separator: "mx-1 md:mx-3  min-w-5",
            stepIcon:
              "bg-grayDark text-white border-none size-5 lg:size-8 min-w-5 min-h-5 lg:min-h-8 text-[14px] lg:text-xl data-[completed]:bg-greenMain lg:min-w-8",
          }}
        >
          <Stepper.Step cl label="طلب عقد" />
          <Stepper.Step label="ملء العقد" />
          <Stepper.Step label="قيد المراجعة" />
          <Stepper.Step label="إتمام العملية" />
        </Stepper>
      </div>
    </Card>
  );
}

export default Steps;
