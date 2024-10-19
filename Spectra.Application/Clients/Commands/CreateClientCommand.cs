using FluentValidation;
using MediatR;
using Spectra.Application.Messaging;
using Spectra.Application.Validator;
using Spectra.Domain.Clients;
using Spectra.Domain.Patients;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;
using Spectra.Domain.ValueObjects;

namespace Spectra.Application.Clients.Commands
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
    public class CreateClientCommandValidator : AbstractValidator<CreateClientCommand>
    {
        public CreateClientCommandValidator()
        {
            RuleFor(x => x.Name)
                .NotNull().WithMessage("Name is required.")
                .SetValidator(new NameValidator());

            RuleFor(x => x.NationalId)
                .NotEmpty().WithMessage("National ID is required.")
                .Matches(@"^\d{10,12}$").WithMessage("National ID must be between 10 and 12 digits.");

            RuleFor(x => x.PhoneNumber)
                .NotNull().WithMessage("Phone number is required.")
                .SetValidator(new PhoneNumberValidator());

            RuleFor(x => x.ClientType)
                .IsInEnum().WithMessage("Invalid client type.");

            RuleFor(x => x.EmailAddress)
                .NotNull().WithMessage("Email address is required.")
                .SetValidator(new EmailAddressValidator());

            RuleFor(x => x.Address)
                .NotNull().WithMessage("Address is required.")
                .SetValidator(new AddressValidator());

        }
    }

}
