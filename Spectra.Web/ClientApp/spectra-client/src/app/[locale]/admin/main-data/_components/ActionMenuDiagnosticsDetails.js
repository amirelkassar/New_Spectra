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
import { DeleteDiagnostics } from "@/useAPI/admin/main-data/diagnostics";

function ActionMenu({ id }) {
  const { modal, editModal } = useModal();
  const { mutate: deleteDiagnostics, isLoading } = DeleteDiagnostics(id);
  const router = useRouter();

  const handleDelete = () => {
    deleteDiagnostics();
    router.replace(ROUTES.ADMIN.DATAMAIN.DIAGNOSTICS);
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
      link: ROUTES.ADMIN.DATAMAIN.DIAGNOSTICSDETAILSEDIT(id),
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
