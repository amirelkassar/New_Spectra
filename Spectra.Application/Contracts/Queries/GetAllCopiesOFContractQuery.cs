using MediatR;
using MongoDB.Driver;
using Spectra.Application.Admin.Dto;
using Spectra.Application.Contracts.Repository;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Contracts.Queries
{
    public class GetAllCopiesOFContractQuery : IRequest<OperationResult<IEnumerable<GetAllCopiesWithDataDto>>>
    {

        public string EmployeeId { get; set; }
        //public ContractCases ContractCases { get; set; }
    }

    public class GetAllCopiesOFContractQueryHandler : IRequestHandler<GetAllCopiesOFContractQuery, OperationResult<IEnumerable<GetAllCopiesWithDataDto>>>
    {
        private readonly IContractRepository _contractRepository;

        public GetAllCopiesOFContractQueryHandler(IContractRepository contractRepository)
        {
            _contractRepository = contractRepository;
        }

        public async Task<OperationResult<IEnumerable<GetAllCopiesWithDataDto>>> Handle(GetAllCopiesOFContractQuery request, CancellationToken cancellationToken)
        {
            //if (ContractCases.SAVE == request .ContractCases)
            //{
            //    var Savecontracts = await _contractRepository.GetAllAsync(c => c.EmployeeId == request.EmployeeId && c.ContractCase == ContractCases.SAVE, null);

            //    var datae = Savecontracts.Select(x => new GetAllCopiesWithDataDto
            //    { ContractId = x.Id, ContractCase = x.ContractCase, Date = x.Created, EmployeeId = x.EmployeeId })
            //       .OrderByDescending(x => x.Date);
            //    return OperationResult<IEnumerable<GetAllCopiesWithDataDto>>.Success(datae);
            //}
            var contracts = await _contractRepository.GetAllAsync(c => c.EmployeeId == request.EmployeeId /*&& c.ContractCase != ContractCases.SAVE*/, null);

            

            var data = contracts.Select(x => new GetAllCopiesWithDataDto
            { ContractId = x.Id, ContractCase = x.ContractCase, Date = x.Created, EmployeeId = x.EmployeeId ,  AdminOrEmployee =x.AdminOrEmployee})
             .OrderByDescending(x => x.Date);

            return OperationResult<IEnumerable<GetAllCopiesWithDataDto>>.Success(data);

        }
    }
}
