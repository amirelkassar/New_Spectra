using System.Linq.Expressions;
using Mapster;
using MediatR;
using Spectra.Application.Contracts.DTO;
using Spectra.Application.Contracts.Repository;
using Spectra.Application.Hellper;
using Spectra.Application.Interfaces;
using Spectra.Domain.Contracts;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Helpers;
using Spectra.Domain.Shared.Wrappers;
using static Spectra.Domain.Shared.Constants.ContractConses;

namespace Spectra.Application.Contracts.Queries
{
    public class GetContractListQuery : QueryPaginationParam, IRequest<OperationResult>
    {
        public string Search { get; set; }
        public ContractStates? State { get; set; }

        public class GetContractListQueryHandler(IBaseMongoDbRepository<EmploymentContract> contractRepository) : IRequestHandler<GetContractListQuery, OperationResult>
        {
            private readonly IBaseMongoDbRepository<EmploymentContract> _contractRepository = contractRepository;

            public async Task<OperationResult> Handle(GetContractListQuery request, CancellationToken cancellationToken)
            {
                Expression<Func<EmploymentContract, bool>> filter = c => c.Created > DateTimeOffset.MinValue;
                if (!string.IsNullOrWhiteSpace(request.Search))
                {
                    filter = c => c.EmployeeName.ToLower().StartsWith(request.Search)
                     || c.EmployeeHeadName.ToLower().StartsWith(request.Search);
                }
                if (request.State.HasValue)
                {
                    filter.And(c => c.ContractState == request.State.Value);
                }
                var (contracts, total) = await _contractRepository.GetAllAsync(filter, null, request.SkipCount, request.MaxCount);
                var dtos = contracts.Adapt<IReadOnlyCollection<ContractListReadDto>>();

                return OperationResult<PaginatedResult<ContractListReadDto>>.Success(new PaginatedResult<ContractListReadDto>(dtos, total, request.MaxCount));
            }
        }
    }
}
