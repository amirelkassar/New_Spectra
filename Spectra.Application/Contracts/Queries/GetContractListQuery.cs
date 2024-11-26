using Mapster;
using MediatR;
using Spectra.Application.Contracts.DTO;
using Spectra.Application.Contracts.Repository;
using Spectra.Application.Hellper;
using Spectra.Domain.Contracts;
using Spectra.Domain.Shared.Common;
using Spectra.Domain.Shared.Wrappers;
using System.Linq.Expressions;

namespace Spectra.Application.Contracts.Queries
{
    public class GetContractListQuery : QueryPaginationParam, IRequest<OperationResult>
    {
        public string Search { get; set; }
        public string CallerUserId { get; set; }
        public string CallerRole { get; set; }

        public class GetContractListQueryHandler(IContractRepository contractRepository) : IRequestHandler<GetContractListQuery, OperationResult>
        {
            private readonly IContractRepository _contractRepository = contractRepository;

            public async Task<OperationResult> Handle(GetContractListQuery request, CancellationToken cancellationToken)
            {
                Expression<Func<EmploymentContract, bool>> filter = null;
                if (!string.IsNullOrWhiteSpace(request.Search))
                {
                    filter = c => c.EmployeeName.ToLower().StartsWith(request.Search)
                     || c.EmployeeHeadName.ToLower().StartsWith(request.Search);
                }
                var (contracts, total) = await _contractRepository.GetAllAsync(filter, null, request.SkipCount, request.MaxCount);
                var dtos = contracts.Adapt<IReadOnlyCollection<ContractListReadDto>>();

                return OperationResult<PaginatedResult<ContractListReadDto>>.Success(new PaginatedResult<ContractListReadDto>(dtos, total, request.MaxCount));
            }
        }
    }
}
