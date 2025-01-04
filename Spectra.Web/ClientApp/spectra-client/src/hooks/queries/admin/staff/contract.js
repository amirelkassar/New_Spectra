import { useQuery } from '@tanstack/react-query';

import { apiAdmin } from '@/api/axios';
import { staff } from '@/api/admin';

export const initialQueryKey = 'admin.staff.contract';

const getEmployeeContract = async (id) =>
  (await apiAdmin.get(staff.contract(id))).data;

export const useAdminStaffContract = (employeeId) => {
  return useQuery({
    queryKey: [initialQueryKey, employeeId],
    queryFn: () => getEmployeeContract(employeeId),
  });
};
