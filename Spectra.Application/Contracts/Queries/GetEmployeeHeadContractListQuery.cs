using System.Linq.Expressions;
using Mapster;
using MediatR;
using Spectra.Application.Contracts.DTO;
using Spectra.Application.Hellper;
using Spectra.Application.Interfaces;
using Spectra.Domain.Contracts;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Wrappers;
using static Spectra.Domain.Shared.Constants.ContractConses;
using static Spectra.Domain.Shared.Helpers.PredicateBuilder;

namespace Spectra.Application.Contracts.Queries
{
    public class GetEmployeeHeadContractListQuery : QueryPaginationParam, IRequest<OperationResult>
    {
        public string? Search { get; set; }
        public ContractStates? State { get; set; }

        public class GetEmployeeHeadContractListQueryHandler(IBaseMongoDbRepository<EmploymentContract> contractRepository,
            ICurrentUser currentUser) : IRequestHandler<GetEmployeeHeadContractListQuery, OperationResult>
        {
            private readonly IBaseMongoDbRepository<EmploymentContract> _contractRepository = contractRepository;
            private readonly ICurrentUser _currentUser = currentUser;

            public async Task<OperationResult> Handle(GetEmployeeHeadContractListQuery request, CancellationToken cancellationToken)
            {
                Expression<Func<EmploymentContract, bool>> filter = c => c.EmployeeHeadUserId == _currentUser.Id;
                if (!string.IsNullOrWhiteSpace(request.Search))
                {
                    filter.And(c => c.EmployeeName.ToLower().StartsWith(request.Search.ToLower()));
                }
                if (request.State.HasValue)
                {
                    filter.And(c => c.ContractState==request.State.Value);
                }

                var (contracts, total) = await _contractRepository.GetAllAsync(filter, null, request.SkipCount, request.MaxCount);
                var dtos = contracts.Adapt<IReadOnlyCollection<ContractListReadDto>>();
                return OperationResult<PaginatedResult<ContractListReadDto>>.Success(new PaginatedResult<ContractListReadDto>(dtos, total, request.MaxCount));
            }
        }
    }
}
