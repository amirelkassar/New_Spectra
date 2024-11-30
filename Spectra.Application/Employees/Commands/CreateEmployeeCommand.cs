using FluentValidation;
using MediatR;
using Spectra.Application.Identities;
using Spectra.Application.Interfaces;
using Spectra.Application.Validator;
using Spectra.Domain.Employees;
using Spectra.Domain.MasterData.DoctorsSpecialization;
using Spectra.Domain.MasterData.Sections;
using Spectra.Domain.MasterData.ServicesMD;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Constants;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;
using Spectra.Domain.ValueObjects;
using static Spectra.Domain.Shared.Constants.EmployeesConsts;

namespace Spectra.Application.Employees.Commands
{
    public class CreateEmployeeCommand : IRequest<OperationResult>
    {
        public Name Name { get; set; }
        public string NationalId { get; set; }
        public PhoneNumber? MobileNumber { get; set; }
        public HumenGender HumenGender { get; set; }
        public EmailAddress EmailAddress { get; set; }
        public Address Address { get; set; }
        public string JobName { get; set; }
        public JobTypes JobType { get; set; }
        public int? ExperienceYears { get; set; }
        public string? Qualification { get; set; }
        public string? JobDescription { get; set; }
        public string Passowrd { get; set; }
        public ICollection<string>? Specializations { get; set; }
        public ICollection<string>? Services { get; set; }
        public string? LicenseNumber { get; set; }
        public string? ApprovedBy { get; set; }
        public AcademicDegrees? AcademicDegree { get; set; }
        public string? MainSpecializationId { get; set; }
        public double? WorkingHours { get; set; }
    }

    public class CreateEmployeeCommandHandler(IBaseMongoDbRepository<Employee> employeeRepo,
        IBaseMongoDbRepository<Specialization> specializationRepository,
        IBaseMongoDbRepository<PlatformService> servicesRepository,
        IIdentityService identityService,
        IBaseMongoDbRepository<Section> sectionsRepository) : IRequestHandler<CreateEmployeeCommand, OperationResult>
    {
        private readonly IBaseMongoDbRepository<Employee> _employeeRepo = employeeRepo;

        private readonly IBaseMongoDbRepository<Specialization> _specializationRepository = specializationRepository;
        private readonly IBaseMongoDbRepository<PlatformService> _servicesRepository = servicesRepository;
        private readonly IIdentityService _identityService = identityService;
        private readonly IBaseMongoDbRepository<Section> _sectionsRepository = sectionsRepository;

        public async Task<OperationResult> Handle(CreateEmployeeCommand request, CancellationToken cancellationToken)
        {
            if (await _identityService.IsExist(request.EmailAddress.Emailaddress))
            {
                throw new AlreadyExistException(request.EmailAddress.Emailaddress, nameof(request.EmailAddress));
            }

            if (await _employeeRepo.Exists(s => s.EmailAddress.Emailaddress.ToLower() == request.EmailAddress.Emailaddress.ToLower()))
            {
                throw new AlreadyExistException(request.EmailAddress.Emailaddress, nameof(request.EmailAddress));
            }

            if (await _employeeRepo.Exists(s => s.LicenseNumber.ToLower() == request.LicenseNumber.ToLower()))
            {
                throw new AlreadyExistException(request.LicenseNumber, nameof(request.LicenseNumber));
            }

            var role = request.JobType == JobTypes.Doctor ? Roles.Doctor : Roles.Specialist;

            var addUser = await _identityService.CreateUserAsync(
             request.EmailAddress.Emailaddress,
               request.Passowrd,
              request.Name.FirstName,
              " ",
                role
            );

            var employee = Employee.Create(
                Ulid.NewUlid().ToString(),
                request.Name,
                request.NationalId,
                request.MobileNumber,
                request.HumenGender,
                request.EmailAddress,
                request.Address,
                request.JobType,
                request.JobName,
                addUser.UserId);
            employee.LicenseNumber = request.LicenseNumber;
            employee.ApprovedBy = request.ApprovedBy;
            employee.AcademicDegree = request.AcademicDegree;
            employee.Qualification = request.Qualification;
            employee.JobDescription = request.JobDescription;
            employee.ExperienceYears = request.ExperienceYears;


            if (!string.IsNullOrWhiteSpace(request.MainSpecializationId))
            {
                employee.MainSpecializationId = request.MainSpecializationId;
                var section = await _sectionsRepository.GetAsync(s => s.Specsifications.Any(sp => sp.Id == request.MainSpecializationId));
                employee.SectionId = section.Id;
            }

            if (request.Specializations != null && request.Specializations.Count > 0)
            {
                var (specializations, specTotal) = await _specializationRepository.GetAllAsync(s => request.Specializations.Any(rs => rs == s.Id) || s.Id == request.MainSpecializationId);
                Parallel.ForEach(specializations, async spec =>
                {
                    employee.Specializations.Add(new EmployeeSpecialization
                    {
                        Id = spec.Id,
                        EnName = spec.EnName,
                        ArName = spec.ArName
                    });
                    spec.DoctorCount++;
                    await _specializationRepository.UpdateAsync(spec);
                });
            }

            if (request.Services != null && request.Services.Count > 0)
            {
                var (services, serviceTotal) = await _servicesRepository.GetAllAsync(s => request.Services.Any(rs => rs == s.Id));
                Parallel.ForEach(services, async service =>
                {
                    employee.Services.Add(new EmployeeService
                    {
                        Id = service.Id,
                        EnName = service.EnName,
                        ArName = service.ArName
                    });
                });
            }

            await _employeeRepo.AddAsync(employee);

            return OperationResult<string>.Success(employee.Id);
        }
    }
    public class BassMedicalStaffValidator : AbstractValidator<CreateEmployeeCommand>
    {
        public BassMedicalStaffValidator()
        {

            RuleFor(x => x.Name)
                .NotNull()
                .WithMessage("Name is required.");

            RuleFor(x => x.NationalId)
                .NotEmpty()
                .WithMessage("National ID is required.");

            RuleFor(x => x.MobileNumber)
                .SetValidator(new PhoneNumberValidator())
                .When(x => x.MobileNumber != null);

            RuleFor(x => x.HumenGender)
                .IsInEnum()
                .WithMessage("Invalid gender value.");


            RuleFor(x => x.EmailAddress)
                .NotNull()
                .WithMessage("Email address is required.")
                .SetValidator(new EmailAddressValidator());

            RuleFor(x => x.Address)
                .NotNull()
                .WithMessage("Address is required.")
                .SetValidator(new AddressValidator());


            RuleFor(x => x.Passowrd)
          .NotEmpty().WithMessage("Password is required.")
          .MinimumLength(8).WithMessage("Password must be at least 8 characters long.")
          .Matches(@"[A-Z]").WithMessage("Password must contain at least one uppercase letter.")
          .Matches(@"[a-z]").WithMessage("Password must contain at least one lowercase letter.")
          .Matches(@"[0-9]").WithMessage("Password must contain at least one number.")
          .Matches(@"[!@#$%^&*(),.?""':;{}|<>]").WithMessage("Password must contain at least one special character (!@#$%^&*(),.?\"':;{}|<>).");
        }


    }

}
