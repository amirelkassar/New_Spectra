using DocumentFormat.OpenXml.Spreadsheet;
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
        public List<string> Diagnoses { get; set; }
        public string? LicenseNumber { get; set; }
        public string? ApprovedBy { get; set; }
        public string Academicdegree { get; set; }
        public List<IFormFile>? ScientificDegree { get; set; }
        public EmpelyeeRates? empelyeeRate { get; set; }
        public JobTypes JobType { get; set; }
        public string SpecializationId { get; set; }
        public string SectionMedicalDepartment { get; set; }
    }

    public class CreateDoctorCommandHandler : IRequestHandler<CreateMedicalProviderCommand, OperationResult<string>>
    {
        private readonly IMedicalProviderRepository _medicalProvider;

        private readonly ISpecializationsRepository _specializationRepository;
        private readonly IIdentityService _identityService;
        private readonly ISectionsRepository _sectionsRepository;
        private readonly IHellper _addFile;
        public CreateDoctorCommandHandler(IMedicalProviderRepository doctorRepository, IHellper addFile, ISpecializationsRepository specializationRepository, IIdentityService identityService, ISectionsRepository sectionsRepository)
        {
            _identityService = identityService;
            _medicalProvider = doctorRepository;
            _specializationRepository = specializationRepository;
            _addFile = addFile;
            _sectionsRepository = sectionsRepository;
        }
      
        public async Task<OperationResult<string>> Handle(CreateMedicalProviderCommand request, CancellationToken cancellationToken)
        {
             var CheckEmail= await _medicalProvider.GetAllAsync(x => x.EmailAddress == request.EmailAddress);
            if (CheckEmail.Any())
            {
                throw new RequestErrorException("This Email is Already Exist");
            }
            if (request.Passowrd !=request.ConfirmationPassword )
            {
                throw new RequestErrorException("Passwords do not match");
            }

            var section = await _sectionsRepository.GetAllAsync();

            var sectionList=  section.Select(y => new sectionDto { Id= y.Id , SpecializationIds = y.SpecializationIds}).ToList();
            
            var matchedSection = sectionList.FirstOrDefault(s => s.SpecializationIds.Contains(request.SpecializationId));
            
            if (matchedSection == null)
            {
                throw new RequestErrorException("No section found for the provided specialization ID");
            
            }
            List<string>? filePath = null;
            if (request.JobType == JobTypes.Doctor)
            {
                filePath = await _addFile.CreateAttachments(request.ScientificDegree, Pathes.ScientificDegreeDoctors);
                if (request.Diagnoses != null)
                {
                    var updateTasks = request.Diagnoses.Select(async item =>
                    {
                        var specialization = await _specializationRepository.GetByNameAsync(item);
                        if (specialization != null)
                        {
                            specialization.DoctorCount += 1;
                        }
                    });
                    await Task.WhenAll(updateTasks);
                }
            }
            else if (request.JobType == JobTypes.Specialist)
            {
                filePath = await _addFile.CreateAttachments(request.ScientificDegree, Pathes.ScientificDegreeSpecialist);
            }


            //if (filePath == null || !filePath.Any())
            //{
            //    throw new RequestErrorException("You must upload your Scientific Degrees.");
            //}

            var role = request.JobType == JobTypes.Doctor ? Roles.Doctor : Roles.Specialist;
            var addUser = await _identityService.CreateUserAsync(
             request.EmailAddress.Emailaddress,
               request.Passowrd,
              "Admin",
              "Employee",
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
                request.Diagnoses,
                request.LicenseNumber,
                request.ApprovedBy,
                request.Academicdegree,
                filePath,  
                request.empelyeeRate = 0,
                request.JobType,
                addUser.UserId,
                request.SpecializationId,
                matchedSection.Id
                );


            await _medicalProvider.AddAsync(medicalProvider);

            return OperationResult<string>.Success(medicalProvider.Id);
        }
    }
    public class sectionDto
    {
        public string Id { get; set; }
        public List<string> SpecializationIds { get; set; }
    }
    public class BassMedicalStaffValidator : AbstractValidator<MedicalProvider>
    {
        public BassMedicalStaffValidator()
        {
            // Name is required
            RuleFor(x => x.Name)
                .NotNull()
                .WithMessage("Name is required.");

            RuleFor(x => x.NationalId)
                .NotEmpty()
                .WithMessage("National ID is required.");

            RuleFor(x => x.MobileNumber)
                .SetValidator(new PhoneNumberValidator())
                .When(x => x.MobileNumber != null);

            // HumenGenders should be a valid enum value (if required)
            RuleFor(x => x.HumenGenders)
                .IsInEnum()
                .WithMessage("Invalid gender value.");

            // EmailAddress is required and should be valid (assuming validation inside EmailAddress object)
            RuleFor(x => x.EmailAddress)
                .NotNull()
                .WithMessage("Email address is required.")
                .SetValidator(new EmailAddressValidator());

            // Address is required and should be valid (assuming validation inside Address object)
            RuleFor(x => x.Address)
                .NotNull()
                .WithMessage("Address is required.")
                .SetValidator(new AddressValidator());

            // Diagnoses is required and must be non-empty
            RuleFor(x => x.Diagnoses)
                .NotEmpty()
                .WithMessage("Diagnoses are required.");


            RuleFor(x => x.LicenseNumber)
                .MaximumLength(100)
                .WithMessage("License number must not exceed 100 characters.");


            RuleFor(x => x.ApprovedBy)
                .MaximumLength(100)
                .WithMessage("ApprovedBy field must not exceed 100 characters.");

            RuleFor(x => x.Academicdegree)
                .NotEmpty()
                .WithMessage("Academic degree is required.");

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
