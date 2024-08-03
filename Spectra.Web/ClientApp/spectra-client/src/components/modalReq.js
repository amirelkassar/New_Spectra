"use client";
import { Modal, ScrollArea } from "@mantine/core";
import React from "react";
import ModalType from "./comp_modal/modalType";
import ModalDate from "./comp_modal/modalDate";
import ModalSelect from "@/app/[locale]/admin/clients/components/modalSelect";
import ModalJoin from "./comp_modal/modalJoin";
import UserModal from "./comp_modal/permissions-modal/userModal";
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
