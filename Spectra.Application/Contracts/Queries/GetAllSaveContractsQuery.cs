using MediatR;
using MongoDB.Driver;
using Spectra.Application.Admin.Dto;
using Spectra.Application.Contracts.Repository;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Contracts.Queries
{
    public class GetAllSaveContractsQuery : IRequest<OperationResult<IEnumerable<GetAllCopiesWithDataDto>>>
    {

        public string EmployeeId { get; set; }

    }

    public class GetAllSaveContractsQueryHandler : IRequestHandler<GetAllSaveContractsQuery, OperationResult<IEnumerable<GetAllCopiesWithDataDto>>>
    {
        private readonly IContractRepository _contractRepository;

        public GetAllSaveContractsQueryHandler(IContractRepository contractRepository)
        {
            _contractRepository = contractRepository;
        }

        public async Task<OperationResult<IEnumerable<GetAllCopiesWithDataDto>>> Handle(GetAllSaveContractsQuery request, CancellationToken cancellationToken)
        {

            var contracts = await _contractRepository.GetAllAsync(c => c.EmployeeId == request.EmployeeId && c.ContractCase == ContractCases.SAVE, new FindOptions());

            var data = contracts.Select(x => new GetAllCopiesWithDataDto
            { ContractId = x.Id, ContractCase = x.ContractCase, Date = x.Created, EmployeeId = x.EmployeeId })
               .OrderByDescending(x => x.Date);



            return OperationResult<IEnumerable<GetAllCopiesWithDataDto>>.Success(data);
        }
    }
}
