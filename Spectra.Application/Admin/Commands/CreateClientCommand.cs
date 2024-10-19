using MediatR;
using Spectra.Application.Clients;
using Spectra.Application.Messaging;
using Spectra.Domain.Clients;
using Spectra.Domain.Patients;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;
using Spectra.Domain.ValueObjects;

namespace Spectra.Application.Admin.Commands
{
    public class CreateClientCommand : ICommand<OperationResult<string>>
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
        public List<ServicePackage>? ServicePackages { get; set; }
        public List<Patient>? patients { get; set; }
    }

    public class CreateClientCommandHandler : IRequestHandler<CreateClientCommand, OperationResult<string>>
    {
        private readonly IClientRepository _clientRepository;

        public CreateClientCommandHandler(IClientRepository clientRepository)
        {
            _clientRepository = clientRepository;
        }
        public async Task<OperationResult<string>> Handle(CreateClientCommand request, CancellationToken cancellationToken)
        {
            var checkEmail = await _clientRepository.GetAllAsync(c => c.EmailAddress == request.EmailAddress);
            if (checkEmail != null)
            {
                throw new DbErrorException("this Email Address is already exist ");
            }

            var client = Client.Create(
                Ulid.NewUlid().ToString(),
                request.Name,
                request.NationalId,
                request.PhoneNumber,
                request.ClientType,
                Ulid.NewUlid().ToString(),
                request.EmailAddress,
                request.Address,
                request.patients,
                request.Organization,
                request.ServicePackages = null
            );
            await _clientRepository.AddAsync(client);

            return OperationResult<string>.Success(client.Id);


        }
    }


}
