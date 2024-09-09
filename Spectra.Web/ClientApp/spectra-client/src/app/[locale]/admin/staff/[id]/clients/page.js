'use client'
import React from 'react'
import Card from '@/components/card'
import imgClient from '@/assets/images/placeholder-person.png'
import { columns } from '../_components/columnsClients';
import { DataTable } from '@/components/data-table'
const data = [
    {
      name: "عبدالله الشيخ",
      customerType: "عائلة طفل",
      numberOfChildren: "طفل واحد",
      image:imgClient
    },
    {
      name: "عبدالله الشيخ",
      customerType: "منظمة",
      numberOfChildren: "طفل واحد",
      image:imgClient
    },
    {
      name: "عبدالله الشيخ",
      customerType: "عائلة طفل",
      numberOfChildren: "طفل واحد",
      image:imgClient
    },
    {
      name: "عبدالله الشيخ",
      customerType: "عائلة طفل",
      numberOfChildren: "طفل واحد",
      image:imgClient
    }
  ];
function Page() {
  return (
    <Card>
        <DataTable data={data} columns={columns} />
    </Card>
  )
}

export default Page