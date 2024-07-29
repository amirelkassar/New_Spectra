import MenuActions from "@/components/menu-actions";
import CaseManagementTable from "../../components/case-managementTable";
import ClientDetails from "../../components/client-details";
import LayoutClientID from "../components/layoutClientID";

const OrganizationDetails = () => {
  return (
    <LayoutClientID>
      <div className=" grow">
        <ClientDetails />
        {/*<div className=" bg-white lg:bg-transparent px-2 lg:px-0 pt-6 pb-14 lg:pb-0 ">
        <Link
          href={ROUTES.ADMIN.CLIENTS.ORGANIZATION.DETAILSEDIT(params.orgId)}
          className=" bg-white h-12  w-[100%] flex justify-center items-center py-[9px] rounded-[10px] gap-4 md:w-[260px] ring-2 !ring-[#010036]"
        >
          <EditIcon />
          <p className="font-bold md:text-[20px] text-[14px]">تعديل</p>
        </Link>
      </div>*/}
        <div className="px-0 md:px-4 lg:px-6  py-6 bg-white lg:mt-7">
          <div className="flex items-center justify-between mb-7">
            <h2 className="headTitleDash">اداارة الحالة</h2>

            <MenuActions />
          </div>
          <CaseManagementTable />
        </div>
      </div>
    </LayoutClientID>
  );
};

export default OrganizationDetails;
