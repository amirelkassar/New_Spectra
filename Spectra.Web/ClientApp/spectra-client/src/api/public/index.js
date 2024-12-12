import { buildQuery } from '@/lib/utils';

export const specialization = {
  base: '/specialization',
  list: (queries = {}) => buildQuery('/specialization/list', queries),
  actions: {
    get: (id) => `/specialization?id=${id}`,
  },
};
