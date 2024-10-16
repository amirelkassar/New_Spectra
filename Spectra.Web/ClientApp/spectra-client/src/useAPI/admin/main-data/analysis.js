"use client";
import { api } from "@/api/api";
import { Admin } from "@/api/endpoints";
import { useRouter } from "@/navigation";
import ROUTES from "@/routes";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
//getAll
export const GetMedicalTests = () => {
  return useQuery({
    queryKey: [Admin.MedicalTests.url],
    queryFn: async () => {
      const response = await api.get(Admin.MedicalTests.url, {
        headers: {},
      });
      return response;
    },
  });
};
//getID
export const GetMedicalTestsID = (id) => {
  return useQuery({
    queryKey: [Admin.MedicalTests.getByID(id)],
    queryFn: async () => {
      const response = await api.get(Admin.MedicalTests.getByID(id), {
        headers: {},
      });
      return response;
    },
  });
};
//delete
export const DeleteMedicalTests = (id) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["MedicalTests"],
    mutationFn: async () => {
      const response = await api.delete(Admin.MedicalTests.DeleteByID(id));
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["MedicalTests"]);
      router.replace(ROUTES.ADMIN.DATAMAIN.MedicalTestsS);
    },
  });
};
//post
export const useCreateMedicalTests = () => {
  return useMutation({
    mutationFn: async (data) => {
      const response = await api.post(Admin.MedicalTests.url, data, {});
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
export const useEditMedicalTests = (id) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["EditMedicalTests"],
    mutationFn: async (data) => {
      console.log(id);

      const response = await api.put(Admin.MedicalTests.getByID(id), data, {});
      return response.data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries(["EditMedicalTests"]);
    },
    onError: (error) => {
      console.error("حدث خطأ أثناء التعديل:", error);
    },
  });
};
