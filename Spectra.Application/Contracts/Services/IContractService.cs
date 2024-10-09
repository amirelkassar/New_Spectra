using MediatR;
using Spectra.Application.Contracts.Commands;
using Spectra.Application.Contracts.Queries;
using Spectra.Domain.Contracts;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Contracts.Services
{
    public interface IContractService
    {
        Task<OperationResult<string>> CreateContractSendORSave(CreateContractCommand input);
   
        Task<OperationResult<Unit>> DeleteContract(string id);
        Task<OperationResult<IEnumerable<EmploymentContract>>> GetAllContracts(GetAllContactrQuery empelyeeId);
        Task<OperationResult<EmploymentContract>> GetContractById(string id);

        Task<OperationResult<Unit>> UpdateContract(string id, UpdateContractCommand input);
    }
}