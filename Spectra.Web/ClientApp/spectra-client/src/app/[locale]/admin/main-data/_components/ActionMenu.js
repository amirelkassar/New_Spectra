"use client";
import React from "react";
import ExportIcon from "@/assets/icons/export";
import PrintIcon from "@/assets/icons/print";
import DataActions from "@/components/data-actions";
import ShowIcon from "@/assets/icons/show";
import ROUTES from "@/routes";
import DeleteIcon from "@/assets/icons/delete";
import EditIcon from "@/assets/icons/edit";
import { DeleteDrugs } from "@/useAPI/admin/drugs/page";

function ActionMenu({ id }) {
  const { mutate: deleteDrug, isLoading } = DeleteDrugs(id);
  const handleDelete = () => {
    deleteDrug();
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
      link: ROUTES.ADMIN.DATAMAIN.DRUGSDETAILS(id),
      type: "link",
    },
    {
      label: "تعديل",
      icon: <EditIcon />,
      link: ROUTES.ADMIN.DATAMAIN.DRUGSDETAILSEDIT(id),
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
