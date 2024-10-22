using MediatR;
using Spectra.Application.Employees.MedicalStaff.Doctors;
using Spectra.Application.MasterData.HellperFunc;
using Spectra.Application.Messaging;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Employees.ManagementStaff.Commands
{
    public class DeleteManagementStaffCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }
    }

    public class DeleteManagementStaffCommandHandler : IRequestHandler<DeleteManagementStaffCommand, OperationResult<Unit>>
    {
        private readonly IManagementStaffRepository _staffRepository;

        public DeleteManagementStaffCommandHandler(IManagementStaffRepository staffRepository)
        {
            _staffRepository = staffRepository;
        }


        public async Task<OperationResult<Unit>> Handle(DeleteManagementStaffCommand request, CancellationToken cancellationToken)
        {

            var staff = await _staffRepository.GetByIdAsync(request.Id);
           
            await _staffRepository.DeleteAsync(staff);
            return OperationResult<Unit>.Success(Unit.Value);

        }


    }

}
