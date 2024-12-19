using Mapster;
using MediatR;
using Spectra.Application.Contracts.DTO;
using Spectra.Application.Contracts.Repository;
using Spectra.Application.Identities;
using Spectra.Application.Interfaces;
using Spectra.Domain.Contracts;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Contracts.Queries
{
    public class GetContractById : IRequest<OperationResult>
    {
        public string Id { get; set; }

        public class GetContractByIdHandler(IBaseMongoDbRepository<EmploymentContract> contractRepository,
            ICurrentUser currentUser) : IRequestHandler<GetContractById, OperationResult>
        {
            private readonly IBaseMongoDbRepository<EmploymentContract> _contractRepository = contractRepository;
            private readonly ICurrentUser _currentUser = currentUser;

            public async Task<OperationResult> Handle(GetContractById request, CancellationToken cancellationToken)
            {
                var contract = await _contractRepository.GetAsync(c => c.Id == request.Id) ?? throw new NotFoundException("Contracts", request.Id);

                var contractDto = contract.Adapt<ContractReadDto>();
                if (contractDto.Versions is not null && contractDto.Versions.Count > 0)
                {
                    contractDto.Versions = contractDto.Versions.OrderByDescending(v => v.Order).ToArray();

                }

                return OperationResult<ContractReadDto>.Success(contractDto);
            }
        }
    }
}
