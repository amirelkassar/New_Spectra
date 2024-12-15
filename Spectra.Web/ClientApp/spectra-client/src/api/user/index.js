import { buildQuery } from '@/lib/utils';

export const profile = {
  base: '/profilemanagement',
  get: '/profilemanagement',
  authInfo: '/profilemanagement/auth-info',
  attachmentList: '/profilemanagement/attchment-list',
  employeeGroups: '/profilemanagement/employee-groups',
  actions: {
    update: '/profilemanagement',
    updateEmployee: '/profilemanagement/employee-profile',
    addAttachment: '/profilemanagement/attchment',
    deleteAttachment: (id) => `/profilemanagement/attchment?id=${id}`,
  },
};

export const services = {
  base: '/service',
  list: (queries = {}) => buildQuery('/service', queries),
};

export const notifications = {
  base: '/notification',
  list: (queries = {}) => buildQuery('/notification/list', queries),
  actions: {
    makeItRead: (id) => `/notification?id=${id}`,
    delete: (id) => `/notification?id=${id}`,
  },
};
