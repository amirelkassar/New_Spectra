import React from "react";
import PdfIcon from "@/assets/icons/pdf";
import MenuActions from "@/components/menu-actions";
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
function Drugs() {
  return (
    <div className="flex flex-col gap-5 mt-5">
      {files.length > 0 && (
        <div className="flex  gap-7 flex-wrap  flex-col">
          {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-5">
                <PdfIcon />
                <div>
                  <h3 className="text-sm lg:text-lg ">{file.name}</h3>
                  <p className=" text-[12px] lg:text-sm font-Regular text-[#71839B]">
                    {file.date}
                  </p>
                </div>
              </div>
              <MenuActions />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Drugs;
