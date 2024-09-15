"use client";
import React from "react";
import EditIcon from "@/assets/icons/edit";
import ExportIcon from "@/assets/icons/export";
import PrintIcon from "@/assets/icons/print";
import DataActions from "@/components/data-actions";
import ShowIcon from "@/assets/icons/show";
import ROUTES from "@/routes";
import DeleteIcon from "@/assets/icons/delete";
import useModal from "@/store/modal-slice";

function ActionMenu({ id, type, id2 }) {
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
      label: "تعديل",
      icon: <EditIcon />,
      link:
        type === "family"
          ? ROUTES.ADMIN.CLIENTS.FAMILY.PATIENTSEDIT(id)
          : ROUTES.ADMIN.CLIENTS.ORGANIZATION.PATIENTSEDIT(
              id,
              id2
            ),
      type: "link",
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
