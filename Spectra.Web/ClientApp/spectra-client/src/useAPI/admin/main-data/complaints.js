"use client";
import { api } from "@/api/api";
import { Admin } from "@/api/endpoints";
import { useRouter } from "@/navigation";
import ROUTES from "@/routes";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
//getAll
export const GetComplaint = () => {
  return useQuery({
    queryKey: [Admin.Complaint.url],
    queryFn: async () => {
      const response = await api.get(Admin.Complaint.url, {
        headers: {},
      });
      return response;
    },
  });
};
//getID
export const GetComplaintID = (id) => {
  return useQuery({
    queryKey: [Admin.Complaint.getByID(id)],
    queryFn: async () => {
      const response = await api.get(Admin.Complaint.getByID(id), {
        headers: {},
      });
      return response;
    },
  });
};
//delete
export const DeleteComplaint = (id) => {
  const router = useRouter();
  const { refetch } = GetComplaint();

  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["Complaint"],
    mutationFn: async () => {
      const response = await api.delete(Admin.Complaint.DeleteByID(id));
      return response.data;
    },

    onSuccess: () => {
      router.replace(ROUTES.ADMIN.DATAMAIN.COMPLAINTS);
      refetch();
      queryClient.invalidateQueries(["Complaint"]);
    },
  });
};
//post
export const useCreateComplaint = () => {
  const { refetch } = GetComplaint();
  return useMutation({
    mutationFn: async (data) => {
      const response = await api.post(Admin.Complaint.url, data, {});
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
export const useEditComplaint = (id) => {
  const { refetch } = GetComplaint();
  const { refetch: refetch2 } = GetComplaintID(id);
  return useMutation({
    mutationKey: ["EditComplaint"],
    mutationFn: async (data) => {
      console.log(id);

      const response = await api.put(Admin.Complaint.getByID(id), data, {});
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
