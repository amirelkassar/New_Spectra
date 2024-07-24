const ROUTES = {
  HOME: "/",
  AUTH: {
    LOGIN: "/login",
    SIGNUP_FAMILY: "/signup/family",
    SIGNUP_ORG: "/signup/organization",
    SIGNUP_PROVIDER: "/signup/provider",
    FORGOT_PASSWORD: "/forgot-password",
    RESET_PASSWORD: "/reset-password",
  },
  ADMIN: {
    MAIN: "/admin/main",
    APPOINTMENTS: "/admin/appointments",
    REQUESTS: "/admin/requests",
    REQUESTSNEW: "/admin/requests/new",
    REQUESTSREJECTED: "/admin/requests/rejected",
    CLIENTS: {
      DASHBOARD: "/admin/clients",
      ORGANIZATION: {
        DETAILS: (id) => `/admin/clients/organization/${id}/details`,
        DETAILSEDIT: (id) => `/admin/clients/organization/${id}/details/edit`,
        EMPLOYEE: (id) => `/admin/clients/organization/${id}/employee`,
        CLIENTS: (id) => `/admin/clients/organization/${id}/clients`,
        DOCTORS: (id) => `/admin/clients/organization/${id}/doctors`,
        DOCTORSDETAILS: (id,id2) => `/admin/clients/organization/${id}/doctors/${id2}`,
        APPOINTMENTS: (id) => `/admin/clients/organization/${id}/appointments`,
        PRESCRIPTIONS: (id) => `/admin/clients/organization/${id}/prescriptions`,
        PATIENTS: (id) => `/admin/clients/organization/${id}/patients`,
        PATIENTSEDIT: (id) => `/admin/clients/organization/${id}/patients/edit`,
        PATIENTSDETAILS: (id,id2) => `/admin/clients/organization/${id}/patients/${id2}`,
      },
      FAMILY: {
        DETAILS: (id) => `/admin/clients/family/${id}/details`,
        DETAILSEDIT: (id) => `/admin/clients/family/${id}/details/edit`,
        APPOINTMENTS: (id) => `/admin/clients/family/${id}/appointments`,
        PRESCRIPTIONS: (id) => `/admin/clients/family/${id}/prescriptions`,
        PATIENTS: (id) => `/admin/clients/family/${id}/patients`,
        PATIENTSDETAILS: (id,id2) => `/admin/clients/family/${id}/patients/${id2}`,
        
      },
      PATIENTSDETAILS:{
        DETAILS: (id) => `/admin/clients/patientDetails/${id}/details`,
        EDIT: (id) => `/admin/clients/patientDetails/${id}/edit`,
      }
    },
    STAFF:{
      DASHBOARD: "/admin/staff",
      STAFFID:(id)=> `/admin/staff/${id}`
    },
    REPORT:{
      DASHBOARD: "/admin/reports",
      REPORTID:(id)=> `/admin/reports/${id}`
    },
    CONTRACTS:{
      DASHBOARD: "/admin/contracts",
      REQUESTS: "/admin/contracts/requests",
      EXPIRED: "/admin/contracts/expired",
      CONTRACTSID:(id)=> `/admin/contracts/${id}`
    },
    PERMISSIONS: "/admin/permissions",
    CONTENT: "/admin/content",
    PLANS: "/admin/plans",
  },
};

export default ROUTES;
