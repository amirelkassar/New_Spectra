using MediatR;
using Spectra.Application.Admin.Dto;
using Spectra.Application.Contracts.Commands;
using Spectra.Application.Contracts.DTO;
using Spectra.Application.Contracts.Queries;
using Spectra.Domain.Contracts;
using Spectra.Domain.Shared.Wrappers;
using static Spectra.Domain.Shared.Constants.ContractConses;

namespace Spectra.Application.Contracts.Services
{
    public interface IContractService
    {
        Task<OperationResult> CreateContractAsync(CreateContractCommand input);
        Task<OperationResult> DeleteContract(string id);
        Task<OperationResult> AcceptVersion(string id, ContractApprovals input);
        Task<OperationResult> CancelContract(string id);
        Task<OperationResult> UpdateVersion(string id);
        Task<OperationResult> GetContractById(string id);
        Task<OperationResult> UpdateContract(string id, UpdateAdminContractCommand input);
    }
}