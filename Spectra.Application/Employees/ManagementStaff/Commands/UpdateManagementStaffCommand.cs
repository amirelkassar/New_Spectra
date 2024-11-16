using MediatR;
using Spectra.Application.Messaging;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;
using Spectra.Domain.ValueObjects;

namespace Spectra.Application.Employees.ManagementStaff.Commands
{
    public class UpdateManagementStaffCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }
        public Name Name { get; set; }
        public string NationalId { get; set; }
        public PhoneNumber? MobileNumber { get; set; }
        public HumenGender HumenGenders { get; set; }
        public EmailAddress EmailAddrese { get; set; }
        public Address Address { get; set; }
        public string JobName { get; set; }
        public string Qualifications { get; set; }
        public DateOnly? TimeToJoin { get; set; }
        public double? WorkingHours { get; set; }
        public JobTypes JobType { get; set; }
    }

    public class UpdateManagementStaffCommandHandler : IRequestHandler<UpdateManagementStaffCommand, OperationResult<Unit>>
    {
        private readonly IManagementStaffRepository _staffRepository;

        public UpdateManagementStaffCommandHandler(IManagementStaffRepository staffRepository)
        {
            _staffRepository = staffRepository;
        }

        public async Task<OperationResult<Unit>> Handle(UpdateManagementStaffCommand request, CancellationToken cancellationToken)
        {

            var staff = await _staffRepository.GetByIdAsync(request.Id);

            staff.Name = request.Name;
            staff.NationalId = request.NationalId;
            staff.MobileNumber = request.MobileNumber;
            staff.HumenGenders = request.HumenGenders;
            staff.EmailAddress = request.EmailAddrese;
            staff.Address = request.Address;
            staff.JobName = request.JobName;
            staff.JobType = request.JobType;
            staff.Qualifications = request.Qualifications;
            staff.TimeToJoin = request.TimeToJoin;
            staff.WorkingHours = request.WorkingHours;


            await _staffRepository.UpdateAsync(staff);
            return OperationResult<Unit>.Success(Unit.Value);


        }
    }

}
