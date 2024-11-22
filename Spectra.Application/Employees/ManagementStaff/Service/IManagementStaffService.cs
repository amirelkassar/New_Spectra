using Spectra.Application.Employees.ManagementStaff.Queries;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Employees.ManagementStaff.Service

{
    public interface IManagementStaffService
    {
        Task<OperationResult> CreateAsync(string firstName,
            string lastName,
            string? prefix,
            string phoneNumber,
            string countryCode,
            string emailAddress,
            int? experienceYears,
            string country,
            string city,
            string nationalId,
            HumenGender humenGender,
            JobTypes jobType,
            string jobName,
            double? workingHours,
            string jobDescription,
            string qualification,
            string passowrd);
        Task<OperationResult> DeleteAsync(string id);
        Task<OperationResult> GetAllAsync(GetAllManagementStaffQuery input);
        Task<OperationResult> GetByIdAsync(string id);
        Task<OperationResult> UpdateAsync(string id,
           string firstName,
            string lastName,
            string? prefix,
            string phoneNumber,
            string countryCode,
            string emailAddress,
            int? experienceYears,
            string country,
            string city,
            string nationalId,
            HumenGender humenGender,
            JobTypes jobType,
            string jobName,
            double? workingHours,
            string jobDescription,
            string qualification,
            string passowrd);
    }
}