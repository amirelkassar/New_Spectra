using MediatR;
using Spectra.Application.Contracts.Commands;
using Spectra.Domain.Contracts;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Contracts.Services
{
    public interface IContractService
    {
        Task<OperationResult<string>> CreateContractSendORSave(CreateContractCommand input,bool send);
   
        Task<OperationResult<Unit>> DeleteContract(string id);
        Task<OperationResult<IEnumerable<EmploymentContract>>> GetAllContracts();
        Task<OperationResult<EmploymentContract>> GetContractById(string id);

        Task<OperationResult<Unit>> UpdateContract(string id, UpdateContractCommand input);
    }
}