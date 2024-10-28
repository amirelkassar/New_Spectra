using MediatR;
using MongoDB.Driver;
using Spectra.Application.Admin.Dto;
using Spectra.Application.Contracts.Repository;
using Spectra.Domain.Contracts;
using Spectra.Domain.Shared.Enums;
using Spectra.Domain.Shared.Wrappers;

namespace Spectra.Application.Admin.Queries
{
    public class GetAllCopiesWithDataDto : IRequest<OperationResult<IEnumerable<Dto.GetAllCopiesWithDataDto>>>
    {

        public string ContractId { get; set; }
        public string EmployeeId { get; set; }

    }

    public class GetContractByIdQueryHandler : IRequestHandler<GetAllCopiesWithDataDto, OperationResult<IEnumerable<Dto.GetAllCopiesWithDataDto>>>
    {
        private readonly IContractRepository _contractRepository;

        public GetContractByIdQueryHandler(IContractRepository contractRepository)
        {
            _contractRepository = contractRepository;
        }

        public async Task<OperationResult<IEnumerable<Dto.GetAllCopiesWithDataDto>>> Handle(GetAllCopiesWithDataDto request, CancellationToken cancellationToken)
        {

            var contracts = await _contractRepository.GetAllAsync(c => c.EmployeeId == request.EmployeeId && c.ContractCase!= ContractCases.SAVE, new FindOptions());

  var data=  contracts.Select(x => new Dto.GetAllCopiesWithDataDto { ContractId= x.Id, ContractCase= x.ContractCase , Date = x.Created , EmployeeId = x.EmployeeId}).OrderByDescending(x=>x.Date);



            return OperationResult<IEnumerable<Dto.GetAllCopiesWithDataDto>>.Success(data);
        }
    }
}
