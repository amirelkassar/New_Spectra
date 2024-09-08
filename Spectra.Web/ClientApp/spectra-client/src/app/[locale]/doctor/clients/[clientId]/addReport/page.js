import React from 'react'
import HeaderAdd from '../components/headerAdd'
import man from "@/assets/images/placeholder-person.png";
import FormAddReport from '../components/form-add-report';
function Page() {
  const data ={
    name:'عبدالله الشيخ',
    childName:"احمد عبدالله",
    image:man
  }
  return (
    <div className='flex flex-col mdl:gap-8'>
      <HeaderAdd title={'اضافة تقرير'} data={data}/>
      <FormAddReport/>
    </div>
  )
}

export default Page