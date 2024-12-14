using System.ComponentModel.DataAnnotations;
using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.Employees.Commands;
using Spectra.Application.Employees.Dto;
using Spectra.Application.Employees.Queries;
using Spectra.Application.Employees.Services;
using Spectra.Application.Notifications;
using Spectra.Domain.Shared.Constants;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Helpers;
using Spectra.Domain.Shared.Wrappers;
using Spectra.Domain.ValueObjects;
using static Spectra.Domain.Shared.Constants.EmployeesConsts;

namespace Spectra.Application.AppUsers.Commands
{
    public class RegisterMedicalProvider : IRequest<OperationResult>
    {
        public RegisterMedicalProvider()
        {
            Specializations = [];
        }
        [Required]
        [MinLength(3)]
        public string Name { get; set; }

        [Required]
        [RegularExpression(@"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$", ErrorMessage = "Invalid password")]
        public string Password { get; set; }

        public string? StateCode { get; set; }
        [Required]
        public string NationalId { get; set; }
        [Required]
        [EmailAddress]
        public string EmailAddress { get; set; }
        [Phone]
        public string Phone { get; set; }
        [Required]
        public string CountryCode { get; set; }
        [Required]
        public string Country { get; set; }
        [Required]
        public string City { get; set; }
        public string Address { get; set; }
        [Required]
        [EnumDataType(typeof(HumenGender))]
        public HumenGender Gender { get; set; }
        public string? Occupation { get; set; }
        [Required]
        [EnumDataType(typeof(JobTypes))]
        public JobTypes JobType { get; set; }
        [Required]
        public string JobName { get; set; }
        public ICollection<string>? Specializations { get; set; }
        public string LicenseNumber { get; set; }
        public string? ApprovedBy { get; set; }
        public AcademicDegrees? AcademicDegree { get; set; }
        [Required]
        public string MainSpecializationId { get; set; }
        public int? ExperienceYears { get; set; }
        public string? Qualification { get; set; }
        public string? JobDescription { get; set; }
        [Required]
        public IFormFile Certification { get; set; }

        public class RegisterMedicalProviderHandler(IEmployeeService medicalProviderService,
            INotificationService notificationService) : IRequestHandler<RegisterMedicalProvider, OperationResult>
        {
            private readonly IEmployeeService _medicalProviderService = medicalProviderService;
            private readonly INotificationService _notificationService = notificationService;

            public async Task<OperationResult> Handle(RegisterMedicalProvider request, CancellationToken cancellationToken)
            {
                var role = request.JobType switch
                {
                    JobTypes.Doctor => Roles.Doctor,
                    JobTypes.Specialist => Roles.Specialist,
                    _ => Roles.User
                };

                var medicalProviderResults = await _medicalProviderService.CreateAsync(new CreateEmployeeDto
                {
                    FirstName = request.Name,
                    LastName = " ",
                    PhoneNumber = request.Phone,
                    NationalId = request.NationalId,
                    HumenGender = request.Gender,
                    Emailaddress = request.EmailAddress,
                    Country = request.Country,
                    City = request.City,
                    JobDescription = request.JobDescription,
                    JobName = request.JobName,
                    JobType = request.JobType,
                    MainSpecializationId = request.MainSpecializationId,
                    AcademicDegree = request.AcademicDegree,
                    ApprovedBy = request.ApprovedBy,
                    Qualification = request.Qualification,
                    ExperienceYears = request.ExperienceYears,
                    LicenseNumber = request.LicenseNumber,
                    Specializations = request.Specializations,
                    Password = request.Password,
                    CountryCode = request.CountryCode,
                });

                if (medicalProviderResults.SuccessOpration)
                {
                    var empId = ((OperationResult<string>)medicalProviderResults).Data;
                    var medicalProvider = (OperationResult<EmployeeByIdDto>)await _medicalProviderService.GetAsync(new GetEmployeeById { Id = empId });
                    if (request.Certification is not null && request.Certification.Length >= 0)
                    {
                        await _medicalProviderService.CreateAttachmentAsync(new CreateAttachmentCommand
                        {
                            EmpId = medicalProvider.Data.Id,
                            File = request.Certification,
                            Name = request.Certification.Name,
                            Type = DocumentsConts.FileTypes.Certificate
                        });
                    }
                    await SendNotificationsAsync(empId);
                }
                return OperationResult.Success();
            }

            private async Task SendNotificationsAsync(string empId)
            {
                await _notificationService.PushToRoleAsync(Roles.SystemAdmin,
                    title: "New Medical Provider",
                    content: "A new medical provider has registred!",
                    NotificationTypes.System,
                    objectUrl: $"/employees/{empId}");
            }
        }
    }

    public class RegisterMedicalProviderValidator : AbstractValidator<RegisterMedicalProvider>
    {
        public RegisterMedicalProviderValidator()
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
            RuleFor(m => m.JobType)
               .NotEmpty()
               .NotNull()
               .IsInEnum();

            RuleFor(m => m.JobName)
                .NotEmpty()
                .NotNull();

            RuleFor(m => m.MainSpecializationId)
                .NotEmpty()
                .NotNull();

            RuleFor(m => m.Specializations)
                .NotEmpty()
                .NotNull()
                .Must(s => s.Count >= 1);

            RuleFor(m => m.LicenseNumber)
                .NotEmpty()
                .NotNull();


            RuleFor(m => m.ApprovedBy)
                .NotEmpty()
                .NotNull();


            RuleFor(m => m.AcademicDegree)
                .IsInEnum()
                .NotEmpty()
                .NotNull();


            RuleFor(m => m.ExperienceYears)
                .GreaterThan(0);
        }
    }
}
