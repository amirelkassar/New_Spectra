import { buildQuery } from '@/lib/utils';

export const contract = {
  base: '/contract',
  list: (queries = {}) => buildQuery('/contract/list', queries),
  actions: {
    get: (id) => `/contract?id=${id}`,
    reject: '/contract/reject',
    accept: '/contract/accept',
  },
};
