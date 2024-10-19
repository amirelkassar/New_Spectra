"use client";
import { api } from "@/api/api";
import { Admin } from "@/api/endpoints";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
//getAll
export const GetSpecialization = () => {
  return useQuery({
    queryKey: [Admin.Specialization.url],
    queryFn: async () => {
      const response = await api.get(Admin.Specialization.url, {
        headers: {},
      });
      return response;
    },
  });
};
//getID
export const GetSpecializationID = (id) => {
  return useQuery({
    queryKey: [Admin.Specialization.getByID(id)],
    queryFn: async () => {
      const response = await api.get(Admin.Specialization.getByID(id), {
        headers: {},
      });
      return response;
    },
  });
};
//delete
export const DeleteSpecialization = (id) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["Specialization"],
    mutationFn: async () => {
      const response = await api.delete(Admin.Specialization.DeleteByID(id));
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["Specialization"]);
     
    },
  });
};
//post
export const useCreateSpecialization = () => {
  return useMutation({
    mutationFn: async (data) => {
      const response = await api.post(Admin.Specialization.url, data, {});
      return response.data;
    },
    onSuccess: (data) => {
      console.log("تم الإرسال بنجاح:", data);
    },
    onError: (error) => {
      console.error("حدث خطأ أثناء الإرسال:", error);
    },
  });
};
//put
export const useEditSpecialization = (id) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["EditSpecialization"],
    mutationFn: async (data) => {
      console.log(id);

      const response = await api.put(Admin.Specialization.getByID(id), data, {});
      return response.data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries(["EditSpecialization"]);
    },
    onError: (error) => {
      console.error("حدث خطأ أثناء التعديل:", error);
    },
  });
};
