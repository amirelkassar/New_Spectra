using FluentValidation;
using MediatR;
using Spectra.Application.Identities;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Application.MasterData.Sections;
using Spectra.Application.MasterData.SpecializationCommend;
using Spectra.Application.Validator;
using Spectra.Domain.Employees;
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
        public ICollection<EmployeeSpecialization>? Specializations { get; set; }
        public ICollection<EmployeeService>? Services { get; set; }
        public string? LicenseNumber { get; set; }
        public string? ApprovedBy { get; set; }
        public AcademicDegrees? AcademicDegree { get; set; }
        public string? MainSpecializationId { get; set; }
        public string? MainSpecializationName { get; set; }
        public string? SectionId { get; set; }
        public string? SectionName { get; set; }
        public double? WorkingHours { get; set; }
    }

    public class CreateEmployeeCommandHandler(IBaseMongoDbRepository<Employee, string> employeeRepo,
        IDocumentHellper addFile,
        ISpecializationsRepository specializationRepository,
        IIdentityService identityService,
        ISectionsRepository sectionsRepository) : IRequestHandler<CreateEmployeeCommand, OperationResult>
    {
        private readonly IBaseMongoDbRepository<Employee, string> _employeeRepo = employeeRepo;

        private readonly ISpecializationsRepository _specializationRepository = specializationRepository;
        private readonly IIdentityService _identityService = identityService;
        private readonly ISectionsRepository _sectionsRepository = sectionsRepository;
        private readonly IDocumentHellper _addFile = addFile;

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

            var section = await _sectionsRepository.GetByIdAsync(request.SectionId);
            if (section == null)
            {
                throw new NotFoundException("Sections", request.SectionId);
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
            employee.Specializations=request.Specializations;
            employee.Services=request.Services;
            employee.LicenseNumber=request.LicenseNumber; 
            employee.ApprovedBy=request.ApprovedBy;
            employee.AcademicDegree=request.AcademicDegree;
            employee.MainSpecializationName=request.MainSpecializationName;
            employee.MainSpecializationId=request.MainSpecializationId;
            employee.SectionId=request.SectionId;
            employee.SectionName=request.SectionName;
            employee.Qualification = request.Qualification;
            employee.JobDescription = request.JobDescription;
            employee.ExperienceYears = request.ExperienceYears;

            await _employeeRepo.AddAsync(employee);

            if (request.Specializations != null)
            {
                var specializations = await _specializationRepository.GetAllAsync(s => request.Specializations.Any(rs => rs.Id == s.Id) || s.Id == request.MainSpecializationId);
                Parallel.ForEach(specializations, async spec =>
                {
                    spec.DoctorCount++;
                    await _specializationRepository.UpdateAsync(spec);
                });
            }

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
