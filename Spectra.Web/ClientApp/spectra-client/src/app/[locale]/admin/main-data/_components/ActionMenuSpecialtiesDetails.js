"use client";
import DeleteIcon from "@/assets/icons/delete";
import EditIcon from "@/assets/icons/edit";
import ExportIcon from "@/assets/icons/export";
import PrintIcon from "@/assets/icons/print";
import DataActions from "@/components/data-actions";
import { useRouter } from "@/navigation";
import ROUTES from "@/routes";
import useModal from "@/store/modal-slice";
import { DeleteSpecialization } from "@/useAPI/admin/main-data/specialties";
import React from "react";

function ActionMenu({ id }) {
  const { modal, editModal } = useModal();
  const { mutate: deleteDiagnostics } = DeleteSpecialization(id);
  const router = useRouter();

  const handleDelete = () => {
    deleteDiagnostics();
    router.replace(ROUTES.ADMIN.DATAMAIN.SPECIALTIES);
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
      link: ROUTES.ADMIN.DATAMAIN.SPECIALTIESIDEDIT(id),
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
