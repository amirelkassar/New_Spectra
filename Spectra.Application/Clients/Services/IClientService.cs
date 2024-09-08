using Spectra.Application.Clients.DTOs;
using Spectra.Domain.Clients;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.ValueObjects;

namespace Spectra.Application.Clients.Services
{
    public interface IClientService
    {
        Task<string> CreateClient(CreateNormalClientDto input);
        

        Task UpdateClient(string id, Name name, string nationalId, PhoneNumber phoneNumber, ClientTypes clientType, EmailAddress emailAddress, Address address);
        Task DeleteClient(string id);
        Task<Client> GetClientById(string id);
        Task<IEnumerable<Client>> GetAllClients();
    }
}
