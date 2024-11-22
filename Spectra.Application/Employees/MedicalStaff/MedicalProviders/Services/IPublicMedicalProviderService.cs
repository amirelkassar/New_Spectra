using Spectra.Application.Employees.MedicalStaff.MedicalProviders.Commands;
using Spectra.Application.Employees.MedicalStaff.MedicalProviders.Dto;
using Spectra.Domain.Employees;
using Spectra.Domain.Shared.Wrappers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Employees.MedicalStaff.MedicalProviders.Services
{
    public interface IPublicMedicalProviderService
    {
        Task<OperationResult> GetAsync(string id,string userId);
        Task<OperationResult> UpdatePersonalDataAsync(UpdateMedicalProviderDto input);
        Task<OperationResult> UpdateMedicallDataAsync(UpdateMedicalDataCommand input);
        Task<OperationResult> CreateAsync(CreateMedicalProviderDto input);
        Task<OperationResult> CreateAttachmentAsync(EmployeeAttachmentDto input);
        Task<OperationResult> UpdateAttachmentAsync(Guid id,EmployeeAttachmentDto input);
        Task<OperationResult> DeleteAttachmentAsync(Guid id);
    }
}
