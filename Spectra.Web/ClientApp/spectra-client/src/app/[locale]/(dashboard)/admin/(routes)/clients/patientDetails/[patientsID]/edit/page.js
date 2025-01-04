import React from 'react'

import PatientsEdit from '../../../components/patients-edit';

function page({ children }) {
    return (
      <div className="flex flex-col lg:gap-7 h-[100%] w-[100%]">
        <PatientsEdit />
        {children}
      </div>
    );
  }
  

export default page