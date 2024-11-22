using Spectra.Application.Employees.ManagementStaff.Dto;
using Spectra.Application.Employees.ManagementStaff.Queries;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Employees.ManagementStaff.Service

{
    public interface IManagementStaffService
    {
        Task<OperationResult> CreateAsync(CreateStaffDto input);
        Task<OperationResult> DeleteAsync(string id);
        Task<OperationResult> GetAllAsync(GetAllManagementStaffQuery input);
        Task<OperationResult> GetByIdAsync(string id);
        Task<OperationResult> UpdateAsync(UpdateStaffDto input);
    }
}