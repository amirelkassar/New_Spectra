using FluentValidation;
using MediatR;
using Spectra.Application.AppUsers.Dtos;
using Spectra.Application.Clients.Services;
using Spectra.Application.Employees.MedicalStaff.MedicalProviders.Services;
using Spectra.Application.Identities;
using Spectra.Domain.Shared.Constants;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Helpers;
using Spectra.Domain.Shared.Wrappers;
using System.ComponentModel.DataAnnotations;

namespace Spectra.Application.AppUsers.Commands
{
    public class RegisterUserCommand : IRequest<OperationResult>
    {
        public RegisterUserCommand()
        {
            MedicalProviderData = new();
            Patients = [];
            OrganizationData = new();
        }
        [Required]
        [EnumDataType(typeof(UserType))]
        public UserType UserType { get; set; }
        [Required]
        [MinLength(3)]
        public string Name { get; set; }

        [Required]
        [RegularExpression(@"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$", ErrorMessage = "Invalid password")]
        public string Password { get; set; }

        [Required]
        public string CountryCode { get; set; }
        [Required]
        public string StateCode { get; set; }
        [Required]
        public string NationalId { get; set; }
        [Required]
        [EmailAddress]
        public string EmailAddress { get; set; }
        [Phone]
        public string Phone { get; set; }
        [Required]
        [EnumDataType(typeof(HumenGenders))]
        public HumenGender Gender { get; set; }
        public string? Occupation { get; set; }
        public string? DoctorRefferalCode { get; set; }

        public MedicalServiceProviderData? MedicalProviderData { get; set; }
        public ICollection<PatientDataDto>? Patients { get; set; }
        public OrganizationData? OrganizationData { get; set; }

        public class RegisterUserCommandHandler(IIdentityService identityService,
            IMedicalProviderService medicalProviderService,
            IClientService clientService) : IRequestHandler<RegisterUserCommand, OperationResult>
        {
            private readonly IIdentityService _identityService = identityService;
            private readonly IMedicalProviderService _medicalProviderService = medicalProviderService;
            private readonly IClientService _clientService = clientService;

            public async Task<OperationResult> Handle(RegisterUserCommand request, CancellationToken cancellationToken)
            {


                switch (request.UserType)
                {
                    case UserType.PatientFamily:
                        {
                            var (results, userId) = await _identityService.CreateUserAsync(request.EmailAddress, request.Password, request.Name, request.Name, Roles.Client);

                            if (request.Patients is not null && request.Patients.Count > 0)
                            {
                                var validator = new PatientDataDtoValidator();

                            }

                        }
                        break;
                    case UserType.Organization:
                        {
                            var (results, userId) = await _identityService.CreateUserAsync(request.EmailAddress, request.Password, request.Name, request.Name, Roles.Client);
                        }
                        break;
                    case UserType.MedicalServiceProvider:
                        {
                            var role = request.MedicalProviderData.JobType switch
                            {
                                JobTypes.Doctor => Roles.Doctor,
                                JobTypes.Specialist => Roles.Specialist,
                                _ => Roles.User
                            };
                            var (results, userId) = await _identityService.CreateUserAsync(request.EmailAddress, request.Password, request.Name, request.Name, role);
                            //var msp = _medicalProviderService.CreateMedicalProvider(request.Name,
                            //    " ",
                            //    "DR.",
                            //    request.Phone,
                            //    request.CountryCode,
                            //    request.EmailAddress,
                            //    request.CountryCode,
                            //    request.StateCode,
                            //    request.NationalId,
                            //    request?.MedicalProviderData?.Degree,
                            //    request?.MedicalProviderData?.AccreditedBy,
                            //    request?.MedicalProviderData?.Specifications?.ToList(),
                            //    request.Gender,
                            //    request?.MedicalProviderData?.LicenseNumber,
                            //    request.MedicalProviderData.JobType);
                        }
                        break;
                    default:
                        throw new Exception("Invalid User Type");
                }

                throw new Exception();
            }
        }
    }

    public enum UserType : byte
    {
        PatientFamily = 1,
        Organization = 2,
        MedicalServiceProvider = 3
    }

    public class RegisterUserCommandValidator : AbstractValidator<RegisterUserCommand>
    {
        public RegisterUserCommandValidator()
        {
            RuleFor(r => r.UserType)
                .NotEmpty()
                .NotNull()
                .IsInEnum();

            RuleFor(r => r.Name)
                .NotEmpty()
                .NotNull()
                .MinimumLength(3);

            RuleFor(r => r.CountryCode)
                .NotEmpty()
                .NotNull();

            RuleFor(r => r.StateCode)
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

    public class MedicalServiceProviderDataValidator : AbstractValidator<MedicalServiceProviderData>
    {
        public MedicalServiceProviderDataValidator()
        {
            RuleFor(m => m.JobType)
                .NotEmpty()
                .NotNull()
                .IsInEnum();

            RuleFor(m => m.MainSpecificationId)
                .NotEmpty()
                .NotNull();

            RuleFor(m => m.Specifications)
                .NotEmpty()
                .NotNull()
                .Must(s => s.Count >= 1);

            RuleFor(m => m.LicenseNumber)
                .NotEmpty()
                .NotNull();

            RuleFor(m => m.Degree)
                .NotEmpty()
                .NotNull();


            RuleFor(m => m.NumberOfExperience)
                .GreaterThan(0);
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
