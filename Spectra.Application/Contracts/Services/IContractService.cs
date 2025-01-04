using Spectra.Application.Contracts.Commands;
using Spectra.Domain.Shared.Wrappers;
namespace Spectra.Application.Contracts.Services
{
    public interface IContractService
    {
        Task<OperationResult> CreateAsync(CreateContractCommand input);
        Task<OperationResult> DeleteContract(string id);
        Task<OperationResult> UpdateAsync(UpdateContractCommand input);
        Task<OperationResult> GetContractById(string id);
    }
}