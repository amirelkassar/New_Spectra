using System.Linq.Expressions;
using Mapster;
using MediatR;
using Spectra.Application.Contracts.DTO;
using Spectra.Application.Hellper;
using Spectra.Application.Interfaces;
using Spectra.Domain.Contracts;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Wrappers;
using static Spectra.Domain.Shared.Helpers.PredicateBuilder;

namespace Spectra.Application.Contracts.Queries
{
    public class GetHeadDoctorContractListQuery : QueryPaginationParam, IRequest<OperationResult>
    {
        public string? Search { get; set; }

        public class GetHeadDoctorContractListQueryHandler(IBaseMongoDbRepository<EmploymentContract> contractRepository,
            ICurrentUser currentUser) : IRequestHandler<GetHeadDoctorContractListQuery, OperationResult>
        {
            private readonly IBaseMongoDbRepository<EmploymentContract> _contractRepository = contractRepository;
            private readonly ICurrentUser _currentUser = currentUser;

            public async Task<OperationResult> Handle(GetHeadDoctorContractListQuery request, CancellationToken cancellationToken)
            {
                Expression<Func<EmploymentContract, bool>> filter = c => c.EmployeeHeadUserId == _currentUser.Id;
                if (!string.IsNullOrWhiteSpace(request.Search))
                {
                    filter.And(c => c.EmployeeName.ToLower().StartsWith(request.Search.ToLower()));
                }

                var (contracts, total) = await _contractRepository.GetAllAsync(filter, null, request.SkipCount, request.MaxCount);
                var dtos = contracts.Adapt<IReadOnlyCollection<ContractListReadDto>>();
                return OperationResult<PaginatedResult<ContractListReadDto>>.Success(new PaginatedResult<ContractListReadDto>(dtos, total, request.MaxCount));
            }
        }
    }
}
