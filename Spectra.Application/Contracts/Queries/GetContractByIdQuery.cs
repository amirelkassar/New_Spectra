using MediatR;
using Spectra.Domain.Contracts;

using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Contracts.Queries
{
    public class GetContractByIdQuery : IRequest<OperationResult<EmploymentContract>>
    {
        public string Id { get; set; }
    }

    public class GetContractByIdQueryHandler : IRequestHandler<GetContractByIdQuery, OperationResult<EmploymentContract>>
    {
        private readonly IContractRepository _contractRepository;

        public GetContractByIdQueryHandler(IContractRepository contractRepository)
        {
            _contractRepository = contractRepository;
        }

        public async Task<OperationResult<EmploymentContract>> Handle(GetContractByIdQuery request, CancellationToken cancellationToken)
        {

            var doctor = await _contractRepository.GetByIdAsync(request.Id);

            return OperationResult<EmploymentContract>.Success(doctor);
        }
    }
}
