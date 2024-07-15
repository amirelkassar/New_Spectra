"use client";
import ROUTES from "@/routes";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Org = ({ params }) => {
  console.log(params);
  const router = useRouter();
  useEffect(
    () => router.push(ROUTES.ADMIN.CLIENTS.ORGANIZATION.DETAILS(params.orgId)),
    []
  );
  return null;
};

export default Org;
