export const Admin = {
  Drugs: {
    url: "/Drug",
    getByName:(name)=> `/Drug/${name}`,
    getByID:(id)=> `/Drug/${id}`,
    postUpload:'/Drug/upload'
  },
  MedicalTests:{
    url:'/MedicalTestsAndXray',
    getByName:(name)=> `/Drug/${name}`,
    getByID:(id)=> `/Drug/${id}`,
  }
};
