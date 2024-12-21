import { buildQuery } from '@/lib/utils';

export const contract = {
  base: '/contract',
  list: (queries = {}) => buildQuery('/contract/list', queries),
  actions: {
    get: (id) => `/contract?id=${id}`,
    delete: (id) => `/contract?id=${id}`,
    update: '/contract',
    cancel: '/contract/cancel',
    reject: '/contract/reject',
    accept: '/contract/accept',
  },
};
