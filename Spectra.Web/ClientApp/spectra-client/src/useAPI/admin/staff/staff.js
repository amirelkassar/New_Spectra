"use client";
import { apiAdmin } from "@/api/api";
import { Admin } from "@/api/endpoints";
import { useRouter } from "@/navigation";
import ROUTES from "@/routes";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
//getAll
export const GetMedicalTests = () => {
  return useQuery({
    queryKey: [Admin.MedicalTests.url],
    queryFn: async () => {
      const response = await apiAdmin.get(Admin.MedicalTests.url, {
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
      const response = await apiAdmin.get(Admin.MedicalTests.getByID(id), {
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
      const response = await apiAdmin.delete(Admin.MedicalTests.DeleteByID(id));
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["MedicalTests"]);
      router.replace(ROUTES.ADMIN.DATAMAIN.MedicalTestsS);
    },
  });
};
//post
export const useCreateStaff = () => {
  return useMutation({
    mutationFn: async (data) => {
      const response = await apiAdmin.post(Admin.Staff.post, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    },
    onSuccess: (data) => {
      console.log("wsdasdasd");
    },
    onError: (error) => {
      console.error("حدث خطأ أثناء الإرسال:", error);
    },
  });
};
//put
export const useEditMedicalTests = (id) => {
  const { refetch } = GetMedicalTests();
  const { refetch: refetch2 } = GetMedicalTestsID(id);

  return useMutation({
    mutationKey: ["EditMedicalTests"],
    mutationFn: async (data) => {
      console.log(id);

      const response = await apiAdmin.put(
        Admin.MedicalTests.getByID(id),
        data,
        {}
      );
      return response.data;
    },
    onSuccess: (data) => {
      refetch();
      refetch2();
    },
    onError: (error) => {
      console.error("حدث خطأ أثناء التعديل:", error);
    },
  });
};
