export const General = {
  Country: {
    url: "/Country",
  },
};
export const Admin = {
  Drugs: {
    url: "/Drug",
    getByName: (name) => `/Drug/${name}`,
    getByID: (id) => `/Drug/id?id=${id}`,
    DeleteByID: (id) => `/Drug/id?id=${id}`,
    postUpload: "/Drug/upload",
  },
  MedicalTests: {
    url: "/MedicalTestsAndXray",
    getByName: (name) => `/MedicalTestsAndXray/${name}`,
    getByID: (id) => `/MedicalTestsAndXray/id?id=${id}`,
    DeleteByID: (id) => `/MedicalTestsAndXray/id?id=${id}`,
  },
  Complaint: {
    url: "/GeneralComplaint",
    getByName: (name) => `/GeneralComplaint/${name}`,
    getByID: (id) => `/GeneralComplaint/id?id=${id}`,
    DeleteByID: (id) => `/GeneralComplaint/id?id=${id}`,
  },
  Specialization: {
    url: "/Specialization",
    getByName: (name) => `/Specialization/${name}`,
    getByID: (id) => `/Specialization/id?id=${id}`,
    DeleteByID: (id) => `/Specialization/id?id=${id}`,
  },
  InternalExamination: {
    url: "/InternalExamination",
    getByName: (name) => `/InternalExamination/${name}`,
    getByID: (id) => `/InternalExamination/id?id=${id}`,
    DeleteByID: (id) => `/InternalExamination/id?id=${id}`,
  },
  Diagnose: {
    url: "/Diagnose",
    getByName: (name) => `/Diagnose/${name}`,
    getByID: (id) => `/Diagnose/id?id=${id}`,
    DeleteByID: (id) => `/Diagnose/id?id=${id}`,
  },
  MasterDataServices: {
    url: "/MasterDataServices",
    getByName: (name) => `/MasterDataServices/${name}`,
    getByID: (id) => `/MasterDataServices/id?id=${id}`,
    DeleteByID: (id) => `/MasterDataServices/id?id=${id}`,
  },
  Staff: {
    url: "/Admin/GetAllEmployees?PageSize=5&",
    post: "/Admin/CreateEmployee",
  },
  Contracts: {
    url: "/Admin/GetAllContracts?PageSize=5&",
    getByID: (id) => `/Admin/GetAllCopiesOFContract?EmployeeId=${id}`,
    edit: (id) => `/Admin/ContractOperations/id?id=${id}`,
  },
};
export const Doctor = {
  Contracts: {
    url: (id) => `/Contracts/GetAllCopiesOFContract?EmployeeId=${id}`,
    getByID: (id) => `/Contracts/id?id=${id}`,
    DeleteByID: (id) => `/Doctor/Contract/id?id=${id}`,
    post: "/Contracts",
    getServices: "/Contracts/ServicesFromMastrData",
  },
};
