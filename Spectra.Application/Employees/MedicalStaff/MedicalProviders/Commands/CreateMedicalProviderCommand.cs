using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.Identities;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Application.MasterData.Sections;
using Spectra.Application.MasterData.SpecializationCommend;
using Spectra.Application.Validator;
using Spectra.Domain.Employees;
using Spectra.Domain.Employees.MedicalStaff;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Constants;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;
using static Spectra.Domain.Shared.Constants.EmployeesConsts;

namespace Spectra.Application.Employees.MedicalStaff.MedicalProviders.Commands
{
    public class CreateMedicalProviderCommand : CreateEmployeeBaseCommand
    {
        public List<MedicalProviderSpecialization> Specializations { get; set; }
        public string LicenseNumber { get; set; }
        public string ApprovedBy { get; set; }
        public AcademicDegrees AcademicDegree { get; set; }
        public string MainSpecializationId { get; set; }
        public string MainSpecializationName { get; set; }
        public string SectionId { get; set; }
        public IFormFile? Certification { get; set; }
    }

    public class CreateDoctorCommandHandler(IMedicalProviderRepository doctorRepository,
        IHellper addFile,
        ISpecializationsRepository specializationRepository,
        IIdentityService identityService,
        ISectionsRepository sectionsRepository) : IRequestHandler<CreateMedicalProviderCommand, OperationResult>
    {
        private readonly IMedicalProviderRepository _medicalProvider = doctorRepository;

        private readonly ISpecializationsRepository _specializationRepository = specializationRepository;
        private readonly IIdentityService _identityService = identityService;
        private readonly ISectionsRepository _sectionsRepository = sectionsRepository;
        private readonly IHellper _addFile = addFile;

        public async Task<OperationResult> Handle(CreateMedicalProviderCommand request, CancellationToken cancellationToken)
        {
            if (await _identityService.IsExist(request.EmailAddress.Emailaddress))
            {
                throw new AlreadyExistException(request.EmailAddress.Emailaddress, nameof(request.EmailAddress));
            }

            if (await _medicalProvider.Exists(s => s.EmailAddress.Emailaddress.ToLower() == request.EmailAddress.Emailaddress.ToLower()))
            {
                throw new AlreadyExistException(request.EmailAddress.Emailaddress, nameof(request.EmailAddress));
            }

            if (await _medicalProvider.Exists(s => s.LicenseNumber.ToLower() == request.LicenseNumber.ToLower()))
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

            var medicalProvider = MedicalProvider.Create(
                Ulid.NewUlid().ToString(),
                request.Name,
                request.NationalId,
                request.MobileNumber,
                request.HumenGender,
                request.EmailAddress,
                request.Address,
                request.Specializations,
                request.LicenseNumber,
                request.ApprovedBy,
                request.AcademicDegree,
                request.JobType,
                request.JobName,
                addUser.UserId,
               request.MainSpecializationId,
               request.MainSpecializationName,
               request.SectionId);

            if (request.Certification is not null && request.Certification.Length > 1000)
            {
                string targetFolder = request.JobType switch
                {
                    JobTypes.Doctor => Pathes.ScientificDegreeDoctors,
                    JobTypes.Specialist => Pathes.ScientificDegreeSpecialist,
                    _ => Pathes.UserImages
                };

                var filePath = await _addFile.CreateAttachment(request.Certification, targetFolder);
                medicalProvider.Attachments.Add(new EmployeeAttachment
                {
                    Name = $"{request.Name} Certification",
                    Path = filePath,
                    Type = DocumentsConts.FileTypes.Certificate
                });
            }

            await _medicalProvider.AddAsync(medicalProvider);

            if (request.Specializations != null)
            {
                var specializations = await _specializationRepository.GetAllAsync(s => request.Specializations.Any(rs => rs.Id == s.Id) || s.Id == request.MainSpecializationId);
                Parallel.ForEach(specializations, async spec =>
                {
                    spec.DoctorCount++;
                    await _specializationRepository.UpdateAsync(spec);
                });
            }

            return OperationResult<string>.Success(medicalProvider.Id);
        }
    }
    public class BassMedicalStaffValidator : AbstractValidator<CreateMedicalProviderCommand>
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


            RuleFor(x => x.Specializations)
                .NotEmpty()
                .WithMessage("Specializations are required.");


            RuleFor(x => x.LicenseNumber)
                .MaximumLength(100)
                .WithMessage("License number must not exceed 100 characters.");


            RuleFor(x => x.ApprovedBy)
                .MaximumLength(100)
                .WithMessage("ApprovedBy field must not exceed 100 characters.");

            RuleFor(x => x.AcademicDegree)
                .IsInEnum()
                .NotEmpty()
                .WithMessage("Academic degree is required.");

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
