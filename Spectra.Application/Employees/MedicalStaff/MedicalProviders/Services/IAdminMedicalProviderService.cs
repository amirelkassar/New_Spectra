using Spectra.Application.Employees.MedicalStaff.MedicalProviders.Commands;
using Spectra.Application.Employees.MedicalStaff.MedicalProviders.Dto;
using Spectra.Application.Employees.MedicalStaff.MedicalProviders.Queries;
using Spectra.Domain.Employees.MedicalStaff;
using Spectra.Domain.Shared.Wrappers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Application.Employees.MedicalStaff.MedicalProviders.Services
{
    public interface IAdminMedicalProviderService
    {
        Task<OperationResult> GetAsync(string id);
        Task<OperationResult> GetListAsync(GetMedicalProviderListQuery input);
        Task<OperationResult> DeleteAsync(string id);
        Task<OperationResult> UpdatePersonalDataAsync(UpdateMedicalProviderDto input);
        Task<OperationResult> UpdateMedicallDataAsync(UpdateMedicalDataCommand input);
        Task<OperationResult> CreateAsync(CreateMedicalProviderDto input);
    }
}
