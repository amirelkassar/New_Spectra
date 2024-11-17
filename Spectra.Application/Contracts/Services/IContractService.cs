using MediatR;
using Spectra.Application.Admin.Dto;
using Spectra.Application.Contracts.Commands;
using Spectra.Application.Contracts.DTO;
using Spectra.Application.Contracts.Queries;
using Spectra.Domain.Contracts;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Contracts.Services
{
    public interface IContractService
    {
        Task<OperationResult<string>> CreateContractSendORSave(CreateContractCommand input);

        Task<OperationResult<Unit>> DeleteContract(string id);
        Task<OperationResult<Unit>> EmployeeAccpetContract(string id);
        Task<OperationResult<GetServicesContractQuery>> GetAllContractData();

        //Task<OperationResult<IEnumerable<EmploymentContract>>> GetAllContracts(GetAllContactrQuery empelyeeId);
        Task<OperationResult<IEnumerable<GetAllCopiesWithDataDto>>> GetAllCopiesOfContract(GetAllCopiesOFContractQuery input);

        Task<OperationResult<List<GetAllServicesFromContractDto>>> GetAllDoctorServicesFromContract(string EmployeeId);
        Task<OperationResult<EmploymentContract>> GetContractById(string id);

        Task<OperationResult<Unit>> UpdateContract(string id, UpdateAdminContractCommand input);
    }
}