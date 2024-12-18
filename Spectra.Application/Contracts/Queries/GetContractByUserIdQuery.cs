using Mapster;
using MediatR;
using Spectra.Application.Contracts.DTO;
using Spectra.Application.Contracts.Repository;
using Spectra.Application.Interfaces;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Contracts.Queries
{
    public class GetContractByUserIdQuery : IRequest<OperationResult>
    {
        public class GetContractByUserIdQueryHandler(IContractRepository contractRepository, ICurrentUser currentUser) : IRequestHandler<GetContractByUserIdQuery, OperationResult>
        {
            private readonly IContractRepository _contractRepository = contractRepository;
            private readonly ICurrentUser _currentUser = currentUser;

            public async Task<OperationResult> Handle(GetContractByUserIdQuery request, CancellationToken cancellationToken)
            {
                var contract = await _contractRepository.GetAsync(c => c.EmployeeUserId == _currentUser.Id);
                if (contract is null)
                {
                    OperationResult.Success();
                }
                var contractDto = contract.Adapt<ContractReadDto>();
                contractDto.Versions = contractDto.Versions.OrderByDescending(v => v.Order).ToArray();
                return OperationResult<ContractReadDto>.Success(contractDto);
            }
        }
    }
}
