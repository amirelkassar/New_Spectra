using MediatR;
using Spectra.Application.Identities;
using Spectra.Application.Interfaces;
using Spectra.Application.Messaging;
using Spectra.Domain.Employees.ManagementStaff;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;
using Spectra.Domain.ValueObjects;

namespace Spectra.Application.Employees.ManagementStaff.Commands
{
    public class UpdateManagementStaffCommand : ICommand<OperationResult>
    {
        public string Id { get; set; }
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
        public double? WorkingHours { get; set; }
    }

    public class UpdateManagementStaffCommandHandler(IBaseMongoDbRepository<Staff, string> staffRepository, IIdentityService identityService) : IRequestHandler<UpdateManagementStaffCommand, OperationResult>
    {
        private readonly IBaseMongoDbRepository<Staff, string> _staffRepository = staffRepository;
        private readonly IIdentityService _identityService = identityService;

        public async Task<OperationResult> Handle(UpdateManagementStaffCommand request, CancellationToken cancellationToken)
        {

            var staff = await _staffRepository.GetByIdAsync(request.Id);

            if (await _staffRepository.Exists(s => s.Id != staff.Id && s.EmailAddress.Emailaddress.ToLower() == request.EmailAddress.Emailaddress.ToLower()))
            {
                throw new AlreadyExistException(request.EmailAddress.Emailaddress, nameof(request.EmailAddress));
            }
            staff.Name = request.Name;
            staff.NationalId = request.NationalId;
            staff.MobileNumber = request.MobileNumber;
            staff.HumenGender = request.HumenGender;
            staff.EmailAddress = request.EmailAddress;
            staff.Address = request.Address;
            staff.JobName = request.JobName;
            staff.JobType = request.JobType;
            staff.ExperienceYears=request.ExperienceYears;
            staff.Qualification = request.Qualification;
            staff.JobDescription = request.JobDescription;
            staff.WorkingHours = request.WorkingHours;

            await _staffRepository.UpdateAsync(staff);
            return OperationResult<Unit>.Success(Unit.Value);


        }
    }

}
