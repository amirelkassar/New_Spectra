'use client';
import { apiAdmin } from '@/api/axios';
import { Admin } from '@/api/endpoints';
import NumPage from '@/components/numPage';
import { useRouter } from '@/navigation';
import ROUTES from '@/routes';
import {
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

//getAll
export const GetStaff = () => {
  const page = NumPage();
  return useQuery({
    queryKey: ['todos', { page }],
    queryFn: async () => {
      const response = await apiAdmin.get(
        Admin.Staff.url + `PageNumber=${page}`,
        {
          headers: {},
        }
      );
      return response;
    },
    placeholderData: (previousData) => previousData,
  });
};
//getID
export const GetStaffID = (id, id2) => {
  return useQuery({
    queryKey: [Admin.Staff.getByID(id, id2)],
    queryFn: async () => {
      const response = await apiAdmin.get(
        Admin.Staff.getByID(id, id2),
        {
          headers: {},
        }
      );
      return response;
    },
  });
};
//delete
export const DeleteStaff = (id) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['Staff'],
    mutationFn: async () => {
      const response = await apiAdmin.delete(
        Admin.Staff.DeleteByID(id)
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['Staff']);
      router.replace(ROUTES.ADMIN.DATAMAIN.StaffS);
    },
  });
};
//post
export const useCreateStaff = () => {
  return useMutation({
    mutationFn: async (data) => {
      const response = await apiAdmin.post(
        Admin.Staff.post,
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      return response.data;
    },
    onSuccess: (data) => {
      console.log('wsdasdasd');
    },
    onError: (error) => {
      console.error('حدث خطأ أثناء الإرسال:', error);
    },
  });
};
//put
export const useEditStaff = (id, id2) => {
  const { refetch } = GetStaff();
  const { refetch: refetch2 } = GetStaffID(id, id2);

  return useMutation({
    mutationKey: ['EditStaff'],
    mutationFn: async (data) => {
      console.log(id);

      const response = await apiAdmin.put(
        Admin.Staff.editEmployeeByID(id),
        data,
        {}
      );
      return response.data;
    },
    onSuccess: (data) => {
      console.log(data);

      refetch();
      refetch2();
    },
    onError: (error) => {
      console.error('حدث خطأ أثناء التعديل:', error);
    },
  });
};
