"use client";
import { useRouter } from "@/navigation";
import ROUTES from "@/routes";

import { useEffect } from "react";

const FamilyPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push(ROUTES.ADMIN.CLIENTS.DASHBOARD);
  }, []);
  return null;
};

export default FamilyPage;
