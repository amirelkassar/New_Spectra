"use client";
import React from "react";
import DeleteIcon from "@/assets/icons/delete";
import ExportIcon from "@/assets/icons/export";
import PrintIcon from "@/assets/icons/print";
import useModal from "@/store/modal-slice";
import DataActions from "@/components/data-actions";

function ActionMenu() {
  const { modal, editModal } = useModal();

  const options = [
    {
      label: "مسح",
      icon: <DeleteIcon />,
      type: "btn",
      action: () => {
        editModal("type", "delete");
        editModal("open", true);
      },
    },
    {
      label: "تصدير",
      icon: <ExportIcon />,
      action: () => {},
    },
    {
      label: "طباعة",
      icon: <PrintIcon />,
      action: () => {},
    },
  ];
  return <DataActions options={options} />;
}

export default ActionMenu;
