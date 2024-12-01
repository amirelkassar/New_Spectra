"use client";
import React from "react";
import ExportIcon from "@/assets/icons/export";
import PrintIcon from "@/assets/icons/print";
import DataActions from "@/components/data-actions";
import DeleteIcon from "@/assets/icons/delete";
import useModal from "@/store/modal-slice";
import ReschedulingIcon from "@/assets/icons/rescheduling";
import StarIcon from "@/assets/icons/start";

function ActionMenu({ id }) {
  const { modal, editModal } = useModal();

  const options = [
    {
      label: "الغاء الميعاد",
      icon: <DeleteIcon />,
      type: "btn",
      color: "red",
      action: () => {
        editModal("type", "cancellation");
        editModal("open", true);
      },
    },
    {
      label: "اعادة الجدولة",
      icon: <ReschedulingIcon />,
      type: "btn",
      action: () => {
        editModal("type", "date");
        editModal("open", true);
      },
    },
    {
      label: " تقييم",
      icon: <StarIcon />,
      action: () => {},
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
  ]
  return <DataActions options={options} />;
}

export default ActionMenu;
