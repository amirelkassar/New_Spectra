using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.Clients.DTO;
using Spectra.Application.Clients.DTOs;
using Spectra.Application.MasterData.Drug.Commands;
using Spectra.Domain.Clients;
using Spectra.Domain.MasterData.Drug;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;
using Spectra.Domain.ValueObjects;

namespace Spectra.Application.Clients.Services
{
    public interface IClientService
    {
        Task<OperationResult<string>> CreateClient(CreateNormalClientDto input);


         Task<OperationResult<Unit>> UpdateClient(string id, UpdateClientDto input  );
        Task<OperationResult<Unit>> DeleteClient(string id);
        Task<OperationResult<Client>> GetClientById(string id);
        Task<OperationResult<IEnumerable<Client>>> GetAllClients();
    
    }
}
