"use client";
import { apiAdmin } from "@/api/api";
import { Admin } from "@/api/endpoints";
import { useRouter } from "@/navigation";
import ROUTES from "@/routes";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

//getAll
export const GetSection = () => {
  return useQuery({
    queryKey: [Admin.Section.url],
    queryFn: async () => {
      const response = await apiAdmin.get(Admin.Section.url, {
        headers: {},
      });
      return response;
    },
  });
};
//getID
export const GetSectionID = (id) => {
  return useQuery({
    queryKey: [Admin.Section.getByID(id)],
    queryFn: async () => {
      const response = await apiAdmin.get(Admin.Section.getByID(id), {
        headers: {},
      });
      return response;
    },
  });
};
//delete
export const DeleteSection = (id) => {
  const router = useRouter();
  const { refetch } = GetSection();

  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["Section"],
    mutationFn: async () => {
      const response = await apiAdmin.delete(Admin.Section.getByID(id));
      return response.data;
    },

    onSuccess: () => {
      router.replace(ROUTES.ADMIN.DATAMAIN.SectionS);
      refetch();
      queryClient.invalidateQueries(["Section"]);
    },
  });
};
//post
export const useCreateSection = () => {
  const { refetch } = GetSection();
  return useMutation({
    mutationFn: async (data) => {
      const response = await apiAdmin.post(Admin.Section.url, data, {});
      return response.data;
    },
    onSuccess: (data) => {
      refetch();
      console.log("تم الإرسال بنجاح:", data);
    },
    onError: (error) => {
      console.error("حدث خطأ أثناء الإرسال:", error);
    },
  });
};
//put
export const useEditSection = (id) => {
  const { refetch } = GetSection();
  const { refetch: refetch2 } = GetSectionID(id);
  return useMutation({
    mutationKey: ["EditSection"],
    mutationFn: async (data) => {
      console.log(id);

      const response = await apiAdmin.put(Admin.Section.getByID(id), data, {});
      return response.data;
    },
    onSuccess: (data) => {
      refetch2();
      refetch();
    },
    onError: (error) => {
      console.error("حدث خطأ أثناء التعديل:", error);
    },
  });
};
