"use client";
import React from "react";
import ExportIcon from "@/assets/icons/export";
import PrintIcon from "@/assets/icons/print";
import DataActions from "@/components/data-actions";
import DeleteIcon from "@/assets/icons/delete";
import { DeleteContracts } from "@/useAPI/doctor/contracts-api";

function ActionMenu({ id, activeNow = false }) {
  const { mutate: deleteContracts, isLoading } = DeleteContracts(id);
  const handleDelete = () => {
    console.log("deteted");

    deleteContracts();
  };

  const options = [
    !activeNow && {
      label: "مسح",
      icon: <DeleteIcon />,
      type: "btn",
      action: handleDelete,
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
