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
  DOCTOR: {
    MAIN: "/doctor/main",
    APPOINTMENTS: "/doctor/appointments",
    APPOINTMENTSCANCELD: "/doctor/appointments/cancelled",
    APPOINTMENTSDEFERRED: "/doctor/appointments/deferred",
    CLIENTS: {
      DASHBOARD: "/doctor/clients",
      ORGANIZATION: {
        DETAILS: (id) => `/doctor/clients/organization/${id}/details`,
        DETAILSEDIT: (id) => `/doctor/clients/organization/${id}/details/edit`,
        EMPLOYEE: (id) => `/doctor/clients/organization/${id}/employee`,
        CLIENTS: (id) => `/doctor/clients/organization/${id}/clients`,
        DOCTORS: (id) => `/doctor/clients/organization/${id}/doctors`,
        DOCTORSDETAILS: (id,id2) => `/doctor/clients/organization/${id}/doctors/${id2}`,
        APPOINTMENTS: (id) => `/doctor/clients/organization/${id}/appointments`,
        PRESCRIPTIONS: (id) => `/doctor/clients/organization/${id}/prescriptions`,
        PATIENTS: (id) => `/doctor/clients/organization/${id}/patients`,
        PATIENTSEDIT: (id) => `/doctor/clients/organization/${id}/patients/edit`,
        PATIENTSDETAILS: (id,id2) => `/doctor/clients/organization/${id}/patients/${id2}`,
      },
      FAMILY: {
        DETAILS: (id) => `/doctor/clients/family/${id}/details`,
        DETAILSEDIT: (id) => `/doctor/clients/family/${id}/details/edit`,
        APPOINTMENTS: (id) => `/doctor/clients/family/${id}/appointments`,
        PRESCRIPTIONS: (id) => `/doctor/clients/family/${id}/prescriptions`,
        PATIENTS: (id) => `/doctor/clients/family/${id}/patients`,
        PATIENTSDETAILS: (id,id2) => `/doctor/clients/family/${id}/patients/${id2}`,
        
      },
      PATIENTSDETAILS:{
        DETAILS: (id) => `/doctor/clients/patientDetails/${id}/details`,
        EDIT: (id) => `/doctor/clients/patientDetails/${id}/edit`,
      }
    },
   
    CONTRACTS:{
      DASHBOARD: "/doctor/contracts",
      REQUESTS: "/doctor/contracts/requests",
      EXPIRED: "/doctor/contracts/expired",
      CONTRACTSID:(id)=> `/doctor/contracts/${id}`
    },
    CHATS:{
      DASHBOARD: "/doctor/chats",
    },
    PERMISSIONS: "/doctor/permissions",
    CONTENT: "/doctor/content",
    PLANS: "/doctor/plans",
  },
};

export default ROUTES;
