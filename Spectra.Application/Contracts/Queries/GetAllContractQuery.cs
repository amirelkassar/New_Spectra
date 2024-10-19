using MediatR;
using MongoDB.Driver;
using Spectra.Application.Contracts.Repository;
using Spectra.Domain.Contracts;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Contracts.Queries
{
    public class GetAllContactrQuery : IRequest<OperationResult<IEnumerable<EmploymentContract>>>
    {
        public string EmployeeId { get; set; }

    }

    public class GGetAllContactrQueryHandler : IRequestHandler<GetAllContactrQuery, OperationResult<IEnumerable<EmploymentContract>>>
    {
        private readonly IContractRepository _contractRepository;

        public GGetAllContactrQueryHandler(IContractRepository contractRepository)
        {
            _contractRepository = contractRepository;
        }

        public async Task<OperationResult<IEnumerable<EmploymentContract>>> Handle(GetAllContactrQuery request, CancellationToken cancellationToken)
        {

            var contracts = await _contractRepository.GetAllAsync(c => c.EmployeeId == request.EmployeeId, new FindOptions());

            var Filtercontracts = contracts.Where(x => x.ContractCase != ContractCases.SAVE);

            return OperationResult<IEnumerable<EmploymentContract>>.Success(Filtercontracts);


        }
    }
}
