using FluentValidation;
using MediatR;
using Spectra.Application.Messaging;
using Spectra.Application.Validator;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;
using Spectra.Domain.ValueObjects;

namespace Spectra.Application.Clients.Commands
{
    public class UpdateClientCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }
        public Name Name { get; set; }
        public string NationalId { get; set; }
        public PhoneNumber PhoneNumber { get; set; }
        public ClientTypes ClientType { get; set; }
        public string UserId { get; set; }
        public EmailAddress EmailAddress { get; set; }
        public Address Address { get; set; }
        public Organization Organization { get; set; }
        public MedicalServiceProvider MedicalServiceProvider { get; set; }
    }

    public class UpdateClientCommandHandler : IRequestHandler<UpdateClientCommand, OperationResult<Unit>>
    {
        private readonly IClientRepository _clientRepository;

        public UpdateClientCommandHandler(IClientRepository clientRepository)
        {
            _clientRepository = clientRepository;
        }

        public async Task<OperationResult<Unit>> Handle(UpdateClientCommand request, CancellationToken cancellationToken)
        {
      
            var client = await _clientRepository.GetByIdAsync(request.Id);
         

            client.Name = request.Name;
            client.NationalId = request.NationalId;
            client.PhoneNumber = request.PhoneNumber;
            client.ClientType = request.ClientType;
            client.UserId = request.UserId;
            client.EmailAddress = request.EmailAddress;
            client.Address = request.Address;
            client.Organization = request.Organization;
            client.MedicalServiceProvider = request.MedicalServiceProvider;
            

            await _clientRepository.UpdateAsync(client);
            return OperationResult<Unit>.Success(Unit.Value);
        
           
        }
    }
    public class UpdateClientCommandValidator : AbstractValidator<CreateClientCommand>
    {
        public UpdateClientCommandValidator()
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

            RuleFor(x => x.UserId)
                .NotEmpty().WithMessage("User ID is required.");

            RuleFor(x => x.EmailAddress)
                .NotNull().WithMessage("Email address is required.")
                .SetValidator(new EmailAddressValidator());

            RuleFor(x => x.Address)
                .NotNull().WithMessage("Address is required.")
                .SetValidator(new AddressValidator());

            RuleFor(x => x.Organization)
                .NotNull().WithMessage("Organization is required.")
                .SetValidator(new OrganizationValidator());

            RuleFor(x => x.medicalServiceProvider)
                .NotNull().WithMessage("Medical service provider is required.")
                .SetValidator(new MedicalServiceProviderValidator());
        }
    }
}
