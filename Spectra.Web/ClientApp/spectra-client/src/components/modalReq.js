"use client";
import { Modal, ScrollArea } from "@mantine/core";
import React from "react";
import ModalType from "./modalType";
import ModalDate from "./modalDate";
import ModalSelect from "@/app/[locale]/admin/clients/components/modalSelect";
import ModalJoin from "./modalJoin";
import UserModal from "./permissions-modal/userModal";
import useModal from "@/store/modal-slice";

function ModalReq({  id }) {
  const { modal, editModal } = useModal();

  return (
    <Modal
      opened={modal.open}
      size={"lg"}
      withCloseButton={false}
      centered
      onClose={() => {
        editModal("open", false);
      }}
      scrollAreaComponent={ScrollArea.Autosize}
      className="modelReq"
    >
      {modal.type === "date" ? (
        <ModalDate id={id} />
      ) : modal.type === "addDate" ? (
        <ModalDate id={id} />
      ) : modal.type === "join" ? (
        <ModalJoin />
      ) : modal.type === "addClient" ? (
        <ModalSelect />
      ) : modal.type === "addPermissionsUser" ? (
        <UserModal />
      ) : (
        <ModalType state={modal.type}  />
      )}
    </Modal>
  );
}

export default ModalReq;
