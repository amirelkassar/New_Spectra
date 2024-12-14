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
