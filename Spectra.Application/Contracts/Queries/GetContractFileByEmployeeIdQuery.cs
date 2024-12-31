using MediatR;
using Spectra.Application.Interfaces;
using Spectra.Domain.Contracts;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Contracts.Queries
{
    public class GetContractFileByEmployeeIdQuery : IRequest<OperationResult>
    {
        public string Id { get; set; }
        public class GetContractFileByEmployeeIdQueryHandler(IBaseMongoDbRepository<EmploymentContract> contractRepository) : IRequestHandler<GetContractFileByEmployeeIdQuery, OperationResult>
        {
            private readonly IBaseMongoDbRepository<EmploymentContract> _contractRepository = contractRepository;

            public async Task<OperationResult> Handle(GetContractFileByEmployeeIdQuery request, CancellationToken cancellationToken)
            {
                var contract = await _contractRepository.GetAsync(c => c.EmployeeId == request.Id);
                return OperationResult.Success();
            }
        }
    }
}
