using FluentValidation;
using MediatR;
using Spectra.Application.Messaging;
using Spectra.Application.Validator;
using Spectra.Domain.Employees.ManagementStaff;
using Spectra.Domain.Employees.MedicalStaff;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;
using Spectra.Domain.ValueObjects;

namespace Spectra.Application.Employees.ManagementStaff.Commands
{


    public class CreateManagementStaffCommand : ICommand<OperationResult<string>>
    {
        public Name Name { get; set; }
        public string NationalId { get; set; }
        public PhoneNumber? MobileNumber { get; set; }
        public HumenGender HumenGenders { get; set; }
        public EmailAddress EmailAddress { get; set; }
        public Address Address { get; set; }
        public string JobName { get; set; }
        public string Qualifications { get; set; }
        public DateOnly? TimeToJoin { get; set; }
        public double? WorkingHours { get; set; }
        public JobTypes JobType { get; set; }
        public string UserId { get; set; }
    }

    public class CreateManagementStaffCommandHandler : IRequestHandler<CreateManagementStaffCommand, OperationResult<string>>
    {
        private readonly IManagementStaffRepository _staffRepository;

        public CreateManagementStaffCommandHandler(IManagementStaffRepository staffRepository)
        {
            _staffRepository=staffRepository;
        }

        public async Task<OperationResult<string>> Handle(CreateManagementStaffCommand request, CancellationToken cancellationToken)
        {
      
            var staff = Staff.Create(
                Ulid.NewUlid().ToString(),
                request.Name,
                request.NationalId,
                request.MobileNumber,
                request.EmailAddress,
                request.HumenGenders,
                request.Address,
                request.JobName,
                request.Qualifications,
                request.TimeToJoin,
                request.WorkingHours,
                request.JobType,
                request.UserId
                );


            await _staffRepository.AddAsync(staff);



            return OperationResult<string>.Success(staff.Id);


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
