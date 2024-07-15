"use client";

import useAdminOrgAside, {
  orgAsideOptions,
} from "@/store/admin/clients/org/org-aside-slice";

const OrgBody = () => {
  const { selectedOption } = useAdminOrgAside();
  return <>{orgAsideOptions[selectedOption]}</>;
};

export default OrgBody;
