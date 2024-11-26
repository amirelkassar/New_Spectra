import { buildQuery } from '@/lib/utils';

export const mainData = {
  drugs: {
    base: '/drug',
    list: (queries = {}) =>
      buildQuery('/drug/list', queries),
    nameList: (queries = {}) =>
      buildQuery('/drug/name-list', queries),
    actions: {
      add: '/drug',
      addFile: '/drug/bulk',
      get: (id) => `/drug?id=${id}`,
      delete: (id) => `/drug?id=${id}`,
      update: (id) => `/drug?id=${id}`,
    },
  },

  diagnose: {
    base: '/diagnose',
    list: (queries = {}) =>
      buildQuery('/diagnose/list', queries),
    actions: {
      add: '/diagnose',
      addFile: '/diagnose/bulk',
      get: (id) => `/diagnose?id=${id}`,
      delete: (id) => `/diagnose?id=${id}`,
      update: (id) => `/diagnose?id=${id}`,
    },
  },

  complaint: {
    base: '/generalComplaint',
    list: (queries = {}) =>
      buildQuery('/generalComplaint/list', queries),
    actions: {
      add: '/generalComplaint',
      addFile: '/generalComplaint/bulk',
      get: (id) => `/generalComplaint?id=${id}`,
      delete: (id) => `/generalComplaint?id=${id}`,
      update: (id) => `/generalComplaint?id=${id}`,
    },
  },

  specialization: {
    base: '/specialization',
    list: (queries = {}) =>
      buildQuery('/specialization/list', queries),
    actions: {
      add: '/specialization',
      addFile: '/specialization/bulk',
      get: (id) => `/specialization?id=${id}`,
      delete: (id) => `/specialization?id=${id}`,
      update: (id) => `/specialization?id=${id}`,
    },
  },

  internalExamination: {
    base: '/internalExamination',
    list: (queries = {}) =>
      buildQuery('/internalExamination/list', queries),
    actions: {
      add: '/internalExamination',
      // addFile: '/specialization/bulk',
      get: (id) => `/internalExamination?id=${id}`,
      delete: (id) => `/internalExamination?id=${id}`,
      update: (id) => `/internalExamination?id=${id}`,
    },
  },

  section: {
    base: '/section',
    list: (queries = {}) =>
      buildQuery('/section/list', queries),
    actions: {
      add: '/section',
      get: (id) => `/section?id=${id}`,
      delete: (id) => `/section?id=${id}`,
      update: (id) => `/section?id=${id}`,
    },
  },

  medicalTestsAndXray: {
    base: '/medicalTestsAndXray',
    list: (queries = {}) =>
      buildQuery('/medicalTestsAndXray/list', queries),
    actions: {
      add: '/medicalTestsAndXray',
      addFile: '/medicalTestsAndXray/bulk',
      get: (id) => `/medicalTestsAndXray?id=${id}`,
      delete: (id) => `/medicalTestsAndXray?id=${id}`,
      update: (id) => `/medicalTestsAndXray?id=${id}`,
    },
  },

  //
  //
  //
  //

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
