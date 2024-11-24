import { api } from '@/api/axios';
import { General } from '@/api/endpoints';
import { useQuery } from '@tanstack/react-query';

export const GetCountry = () => {
  return useQuery({
    queryKey: [General.Country.url],
    queryFn: async () => {
      const response = await api.get(General.Country.url, {
        headers: {},
      });
      return response;
    },
  });
};
