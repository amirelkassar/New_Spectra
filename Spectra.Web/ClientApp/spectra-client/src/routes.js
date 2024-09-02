const ROUTES = {
  HOME: '/',
  ROOT: {
    HOME: '/',
    ABOUT: '/about',
    TEAM: '/team',
    SERVICES: '/services',
    TREATMENT: '/treatment',
    SUCCESS_STORIES: '/success-stories',
    BLOG: '/blog',
    CONTACT: '/contact',
  },
  AUTH: {
    LOGIN: '/login',
    SIGNUP_FAMILY: '/signup/family',
    SIGNUP_ORG: '/signup/organization',
    SIGNUP_PROVIDER: '/signup/provider',
    FORGOT_PASSWORD: '/forgot-password',
    RESET_PASSWORD: '/reset-password',
  },
  CLIENT: {
    MAIN: '/client/main',
    CONTROL_MENU: '/client/control',
    PROFILE: '/client/profile',
    PACKAGES: '/client/packages',
    SCHEDULES: '/client/schedules',
    STEPS: '/client/steps',
    TEAM: '/client/team',
    REPORTS: '/client/reports',
    CHATS: '/client/chats',
    WALLET: '/client/wallet',
    SETTINGS: '/client/settings',
  },
  ADMIN: {
    MAIN: '/admin/main',
    APPOINTMENTS: '/admin/appointments',
    REQUESTS: '/admin/requests',
    REQUESTSNEW: '/admin/requests/new',
    REQUESTSREJECTED: '/admin/requests/rejected',
    REQUESTSID: (id) => `/admin/requests/${id}`,
    CLIENTS: {
      DASHBOARD: '/admin/clients',
      ORGANIZATION: {
        DETAILS: (id) =>
          `/admin/clients/organization/${id}/details`,
        DETAILSEDIT: (id) =>
          `/admin/clients/organization/${id}/details/edit`,
        EMPLOYEE: (id) =>
          `/admin/clients/organization/${id}/employee`,
        CLIENTS: (id) =>
          `/admin/clients/organization/${id}/clients`,
        DOCTORS: (id) =>
          `/admin/clients/organization/${id}/doctors`,
        DOCTORSDETAILS: (id, id2) =>
          `/admin/clients/organization/${id}/doctors/${id2}`,
        APPOINTMENTS: (id) =>
          `/admin/clients/organization/${id}/appointments`,
        PRESCRIPTIONS: (id) =>
          `/admin/clients/organization/${id}/prescriptions`,
        PATIENTS: (id, id2) =>
          `/admin/clients/organization/${id}/clients/${id2}/patients`,
        PATIENTSEDIT: (id, id2) =>
          `/admin/clients/organization/${id}/clients/${id2}/patients/edit`,
      },
      FAMILY: {
        DETAILS: (id) =>
          `/admin/clients/family/${id}/details`,
        DETAILSEDIT: (id) =>
          `/admin/clients/family/${id}/details/edit`,
        APPOINTMENTS: (id) =>
          `/admin/clients/family/${id}/appointments`,
        PRESCRIPTIONS: (id) =>
          `/admin/clients/family/${id}/prescriptions`,
        PATIENTS: (id) =>
          `/admin/clients/family/${id}/patients`,
        PATIENTSEDIT: (id) =>
          `/admin/clients/family/${id}/patients/edit`,
      },
      PATIENTSDETAILS: {
        DETAILS: (id) =>
          `/admin/clients/patientDetails/${id}/details`,
        EDIT: (id) =>
          `/admin/clients/patientDetails/${id}/edit`,
      },
    },
    STAFF: {
      DASHBOARD: '/admin/staff',
      STAFFID: (id) => `/admin/staff/${id}`,
    },
    REPORT: {
      DASHBOARD: '/admin/reports',
      REPORTID: (id) => `/admin/reports/${id}`,
    },
    DATAMAIN:{
      HOME:'/admin/main-data',
      DRUGSADD: '/admin/main-data/add-drugs',
      DRUGSDETAILS: (id)=>`/admin/main-data/${id}`,
      SPECIALTIES: '/admin/main-data/doctors-specialties',
      SPECIALTIESADD: '/admin/main-data/doctors-specialties/add',
      ANALYSISRUMORS: '/admin/main-data/analysis-rumors',
      ANALYSISRUMORSADD: '/admin/main-data/analysis-rumors/add',
      DIAGNOSTICS: '/admin/main-data/diagnostics',
      DIAGNOSTICSADD: '/admin/main-data/diagnostics/add',
      DIAGNOSTICSDETAILS: (id)=>`/admin/main-data/diagnostics/${id}`,
      COMPLAINTS: '/admin/main-data/complaints',
      COMPLAINTSADD: '/admin/main-data/complaints/add',
    },
   
    CONTRACTS: {
      DASHBOARD: '/admin/contracts',
      REQUESTS: '/admin/contracts/requests',
      EXPIRED: '/admin/contracts/expired',
      CONTRACTSUSER: (id) => `/admin/contracts/${id}`,
      CONTRACTSUSERNEW: (id) => `/admin/contracts/${id}/new-contacts`,
      CONTRACTSUSERDETAILS: (id,id2) => `/admin/contracts/${id}/contracts-details/${id2}`,
      
    },
    SETTINGS: {
      DASHBOARD: '/admin/settings',
      PERMISSIONS: {
        DASHBOARD: '/admin/settings/permissions',
        USERS: '/admin/settings/permissions/users',
        PERMISSIONSEDIT: (id) =>
          `/admin/settings/permissions/${id}/edit`,
        PERMISSIONSUSEREDIT: (id) =>
          `/admin/settings/permissions/users/${id}/edit`,
      },
      CONTENT: {
        DASHBOARD: '/admin/settings/content',
        SERVICES: '/admin/settings/content/services',
        BANNERSAD: '/admin/settings/content/bannersAD',
        MEDICAL: '/admin/settings/content/medicalSpecialties',
        MEDICALID: (id)=>`/admin/settings/content/medicalSpecialties/${id}`,
        ARTICLES: '/admin/settings/content/articles',
        ADDARTICLES: '/admin/settings/content/articles/add-articles',
        EDITARTICLES:(id)=> `/admin/settings/content/articles/${id}`,
      },
      PLANS: {
        DASHBOARD: '/admin/settings/plans',
      },
    },
  },
  DOCTOR: {
    MAIN: '/doctor/main',
    APPOINTMENTS: '/doctor/appointments',
    APPOINTMENTSCANCELD: '/doctor/appointments/cancelled',
    APPOINTMENTSCALENDAR: '/doctor/appointments/calendar',
    APPOINTMENTSDEFERRED: '/doctor/appointments/deferred',
    RATINGS: {
      DASHBOARD: '/doctor/ratings',
    },
    CLIENTS: {
      DASHBOARD: '/doctor/clients',
      PRESCRIPTIONS: '/doctor/clients/prescriptions',
      REPORT: '/doctor/clients/reports',
      INVITATIONCODE: '/doctor/clients/invitationCode',
      DETAILS: (id) => `/doctor/clients/${id}/details`,
      REPORTPATIENTS: (id) =>
        `/doctor/clients/${id}/reports`,
      PRESCRIPTIONSPATIENTS: (id) =>
        `/doctor/clients/${id}/prescriptions`,
      ACTIVITIESSPATIENTS: (id) =>
        `/doctor/clients/${id}/activities`,
      ADDREPORTPATIENTS: (id) =>
        `/doctor/clients/${id}/addReport`,
      ADDPRESCRIPTIONSPATIENTS: (id) =>
        `/doctor/clients/${id}/addPrescriptions`,
      PATIENTSDETAILS: {
        DETAILS: (id) =>
          `/doctor/clients/patientDetails/${id}/details`,
        EDIT: (id) =>
          `/doctor/clients/patientDetails/${id}/edit`,
      },
    },
    WALLET: {
      DASHBOARD: '/doctor/wallet',
    },
    PROFILE: {
      DASHBOARD: '/doctor/profile',
      CERTIFICATES: '/doctor/profile/certificates',
      MYPRESCRIPTIONS: '/doctor/profile/my_prescriptions',
    },
    CONTRACTS: {
      DASHBOARD: '/doctor/contracts',
      CONTRACTSNEW: '/doctor/contracts/new',
      CONTRACTSID: (id) => `/doctor/contracts/${id}`,
    },
    CHATS: {
      DASHBOARD: '/doctor/chats',
    },
    PERMISSIONS: '/doctor/permissions',
    CONTENT: '/doctor/content',
    PLANS: '/doctor/plans',
  },
};

export default ROUTES;
