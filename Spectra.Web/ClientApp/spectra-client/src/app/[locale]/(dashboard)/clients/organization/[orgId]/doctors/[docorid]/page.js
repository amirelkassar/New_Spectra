"use client"
import { useParams } from 'next/navigation';
import React from 'react'

function DoctorDEtails() {
    const params = useParams();
    console.log(params);
  return (
    <div>DoctorDEtails</div>
  )
}

export default DoctorDEtails