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

export const chat = {
  base: '/chat',
  list: (queries = {}) => buildQuery('/chat/list', queries),
  messages: (queries = {}) => buildQuery('/chat/messages', queries),
  actions: {
    addMessage: '/chat/message',
    deleteMessage: (id) => `/chat/message?messageId=${id}`,
  },
};

export const billingManagement = {
  base: '/billing-management',
  accountList: (queries = {}) =>
    buildQuery('/billingManagement/account-list', queries),
  wallet: '/billingManagement/wallet',
  actions: {
    get: (id) => `/billingManagement/account?id=${id}`,
    add: '/billingManagement/account',
    update: '/billingManagement/account',
    delete: (id) => `/billingManagement/account?id=${id}`,
  },
};
