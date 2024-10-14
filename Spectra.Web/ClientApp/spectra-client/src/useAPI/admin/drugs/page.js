import { api } from "@/api/api";
import { Admin } from "@/api/endpoints";
import { useQuery } from "@tanstack/react-query";

export const GetDrugs = () => {
  return useQuery({
    queryKey: [Admin.Drugs.get],
    queryFn: async () => {
      const response = await api.get(Admin.Drugs.get, {
        headers: {},
      });
      return response;
    },
  });
};
