"use client";
import React from "react";
import ExportIcon from "@/assets/icons/export";
import PrintIcon from "@/assets/icons/print";
import DataActions from "@/components/data-actions";

function ActionMenu() {
  const options = [
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
