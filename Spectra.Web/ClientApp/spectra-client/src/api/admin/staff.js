import { buildQuery } from '@/lib/utils';

export const staff = {
  base: '/employees',
  list: (queries = {}) =>
    buildQuery('/employees/employee-list', queries),
  providerList: (queries = {}) =>
    buildQuery('/employees/medical-provider-list', queries),
  actions: {
    add: '/employees',
    addAttachment: '/employees/attachment',
    updateAttachment: (id) =>
      `/employees/attachment?id=${id}`,
    deleteAttachment: (id) =>
      `/employees/attachment?id=${id}`,
    get: (id) => `/employees?id=${id}`,
    delete: (id) => `/employees?id=${id}`,
    update: (id) => `/employees?id=${id}`,
  },
};
