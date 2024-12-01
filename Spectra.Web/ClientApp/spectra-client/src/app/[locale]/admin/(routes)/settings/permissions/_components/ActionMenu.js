"use client";
import React from "react";
import ExportIcon from "@/assets/icons/export";
import PrintIcon from "@/assets/icons/print";
import DataActions from "@/components/data-actions";
import DeleteIcon from "@/assets/icons/delete";
import useModal from "@/store/modal-slice";
function ActionMenu({  }) {
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
      color: "red",
    },

    {
      label: "تصدير",
      icon: <ExportIcon />,
      type: "btn",
      action: () => {},
    },

    {
      label: "طباعة",
      icon: <PrintIcon />,
      type: "btn",
      action: () => {},
    },
  ];
  return <DataActions options={options} />;
}

export default ActionMenu;
