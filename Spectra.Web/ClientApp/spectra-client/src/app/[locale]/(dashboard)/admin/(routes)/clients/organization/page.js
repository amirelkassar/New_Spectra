"use client";
import ROUTES from "@/routes";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const OrgPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push(ROUTES.ADMIN.CLIENTS.DASHBOARD);
  },);
  return null;
};

export default OrgPage;
