"use client";
import React from "react";
import ExportIcon from "@/assets/icons/export";
import PrintIcon from "@/assets/icons/print";
import DataActions from "@/components/data-actions";
import DeleteIcon from "@/assets/icons/delete";
import ShowIcon from "@/assets/icons/show";
import ROUTES from "@/routes";
import EditIcon from "@/assets/icons/edit";
import { DeleteSection } from "@/useAPI/admin/main-data/section";

function ActionMenu({ id }) {
  const { mutate: deleteSection } = DeleteSection(id);
  const handleDelete = () => {
    deleteSection();
  };

  const options = [
    {
      label: "مسح",
      icon: <DeleteIcon />,
      type: "btn",
      action: handleDelete,
      color: "red",
    },
    {
      label: "عرض",
      icon: <ShowIcon />,
      link: ROUTES.ADMIN.DATAMAIN.DEPARTMENTSDETAILS(id),
      type: "link",
    },
    {
      label: "تعديل",
      icon: <EditIcon />,
      link: ROUTES.ADMIN.DATAMAIN.DEPARTMENTSDETAILSEDIT(id),
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
