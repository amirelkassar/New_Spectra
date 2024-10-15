"use client";
import React from "react";
import ExportIcon from "@/assets/icons/export";
import PrintIcon from "@/assets/icons/print";
import DataActions from "@/components/data-actions";
import DeleteIcon from "@/assets/icons/delete";
import useModal from "@/store/modal-slice";
import EditIcon from "@/assets/icons/edit";
import ROUTES from "@/routes";
import { DeleteDrugs } from "@/useAPI/admin/drugs/page";
import { useRouter } from "@/navigation";

function ActionMenu({ id }) {
  const { modal, editModal } = useModal();
  const { mutate: deleteDrug, isLoading } = DeleteDrugs(id);
  const router = useRouter()

  
  const handleDelete = () => {
    deleteDrug();
    router.replace(ROUTES.ADMIN.DATAMAIN.HOME)
  }
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
