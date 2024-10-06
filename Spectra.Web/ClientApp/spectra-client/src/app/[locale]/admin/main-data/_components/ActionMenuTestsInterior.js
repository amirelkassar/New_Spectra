"use client";
import React from "react";
import ExportIcon from "@/assets/icons/export";
import PrintIcon from "@/assets/icons/print";
import DataActions from "@/components/data-actions";
import DeleteIcon from "@/assets/icons/delete";
import useModal from "@/store/modal-slice";
import ShowIcon from "@/assets/icons/show";
import EditIcon from "@/assets/icons/edit";
import ROUTES from "@/routes";

function ActionMenu({ id }) {
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
      label: "عرض",
      icon: <ShowIcon />,
      link: ROUTES.ADMIN.DATAMAIN.TESTSINTERIORDETAILS(id),
      type: "link",
    },
    {
      label: "تعديل",
      icon: <EditIcon />,
      link: ROUTES.ADMIN.DATAMAIN.TESTSINTERIORDETAILSEDIT(id),
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
