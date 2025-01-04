using Mapster;
using MediatR;
using MongoDB.Driver;
using Spectra.Application.Contracts.DTO;
using Spectra.Application.Interfaces;
using Spectra.Domain.Contracts;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Contracts.Queries
{
    public class GetEmployeeHeadContractByIdQuery : IRequest<OperationResult>
    {
        public string Id { get; set; }

        public class GetEmployeeHeadContractByIdQueryHandler(IBaseMongoDbRepository<EmploymentContract> contractRepository,
            ICurrentUser currentUser) : IRequestHandler<GetEmployeeHeadContractByIdQuery, OperationResult>
        {
            private readonly IBaseMongoDbRepository<EmploymentContract> _contractRepository = contractRepository;
            private readonly ICurrentUser _currentUser = currentUser;

            public async Task<OperationResult> Handle(GetEmployeeHeadContractByIdQuery request, CancellationToken cancellationToken)
            {
                var collection = await _contractRepository.GetCollectionAsync();
                var filterBuilder = Builders<EmploymentContract>.Filter;
                var filter = filterBuilder.Eq(c => c.EmployeeHeadUserId, _currentUser.Id);
                filter &= filterBuilder.Eq(c => c.Id, request.Id);
                var contract = await collection.Find(filter).FirstOrDefaultAsync(cancellationToken: cancellationToken) ?? throw new NotFoundException("Contracts", request.Id);
                var dto = contract.Adapt<ContractWithoutFeeReadDto>();
                dto.Versions = dto.Versions.OrderByDescending(v => v.Order).ToArray();
                return OperationResult<ContractWithoutFeeReadDto>.Success(dto);
            }
        }
    }
}
