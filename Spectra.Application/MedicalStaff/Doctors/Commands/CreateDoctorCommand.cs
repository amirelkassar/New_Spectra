using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Http;
using Spectra.Application.MasterData.Drug.Validator;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Application.MasterData.SpecializationCommend;
using Spectra.Application.Messaging;
using Spectra.Application.Validator;
using Spectra.Domain.MedicalStaff;
using Spectra.Domain.MedicalStaff.Doctor;
using Spectra.Domain.Shared.Constants;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;
using Spectra.Domain.ValueObjects;

namespace Spectra.Application.MedicalStaff.Doctors.Commands
{


    public class CreateDoctorCommand : ICommand<OperationResult<string>>
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
        //public EmploymentStatus Stutes { get; set; }

 

        public List<IFormFile> ScientificDegree { get; set; }
        public EmpelyeeRates? empelyeeRate { get; set; }


    }

    public class CreateDoctorCommandHandler : IRequestHandler<CreateDoctorCommand, OperationResult<string>>
    {
        private readonly IDoctorRepository _doctorRepository;
        private readonly ISpecializationsRepository _specializationRepository;
        private readonly IHellper _addFile;
        public CreateDoctorCommandHandler(IDoctorRepository doctorRepository, IHellper addFile, ISpecializationsRepository specializationRepository)
        {
            _doctorRepository = doctorRepository;
            _specializationRepository = specializationRepository;
            _addFile = addFile;
        }
        public async Task<OperationResult<string>> Handle(CreateDoctorCommand request, CancellationToken cancellationToken)
        {
           List<string>? filePath = null;
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
           

            var doctor = Doctor.Create(
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
                request.empelyeeRate=0
                
                );


            await _doctorRepository.AddAsync(doctor);
      


            return OperationResult<string>.Success(doctor.Id);


        }
    }
    public class BassMedicalStaffValidator : AbstractValidator<BassMedicalStaff>
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

     
        private bool BeAValidFilePath(string filePath)
        {
            
            return !string.IsNullOrEmpty(filePath);
        }
    }

}
