"use client";
import ModalIcon from "@/assets/icons/modalImg";
import useMenu from "@/store/auth/signup/menu-store";
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { useState } from "react";
import Button from "./button";
import DeleteModalIcon from "@/assets/icons/deleteModal";
import ModalType from "./modalType";
import ModalDate from "./modalDate";
import ModalSelect from "@/app/[locale]/admin/clients/components/modalSelect";
import ModalJoin from "./modalJoin";

function ModalReq({ state, id, GroubId, numItem, cancel }) {
  const { modalOneOpen, setModalOneOpen, modal, editModal } = useMenu();


  return (
    <Modal
      opened={modal.open}
      size={"lg"}
      withCloseButton={false}
      centered
      onClose={() => {
        editModal("open", false);
      }}
      className="modelReq"
    >
      {modal.type === "date" ? (
        <ModalDate id={id}/>
      ) :modal.type === "join"? <ModalJoin/> : modal.type==='addClient'?<ModalSelect/>:(
        <ModalType state={modal.type} GroubId={GroubId} />
      )}
    </Modal>
  );
}

export default ModalReq;
