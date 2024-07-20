"use client";
import ROUTES from "@/routes";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const FamilyPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push(ROUTES.ADMIN.CLIENTS.DASHBOARD);
  }, []);
  return null;
};

export default FamilyPage;
