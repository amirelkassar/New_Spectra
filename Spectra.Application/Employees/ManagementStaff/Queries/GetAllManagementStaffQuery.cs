using MediatR;
using Spectra.Application.Hellper;
using Spectra.Domain.Employees.ManagementStaff;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Employees.ManagementStaff.Queries
{
    public class GetAllManagementStaffQuery : QueryPaginationParam, IRequest<OperationResult>
    {
        public string? Search { get; set; }
    }

    public class GetAllManagementStaffQueryHandler : IRequestHandler<GetAllManagementStaffQuery, OperationResult>
    {
        private readonly IManagementStaffRepository _staffRepository;

        public GetAllManagementStaffQueryHandler(IManagementStaffRepository staffRepository)
        {
            _staffRepository = staffRepository;
        }

        public async Task<OperationResult> Handle(GetAllManagementStaffQuery request, CancellationToken cancellationToken)
        {
            request.Search ??= request.Search.ToLower();
            var (entities, total) = await _staffRepository.GetAllAsync(s => s.Name.FirstName.ToLower() == request.Search || s.EmailAddress.Emailaddress.ToLower() == request.Search, 
                null,
                request.SkipCount,
                request.MaxCount);

            return OperationResult<PaginatedResult<Staff>>.Success(new PaginatedResult<Staff>(entities,total,request.MaxCount));

        }
    }
}
