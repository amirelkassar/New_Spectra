import { Card } from "@mantine/core";
import React from "react";
import ContractsIcon from "@/assets/icons/contracts";
import ArrowLeft from "@/assets/icons/arrow-left";
import { Link } from "@/navigation";
import ROUTES from "@/routes";
import MenuActions from "@/components/menu-actions";
const dataContacts = [
  {
    id: 1,
    name: "admin",
    title: "النسخة الاولى",
    date: "20/4/2024",
    time: "10:30 م",
  },
  {
    id: 2,
    name: "user",
    title: "النسخة الثانية",
    date: "20/4/2024",
    time: "10:30 م",
  },
  {
    id: 3,
    name: "user",
    title: "النسخة الثانية",
    date: "20/4/2024",
    time: "10:30 م",
  },
];
function ContractsList({idUser}) {

    
  return (
    <Card className="flex-1 rounded-lg">
      <div className="flex flex-col gap-4 pt-4 w-full max-w-[94%] mx-auto">
        {dataContacts.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-[#F1FCFF] relative pe-9 flex items-center gap-4 justify-between rounded-xl px-3 py-5"
            >
              <div className=" absolute top-4 end-3">
                <MenuActions type={2} />
              </div>
              <div className="flex items-center gap-8">
                <div className="bg-white py-4 px-5 w-[64px] h-[61px] rounded-xl flex items-center justify-center">
                  <ContractsIcon fill={"#10B0C1"} className={"w-auto h-full"} />
                </div>
                <div className="min-w-[172px] flex flex-col gap-4">
                  <h3 className="text-xl font-Bold">{item.title}</h3>
                  <div className="flex items-center gap-1">
                    <ArrowLeft
                      fill="#10B0C1"
                      className={`    ${
                        item.name === "admin"
                          ? "-rotate-45"
                          : "-rotate-[225deg]"
                      }  `}
                    />
                    <p>{item.name === "admin" ? "من" : "الى"} المشرف</p>
                  </div>
                </div>
                <div className=" flex flex-col gap-4">
                  <p className=" font-Regular">{item.date}</p>
                  <p className=" font-Regular">{item.time}</p>
                </div>
              </div>
              <Link
                href={ROUTES.ADMIN.CONTRACTS.CONTRACTSUSERDETAILS(idUser,item.id)}
                className="bg-greenMain rounded-xl h-12 w-[168px] flex items-center justify-center text-xl font-Bold text-white duration-300 hover:shadow-md"
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
