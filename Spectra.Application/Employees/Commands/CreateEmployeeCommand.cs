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
using Spectra.Domain.Shared.Helpers;
using Spectra.Domain.Shared.Wrappers;
using Spectra.Domain.ValueObjects;
using static Spectra.Domain.Shared.Constants.EmployeesConsts;

namespace Spectra.Application.Employees.Commands
{
    public class CreateEmployeeCommand : IRequest<OperationResult>
    {
        public CreateEmployeeCommand()
        {
            Specializations = [];
            Services = [];
        }
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
        public string Password { get; set; }
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

            if (await _employeeRepo.Exists(s => !string.IsNullOrWhiteSpace(s.LicenseNumber) && s.LicenseNumber.ToLower() == request.LicenseNumber.ToLower()))
            {
                throw new AlreadyExistException(request.LicenseNumber, nameof(request.LicenseNumber));
            }

            ICollection<Specialization> specializations = null;
            if (request.Specializations is not null && request.Specializations.Count > 0)
            {
                var (allSpecializations, allSpecTotal) = await _specializationRepository.GetAllAsync();

                foreach (var spec in request.Specializations)
                {
                    if (!allSpecializations.Any(s => s.Id == spec))
                    {
                        throw new NotFoundException("Specializations", spec);
                    }
                }


                if (!string.IsNullOrWhiteSpace(request.MainSpecializationId) && !allSpecializations.Any(s => s.Id == request.MainSpecializationId))
                {
                    throw new NotFoundException("Specializations", request.MainSpecializationId);
                }
                specializations = allSpecializations.Where(s => !string.IsNullOrWhiteSpace(request.MainSpecializationId) ? request.MainSpecializationId == s.Id : s.Id == s.Id || request.Specializations.Any(rs => rs == s.Id)).ToArray();
            }

            ICollection<PlatformService> services = null;
            if (request.Services is not null && request.Services.Count > 0)
            {
                var (allServices, allServiceTotal) = await _servicesRepository.GetAllAsync();

                foreach (var service in request.Services)
                {
                    if (!allServices.Any(s => s.Id == service))
                    {
                        throw new NotFoundException("Services", service);
                    }
                }

                services = allServices.Where(s => request.Services.Any(rs => rs == s.Id)).ToArray();
            }

            var employee = Employee.Create(
                Ulid.NewUlid().ToString(),
                request.Name,
                request.NationalId,
                request.MobileNumber,
                request.HumenGender,
                request.EmailAddress,
                request.Address,
                request.JobType,
                request.JobName);
            employee.LicenseNumber = request.LicenseNumber;
            employee.ApprovedBy = request.ApprovedBy;
            employee.AcademicDegree = request.AcademicDegree;
            employee.Qualification = request.Qualification;
            employee.JobDescription = request.JobDescription;
            employee.ExperienceYears = request.ExperienceYears;


            if (!string.IsNullOrWhiteSpace(request.MainSpecializationId))
            {
                var mainSpecialization = specializations.FirstOrDefault(s => s.Id == request.MainSpecializationId);
                employee.MainSpecializationId = mainSpecialization.Id;
                employee.MainSpecializationArName = mainSpecialization.ArName;
                employee.MainSpecializationEnName = mainSpecialization.EnName;
                var section = await _sectionsRepository.GetAsync(s => s.Specsifications.Any(sp => sp.Id == request.MainSpecializationId));
                if (section is not null)
                {
                    employee.SectionId = section.Id;
                    employee.SectionArEnName = section.ArName;
                    employee.SectionEnName = section.EnName;
                }
            }

            if (specializations is not null && specializations.Count > 0)
            {

                Parallel.ForEach(specializations.Distinct(), spec =>
                {
                    employee.Specializations.Add(new EmployeeSpecialization
                    {
                        Id = spec.Id,
                        EnName = spec.EnName,
                        ArName = spec.ArName
                    });
                    spec.DoctorCount++;
                    _specializationRepository.UpdateAsync(spec).Wait();
                });
            }

            if (services is not null && services.Count > 0)
            {
                Parallel.ForEach(services.Distinct(), async service =>
                {
                    employee.Services.Add(new EmployeeService
                    {
                        Id = service.Id,
                        EnName = service.EnName,
                        ArName = service.ArName
                    });
                });
            }

            var role = request.JobType == JobTypes.Doctor ? Roles.Doctor : Roles.Specialist;
            var addUser = await _identityService.CreateUserAsync(
             request.EmailAddress.Emailaddress,
               request.Password,
              request.Name.FirstName,
              " ",
                role
            );

            employee.SetUser(addUser.UserId);

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


            RuleFor(r => r.Password)
               .NotEmpty()
               .NotNull()
               .Must(StringExtensionHelper.IsPassword);
        }


    }

}
