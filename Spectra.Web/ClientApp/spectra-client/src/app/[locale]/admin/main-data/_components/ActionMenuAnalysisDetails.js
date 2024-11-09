"use client";
import React from "react";
import ExportIcon from "@/assets/icons/export";
import PrintIcon from "@/assets/icons/print";
import DataActions from "@/components/data-actions";
import DeleteIcon from "@/assets/icons/delete";
import EditIcon from "@/assets/icons/edit";
import ROUTES from "@/routes";
import { DeleteMedicalTests } from "@/useAPI/admin/main-data/analysis";
import { useRouter } from "@/navigation";

function ActionMenu({ id }) {

  const { mutate: deleteComplaint } = DeleteMedicalTests(id);
  const router = useRouter();

  const handleDelete = () => {
    deleteComplaint();
    router.replace(ROUTES.ADMIN.DATAMAIN.ANALYSISRUMORS);
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
      label: "تعديل",
      icon: <EditIcon />,
      link: ROUTES.ADMIN.DATAMAIN.ANALYSISRUMORSDETAILSEDIT(id),
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
