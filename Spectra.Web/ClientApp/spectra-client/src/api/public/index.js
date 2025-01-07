import { buildQuery } from '@/lib/utils';

export const specialization = {
  base: '/specialization',
  list: (queries = {}) => buildQuery('/specialization/list', queries),
  actions: {
    get: (id) => `/specialization?id=${id}`,
  },
};

export const services = {
  base: '/service',
  list: (queries = {}) => buildQuery('/service/list', queries),
  listDisplay: (queries = {}) =>
    buildQuery('/service/list-display', queries),
  actions: {
    get: (id) => `/service?id=${id}`,
  },
};

export const packages = {
  base: '/package',
  list: (queries = {}) => buildQuery('/package/list', queries),
  actions: {
    get: (id) => `/package?id=${id}`,
  },
};

export const medicalProviders = {
  base: '/medicalprovider',
  list: (queries = {}) =>
    buildQuery('/medicalprovider/list', queries),
  actions: {
    get: (id) => `/medicalprovider?id=${id}`,
  },
};

export const identity = {
  login: '/login',
  registerClient: '/register-client',
  registerMedicalProvider: '/register-medical-provider',
  forgetPassword: '/forget-password',
  resetPassword: '/reset-password',
};
