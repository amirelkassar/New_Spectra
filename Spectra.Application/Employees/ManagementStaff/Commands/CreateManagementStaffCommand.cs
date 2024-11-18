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
                throw new RequestErrorException("Passwords do not match");
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
    public class BassMedicalStaffValidator : AbstractValidator<CreateManagementStaffCommand>
    {
        public BassMedicalStaffValidator()
        {
            RuleFor(x => x.Name)
                .NotNull().WithMessage("Name is required.")
                .NotEmpty().WithMessage("Name cannot be empty.");

            RuleFor(x => x.NationalId)
                .NotEmpty().WithMessage("National ID is required.");

            RuleFor(x => x.MobileNumber)
                .SetValidator(new PhoneNumberValidator())
                .When(x => x.MobileNumber != null);

            RuleFor(x => x.HumenGenders)
                .IsInEnum().WithMessage("Invalid gender value.");

            RuleFor(x => x.EmailAddress)
                .NotNull().WithMessage("Email address is required.")
                .SetValidator(new EmailAddressValidator());

            RuleFor(x => x.Address)
                .NotNull().WithMessage("Address is required.")
                .SetValidator(new AddressValidator());

            RuleFor(x => x.JobName)
                .NotEmpty().WithMessage("Job name is required.");

            RuleFor(x => x.Qualifications)
                .NotEmpty().WithMessage("Qualifications are required.");



            RuleFor(x => x.Passowrd)
                .NotEmpty().WithMessage("Password is required.")
                .MinimumLength(8).WithMessage("Password must be at least 8 characters long.")
                .Matches(@"[A-Z]").WithMessage("Password must contain at least one uppercase letter.")
                .Matches(@"[a-z]").WithMessage("Password must contain at least one lowercase letter.")
                .Matches(@"[0-9]").WithMessage("Password must contain at least one number.")
                .Matches(@"[!@#$%^&*(),.?""':;{}|<>]").WithMessage("Password must contain at least one special character (!@#$%^&*(),.?\"':;{}|<>).");

            RuleFor(x => x.ConfirmationPassword)
                .NotEmpty().WithMessage("Confirmation password is required.")
                .Equal(x => x.Passowrd).WithMessage("Passwords must match.");

            RuleFor(x => x.TimeToJoin)
                .GreaterThanOrEqualTo(DateOnly.FromDateTime(DateTime.Now))
                .When(x => x.TimeToJoin != null)
                .WithMessage("Time to join must not be in the past.");

            RuleFor(x => x.WorkingHours)
                .GreaterThan(0).WithMessage("Working hours must be greater than zero.")
                .When(x => x.WorkingHours.HasValue);
        }
    }

}
