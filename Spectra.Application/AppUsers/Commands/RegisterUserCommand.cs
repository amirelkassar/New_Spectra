using System.ComponentModel.DataAnnotations;
using FluentValidation;
using MediatR;
using Spectra.Application.AppUsers.Dtos;
using Spectra.Application.Clients.Services;
using Spectra.Application.Employees.Services;
using Spectra.Application.Identities;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Helpers;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.AppUsers.Commands
{
    public class RegisterUserCommand : IRequest<OperationResult>
    {
        public RegisterUserCommand()
        {
            Patients = [];
            OrganizationData = new();
        }
        [Required]
        [MinLength(3)]
        public string Name { get; set; }

        [Required]
        [RegularExpression(@"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$", ErrorMessage = "Invalid password")]
        public string Password { get; set; }

        [Required]
        public string CountryCode { get; set; }
        public string? StateCode { get; set; }
        [Required]
        public string NationalId { get; set; }
        [Required]
        [EmailAddress]
        public string EmailAddress { get; set; }
        [Phone]
        public string Phone { get; set; }
        [Required]
        [EnumDataType(typeof(HumenGender))]
        public HumenGender Gender { get; set; }
        public string? Occupation { get; set; }
        public string? DoctorRefferalCode { get; set; }


        public ICollection<PatientDataDto>? Patients { get; set; }
        public OrganizationData? OrganizationData { get; set; }

        public string Country { get; set; }
        public string City { get; set; }
        public string Address { get; set; }

        public class RegisterUserCommandHandler(IIdentityService identityService,
            IEmployeeService medicalProviderService,
            IClientService clientService) : IRequestHandler<RegisterUserCommand, OperationResult>
        {
            private readonly IIdentityService _identityService = identityService;
            private readonly IEmployeeService _medicalProviderService = medicalProviderService;
            private readonly IClientService _clientService = clientService;

            public async Task<OperationResult> Handle(RegisterUserCommand request, CancellationToken cancellationToken)
            {
                //switch (request.UserType)
                //{
                //    case UserType.PatientFamily:
                //        {
                //            var (results, userId) = await _identityService.CreateUserAsync(request.EmailAddress, request.Password, request.Name, request.Name, Roles.Client);

                //            if (request.Patients is not null && request.Patients.Count > 0)
                //            {
                //                var validator = new PatientDataDtoValidator();

                //            }

                //        }
                //        break;
                //    case UserType.Organization:
                //        {
                //            var (results, userId) = await _identityService.CreateUserAsync(request.EmailAddress, request.Password, request.Name, request.Name, Roles.Client);
                //        }
                //        break;
                //    case UserType.MedicalServiceProvider:
                //        {

                //            var request = request.MedicalProviderData;


                //        }
                //        break;
                //    default:
                //        throw new Exception("Invalid User Type");
                //}

                return OperationResult.Success();
            }
        }
    }
    public class RegisterUserCommandValidator : AbstractValidator<RegisterUserCommand>
    {
        public RegisterUserCommandValidator()
        {

            RuleFor(r => r.Name)
                .NotEmpty()
                .NotNull()
                .MinimumLength(3);

            RuleFor(r => r.CountryCode)
                .NotEmpty()
                .NotNull();

            RuleFor(r => r.NationalId)
                    .NotEmpty()
                    .NotNull();

            RuleFor(r => r.EmailAddress)
                    .NotEmpty()
                    .NotNull()
                    .EmailAddress();

            RuleFor(r => r.Phone)
                .NotEmpty()
                .NotNull();


            RuleFor(r => r.Country)
                .NotEmpty()
                .NotNull();


            RuleFor(r => r.City)
                .NotEmpty()
                .NotNull();

            RuleFor(r => r.Gender)
                .NotEmpty()
                .NotNull()
                .IsInEnum();

            RuleFor(r => r.Password)
                .NotEmpty()
                .NotNull()
                .Must(StringExtensionHelper.IsPassword);
        }
    }

    public class PatientDataDtoValidator : AbstractValidator<PatientDataDto>
    {
        public PatientDataDtoValidator()
        {
            RuleFor(p => p.Name)
                .NotEmpty()
                .NotNull()
                .MinimumLength(3);

            RuleFor(p => p.Gender)
                .NotEmpty()
                .NotNull()
                .IsInEnum();

            RuleFor(p => p.NationalId)
                .NotEmpty()
                .NotNull()
                .MinimumLength(3);

            RuleFor(p => p.DateOfBirth)
            .NotEmpty()
            .NotNull();
        }
    }

    public class OrganizationDataValidator : AbstractValidator<OrganizationData>
    {
        public OrganizationDataValidator()
        {
            RuleFor(o => o.Name)
                .NotEmpty()
                .NotNull()
                .MinimumLength(3);

            RuleFor(o => o.Address)
                .NotEmpty()
                .NotNull()
                .MinimumLength(3);

            RuleFor(o => o.Industry)
                .NotEmpty()
                .NotNull()
                .MinimumLength(3);

            RuleFor(o => o.OrganizationType)
            .NotEmpty()
            .NotNull()
            .IsInEnum();
        }
    }
}
