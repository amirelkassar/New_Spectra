import { buildQuery } from '@/lib/utils';

export const staff = {
  base: '/employees',
  list: (queries = {}) =>
    buildQuery('/employees/employee-list', queries),
  providerList: (queries = {}) =>
    buildQuery('/employees/medical-provider-list', queries),
  groupMemberList: (ownerId) =>
    `/employees/group-member?ownerId=${ownerId}`,
  actions: {
    add: '/employees',
    addAttachment: '/employees/attachment',
    addGroupMember: '/employees/group-member',
    deleteGroupMember: (ownerId, memberId) =>
      `/employees/group-member?ownerId=${ownerId}&MemeberId=${memberId}`,
    updateAttachment: (id) => `/employees/attachment?id=${id}`,
    deleteAttachment: (fileId, employeeId) =>
      `/employees/attachment?fileId=${fileId}&employeeId=${employeeId}`,
    get: (id) => `/employees?id=${id}`,
    delete: (id) => `/employees?id=${id}`,
    update: (id) => `/employees?id=${id}`,
    updateMedicalData: (id) => `/employees/medical-data?id=${id}`,
  },
};
