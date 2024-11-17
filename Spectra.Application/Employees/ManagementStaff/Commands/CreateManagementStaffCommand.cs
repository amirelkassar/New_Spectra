using DocumentFormat.OpenXml.Office2016.Excel;
using FluentValidation;
using MediatR;
using Spectra.Application.Identities;
using Spectra.Application.Messaging;
using Spectra.Application.Validator;
using Spectra.Domain.Employees.ManagementStaff;
using Spectra.Domain.Employees.MedicalStaff;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Constants;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;
using Spectra.Domain.ValueObjects;

namespace Spectra.Application.Employees.ManagementStaff.Commands
{


    public class CreateManagementStaffCommand : CreateBassEmployeesCommand
    {
 
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
        private readonly IIdentityService _identityService;
      

        public CreateManagementStaffCommandHandler(IManagementStaffRepository staffRepository, IIdentityService identityService)
        {
            _staffRepository = staffRepository;
            _identityService = identityService;
        }

       
        public async Task<OperationResult<string>> Handle(CreateManagementStaffCommand request, CancellationToken cancellationToken)
        {
            var CheckEmail = await _staffRepository.GetAllAsync(x => x.EmailAddress == request.EmailAddress);
            if (CheckEmail.Any())
            {
                throw new RequestErrorException("This Email is Already Exist");
            }
            if (request.Passowrd != request.ConfirmationPassword)
            {
                throw new RequestErrorException("This Email is Already Exist");
            }

            var role = request.JobType == JobTypes.Accountant ? Roles.Accountant : Roles.Secretary;

            var addUser = await _identityService.CreateUserAsync(
               request.EmailAddress.Emailaddress,
               request.Passowrd,
               request.Name.FirstName, 
               "Employee",
               role
            );
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
                addUser.UserId
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
