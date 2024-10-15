"use client";
import React from "react";
import ExportIcon from "@/assets/icons/export";
import PrintIcon from "@/assets/icons/print";
import DataActions from "@/components/data-actions";
import ShowIcon from "@/assets/icons/show";
import ROUTES from "@/routes";
import DeleteIcon from "@/assets/icons/delete";
import useModal from "@/store/modal-slice";
import EditIcon from "@/assets/icons/edit";
function ActionMenu({ id, show = true }) {
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
      link: show
        ? ROUTES.ADMIN.DATAMAIN.SERVICESDETAILS(id)
        : `${ROUTES.ADMIN.DATAMAIN.SERVICESDETAILS(id)}?show=false`,
      type: "link",
    },
    {
      label: "تعديل",
      icon: <EditIcon />,
      link: show ? ROUTES.ADMIN.DATAMAIN.SERVICESDETAILS(id) : ROUTES.ADMIN.DATAMAIN.SERVICESDETAILSEDIT(id),
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
