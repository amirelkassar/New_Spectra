"use client";
import React from "react";
import ExportIcon from "@/assets/icons/export";
import PrintIcon from "@/assets/icons/print";
import DataActions from "@/components/data-actions";
import DeleteIcon from "@/assets/icons/delete";
import useModal from "@/store/modal-slice";
import EditIcon from "@/assets/icons/edit";
import ROUTES from "@/routes";
import { useRouter } from "@/navigation";
import { DeleteInternalExamination } from "@/useAPI/admin/main-data/testsInterior";

function ActionMenu({ id }) {
  const { modal, editModal } = useModal();
  const { mutate: deleteInternalExamination, isLoading } = DeleteInternalExamination(id);
  const router = useRouter()
  const handleDelete = () => {
    deleteInternalExamination();
    router.replace(ROUTES.ADMIN.DATAMAIN.TESTSINTERIOR)
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
