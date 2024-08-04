import MenuActions from "@/components/menu-actions";
import ROUTES from "@/routes";
import { useParams } from "next/navigation";
const GetParams = ()=>{
  const params = useParams()
  return params.orgId
}
export const columns = [
  {
    accessorKey: "name",
    header: "الاسم",
    id: "name",
  },
  {
    accessorKey: "numberOfChildren",
    header: " عدد الاطفال",
    id: "numberOfChildren",
  },
  {
    accessorKey: "lastLogin",
    header: "اخر دخول",
    id: "lastLogin",
  },

  {
    accessorKey: "",
    header: "",
    id: "type",
    cell: ({row}) => {
      const id = row.original.id
      return (
        <div
          className={"flex gap-[10px] md:gap-[40px] justify-end items-start me-5 "}
        >
          <MenuActions type={2} path={ROUTES.ADMIN.CLIENTS.ORGANIZATION.PATIENTS(GetParams(),id)}/>
        </div>
      );
    },
  },
];
