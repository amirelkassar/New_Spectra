"use client";
import { api } from "@/api/api";
import { Admin } from "@/api/endpoints";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
//getAll
export const GetInternalExamination = () => {
  return useQuery({
    queryKey: [Admin.InternalExamination.url],
    queryFn: async () => {
      const response = await api.get(Admin.InternalExamination.url, {
        headers: {},
      });
      return response;
    },
  });
};
//getID
export const GetInternalExaminationID = (id) => {
  return useQuery({
    queryKey: [Admin.InternalExamination.getByID(id)],
    queryFn: async () => {
      const response = await api.get(Admin.InternalExamination.getByID(id), {
        headers: {},
      });
      return response;
    },
  });
};
//delete
export const DeleteInternalExamination = (id) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["InternalExamination"],
    mutationFn: async () => {
      const response = await api.delete(
        Admin.InternalExamination.DeleteByID(id)
      );
      return response.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries(["InternalExamination"]);
    },
  });
};
//post
export const useCreateInternalExamination = () => {
  return useMutation({
    mutationFn: async (data) => {
      const response = await api.post(Admin.InternalExamination.url, data, {});
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
export const useEditInternalExamination = (id) => {
  return useMutation({
    mutationKey: ["EditInternalExamination"],
    mutationFn: async (data) => {
      console.log(id);

      const response = await api.put(
        Admin.InternalExamination.getByID(id),
        data,
        {}
      );
      return response.data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries(["EditInternalExamination"]);
    },
    onError: (error) => {
      console.error("حدث خطأ أثناء التعديل:", error);
    },
  });
};
