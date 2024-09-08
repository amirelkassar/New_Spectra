using MediatR;
using Spectra.Application.Messaging;
using Spectra.Domain.Clients;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.ValueObjects;

namespace Spectra.Application.Clients.Commands
{


    public class CreateClientCommand : ICommand<string>
    {
        public Name Name { get; set; }
        public string NationalId { get; set; }
        public PhoneNumber PhoneNumber { get; set; }
        public string PhoneNumbers { get; set; }
        public string CountryCode { get; set; }
        public ClientTypes ClientType { get; set; }
        public string UserId { get; set; }
        public EmailAddress EmailAddress { get; set; }
        public Address Address { get; set; }
        public Organization Organization { get; set; }
        public MedicalServiceProvider medicalServiceProvider { get; set; }

    }

    public class CreateClientCommandHandler : IRequestHandler<CreateClientCommand, string>
    {
        private readonly IClientRepository _clientRepository;

        public CreateClientCommandHandler(IClientRepository clientRepository)
        {
            _clientRepository = clientRepository;
        }
        public async Task<string> Handle(CreateClientCommand request, CancellationToken cancellationToken)
        {
            // Create individual objects from the request
            

            // Create the client object
            var client = Client.Create(
                Ulid.NewUlid().ToString(),
                request.Name,
                request.NationalId,
               request.PhoneNumber,
                request.ClientType,
                 Ulid.NewUlid().ToString(),
                request.EmailAddress,
               request.Address,
                request.Organization,
               request.medicalServiceProvider
            );

            // Add the client to the repository
            await _clientRepository.AddAsync(client);

            // Return the client's ID
            return client.Id;
        }
    }
}
