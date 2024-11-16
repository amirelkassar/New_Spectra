using DocumentFormat.OpenXml.Spreadsheet;
using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.Identities;
using Spectra.Application.Interfaces;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Application.MasterData.SpecializationCommend;
using Spectra.Application.Messaging;
using Spectra.Application.Validator;
using Spectra.Domain.Employees.MedicalStaff;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Constants;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;
using Spectra.Domain.ValueObjects;

namespace Spectra.Application.Employees.MedicalStaff.MedicalProviders.Commands
{


    public class CreateMedicalProviderCommand : ICommand<OperationResult<string>>
    {
        public Name Name { get; set; }
        public string NationalId { get; set; }
        public PhoneNumber? MobileNumber { get; set; }
        public HumenGender HumenGenders { get; set; }
        public EmailAddress EmailAddress { get; set; }
        public Address Address { get; set; }
        public List<string> Diagnoses { get; set; }
        public string? LicenseNumber { get; set; }
        public string? ApprovedBy { get; set; }
        public string Academicdegree { get; set; }
        public List<IFormFile>? ScientificDegree { get; set; }
        public EmpelyeeRates? empelyeeRate { get; set; }
        public JobTypes JobType { get; set; }

    }

    public class CreateDoctorCommandHandler : IRequestHandler<CreateMedicalProviderCommand, OperationResult<string>>
    {
        private readonly IMedicalProviderRepository _medicalProvider;

        private readonly ISpecializationsRepository _specializationRepository;
        private readonly IIdentityService _identityService;

        private readonly IHellper _addFile;
        public CreateDoctorCommandHandler(IMedicalProviderRepository doctorRepository, IHellper addFile, ISpecializationsRepository specializationRepository, IIdentityService identityService )
        {
            _medicalProvider = doctorRepository;
            _specializationRepository = specializationRepository;
            _addFile = addFile;
            _identityService = identityService;
        }
        public async Task<OperationResult<string>> Handle(CreateMedicalProviderCommand request, CancellationToken cancellationToken)
        {
            List<string>? filePath = null;
            (OperationResult Result, string UserId) addUser;
            if (JobTypes.Doctor == request.JobType)
            {
              addUser = await _identityService.CreateUserAsync(request.EmailAddress.Emailaddress, "testssdadd231@", request.Name.FirstName, "Testt", Roles.Doctor);
                var uploadfile = await _addFile.CreateAttachments(request.ScientificDegree, Pathes.ScientificDegreeDoctors);
                if (uploadfile != null)
                {
                    filePath = uploadfile;

                }
                
                foreach (var item in request.Diagnoses)
                {
                    var specialization = await _specializationRepository.GetByNameAsync(item);
                    specialization.DoctorCount += 1;

                }
            }
            if (JobTypes.Specialist == request.JobType)
            {
                 addUser = await _identityService.CreateUserAsync(request.EmailAddress.Emailaddress, "testssdadd231@", request.Name.FirstName, "Testt", Roles.Specialist);
                var uploadfile = await _addFile.CreateAttachments(request.ScientificDegree, Pathes.ScientificDegreeSpecialist);
                if (uploadfile != null)
                {
                    filePath = uploadfile;

                }
            }
            if (filePath == null)
            {

                throw new RequestErrorException(" you must to Uplode  your ScientificDegrees ");
            }
            addUser = await _identityService.CreateUserAsync(request.EmailAddress.Emailaddress, "testssdadd231@", request.Name.FirstName, "Testt", Roles.Doctor);
         
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
                addUser.UserId
                );


            await _medicalProvider.AddAsync(medicalProvider);

            return OperationResult<string>.Success(medicalProvider.Id);
        }
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
