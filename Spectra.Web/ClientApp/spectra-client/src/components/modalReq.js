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

function ModalReq({ state, id, GroubId, numItem, cancel }) {
  const { modalOneOpen, setModalOneOpen, modal, editModal } = useMenu();

  console.log(modal);
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
      ) : (
        <ModalType state={modal.type} GroubId={GroubId} />
      )}
    </Modal>
  );
}

export default ModalReq;
