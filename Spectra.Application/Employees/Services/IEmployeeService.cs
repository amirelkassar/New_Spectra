using Spectra.Application.Employees.Commands;
using Spectra.Application.Employees.Dto;
using Spectra.Application.Employees.Queries;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Employees.Services
{
    public interface IEmployeeService
    {
        Task<OperationResult> GetAsync(GetEmployeeById input);
        Task<OperationResult> GetEmployeeListAsync(GetEmployeeListQuery input);
        Task<OperationResult> GetMedicalProviderListAsync(GetMedicalProvderListQuery input);
        Task<OperationResult> DeleteAsync(string id);
        Task<OperationResult> UpdateEmployeeAsync(UpdateEmployeeDto input);
        Task<OperationResult> UpdateMedicallDataAsync(UpdateMedicalDataCommand input);
        Task<OperationResult> CreateAsync(CreateEmployeeDto input);
        Task<OperationResult> CreateAttachmentAsync(CreateAttachmentCommand input);
        Task<OperationResult> UpdateAttachmentAsync(UpdateAttachmentCommand input);
        Task<OperationResult> DeleteAttachmentAsync(Guid id, string empId);
    }
}
