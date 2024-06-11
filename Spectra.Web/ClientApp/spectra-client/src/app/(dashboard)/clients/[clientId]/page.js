import Separetor from "@/components/separator";
import React from "react";
import ClientDetailsHeader from "./client-details-header";
import ClientDetailsAside from "./client-details-aside";
import ClientDetailsBody from "./client-details-body";

const ClientDetails = () => {
  const data = {
    details: {
      name: "عبدالله الشيخ",
      email: "Abdallah@gmail.com",
      lastLogin: "25/4/2024",
      numberOfChildren: "1",
      diagnosis: "اضطراب طيف التوحد",
    },
    today: [
      {
        id: 0,
        type: "كشف 1",
        date: "6/9/224",
        doctor: "الطبيب: احمد محمد كمال",
      },
      {
        id: 1,
        type: "متابعة 3",
        date: "6/9/224",
        doctor: "المختص: كمال احمد",
      },
    ],
  };

  return (
    <div className="sec-page">
      <ClientDetailsHeader />
      <div className="grow flex gap-6">
        <ClientDetailsAside />
        <ClientDetailsBody />
      </div>
    </div>
  );
};

export default ClientDetails;
