using Mapster;
using MediatR;
using Spectra.Application.Contracts.DTO;
using Spectra.Application.Interfaces;
using Spectra.Domain.Contracts;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Contracts.Queries
{
    public class GetContractByUserIdQuery : IRequest<OperationResult>
    {
        public class GetContractByUserIdQueryHandler(IBaseMongoDbRepository<EmploymentContract> contractRepository, ICurrentUser currentUser) : IRequestHandler<GetContractByUserIdQuery, OperationResult>
        {
            private readonly IBaseMongoDbRepository<EmploymentContract> _contractRepository = contractRepository;
            private readonly ICurrentUser _currentUser = currentUser;

            public async Task<OperationResult> Handle(GetContractByUserIdQuery request, CancellationToken cancellationToken)
            {
                var contract = await _contractRepository.GetAsync(c => c.EmployeeUserId == _currentUser.Id);
                if (contract is null)
                {
                    return OperationResult.Success();
                }
                var contractDto = contract.Adapt<ContractReadDto>();
                contractDto.Versions = [.. contractDto.Versions.OrderByDescending(v => v.Order)];
                return OperationResult<ContractReadDto>.Success(contractDto);
            }
        }
    }
}
