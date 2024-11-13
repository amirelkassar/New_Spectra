using MediatR;
using Spectra.Domain.Employees.ManagementStaff;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Employees.ManagementStaff.Queries
{
    public class GetAllManagementStaffQuery : QueryPaginationParam, IRequest<OperationResult<IEnumerable<Staff>>>
    {
        public string? Search { get; set; }

    }

    public class GetAllManagementStaffQueryHandler : IRequestHandler<GetAllManagementStaffQuery, OperationResult<IEnumerable<Staff>>>
    {
        private readonly IManagementStaffRepository _staffRepository;

        public GetAllManagementStaffQueryHandler(IManagementStaffRepository staffRepository)
        {
            _staffRepository = staffRepository;
        }

        public async Task<OperationResult<IEnumerable<Staff>>> Handle(GetAllManagementStaffQuery request, CancellationToken cancellationToken)
        {

            var entitiy = await _staffRepository.GetAllAsync();
            return OperationResult<IEnumerable<Staff>>.Success(entitiy);

        }
    }
}
