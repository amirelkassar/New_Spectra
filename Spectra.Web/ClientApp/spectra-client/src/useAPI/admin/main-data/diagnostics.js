"use client";
import { api } from "@/api/api";
import { Admin } from "@/api/endpoints";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
//getAll
export const GetDiagnostics = () => {
  return useQuery({
    queryKey: [Admin.Diagnose.url],
    queryFn: async () => {
      const response = await api.get(Admin.Diagnose.url, {
        headers: {},
      });
      return response;
    },
  });
};
//getID
export const GetDiagnosticsID = (id) => {
  return useQuery({
    queryKey: [Admin.Diagnose.getByID(id)],
    queryFn: async () => {
      const response = await api.get(Admin.Diagnose.getByID(id), {
        headers: {},
      });
      return response;
    },
  });
};
//delete
export const DeleteDiagnostics = (id) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["Diagnostics"],
    mutationFn: async () => {
      const response = await api.delete(Admin.Diagnose.DeleteByID(id));
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["Diagnostics"]);
     
    },
  });
};
//post
export const useCreateDiagnostics = () => {
  return useMutation({
    mutationFn: async (data) => {
      const response = await api.post(Admin.Diagnose.url, data, {});
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
export const useEditDiagnostics = (id) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["EditDiagnostics"],
    mutationFn: async (data) => {
      console.log(id);

      const response = await api.put(Admin.Diagnose.getByID(id), data, {});
      return response.data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries(["EditDiagnostics"]);
    },
    onError: (error) => {
      console.error("حدث خطأ أثناء التعديل:", error);
    },
  });
};
