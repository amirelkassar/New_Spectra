using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.Identities;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Application.MasterData.Sections;
using Spectra.Application.MasterData.SpecializationCommend;
using Spectra.Application.Validator;
using Spectra.Domain.Employees.MedicalStaff;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Constants;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Employees.MedicalStaff.MedicalProviders.Commands
{
    public class CreateMedicalProviderCommand : CreateBassEmployeesCommand
    {
        public List<string> Specializations { get; set; }
        public string? LicenseNumber { get; set; }
        public string? ApprovedBy { get; set; }
        public string Academicdegree { get; set; }
        public IFormFile? ScientificDegree { get; set; }
        public EmpelyeeRates? empelyeeRate { get; set; }
        public JobTypes JobType { get; set; }
        public string SpecializationId { get; set; }
        public string SectionMedicalDepartment { get; set; }
    }

    public class CreateDoctorCommandHandler(IMedicalProviderRepository doctorRepository, IHellper addFile, ISpecializationsRepository specializationRepository, IIdentityService identityService, ISectionsRepository sectionsRepository) : IRequestHandler<CreateMedicalProviderCommand, OperationResult<string>>
    {
        private readonly IMedicalProviderRepository _medicalProvider = doctorRepository;

        private readonly ISpecializationsRepository _specializationRepository = specializationRepository;
        private readonly IIdentityService _identityService = identityService;
        private readonly ISectionsRepository _sectionsRepository = sectionsRepository;
        private readonly IHellper _addFile = addFile;

        public async Task<OperationResult<string>> Handle(CreateMedicalProviderCommand request, CancellationToken cancellationToken)
        {
            var CheckEmail = await _medicalProvider.GetAllAsync(x => x.EmailAddress == request.EmailAddress);
            if (CheckEmail.Any())
            {
                throw new RequestErrorException("This Email is Already Exist");
            }
            if (request.Passowrd != request.ConfirmationPassword)
            {
                throw new RequestErrorException("Passwords do not match");
            }

            var section = await _sectionsRepository.GetAllAsync();

            var sectionList = section.Select(y => new sectionDto { Id = y.Id, SpecializationIds = y.SpecializationIds }).ToList();

            var matchedSection = sectionList.FirstOrDefault(s => s.SpecializationIds.Contains(request.SpecializationId));

            if (matchedSection == null)
            {
                throw new RequestErrorException("No section found for the provided specialization ID");

            }
            string? filePath = null;
            string targetFolder = request.JobType switch
            {
                JobTypes.Doctor => Pathes.ScientificDegreeDoctors,
                JobTypes.Specialist => Pathes.ScientificDegreeSpecialist,
                _ => Pathes.UserImages
            };
            if (request.ScientificDegree is not null)
            {
                filePath = await _addFile.CreateAttachment(request.ScientificDegree, Pathes.ScientificDegreeDoctors);
            }

            var role = request.JobType == JobTypes.Doctor ? Roles.Doctor : Roles.Specialist;
            var addUser = await _identityService.CreateUserAsync(
             request.EmailAddress.Emailaddress,
               request.Passowrd,
              request.Name.FirstName,
              request.JobType.ToString(),
                role
            );

            var medicalProvider = MedicalProvider.Create(
                Ulid.NewUlid().ToString(),
                request.Name,
                request.NationalId,
                request.MobileNumber,
                request.EmailAddress,
                request.HumenGenders,
                request.Address,
                request.Specializations,
                request.LicenseNumber,
                request.ApprovedBy,
                request.Academicdegree,
                [filePath],
                request.empelyeeRate = 0,
                request.JobType,
                addUser.UserId,
                request.SpecializationId,
                matchedSection.Id
                );


            await _medicalProvider.AddAsync(medicalProvider);

            if (request.Specializations != null)
            {
                var specializations = await _specializationRepository.GetAllAsync(s => request.Specializations.Any(rs => rs == s.Name));
                Parallel.ForEach(specializations, async spec =>
                {
                    spec.DoctorCount++;
                    await _specializationRepository.UpdateAsync(spec);
                });
                
            }

            return OperationResult<string>.Success(medicalProvider.Id);
        }
    }
    public class sectionDto
    {
        public string Id { get; set; }
        public List<string> SpecializationIds { get; set; }
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

            RuleFor(x => x.HumenGenders)
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

            RuleFor(x => x.Academicdegree)
                .NotEmpty()
                .WithMessage("Academic degree is required.");

            RuleFor(x => x.Passowrd)
          .NotEmpty().WithMessage("Password is required.")
          .MinimumLength(8).WithMessage("Password must be at least 8 characters long.")
          .Matches(@"[A-Z]").WithMessage("Password must contain at least one uppercase letter.")
          .Matches(@"[a-z]").WithMessage("Password must contain at least one lowercase letter.")
          .Matches(@"[0-9]").WithMessage("Password must contain at least one number.")
          .Matches(@"[!@#$%^&*(),.?""':;{}|<>]").WithMessage("Password must contain at least one special character (!@#$%^&*(),.?\"':;{}|<>).");

            //RuleFor(x => x.ScientificDegree)
            //        .Must(files => files == null || files.All(FileValidationHelper.BeAValidImage))
            //        .WithMessage("Invalid image file(s). At least one file must be a valid image.");
        }


        //private bool BeAValidFilePath(string filePath)
        //{

        //    return !string.IsNullOrEmpty(filePath);
        //}
    }

}
