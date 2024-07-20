using MediatR;
using Spectra.Application.Clients.Commands;
using Spectra.Application.Clients.Queries;
using Spectra.Domain.Clients;
using Spectra.Domain.Enumeration;
using Spectra.Domain.ValueObjects;

namespace Spectra.Application.Clients.Services
{
    public class ClientService
    {
        private readonly IMediator _mediator;

        public ClientService(IMediator mediator)
        {
            _mediator = mediator;
        }

        public async Task<string> CreateClient(Name name, string nationalId, PhoneNumber phoneNumber, ClientTypes clientType, string userId, EmailAddress emailAddress, Address address)
        {
            var command = new CreateClientCommand
            {
                Name = name,
                NationalId = nationalId,
                PhoneNumber = phoneNumber,
                ClientType = clientType,
                UserId = userId,
                EmailAddress = emailAddress,
                Address = address
            };

            return await _mediator.Send(command);
        }

        public async Task UpdateClient(string id, Name name, string nationalId, PhoneNumber phoneNumber, ClientTypes clientType, string userId, EmailAddress emailAddress, Address address)
        {
            var command = new UpdateClientCommand
            {
                Id = id,
                Name = name,
                NationalId = nationalId,
                PhoneNumber = phoneNumber,
                ClientType = clientType,
                UserId = userId,
                EmailAddress = emailAddress,
                Address = address
            };

            await _mediator.Send(command);
        }

        public async Task DeleteClient(string id)
        {
            var command = new DeleteClientCommand { Id = id };
            await _mediator.Send(command);
        }

        public async Task<Client> GetClientById(string id)
        {
            var query = new GetClientByIdQuery { Id = id };
            return await _mediator.Send(query);
        }

        public async Task<IEnumerable<Client>> GetAllClients()
        {
            var query = new GetAllClientsQuery();
            return await _mediator.Send(query);
        }
    }
}
