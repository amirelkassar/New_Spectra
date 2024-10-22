import DocMangerIcon from "@/assets/icons/docManger";
import { useDisclosure } from "@mantine/hooks";
import React, { useState } from "react";
import { Modal, ScrollArea } from "@mantine/core";
import CloseIcon from "@/assets/icons/close";
import CardDocManger from "./cardDocManger";
import Button from "@/components/button";
import SearchIcon from "@/assets/icons/search";

function AddManger({ doctors, DocID, setDocID }) {
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const toggleFilter = (filter) => {
    setSelectedFilters(
      (prev) =>
        prev.includes(filter)
          ? prev.filter((f) => f !== filter) // Remove if already selected
          : [...prev, filter] // Add if not selected
    );
  };
  return (
    <div>
      <h3 className="text-[12px] md:text-[16px] mb-2">رئيس القسم</h3>
      <button
        onClick={open}
        className="flex items-center justify-center flex-col gap-2 h-[170px] bg-blueLight rounded-xl p-4 w-fit min-w-[180px] duration-300 hover:shadow-md cursor-pointer"
      >
        <DocMangerIcon />
        <h4 className="text-xs mdl:text-base font-Bold">اضافة رئيس قسم</h4>
      </button>
      <Modal
        opened={opened}
        size={"xl"}
        onClose={close}
        withCloseButton={false}
        centered
        scrollAreaComponent={ScrollArea.Autosize}
        className="modelReq  "
        classNames={{
          inner: "!w-[1380px]",
          content: "!rounded-xl",
        }}
      >
        <div>
          <button onClick={close}>
            <CloseIcon
              className={"w-7 absolute  top-4 start-5 z-10 h-auto mdl:w-9"}
            />
          </button>
          <div className="flex flex-col w-full lg:flex-row lg:items-center gap-6 mb-4 mdl:mb-11">
            <div className="mdl:h-[54px] h-[38px] max-w-[530px] w-[100%] relative outline-greenMain flex border-greenMain border rounded-[10px] items-center px-5">
              <div className=" ">
                <SearchIcon fill="#10B0C1" />
              </div>
              <input
                type="text"
                className="grow block !outline-none   rounded-none px-5  flex-1 h-[100%] "
                placeholder="البحث عن اسم الطبيب  او التخصص .."
              />
            </div>
            <div className="flex flex-1 items-center justify-between gap-2">
              <div className="flex items-center justify-center gap-1 w-fit mdl:w-[110px]  h-[38px] mdl:h-[54px] border rounded-lg">
                <p className="font-Bold text-sm mdl:text-base px-2 text-nowrap">ترتيب حسب </p>
              </div>
              <div className="flex items-center  gap-3 flex-1">
                <Button
                  onClick={() => toggleFilter("rating")}
                  className={` font-Bold max-w-[100px] mdl:max-w-[120px] w-full text-xs mdl:text-base flex-1 border-none mdl:flex-initial gap-3 mdl:gap-5 bg-white ${
                    selectedFilters.includes("rating") ? "bg-blueLight" : ""
                  } `}
                >
                  التقييم
                </Button>
                <span className="w-[1px] h-6 bg-grayMedium mx-1 " />
                <Button
                  onClick={() => toggleFilter("price")}
                  className={` font-Bold max-w-[100px] mdl:max-w-[120px] text-xs mdl:text-base w-full flex-1 border-none mdl:flex-initial gap-3 mdl:gap-5 bg-white ${
                    selectedFilters.includes("price") ? "bg-blueLight" : ""
                  } `}
                >
                  السعر
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 md:gap-6 justify-between">
            {doctors.map((item, i) => (
              <div
                className="flex-1 w-[170px] md:w-[232px] min-w-[48%] md:min-w-[232px]"
                key={i}
                onClick={() => {
                  setDocID(item.id);
                }}
              >
                <CardDocManger hover={true} active={item.id === DocID} />
              </div>
            ))}
          </div>
          <div className="flex mt-10 items-center gap-4 md:gap-10 flex-col md:flex-row">
            <Button
              onClick={close}
              variant="secondary"
              className={
                "max-w-[500px] w-full mx-auto font-bold disabled:cursor-not-allowed md:h-[60px]"
              }
            >
              تأكيد
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default AddManger;
