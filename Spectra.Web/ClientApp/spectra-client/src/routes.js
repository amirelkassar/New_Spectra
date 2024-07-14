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
    MAIN: "/main",
    APPOINTMENTS: "/appointments",
    REQUESTS: "/requests",
    REQUESTSNEW: "/requests",
    REQUESTSOLD: "/requests/old",
    CLIENTS: {
      DASHBOARD: "/clients",
      ORGANIZATION: {
        DETAILS: (id) => `/clients/organization/${id}/details`,
        EMPLOYEE: (id) => `/clients/organization/${id}/employee`,
        CLIENTS: (id) => `/clients/organization/${id}/clients`,
        DOCTORS: (id) => `/clients/organization/${id}/doctors`,
        APPOINTMENTS: (id) => `/clients/organization/${id}/appointments`,
        PRESCRIPTIONS: (id) => `/clients/organization/${id}/prescriptions`,
        PATIENTS: (id) => `/clients/organization/${id}/patients`,
      },
      FAMILY: {
        DETAILS: (id) => `/clients/family/${id}/details`,
        APPOINTMENTS: (id) => `/clients/family/${id}/appointments`,
        PRESCRIPTIONS: (id) => `/clients/family/${id}/prescriptions`,
        PATIENTS: (id) => `/clients/family/${id}/patients`,
      },
    },
    REPORST: "/reports",
    PERMISSIONS: "/permissions",
    CONTENT: "/content",
    PLANS: "/plans",
    STEFF: "/staff",
  },
};

export default ROUTES;
