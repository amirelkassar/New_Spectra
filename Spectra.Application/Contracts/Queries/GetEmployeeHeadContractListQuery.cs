using System.Linq.Expressions;
using Mapster;
using MediatR;
using MongoDB.Driver;
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
                var collection = await _contractRepository.GetCollectionAsync();
                var filterBuilder = Builders<EmploymentContract>.Filter;
                var filter = filterBuilder.Eq(c => c.EmployeeHeadUserId, _currentUser.Id);

                if (!string.IsNullOrWhiteSpace(request.Search))
                {
                    var searchLower = request.Search.ToLower().Trim();
                    var searchFilter = filterBuilder.Regex(s => s.EmployeeName, new MongoDB.Bson.BsonRegularExpression($"^{searchLower}", "i"));
                    filter &= searchFilter;
                }
                if (request.State.HasValue)
                {
                    filter &= filterBuilder.Eq(s => s.ContractState, request.State.Value);
                }
                var total = await collection.CountDocumentsAsync(filter);
                var data = await collection.Find(filter)
                    .SortByDescending(s => s.Id)
                    .Skip(request.SkipCount)
                    .Limit(request.MaxCount)
                    .ToListAsync(cancellationToken);
                var dtos = data.Adapt<IReadOnlyCollection<ContractListReadDto>>(ContractListReadDto.Configure());
                foreach (var dto in dtos)
                {
                    var contract = data.First(x => x.Id == dto.Id);
                    var lastVersion = contract.Versions.OrderByDescending(v => v.Order).First();
                    if (lastVersion != null)
                    {
                        dto.CurrentVersion = lastVersion.Order;
                        dto.AcceptedByAdmin = lastVersion.AcceptedByAdmin;
                        dto.AcceptedByEmployee = lastVersion.AcceptedByEmployee;
                        dto.AcceptedByHead = lastVersion.AcceptedByHead;
                    }
                }
                return OperationResult<PaginatedResult<ContractListReadDto>>.Success(new PaginatedResult<ContractListReadDto>(dtos, total, request.MaxCount));
            }
        }
    }
}
