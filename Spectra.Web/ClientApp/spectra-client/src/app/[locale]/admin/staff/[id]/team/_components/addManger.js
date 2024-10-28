"use client";
import React from "react";
import { Modal, ScrollArea } from "@mantine/core";
import CloseIcon from "@/assets/icons/close";
import CardDocManger from "./cardDocManger";
import Button from "@/components/button";
import SearchIcon from "@/assets/icons/search";
import AddTeamIcon from "@/assets/icons/addTeam";

function AddManger({
  doctors,
  DocID,
  setDocID,
  children,
  opened,
  open,
  close,
}) {
  return (
    <div>

      {children}
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
            <div className="mdl:h-[54px] h-[38px]  w-[100%] relative outline-greenMain flex border-greenMain border rounded-[10px] items-center px-5">
              <div className=" ">
                <SearchIcon fill="#10B0C1" />
              </div>
              <input
                onChange={(e) => {
                  e.preventDefault();
                }}
                type="text"
                className="grow block !outline-none   rounded-none px-5  flex-1 h-[100%] "
                placeholder="البحث عن اسم الطبيب  او التخصص .."
              />
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
