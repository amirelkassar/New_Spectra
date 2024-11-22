using MediatR;
using Spectra.Application.Interfaces;
using Spectra.Domain.Employees.ManagementStaff;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Employees.ManagementStaff.Queries
{
    public class GetManagementStaffByIdQuery : IRequest<OperationResult<Staff>>
    {
        public string Id { get; set; }
    }

    public class GetManagementStaffByIdQueryHandler : IRequestHandler<GetManagementStaffByIdQuery, OperationResult<Staff>>
    {
        private readonly IBaseMongoDbRepository<Staff, string> _staffRepository;

        public GetManagementStaffByIdQueryHandler(IBaseMongoDbRepository<Staff, string> staffRepository)
        {
            _staffRepository = staffRepository;
        }
        public async Task<OperationResult<Staff>> Handle(GetManagementStaffByIdQuery request, CancellationToken cancellationToken)
        {
            var doctor = await _staffRepository.GetByIdAsync(request.Id);
            return OperationResult<Staff>.Success(doctor);
        }
    }
}
