using FluentValidation;
using MediatR;
using Spectra.Application.Identities;
using Spectra.Application.Validator;
using Spectra.Domain.Employees.ManagementStaff;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Constants;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Employees.ManagementStaff.Commands
{


    public class CreateManagementStaffCommand : CreateEmployeeBaseCommand
    {
        public double? WorkingHours { get; set; }

    }

    public class CreateManagementStaffCommandHandler : IRequestHandler<CreateManagementStaffCommand, OperationResult>
    {
        private readonly IManagementStaffRepository _staffRepository;
        private readonly IIdentityService _identityService;
      

        public CreateManagementStaffCommandHandler(IManagementStaffRepository staffRepository, IIdentityService identityService)
        {
            _staffRepository = staffRepository;
            _identityService = identityService;
        }

       
        public async Task<OperationResult> Handle(CreateManagementStaffCommand request, CancellationToken cancellationToken)
        {
            if (await _identityService.IsExist(request.EmailAddress.Emailaddress))
            {
                throw new AlreadyExistException(request.EmailAddress.Emailaddress,nameof(request.EmailAddress));
            }

            if (await _staffRepository.Exists(s=>s.EmailAddress.Emailaddress.ToLower()==request.EmailAddress.Emailaddress.ToLower()))
            {
                throw new AlreadyExistException(request.EmailAddress.Emailaddress, nameof(request.EmailAddress));
            }

            var role = request.JobType == JobTypes.Accountant ? Roles.Accountant : Roles.Secretary;
            var addUser = await _identityService.CreateUserAsync(
               request.EmailAddress.Emailaddress,
               request.Passowrd,
               request.Name.FirstName, 
               " ",
               role
            );
            var staff = Staff.Create(
                Ulid.NewUlid().ToString(),
                request.Name,
                request.NationalId,
                request.HumenGender,
                request.MobileNumber,
                request.EmailAddress,
                request.Address,
                request.JobName,
                request.JobType,
                addUser.UserId);

            staff.JobDescription = request.JobDescription;
            staff.Qualification = request.Qualification;
            staff.WorkingHours = request.WorkingHours;

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

            RuleFor(x => x.HumenGender)
                .IsInEnum().WithMessage("Invalid gender value.");

            RuleFor(x => x.EmailAddress)
                .NotNull().WithMessage("Email address is required.")
                .SetValidator(new EmailAddressValidator());

            RuleFor(x => x.Address)
                .NotNull().WithMessage("Address is required.")
                .SetValidator(new AddressValidator());

            RuleFor(x => x.JobName)
                .NotEmpty().WithMessage("Job name is required.");

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
