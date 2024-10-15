export const Admin = {
  Drugs: {
    url: "/Drug",
    getByName:(name)=> `/Drug/${name}`,
    getByID:(id)=> `/Drug/id?id=${id}`,
    DeleteByID:(id)=> `/Drug/id?id=${id}`,
    postUpload:'/Drug/upload'
  },
  MedicalTests:{
    url:'/MedicalTestsAndXray',
    getByName:(name)=> `/MedicalTestsAndXray/${name}`,
    getByID:(id)=> `/MedicalTestsAndXray/id?id=${id}`,
  },
  Complaint:{
    url:'/GeneralComplaint',
    getByName:(name)=> `/GeneralComplaint/${name}`,
    getByID:(id)=> `/GeneralComplaint/id?id=${id}`,
  },
  Specialization:{
    url:'/Specialization',
    getByName:(name)=> `/Specialization/${name}`,
    getByID:(id)=> `/Specialization/id?id=${id}`,
  },
  InternalExamination:{
    url:'/InternalExamination',
    getByName:(name)=> `/InternalExamination/${name}`,
    getByID:(id)=> `/InternalExamination/id?id=${id}`,
  },
  Diagnose:{
    url:'/Diagnose',
    getByName:(name)=> `/Diagnose/${name}`,
    getByID:(id)=> `/Diagnose/id?id=${id}`,
  },
  MasterDataServices:{
    url:'/MasterDataServices',
    getByName:(name)=> `/MasterDataServices/${name}`,
    getByID:(id)=> `/MasterDataServices/id?id=${id}`,
  },
};
