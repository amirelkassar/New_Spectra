"use client";
import { apiAdmin } from "@/api/api";
import { Admin } from "@/api/endpoints";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const GetDrugs = () => {
  return useQuery({
    queryKey: [Admin.Drugs.url],
    queryFn: async () => {
      const response = await apiAdmin.get(Admin.Drugs.url, {
        headers: {},
      });
      return response;
    },
  });
};
export const GetDrugsID = (id) => {
  return useQuery({
    queryKey: [Admin.Drugs.getByID(id)],
    queryFn: async () => {
      const response = await apiAdmin.get(Admin.Drugs.getByID(id), {
        headers: {},
      });
      return response;
    },
  });
};
export const DeleteDrugs = (id) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["Drugs"],
    mutationFn: async () => {
      const response = await apiAdmin.delete(Admin.Drugs.DeleteByID(id));
      return response.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries(["Drugs"]);
    },
  });
};

export const useCreateDrug = () => {
  const { refetch } = GetDrugs();
  return useMutation({
    mutationFn: async (data) => {
      const response = await apiAdmin.post(Admin.Drugs.url, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    },
    onSuccess: (data) => {
      refetch();
    },
    onError: (error) => {
      console.error("حدث خطأ أثناء الإرسال:", error);
    },
  });
};
export const useEditDrug = (id) => {
  const { refetch } = GetDrugs();
  return useMutation({
    mutationKey: ["EditDrugs"],
    mutationFn: async (data) => {
      // console.log(id);

      const response = await apiAdmin.put(Admin.Drugs.getByID(id), data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    },
    onSuccess: (data) => {
      refetch();
    },
    onError: (error) => {
      console.error("حدث خطأ أثناء التعديل:", error);
    },
  });
};
