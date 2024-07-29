"use client";
import ROUTES from "@/routes";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Org = ({ params }) => {

  const router = useRouter();
  useEffect(
    () => router.push(ROUTES.DOCTOR.CLIENTS.DETAILS(params.clientId)),
    []
  );
  return null;
};

export default Org;
