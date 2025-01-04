export const General = {
  Country: {
    url: '/Country',
  },
};

export const Doctor = {
  Contracts: {
    url: (id) =>
      `/Contracts/GetAllContractsCORS?EmployeeId=${id}`,
    getByID: (id) => `/Contracts/id?id=${id}`,
    DeleteByID: (id) => `/Doctor/Contract/id?id=${id}`,
    post: '/Contracts',
    getServices: '/Contracts/ServicesFromMastrData',
  },
};

export const Admin = {
  MedicalTests: {
    url: '/MedicalTestsAndXray',
    getByName: (name) => `/MedicalTestsAndXray/${name}`,
    getByID: (id) => `/MedicalTestsAndXray/id?id=${id}`,
    DeleteByID: (id) => `/MedicalTestsAndXray/id?id=${id}`,
  },

  MasterDataServices: {
    url: '/MasterDataServices',
    getByName: (name) => `/MasterDataServices/${name}`,
    getByID: (id) => `/MasterDataServices/id?id=${id}`,
    DeleteByID: (id) => `/MasterDataServices/id?id=${id}`,
  },
  Staff: {
    url: '/Admin/GetAllEmployees?PageSize=10&',
    post: '/Admin/CreateEmployee',
    getByID: (id, id2) =>
      `/Admin/GetOneOfNormalStaff/id?id=${id}&input=${id2}`,
    editEmployeeByID: (id) =>
      `/Admin/EditEmployee/id?id=${id}`,
  },
  Contracts: {
    url: '/Admin/GetAllContracts?PageSize=5&',
    getByID: (id) =>
      `/Admin/GetAllCopiesOFContract?EmployeeId=${id}`,
    edit: (id) =>
      `/Admin/MakeContractToEmployee/id?id=${id}`,
  },
};
