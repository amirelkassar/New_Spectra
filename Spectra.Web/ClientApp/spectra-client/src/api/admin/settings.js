import { buildQuery } from '@/lib/utils';

export const settings = {
  packages: {
    base: '/package',
    list: (queries = {}) =>
      buildQuery('/package/list', queries),
    actions: {
      add: '/package',
      get: (id) => `/package?id=${id}`,
      delete: (id) => `/package?id=${id}`,
      update: (id) => `/package?id=${id}`,
    },
  },
};
