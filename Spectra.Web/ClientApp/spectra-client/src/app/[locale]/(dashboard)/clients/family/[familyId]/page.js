"use client";
import ROUTES from "@/routes";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const FamilyPage = ({ params }) => {
  const router = useRouter();
  useEffect(() => {
    router.push(ROUTES.ADMIN.CLIENTS.FAMILY.DETAILS(params.familyId));
  }, []);
  return null;
};

export default FamilyPage;
