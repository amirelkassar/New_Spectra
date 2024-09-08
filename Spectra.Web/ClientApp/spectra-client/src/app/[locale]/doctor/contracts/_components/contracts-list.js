import { Card } from "@mantine/core";
import React from "react";
import ContractsIcon from "@/assets/icons/contracts";
import ContractsTrueIcon from "@/assets/icons/contractsTrue";
import ArrowLeft from "@/assets/icons/arrow-left";
import { Link } from "@/navigation";
import ROUTES from "@/routes";
import MenuActions from "@/components/menu-actions";
import SuccessIcon from "@/assets/icons/sucsess";
const dataContacts = [
  {
    id: 1,
    name: "admin",
    title: "النسخة الاولى",
    date: "20/4/2024",
    time: "10:30 م",
    done: true,
  },
  {
    id: 2,
    name: "user",
    title: "النسخة الثانية",
    date: "20/4/2024",
    time: "10:30 م",
    done: false,
  },
  {
    id: 3,
    name: "user",
    title: "النسخة الثانية",
    date: "20/4/2024",
    time: "10:30 م",
    done: false,
  },
];
function ContractsList({ idUser }) {
  return (
    <Card className="flex-1 rounded-lg">
      <div className="flex flex-col gap-4 lg:pt-4 w-full lg:max-w-[94%] mx-auto">
        {dataContacts.map((item, index) => {
          return (
            <div
              key={index}
              className={`${
                item.done ? "bg-[#D0F0FB]" : "bg-[#F1FCFF]"
              } relative pe-6 lg:pe-9 flex items-center gap-4 justify-between rounded-xl px-3 py-5`}
            >
              <div className=" absolute top-4 end-3">
                <MenuActions type={2} />
              </div>
              <div className="flex items-center gap-5 lg:gap-8">
                <div className="bg-white py-2 lg:py-4 px-2 lg:px-5 w-10 h-9 lg:w-[64px] lg:h-[61px] rounded-xl flex items-center justify-center">
                  {item.done ? (
                    <ContractsTrueIcon
                      fill={"#10B0C1"}
                      className={"w-auto h-full"}
                    />
                  ) : (
                    <ContractsIcon
                      fill={"#10B0C1"}
                      className={"w-auto h-full"}
                    />
                  )}
                </div>
                <div className="lg:min-w-[172px] flex flex-col gap-2 lg:gap-4">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm lg:text-xl font-Bold">
                      {item.title}
                    </h3>
                    {item.done && (
                      <SuccessIcon className={"w-4 lg:w-6 h-auto"} />
                    )}
                  </div>
                  <div className="flex items-center gap-1">
                    <ArrowLeft
                      fill="#10B0C1"
                      className={` w-3 lg:w-auto   ${
                        item.name === "admin"
                          ? "-rotate-45"
                          : "-rotate-[225deg]"
                      }  `}
                    />
                    <p className="text-[12px] lg:text-[16px] ">
                      المرسل : {item.name === "admin" ? "المشرف" : "انا"}
                    </p>
                  </div>
                </div>
                <div className=" flex flex-col gap-2 lg:gap-4">
                  <p className=" text-sm lg:font-Regular">{item.date}</p>
                  <p className=" text-sm lg:font-Regular">{item.time}</p>
                </div>
              </div>
              <Link
                href={ROUTES.DOCTOR.CONTRACTS.CONTRACTSID(item.id)}
                className="bg-greenMain rounded-xl h-12 w-[104px] lg:w-[168px] flex items-center justify-center text-sm lg:text-xl font-Bold text-white duration-300 hover:shadow-md"
              >
                عرض
              </Link>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

export default ContractsList;
