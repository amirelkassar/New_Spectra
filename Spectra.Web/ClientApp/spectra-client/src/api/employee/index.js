import { buildQuery } from '@/lib/utils';

export const contract = {
  base: '/contract',
  get: '/contract',
  actions: {
    add: '/contract',
    update: '/contract',
    cancel: '/contract/cancel',
    reject: '/contract/reject',
    accept: '/contract/accept',
    download: '/contract/download',
  },
};

export const scheduleTime = {
  base: '/scheduleTime',
  list: (queries = {}) => buildQuery('/scheduleTime/list', queries),
  actions: {
    add: '/scheduleTime',
    update: '/scheduleTime',
    delete: (day) => `/scheduleTime?day=${day}`,
  },
};
