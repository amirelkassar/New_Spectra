import React from "react";
import ActionMenu from "./ActionMenuPrescriptions";
import DocumentIcon from "@/assets/icons/document";
import Card from "@/components/card";
const files = [
  {
    id: 0,
    name: "File Title.pdf",
    date: "313 KB . 31 Aug, 2022  ",
  },
  {
    id: 1,
    name: "File Title.pdf",
    date: "313 KB . 31 Aug, 2022  ",
  },
];
function Prescriptions() {
  return (
    <Card className="">
      <h2 className="text-base mdl:text-lg mb-6 mdl:mb-8">الوصفات الطبية</h2>
      <div className="flex flex-col gap-5 w-full">
        {files.map((file,i) => {
          return (
            <div key={i} className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-7">
                <DocumentIcon className={"w-5 mdl:w-8 h-auto"} />
                <div>
                  <h3 className="text-sm mdl:text-lg font-Regular">{file.name}</h3>
                  <p className="text-xs mdl:text-base font-Regular text-grayDark">{file.date}</p>
                </div>
              </div>
              <ActionMenu />
            </div>
          );
        })}
      </div>
    </Card>
  );
}

export default Prescriptions;
