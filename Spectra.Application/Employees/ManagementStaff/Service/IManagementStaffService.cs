using MediatR;
using Spectra.Domain.Employees.ManagementStaff;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Employees.ManagementStaff.Service

{
    public interface IManagementStaffService
    {
        Task<OperationResult<string>> CreateStaff(string firstName,
            string lastName,
            string? prefix,
            string phoneNumbers,
            string countryCode,
            string emailAddress,
            string country,
            string city,
            string nationalId,
            HumenGender humenGenders,
            string jobName,
            string qualifications,
            DateOnly? timeToJoin,
            double? workingHours,
            JobTypes jobTypes,
            string Passowrd,
                    string ConfirmationPassword);
        Task<OperationResult<Unit>> DeleteStaff(string id);
        Task<OperationResult<IEnumerable<Staff>>> GetAllStaff();
        Task<OperationResult<Staff>> GetStaffById(string id);
        Task<OperationResult<Unit>> UpdateEmployees(string id, 
            string firstName,
            string lastName, 
            string? prefix, 
            string phoneNumbers,
            string countryCode, 
            string emailAddress,
            string country, 
            string city, 
            string nationalId, 
            HumenGender humenGenders,
            string jobName, 
            double? workingHours, 
            JobTypes jobTypes);
    }
}