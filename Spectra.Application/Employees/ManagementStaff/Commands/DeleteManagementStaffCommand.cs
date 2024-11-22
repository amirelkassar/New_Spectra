using MediatR;
using Spectra.Application.Interfaces;
using Spectra.Application.Messaging;
using Spectra.Domain.Employees.ManagementStaff;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Employees.ManagementStaff.Commands
{
    public class DeleteManagementStaffCommand : ICommand<OperationResult<Unit>>
    {
        public string Id { get; set; }
    }

    public class DeleteManagementStaffCommandHandler : IRequestHandler<DeleteManagementStaffCommand, OperationResult<Unit>>
    {
        private readonly IBaseMongoDbRepository<Staff, string> _staffRepository;

        public DeleteManagementStaffCommandHandler(IBaseMongoDbRepository<Staff, string> staffRepository)
        {
            _staffRepository = staffRepository;
        }


        public async Task<OperationResult<Unit>> Handle(DeleteManagementStaffCommand request, CancellationToken cancellationToken)
        {
            await _staffRepository.DeleteAsync(request.Id);
            return OperationResult<Unit>.Success(Unit.Value);

        }


    }

}
