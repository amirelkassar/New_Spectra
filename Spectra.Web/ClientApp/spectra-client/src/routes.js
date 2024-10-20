const ROUTES = {
  HOME: "/",
  ROOT: {
    HOME: "/",
    ABOUT: "/about",
    TEAM: "/team",
    SERVICES: "/services",
    TREATMENT: "/treatment",
    SUCCESS_STORIES: "/success-stories",
    BLOG: "/blog",
    CONTACT: "/contact",
  },
  AUTH: {
    LOGIN: "/login",
    SIGNUP_FAMILY: "/signup/family",
    SIGNUP_ORG: "/signup/organization",
    SIGNUP_PROVIDER: "/signup/provider",
    FORGOT_PASSWORD: "/forgot-password",
    RESET_PASSWORD: "/reset-password",
  },
  CLIENT: {
    MAIN: "/client/main",
    CONTROL_MENU: "/client/control",
    PROFILE: "/client/profile",
    PACKAGES: "/client/packages",
    SCHEDULES: "/client/schedules",
    STEPS: "/client/steps",
    TEAM: "/client/team",
    REPORTS: "/client/reports",
    CHATS: "/client/chats",
    WALLET: "/client/wallet",
    SETTINGS: "/client/settings",
  },
  ADMIN: {
    MAIN: "/admin/main",
    APPOINTMENTS: "/admin/appointments",
    APPOINTMENTSDETAILS: (id) => `/admin/appointments/${id}`,
    REQUESTS: "/admin/requests",
    REQUESTSNEW: "/admin/requests/new",
    REQUESTSREJECTED: "/admin/requests/rejected",
    REQUESTSID: (id) => `/admin/requests/${id}`,
    REQUESTSIDEdit: (id) => `/admin/requests/${id}/edit`,
    CLIENTS: {
      DASHBOARD: "/admin/clients",
      ORGANIZATION: {
        DETAILS: (id) => `/admin/clients/organization/${id}/details`,
        DETAILSEDIT: (id) => `/admin/clients/organization/${id}/details/edit`,
        EMPLOYEE: (id) => `/admin/clients/organization/${id}/employee`,
        CLIENTS: (id) => `/admin/clients/organization/${id}/clients`,
        DOCTORS: (id) => `/admin/clients/organization/${id}/doctors`,
        DOCTORSDETAILS: (id, id2) =>
          `/admin/clients/organization/${id}/doctors/${id2}`,
        APPOINTMENTS: (id) => `/admin/clients/organization/${id}/appointments`,
        PRESCRIPTIONS: (id) =>
          `/admin/clients/organization/${id}/prescriptions`,
        PATIENTS: (id, id2) =>
          `/admin/clients/organization/${id}/clients/${id2}/patients`,
        PATIENTSEDIT: (id, id2) =>
          `/admin/clients/organization/${id}/clients/${id2}/patients/edit`,
      },
      FAMILY: {
        DETAILS: (id) => `/admin/clients/family/${id}/details`,
        DETAILSEDIT: (id) => `/admin/clients/family/${id}/details/edit`,
        APPOINTMENTS: (id) => `/admin/clients/family/${id}/appointments`,
        PRESCRIPTIONS: (id) => `/admin/clients/family/${id}/prescriptions`,
        PRESCRIPTIONSDETAILS: (id, id2) =>
          `/admin/clients/family/${id}/prescriptions/${id2}`,
        PRESCRIPTIONSEDIT: (id, id2) =>
          `/admin/clients/family/${id}/prescriptions/${id2}/edit`,
        REPORTS: (id) => `/admin/clients/family/${id}/reports`,
        REPORTSDETAILS: (id, id2) =>
          `/admin/clients/family/${id}/reports/${id2}`,
        PATIENTS: (id) => `/admin/clients/family/${id}/patients`,
        PATIENTSEDIT: (id) => `/admin/clients/family/${id}/patients/edit`,
      },
      PATIENTSDETAILS: {
        DASHBOARD: (id) => `/admin/clients/patientDetails/${id}`,
        APPOINTMENTS: (id) =>
          `/admin/clients/patientDetails/${id}/appointments`,
        PRESCRIPTIONS: (id) =>
          `/admin/clients/patientDetails/${id}/prescriptions`,
        REPORTS: (id) => `/admin/clients/patientDetails/${id}/reports`,
        REPORTSID: (id, id2) =>
          `/admin/clients/patientDetails/${id}/reports/${id2}`,
      },
    },
    STAFF: {
      DASHBOARD: "/admin/staff",
      STAFFID: (id) => `/admin/staff/${id}`,
      STAFFADD: `/admin/staff/add`,
      STAFFIDEDIT: (id) => `/admin/staff/${id}?edit=true`,
      STAFFIDINFORMATION: (id) => `/admin/staff/${id}/information`,
      STAFFIDINFORMATIONEDIT: (id) =>
        `/admin/staff/${id}/information?edit=true`,
      STAFFIDCONTRACTS: (id) => `/admin/staff/${id}/contracts`,

      STAFFIDPRESCRIPTIONS: (id) => `/admin/staff/${id}/prescriptions`,
      STAFFIDCLIENTS: (id) => `/admin/staff/${id}/clients`,
    },
    REPORT: {
      DASHBOARD: "/admin/reports",
      REPORTID: (id) => `/admin/reports/${id}`,
    },
    DATAMAIN: {
      HOME: "/admin/main-data",
      DRUGSADD: "/admin/main-data/add-drugs",
      DRUGSDETAILS: (id) => `/admin/main-data/${id}`,
      DRUGSDETAILSEDIT: (id) => `/admin/main-data/${id}/edit`,
      SPECIALTIES: "/admin/main-data/doctors-specialties",
      SPECIALTIESID: (id) => `/admin/main-data/doctors-specialties/${id}`,
      SPECIALTIESIDEDIT: (id) =>
        `/admin/main-data/doctors-specialties/${id}/edit`,
      SPECIALTIESADD: "/admin/main-data/doctors-specialties/add",
      ANALYSISRUMORS: "/admin/main-data/analysis-rumors",
      ANALYSISRUMORSDETAILS: (id) => `/admin/main-data/analysis-rumors/${id}`,
      ANALYSISRUMORSDETAILSEDIT: (id) =>
        `/admin/main-data/analysis-rumors/${id}/edit`,
      ANALYSISRUMORSADD: "/admin/main-data/analysis-rumors/add",
      DIAGNOSTICS: "/admin/main-data/diagnostics",
      DIAGNOSTICSADD: "/admin/main-data/diagnostics/add",
      DIAGNOSTICSDETAILS: (id) => `/admin/main-data/diagnostics/${id}`,
      DIAGNOSTICSDETAILSEDIT: (id) => `/admin/main-data/diagnostics/${id}/edit`,
      COMPLAINTS: "/admin/main-data/complaints",
      COMPLAINTSDETAILS: (id) => `/admin/main-data/complaints/${id}`,
      COMPLAINTSDETAILSEDIT: (id) => `/admin/main-data/complaints/${id}/edit`,
      COMPLAINTSADD: "/admin/main-data/complaints/add",
      SERVICES: "/admin/main-data/services",
      SERVICESADD: "/admin/main-data/services/add",
      SERVICESDETAILS: (id) => `/admin/main-data/services/${id}`,
      SERVICESDETAILSEDIT: (id) => `/admin/main-data/services/${id}/edit`,
      TESTSINTERIOR: "/admin/main-data/testsInterior",
      TESTSINTERIORDETAILS: (id) => `/admin/main-data/testsInterior/${id}`,
      TESTSINTERIORDETAILSEDIT: (id) =>
        `/admin/main-data/testsInterior/${id}/edit`,
      TESTSINTERIORADD: "/admin/main-data/testsInterior/add",
    },

    CONTRACTS: {
      DASHBOARD: "/admin/contracts",
      REQUESTS: "/admin/contracts/requests",
      EXPIRED: "/admin/contracts/expired",
      CONTRACTSUSER: (id) => `/admin/contracts/${id}`,
      CONTRACTSUSERDETAILS: (id, id2) =>
        `/admin/contracts/${id}/contracts-details/${id2}`,
      CONTRACTSUSERDETAILSEDIT: (id, id2) =>
        `/admin/contracts/${id}/contracts-details/${id2}?editContracts=true`,
    },
    SETTINGS: {
      DASHBOARD: "/admin/settings",
      PERMISSIONS: {
        DASHBOARD: "/admin/settings/permissions",
        USERS: "/admin/settings/permissions/users",
        PERMISSIONSEDIT: (id) => `/admin/settings/permissions/${id}/edit`,
        PERMISSIONSUSEREDIT: (id) =>
          `/admin/settings/permissions/users/${id}/edit`,
      },
      CONTENT: {
        DASHBOARD: "/admin/settings/content",
        BANNERSAD: "/admin/settings/content/bannersAD",
        MEDICAL: "/admin/settings/content/medicalSpecialties",
        MEDICALID: (id) => `/admin/settings/content/medicalSpecialties/${id}`,
        ARTICLES: "/admin/settings/content/articles",
        ADDARTICLES: "/admin/settings/content/articles/add-articles",
        EDITARTICLES: (id) => `/admin/settings/content/articles/${id}`,
        STORIES: "/admin/settings/content/stories",
        STORIESID: (id) => `/admin/settings/content/stories/${id}`,
        STORIESADD: "/admin/settings/content/stories/add",
      },
      PACKAGES: {
        DASHBOARD: "/admin/settings/packages",
        PACKAGESDETAILS:(id)=> `/admin/settings/packages/${id}`,
        PACKAGESADD: "/admin/settings/packages/add",
      },
    },
  },
  DOCTOR: {
    MAIN: "/doctor/main",
    APPOINTMENTS: "/doctor/appointments",
    APPOINTMENTSCANCELD: "/doctor/appointments/cancelled",
    APPOINTMENTSCALENDAR: "/doctor/appointments/calendar",
    APPOINTMENTSDEFERRED: "/doctor/appointments/deferred",
    APPOINTMENTSUPCOMING: "/doctor/appointments/upcoming",
    APPOINTMENTSPREVIOUS: "/doctor/appointments/previous",
    APPOINTMENTSWORK: "/doctor/appointments/appointmentsWork",
    APPOINTMENTSWORKID: (id) => `/doctor/appointments/appointmentsWork/${id}`,
    APPOINTMENTSWORKADD: "/doctor/appointments/appointmentsWork/add",
    RATINGS: {
      DASHBOARD: "/doctor/ratings",
    },
    CLIENTS: {
      DASHBOARD: "/doctor/clients",
      PRESCRIPTIONS: "/doctor/clients/prescriptions",
      REPORT: "/doctor/clients/reports",
      INVITATIONCODE: "/doctor/clients/invitationCode",
      DETAILS: (id) => `/doctor/clients/${id}/details`,
      REPORTPATIENTS: (id) => `/doctor/clients/${id}/reports`,
      PRESCRIPTIONSPATIENTS: (id) => `/doctor/clients/${id}/prescriptions`,
      ACTIVITIESSPATIENTS: (id) => `/doctor/clients/${id}/activities`,
      ADDREPORTPATIENTS: (id) => `/doctor/clients/${id}/addReport`,
      ADDPRESCRIPTIONSPATIENTS: (id) =>
        `/doctor/clients/${id}/addPrescriptions`,
      PATIENTSDETAILS: {
        DETAILS: (id) => `/doctor/clients/patientDetails/${id}/details`,
        EDIT: (id) => `/doctor/clients/patientDetails/${id}/edit`,
      },
    },
    WALLET: {
      DASHBOARD: "/doctor/wallet",
    },
    PROFILE: {
      DASHBOARD: "/doctor/profile",
      CERTIFICATES: "/doctor/profile/certificates",
      MYPRESCRIPTIONS: "/doctor/profile/my_prescriptions",
    },
    CONTRACTS: {
      DASHBOARD: "/doctor/contracts",
      CONTRACTSNEW: "/doctor/contracts/addNew",
      CONTRACTSID: (id) => `/doctor/contracts/${id}`,
      CONTRACTSIDEDIT:(id)=> `/doctor/contracts/${id}?editContracts=true`,
    },
    CHATS: {
      DASHBOARD: "/doctor/chats",
    },
    PERMISSIONS: "/doctor/permissions",
    CONTENT: "/doctor/content",
    PLANS: "/doctor/plans",
  },
};

export default ROUTES;
